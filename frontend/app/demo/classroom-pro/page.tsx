"use client"

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import {
  Users,
  BookOpen,
  VideoCamera,
  TrendUp,
  Broadcast,
  Brain,
  ShieldCheck,
  Lightning,
  Selection,
  SpeakerHigh,
  SpeakerSlash
} from "phosphor-react";

import { IPhoneModel } from "@/components/demos/IPhone";
import { ControlDeck } from "@/components/demos/ControlDeck";
import { MobileWarning } from "@/components/demos/MobileWarning";
import { Watermark } from "@/components/demos/Watermark";
import { ExportOverlay } from "@/components/demos/ExportOverlay";
import { useRemotionExport } from "@/components/demos/useRemotionExport";

// Local Assets - Photos
import shot1 from "./assets/photos/Screenshot-1.png";
import shot2 from "./assets/photos/Screenshot-2.png";
import shot3 from "./assets/photos/Screenshot-3.png";
import shot4 from "./assets/photos/Screenshot-4.png";

// Local Assets - Videos
let vid1: string | null = null, vid2: string | null = null, vid3: string | null = null, vid4: string | null = null;
try { vid1 = require("./assets/videos/screenrecording-1.mp4").default; } catch (e) { }
try { vid2 = require("./assets/videos/screenrecording-2.mp4").default; } catch (e) { }
try { vid3 = require("./assets/videos/screenrecording-3.mp4").default; } catch (e) { }
try { vid4 = require("./assets/videos/screenrecording-4.mp4").default; } catch (e) { }

gsap.registerPlugin(useGSAP, TextPlugin);

gsap.registerPlugin(useGSAP, TextPlugin);

const DATA = [
  {
    id: "engine",
    title: "OPERATIONAL ENGINE",
    accent: "CENTRALIZED",
    subtitle: "Reimagining Infrastructure",
    description: "The core heartbeat of your institution, processing thousands of data points with zero latency.",
    icon: Lightning,
    color: "#146ef5",
    impact: "85% Efficiency Up",
    video: vid1,
    screenImg: shot1.src
  },
  {
    id: "students",
    title: "STUDENT IDENTITY",
    accent: "BIOMETRIC",
    subtitle: "Built for Precision",
    description: "Military-grade verification systems that ensure attendance integrity across every campus node.",
    icon: Users,
    color: "#00d722",
    impact: "12x Growth Speed",
    video: vid2,
    screenImg: shot2.src
  },
  {
    id: "live",
    title: "INTELLIGENT FEED",
    accent: "REAL-TIME",
    subtitle: "Real-time Monitoring",
    description: "High-fidelity broadcast coordination with AI-powered engagement tracking for every session.",
    icon: VideoCamera,
    color: "#ffae13",
    impact: "98.4% Engagement",
    video: vid3,
    screenImg: shot3.src
  },
  {
    id: "security",
    title: "GLOBAL COMPLIANCE",
    accent: "ENCRYPTED",
    subtitle: "Scalable Growth",
    description: "Enterprise-level data security protocols keeping student information safe, private, and accessible.",
    icon: ShieldCheck,
    color: "#ee1d36",
    impact: "0% Data Leakage",
    video: vid4,
    screenImg: shot4.src
  }
];

// --- CINEMATIC STAGE COMPONENT ---
const CinematicStage = ({ index, mode, isWatermarkVisible, isCaptureMode = false }: {
  index: number, mode: string, isWatermarkVisible: boolean, isCaptureMode?: boolean
}) => {
  const step = DATA[index];

  return (
    <div className={`relative bg-void flex items-center justify-center overflow-hidden ${isCaptureMode ? 'w-[2560px] h-[1440px]' : 'w-full h-full'}`}>
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,110,245,0.03)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {mode === 'exploder' && (
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="bg-symbol absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-0">
            <step.icon size={isCaptureMode ? 1800 : 800} weight="thin" style={{ color: step.color }} />
          </div>

          <div className={`container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center relative z-20 ${isCaptureMode ? 'scale-[2] transform-gpu' : ''}`}>

            <div className="space-y-3 md:space-y-4 lg:pl-10 relative">
              {/* Background Accent Text - Raised 20% higher */}
              <div className="absolute -left-10 md:left-0 top-[-15%] -translate-y-1/2 z-[-1] pointer-events-none select-none">
                <h2 className="accent-text text-[12vw] font-black leading-none tracking-tighter italic opacity-0" style={{ color: step.color }}>
                  {step.accent}
                </h2>
              </div>

              <div className="content-text flex items-center gap-4">
                <div className="w-8 md:w-12 h-0.5" style={{ backgroundColor: step.color }} />
                <span className="text-[10px] md:text-sm font-black tracking-[0.5em] uppercase opacity-60">{step.title}</span>
              </div>
              <h1 className="content-text text-4xl md:text-5xl lg:text-7xl font-black leading-[1.0] tracking-tighter text-white">
                {step.id === 'engine' && <>High-Octane <br /> <span style={{ color: step.color }}>Operations</span></>}
                {step.id === 'students' && <>Next-Gen <br /> <span style={{ color: step.color }}>Verification</span></>}
                {step.id === 'live' && <>Immersive <br /> <span style={{ color: step.color }}>Engagement</span></>}
                {step.id === 'security' && <>Iron-Clad <br /> <span style={{ color: step.color }}>Architecture</span></>}
              </h1>
              <p className="content-text typewriter-text text-base md:text-p-xl text-text-secondary max-w-lg leading-relaxed font-medium min-h-[100px]"></p>
            </div>

            <div className="relative flex justify-center">
              <div className="feature-card relative w-full max-w-[320px] md:max-w-md aspect-[4/5] bg-depth border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden hidden md:block text-white">
                {/* Scanning Light Effect */}
                <div className="ui-scan-line absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-white/5 to-transparent z-10 opacity-0 pointer-events-none" />

                <div className="absolute inset-0 p-10 flex flex-col z-20">
                  <div className="flex justify-between items-center mb-12">
                    <div className="ui-icon-box w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center" style={{ color: step.color }}><step.icon size={32} weight="duotone" /></div>
                    <Selection size={32} className="ui-selection-icon text-white/20" />
                  </div>
                  <div className="space-y-4 mb-auto">
                    <div className="ui-bar h-2 w-1/3 bg-white/10 rounded-full" />
                    <div className="ui-bar h-10 w-full bg-white/5 rounded-2xl border border-white/5" />
                    <div className="ui-bar h-10 w-4/5 bg-white/5 rounded-2xl border border-white/5" />
                  </div>
                  <div className="ui-insight-panel mt-auto bg-void/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-3 text-white">Module Insight</p>
                    <div className="flex items-end justify-between">
                      <div className="text-4xl font-black">{step.impact.split(' ')[0]}</div>
                      <div className="text-[10px] font-black text-white/40 uppercase mb-1">{step.impact.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Satellite Elements */}
              <div className="absolute -right-8 top-1/4 ui-satellite hidden lg:block opacity-0">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl" style={{ color: step.color }}>
                  <step.icon size={32} weight="fill" />
                </div>
              </div>
              <div className="absolute -left-8 bottom-1/4 ui-satellite hidden lg:block opacity-0">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-success">
                  <TrendUp size={32} weight="fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === 'narrative' && (
        <div className="narrative-scene w-full h-full flex items-center justify-center relative px-6 md:px-12 text-white">
          {index === 0 && (
            <div className="max-w-4xl text-center">
              <div className="logo-glow absolute inset-0 bg-accent blur-[60px] opacity-20" />
              <BookOpen size={120} weight="duotone" className="text-accent relative z-10 mx-auto mb-12" />
              <h1 className="text-display-lg font-black mb-6 tracking-tight text-white">The Future of Education</h1>
              <p className="typewriter-text text-p-xl text-text-secondary max-w-2xl mx-auto leading-relaxed min-h-[60px]"></p>
            </div>
          )}
          {index === 1 && (
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
              <div className="space-y-8">
                <div className="narrative-ui flex items-center gap-4 text-white text-white">
                  <div className="w-12 h-0.5 bg-accent" />
                  <span className="text-sm font-black tracking-[0.4em] uppercase text-accent">01 // ARCHITECTURE</span>
                </div>
                <h2 className="narrative-ui text-4xl md:text-6xl font-black leading-tight tracking-tighter">Modular <br /> Assembly</h2>
                <p className="typewriter-text text-p-xl text-text-secondary max-w-lg leading-relaxed font-medium min-h-[100px]"></p>
              </div>
              <div className="narrative-ui grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="glass-card p-8 rounded-3xl border-white/5 bg-white/5 flex flex-col items-center justify-center aspect-square">
                    <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-4 text-white">
                      <Selection size={24} className="text-accent" />
                    </div>
                    <div className="h-1 w-12 bg-white/10 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          )}
          {index === 2 && (
            <div className="w-full max-w-5xl aspect-video relative flex flex-col items-center justify-center">
              <div className="narrative-ui bg-depth rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl w-full h-full flex flex-col relative z-10 text-white">
                <div className="h-16 bg-white/5 border-b border-white/10 flex items-center px-8 gap-4">
                  <div className="w-3 h-3 rounded-full bg-error" />
                  <span className="text-xs font-black uppercase tracking-widest opacity-40 text-white text-white">Live Pulse // Monitoring_Active</span>
                </div>
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="relative">
                    <div className="pulse-ring absolute inset-0 border-4 border-accent rounded-full opacity-20" />
                    <Broadcast size={120} className="text-accent" weight="duotone" />
                  </div>
                </div>
              </div>
              <div className="narrative-ui mt-12 text-center max-w-2xl">
                <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter text-white text-white">Intelligent Monitoring</h2>
                <p className="typewriter-text text-p-xl text-text-secondary leading-relaxed font-medium min-h-[80px]"></p>
              </div>
            </div>
          )}
          {index === 3 && (
            <div className="max-w-4xl text-center text-white">
              <div className="narrative-ui flex justify-center gap-12 mb-16">
                <div className="text-center">
                  <p className="text-5xl md:text-7xl font-black text-white mb-2">99.9%</p>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest">Uptime</p>
                </div>
                <div className="w-px h-20 bg-white/10" />
                <div className="text-center">
                  <p className="text-5xl md:text-7xl font-black text-white mb-2">0ms</p>
                  <p className="text-xs font-bold text-success uppercase tracking-widest">Latency</p>
                </div>
              </div>
              <h2 className="narrative-ui text-4xl md:text-display-md font-black tracking-tight leading-none mb-8 text-white">Scalable Growth.</h2>
              <p className="typewriter-text text-p-xl text-text-secondary max-w-2xl mx-auto leading-relaxed min-h-[60px]"></p>
            </div>
          )}
        </div>
      )}

      {mode === 'immersive' && (
        <div className="w-full h-full flex items-center justify-center relative px-6 md:px-12 text-white">
          <div className="immersive-video absolute inset-0 z-0 overflow-hidden text-white">
            {step.video ? (
              <video key={step.video} autoPlay muted loop playsInline crossOrigin="anonymous" className="w-full h-full object-cover grayscale opacity-60">
                <source src={step.video} type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 bg-void" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
          </div>
          <div className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center relative z-10 ${isCaptureMode ? 'scale-[2]' : ''}`}>
            <div className="immersive-ui space-y-10 text-white">
              <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter text-white">Human Synergy. <br /><span style={{ color: step.color }}>{step.accent}</span></h1>
              <p className="typewriter-text text-p-xl text-text-secondary max-w-lg leading-relaxed font-medium min-h-[100px] text-white"></p>
            </div>
            <div className="h-[500px] md:h-[700px] w-full relative z-[1]">
              <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 35 }}>
                <ambientLight intensity={1.5} />
                <spotLight position={[5, 10, 5]} angle={0.25} penumbra={1} intensity={2} castShadow shadow-mapSize={1024} />
                <React.Suspense fallback={null}>
                  <IPhoneModel index={index} screenImg={step.screenImg} />
                </React.Suspense>
                <Environment preset="city" />
                <ContactShadows position={[0, -5, 0]} opacity={0.6} scale={20} blur={3} far={10} color="#000" />
              </Canvas>
            </div>
          </div>
        </div>
      )}

      {/* Watermark */}
      <Watermark isVisible={isWatermarkVisible} />
    </div>
  );
};

export default function ClassroomPROUnified() {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<'narrative' | 'exploder' | 'immersive'>('immersive');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const renderTimeline = useRef<gsap.core.Timeline | null>(null);
  const audioWhoosh = useRef<HTMLAudioElement | null>(null);
  const audioTypeStream = useRef<HTMLAudioElement | null>(null);
  const lastChar = useRef(0);

  const step = DATA[index];

  const { isRendering, renderProgress, renderStatus, handleExport } = useRemotionExport();


  useEffect(() => {
    console.log("%c REED BREED CINEMATIC ENGINE %c Initialized v2.5.0 ", "background: #146ef5; color: white; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;", "background: #222; color: #146ef5; padding: 4px 8px; border-radius: 0 4px 4px 0;");
    audioWhoosh.current = new Audio("https://actions.google.com/sounds/v1/foley/swoosh.ogg");
    if (audioWhoosh.current) audioWhoosh.current.volume = 0.1;
    audioTypeStream.current = new Audio("https://actions.google.com/sounds/v1/office/keyboard_typing_fast.ogg");
    if (audioTypeStream.current) audioTypeStream.current.volume = 0.8;
  }, []);

  const playWhoosh = () => { if (!isMuted && audioWhoosh.current) { audioWhoosh.current.currentTime = 0; audioWhoosh.current.play().catch(() => { }); } };
  const startTypingSound = () => { if (!isMuted && audioTypeStream.current) { audioTypeStream.current.currentTime = Math.random() * 5 + 0.1; audioTypeStream.current.play().catch(() => { }); } };
  const stopTypingSound = () => { if (audioTypeStream.current) audioTypeStream.current.pause(); };

  useEffect(() => {
    if (isPlaying && hasInteracted && !isRendering) {
      timerRef.current = setTimeout(() => setIndex((prev) => (prev + 1) % DATA.length), 7000);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, isPlaying, hasInteracted, isRendering]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      lastChar.current = -1;
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onStart: () => {
          if (!isRendering) {
            playWhoosh();
            console.log(`%c 🎬 SCENE START: ${step.id.toUpperCase()} `, "background: #146ef5; color: white; font-weight: bold;");
            console.dir(renderTimeline.current);
          }
        }
      });
      renderTimeline.current = tl;
      (window as any).masterTimeline = tl;
      const activeText = step.description;

      if (mode === 'exploder') {
        gsap.set(".feature-card", { opacity: 0, x: 100, rotateY: -30, scale: 0.8 });
        gsap.set(".accent-text", { opacity: 0, x: -200, skewX: -20 });
        gsap.set(".content-text", { opacity: 0, y: 50 });
        gsap.set(".bg-symbol", { opacity: 0, scale: 0.5, rotate: -45 });
        gsap.set(".typewriter-text", { text: "" });
        gsap.set(".ui-icon-box", { scale: 0, rotate: -45 });
        gsap.set(".ui-selection-icon", { opacity: 0, x: 20 });
        gsap.set(".ui-bar", { scaleX: 0, transformOrigin: "left" });
        gsap.set(".ui-insight-panel", { y: 50, opacity: 0 });
        gsap.set(".ui-satellite", { opacity: 0, scale: 0, rotate: 45 });

        tl.to(".bg-symbol", { opacity: 0.05, scale: 1.2, rotate: 0, duration: 2 })
          .to(".feature-card", { opacity: 1, x: 0, rotateY: 0, scale: 1, duration: 1.2 }, "-=1.8")
          .to(".accent-text", { opacity: 1, x: 0, skewX: 0, duration: 1, ease: "expo.out" }, "-=1.2")
          .to(".content-text", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.8")
          .to(".ui-icon-box", { scale: 1, rotate: 0, duration: 0.6, ease: "back.out(2)" }, "-=0.6")
          .to(".ui-selection-icon", { opacity: 0.2, x: 0, duration: 0.6 }, "-=0.4")
          .to(".ui-bar", { scaleX: 1, duration: 0.8, stagger: 0.1, ease: "expo.out" }, "-=0.6")
          .to(".ui-insight-panel", { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" }, "-=0.4")
          .to(".ui-satellite", { opacity: 1, scale: 1, rotate: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.5)" }, "-=0.6")
          .to(".typewriter-text", { text: activeText, duration: 1.5, ease: "none", onStart: () => !isRendering && startTypingSound(), onComplete: () => stopTypingSound() }, "-=0.5");

        gsap.to(".feature-card", { y: -20, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".ui-satellite", { y: (i) => i === 0 ? -15 : 15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.fromTo(".ui-scan-line", { top: "-20%", opacity: 0 }, { top: "120%", opacity: 1, duration: 2, repeat: -1, ease: "none", repeatDelay: 1 });
      } else if (mode === 'narrative') {
        gsap.set(".narrative-scene", { opacity: 0, scale: 0.95, y: 30 });
        gsap.set(".narrative-ui", { opacity: 0, y: 20 });
        gsap.set(".typewriter-text", { text: "" });
        tl.to(".narrative-scene", { opacity: 1, scale: 1, y: 0, duration: 1 })
          .to(".narrative-ui", { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 }, "-=0.6")
          .to(".typewriter-text", { text: activeText, duration: 1.5, ease: "none", onStart: () => !isRendering && startTypingSound(), onComplete: () => stopTypingSound() }, "-=0.2");
        if (index === 0) gsap.to(".logo-glow", {
          keyframes: [
            { opacity: 0.2, scale: 1, duration: 1.5 },
            { opacity: 0.5, scale: 1.2, duration: 1.5 },
            { opacity: 0.2, scale: 1, duration: 1.5 }
          ],
          repeat: -1,
          ease: "sine.inOut"
        });
        if (index === 2) gsap.to(".pulse-ring", { scale: 3, opacity: 0, duration: 2, repeat: -1, ease: "power2.out" });
      } else if (mode === 'immersive') {
        gsap.set(".immersive-video", { opacity: 0, scale: 1.1 });
        gsap.set(".immersive-ui", { opacity: 0, x: -30 });
        gsap.set(".immersive-stats", { opacity: 0, x: 30 });
        gsap.set(".typewriter-text", { text: "" });
        tl.to(".immersive-video", { opacity: 0.4, scale: 1, duration: 2, ease: "power2.inOut" })
          .to(".immersive-ui", { opacity: 1, x: 0, duration: 1 }, "-=1")
          .to(".immersive-stats", { opacity: 1, x: 0, duration: 1 }, "-=0.8")
          .to(".typewriter-text", { text: activeText, duration: 1.5, ease: "none", onStart: () => !isRendering && startTypingSound(), onComplete: () => stopTypingSound() }, "-=0.5");
      }
    }, container);
    return () => ctx.revert();
  }, [index, mode, isRendering]);

  return (
    <div ref={container} className="h-screen w-full bg-void text-white font-sans overflow-hidden flex flex-col relative perspective-1000">

      <MobileWarning />

      {/* CAPTURE STAGE (Hidden, 2K) */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-0 overflow-hidden" style={{ width: '2560px', height: '1440px', transform: 'scale(0.01)', transformOrigin: 'top left' }}>
        <div id="capture-stage">
          <CinematicStage index={index} mode={mode} isWatermarkVisible={true} isCaptureMode={true} />
        </div>
      </div>

      {/* SHARED RENDER SCREEN COMPONENT */}
      <ExportOverlay
        isRendering={isRendering}
        progress={renderProgress}
        status={renderStatus}
      />

      {/* USER VIEW */}
      <div className="absolute inset-0 z-0">
        <CinematicStage index={index} mode={mode} isWatermarkVisible={false} />
      </div>

      {!hasInteracted && (
        <div className="absolute inset-0 z-[200] bg-void/90 backdrop-blur-3xl flex flex-col items-center justify-center p-12 text-center px-6 text-white">
          <div className="w-24 h-24 bg-accent rounded-3xl mb-8 flex items-center justify-center shadow-2xl animate-pulse text-white"><SpeakerHigh size={48} weight="fill" /></div>
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-white">Cinematic Audio Detected</h2>
          <button onClick={() => { setHasInteracted(true); playWhoosh(); }} className="bg-white text-void px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">Enter Experience</button>
        </div>
      )}

      {/* HEADER - LOGO ONLY */}
      <nav className={`absolute top-0 w-full p-8 flex justify-between items-center z-[100] transition-all duration-500 ${hasInteracted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg text-white">
            <BookOpen size={24} weight="fill" />
          </div>
          <span className="font-black tracking-tighter text-xl uppercase text-white">Classroom<span className="text-accent text-xs align-top ml-0.5 font-bold">PRO</span></span>
        </div>
      </nav>

      {/* UNIFIED CONTROL DECK */}
      {hasInteracted && (
        <ControlDeck
          index={index}
          setIndex={setIndex}
          mode={mode}
          setMode={setMode}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          isMinimized={isMinimized}
          setIsMinimized={setIsMinimized}
          isRendering={isRendering}
          handleExport={(res) => handleExport(res, DATA.length, mode)}
          step={step}
          totalSteps={DATA.length}
        />
      )}
    </div>
  );
}
