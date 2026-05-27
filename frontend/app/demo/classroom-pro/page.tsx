"use client"

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  Users, 
  BookOpen, 
  VideoCamera, 
  TrendUp, 
  Play, 
  Pause,
  SkipForward,
  SkipBack,
  Broadcast,
  Brain,
  ShieldCheck
} from "phosphor-react";

gsap.registerPlugin(useGSAP);

const SCENES = [
  {
    id: "intro",
    title: "The Vision",
    subtitle: "Reimagining Educational Infrastructure",
    description: "A centralized engine for modern learning institutions.",
  },
  {
    id: "assembly",
    title: "Modular Assembly",
    subtitle: "Built for Precision",
    description: "Every component is architected for speed and clarity.",
  },
  {
    id: "intelligence",
    title: "Live Intelligence",
    subtitle: "Real-time Monitoring",
    description: "Instant visibility into every classroom, globally.",
  },
  {
    id: "impact",
    title: "Proven Impact",
    subtitle: "Scalable Growth",
    description: "Systems that grow with your institution's ambitions.",
  }
];

export default function ClassroomPROCinematic() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play logic
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        nextScene();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentScene, isPlaying]);

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % SCENES.length);
  };

  const prevScene = () => {
    setCurrentScene((prev) => (prev - 1 + SCENES.length) % SCENES.length);
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Scene Transition Animation
      const tl = gsap.timeline();
      
      // Reset all scenes
      gsap.set(".scene-content", { display: "none", opacity: 0, y: 20 });
      gsap.set(".ui-element", { opacity: 0, scale: 0.8, y: 50 });
      
      // Show current scene
      const activeScene = `.scene-${currentScene}`;
      
      tl.to(activeScene, { display: "block", opacity: 1, y: 0, duration: 0.5 })
        .to(`${activeScene} .ui-element`, { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          stagger: 0.1, 
          duration: 0.8,
          ease: "back.out(1.7)"
        }, "-=0.2");

      // Specific Scene Animations
      if (currentScene === 0) {
        gsap.to(".logo-glow", {
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
          duration: 3,
          repeat: -1,
          ease: "sine.inOut"
        });
      }

      if (currentScene === 2) {
        gsap.to(".pulse-ring", {
          scale: 3,
          opacity: 0,
          duration: 2,
          repeat: -1,
          ease: "power2.out"
        });
      }
    }, container);

    return () => ctx.revert();
  }, [currentScene]);

  return (
    <div ref={container} className="h-screen w-full bg-void text-white font-sans overflow-hidden flex flex-col relative">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,110,245,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Navigation Overlay */}
      <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
            <BookOpen size={24} weight="fill" />
          </div>
          <span className="font-black tracking-tighter text-xl">Classroom<span className="text-accent text-xs align-top ml-0.5 font-bold">PRO</span></span>
        </div>
        <div className="flex gap-2">
          {SCENES.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-500 rounded-full ${i === currentScene ? 'w-12 bg-accent' : 'w-4 bg-white/10'}`} 
            />
          ))}
        </div>
      </nav>

      {/* Main Stage */}
      <main className="flex-1 flex items-center justify-center p-20 relative z-10">
        
        {/* SCENE 0: INTRO */}
        <div className={`scene-content scene-0 max-w-4xl text-center`}>
          <div className="relative inline-block mb-12">
            <div className="logo-glow absolute inset-0 bg-accent blur-[60px] opacity-20" />
            <BookOpen size={120} weight="duotone" className="text-accent relative z-10" />
          </div>
          <h1 className="text-display-lg font-black mb-6 tracking-tight">The Future of Education</h1>
          <p className="text-p-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            A high-performance operating system designed to automate, track, and scale modern learning institutions with surgical precision.
          </p>
        </div>

        {/* SCENE 1: ASSEMBLY */}
        <div className={`scene-content scene-1 w-full max-w-6xl`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="ui-element glass-card p-10 rounded-[2rem] border-white/5 bg-white/5 flex flex-col items-center text-center">
              <Users size={48} weight="duotone" className="text-accent mb-6" />
              <h3 className="text-h3 font-bold mb-4">Student Engine</h3>
              <p className="text-text-muted text-sm leading-relaxed">Automated enrollment, tracking, and identity management across all campuses.</p>
            </div>
            <div className="ui-element glass-card p-10 rounded-[2rem] border-white/5 bg-white/5 flex flex-col items-center text-center translate-y-12">
              <Brain size={48} weight="duotone" className="text-purple-500 mb-6" />
              <h3 className="text-h3 font-bold mb-4">AI Grading</h3>
              <p className="text-text-muted text-sm leading-relaxed">Intelligent assessment processing with real-time feedback and gap analysis.</p>
            </div>
            <div className="ui-element glass-card p-10 rounded-[2rem] border-white/5 bg-white/5 flex flex-col items-center text-center">
              <ShieldCheck size={48} weight="duotone" className="text-success mb-6" />
              <h3 className="text-h3 font-bold mb-4">Secure Core</h3>
              <p className="text-text-muted text-sm leading-relaxed">Enterprise-grade infrastructure ensuring data integrity and global compliance.</p>
            </div>
          </div>
        </div>

        {/* SCENE 2: INTELLIGENCE */}
        <div className={`scene-content scene-2 w-full max-w-4xl`}>
          <div className="ui-element bg-depth rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative aspect-video flex flex-col">
            <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
              <div className="w-2 h-2 rounded-full bg-error" />
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Live Feed // Primary Campus</span>
              <div className="ml-auto flex items-center gap-4">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-[9px] font-bold text-success uppercase">Active</span>
                 </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(20,110,245,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(20,110,245,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
               <div className="relative">
                  <div className="pulse-ring absolute inset-0 border-2 border-accent rounded-full opacity-20" />
                  <Broadcast size={80} className="text-accent" weight="duotone" />
               </div>
               <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-white/40 uppercase">Instructor</p>
                     <p className="text-xl font-black">Prof. Reed</p>
                  </div>
                  <div className="text-right space-y-1">
                     <p className="text-[10px] font-bold text-white/40 uppercase">Engagement</p>
                     <p className="text-xl font-black text-accent">98.4%</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* SCENE 3: IMPACT */}
        <div className={`scene-content scene-3 max-w-4xl text-center`}>
          <div className="ui-element flex justify-center gap-12 mb-16">
            <div className="text-center">
              <p className="text-display-md font-black text-white mb-2">85%</p>
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Efficiency Up</p>
            </div>
            <div className="w-px h-24 bg-white/10" />
            <div className="text-center">
              <p className="text-display-md font-black text-white mb-2">12x</p>
              <p className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">Growth Speed</p>
            </div>
            <div className="w-px h-24 bg-white/10" />
            <div className="text-center">
              <p className="text-display-md font-black text-white mb-2">0%</p>
              <p className="text-[10px] font-bold text-success uppercase tracking-widest">Data Leakage</p>
            </div>
          </div>
          <h2 className="ui-element text-h1 font-black mb-12">Ready to Transform?</h2>
          <button className="ui-element bg-accent hover:bg-accent-dim text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl shadow-accent/30 transition-all active:scale-95 uppercase tracking-widest">
            Deploy Now
          </button>
        </div>

      </main>

      {/* Cinematic Controller */}
      <footer className="p-12 flex justify-between items-end z-50">
        <div className="max-w-md">
          <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-2">Scene {currentScene + 1} // {SCENES[currentScene].id}</p>
          <h2 className="text-3xl font-black mb-2">{SCENES[currentScene].title}</h2>
          <p className="text-text-muted text-sm font-medium">{SCENES[currentScene].subtitle}</p>
        </div>

        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-white/10">
          <button 
            onClick={prevScene}
            className="w-12 h-12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded-2xl transition-all"
          >
            <SkipBack size={24} weight="bold" />
          </button>
          
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-white text-void flex items-center justify-center rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? <Pause size={32} weight="fill" /> : <Play size={32} weight="fill" />}
          </button>

          <button 
            onClick={nextScene}
            className="w-12 h-12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded-2xl transition-all"
          >
            <SkipForward size={24} weight="bold" />
          </button>
        </div>

        <div className="text-right hidden md:block">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Interactive Prototype</p>
          <p className="text-xs font-bold text-white/40">© 2026 Reed Breed Technologies</p>
        </div>
      </footer>

      {/* Dynamic Background Perspective Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] border border-white/5 rounded-[5rem] rotate-12" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] border border-white/5 rounded-[5rem] -rotate-12" />
      </div>
    </div>
  );
}
