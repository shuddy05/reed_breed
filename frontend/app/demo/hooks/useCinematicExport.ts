"use client"

import { useState, useRef } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { toPng } from "html-to-image";

interface ExportResolution {
  width: number;
  height: number;
  label: string;
}

export const useCinematicExport = () => {
  const [isRendering, setIsRendering] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);
  const [renderStatus, setStatus] = useState("");
  const ffmpegRef = useRef(new FFmpeg());

  const handleExport = async (
    res: ExportResolution, 
    totalScenes: number, 
    setIndex: (i: number) => void, 
    renderTimeline: React.MutableRefObject<gsap.core.Timeline | null>,
    mode: string
  ) => {
    if (isRendering) return;
    setIsRendering(true);
    setRenderProgress(0);
    setStatus("Initializing Engine...");

    const ffmpeg = ffmpegRef.current;
    
    // Add progress listeners
    ffmpeg.on("progress", ({ progress }) => {
      setRenderProgress(Math.round(80 + (progress * 15)));
    });

    ffmpeg.on("log", ({ message }) => {
      if (message.includes("frame=")) {
        setStatus(`Encoding: ${message.split("frame=")[1].split("fps")[0].trim()} frames processed`);
      }
    });

    try {
      const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
      await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
      });
    } catch (e) {
      console.error("FFmpeg load failed", e);
      setStatus("Engine Load Failed.");
      setIsRendering(false);
      return;
    }

    setStatus(`Capturing ${res.label} Motion Frames...`);
    let frameId = 0;
    const fps = 24;
    const frameStep = 1 / fps; 
    const sceneDuration = 3; 
    
    const framesPerScene = Math.floor(sceneDuration * fps) + 1;
    const totalExpectedFrames = totalScenes * framesPerScene;

    for (let i = 0; i < totalScenes; i++) {
      setIndex(i);
      // Wait for React and GSAP to initialize the new scene's timeline
      await new Promise(r => setTimeout(r, 1000)); 
      
      if (renderTimeline.current) {
        const tl = renderTimeline.current;
        tl.pause();
        
        for (let t = 0; t <= sceneDuration; t += frameStep) {
          tl.progress(t / sceneDuration);
          
          const captureNode = document.getElementById('capture-stage');
          if (!captureNode) continue;

          const frame = await toPng(captureNode, { 
            width: res.width, 
            height: res.height, 
            pixelRatio: 1 
          });
          
          await ffmpeg.writeFile(`frame${String(frameId).padStart(4, '0')}.png`, await fetchFile(frame));
          frameId++;
          
          setRenderProgress(Math.round((frameId / totalExpectedFrames) * 80));
          setStatus(`Capturing Frame ${frameId}/${totalExpectedFrames} (${res.label})`);
        }
      }
    }

    setStatus(`Encoding ${res.label} Video...`);
    await ffmpeg.exec(["-framerate", String(fps), "-i", "frame%04d.png", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "18", "output.mp4"]);
    
    setRenderProgress(95);
    setStatus("Finalizing Download...");
    
    const data = await ffmpeg.readFile("output.mp4");
    const url = URL.createObjectURL(new Blob([(data as any).buffer], { type: "video/mp4" }));
    
    const a = document.createElement("a");
    a.href = url;
    a.download = `ReedBreed_${mode}_${res.label}.mp4`;
    a.click();

    setIsRendering(false);
    setStatus("");
  };

  return {
    isRendering,
    renderProgress,
    renderStatus,
    handleExport
  };
};
