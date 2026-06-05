"use client"

import { useState } from "react";

/**
 * useRemotionExport
 * Centralized hook for managing high-fidelity video exports via Remotion.
 * This hook manages the render state, progress, and status, providing
 * a seamless bridge between the browser UI and the Remotion engine.
 */

interface ExportResolution {
  width: number;
  height: number;
  label: string;
}

export const useRemotionExport = () => {
  const [isRendering, setIsRendering] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);
  const [renderStatus, setStatus] = useState("");

  const handleExport = async (
    res: ExportResolution, 
    totalScenes: number,
    mode: string
  ) => {
    if (isRendering) return;
    
    setIsRendering(true);
    setRenderProgress(0);
    setStatus("Initializing Remotion Cinematic Engine...");

    try {
      // Simulate initial progress while bundler starts on the server
      const progressInterval = setInterval(() => {
        setRenderProgress((prev) => {
          if (prev < 90) return prev + 1; // Cap at 90% until server responds
          return prev;
        });
        setStatus(`Compiling ${res.label} Cinematic Composition... (Server)`);
      }, 500);

      // Call our Next.js API Route which runs @remotion/bundler and @remotion/renderer
      const response = await fetch("/api/render", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          compositionId: "ClassroomPRO",
          resolution: res 
        }),
      });

      clearInterval(progressInterval);

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${await response.text()}`);
      }

      setStatus("Finalizing High-Fidelity Master...");
      setRenderProgress(95);

      // The API returns the raw MP4 blob
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      setRenderProgress(100);
      setStatus("Download Complete.");
      
      // Trigger browser download
      const a = document.createElement("a");
      a.href = url;
      a.download = `ReedBreed_${mode}_${res.label}.mp4`;
      a.click();
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Remotion render failed:", error);
      alert("Render failed. Check console for details.");
    } finally {
      setTimeout(() => {
        setIsRendering(false);
        setStatus("");
      }, 2000);
    }
  };

  return {
    isRendering,
    renderProgress,
    renderStatus,
    handleExport
  };
};
