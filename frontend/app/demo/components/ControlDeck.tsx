"use client"

import React from "react";
import { 
  Play, 
  Pause,
  SkipForward,
  SkipBack,
  VideoCamera,
  SpeakerHigh,
  SpeakerSlash,
  CaretDown,
  CaretUp
} from "phosphor-react";

interface ControlDeckProps {
  index: number;
  setIndex: (i: number | ((prev: number) => number)) => void;
  mode: 'narrative' | 'exploder' | 'immersive';
  setMode: (m: 'narrative' | 'exploder' | 'immersive') => void;
  isPlaying: boolean;
  setIsPlaying: (p: boolean) => void;
  isMuted: boolean;
  setIsMuted: (m: boolean) => void;
  isMinimized: boolean;
  setIsMinimized: (m: boolean) => void;
  isRendering: boolean;
  handleExport: (res: { width: number, height: number, label: string }) => void;
  step: any;
  totalSteps: number;
}

const RESOLUTIONS = [
  { width: 854, height: 480, label: "480p" },
  { width: 1280, height: 720, label: "720p" },
  { width: 1920, height: 1080, label: "1080p" },
  { width: 2560, height: 1440, label: "2K" },
];

export const ControlDeck = ({
  index,
  setIndex,
  mode,
  setMode,
  isPlaying,
  setIsPlaying,
  isMuted,
  setIsMuted,
  isMinimized,
  setIsMinimized,
  isRendering,
  handleExport,
  step,
  totalSteps
}: ControlDeckProps) => {
  const [showResPicker, setShowResPicker] = React.useState(false);

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] pointer-events-none">
      
      {/* STATIC METADATA - LEFT (Always visible) */}
      <div className="absolute left-8 bottom-8 max-w-[150px] md:max-w-md hidden xl:block transition-all duration-500">
        <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-1" style={{ color: step.color }}>{mode.toUpperCase()} // {step.id}</p>
        <h2 className="text-xl md:text-2xl font-black leading-tight text-white">{step.title}</h2>
      </div>

      {/* STATIC METADATA - RIGHT (Always visible) */}
      <div className="absolute right-8 bottom-8 text-right hidden xl:block min-w-[200px] transition-all duration-500">
         <div className="flex gap-2 mb-2 justify-end">{Array.from({ length: totalSteps }).map((_, i) => <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/10'}`} />)}</div>
         <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.4em]">Engine // Demo_05</p>
      </div>

      {/* MAXIMIZE HANDLE (Only visible when minimized) */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500 flex flex-col items-center ${isMinimized ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button 
          onClick={() => setIsMinimized(false)}
          className="pointer-events-auto flex items-center justify-center bg-white/[0.05] backdrop-blur-[100px] px-6 py-2 rounded-t-2xl border border-white/10 border-b-0 shadow-2xl group hover:bg-white/[0.1] transition-all"
        >
          <CaretUp size={16} weight="bold" className="text-white/40 group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* MOVING CONTROL BAR CONTAINER */}
      <div className={`w-full p-4 md:p-10 flex justify-center items-end transition-all duration-700 ease-in-out pointer-events-none ${isMinimized ? 'translate-y-40' : 'translate-y-0'}`}>
        
        <div className="relative flex items-center gap-2 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-[100px] backdrop-saturate-0 backdrop-contrast-[125%] p-2 rounded-full border border-white/[0.15] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1),0_25px_50px_-12px_rgba(0,0,0,0.8)] scale-90 md:scale-100 grayscale transition-all duration-700 hover:scale-105 hover:border-white/[0.3] hover:backdrop-saturate-[250%] hover:grayscale-0 group pointer-events-auto">
          
          {/* Minimize Trigger */}
          <button 
            onClick={() => setIsMinimized(true)}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white/20 hover:text-white transition-all order-first"
          >
            <CaretDown size={20} weight="bold" />
          </button>

          {!isMinimized && (
            <>
              <div className="w-px h-6 bg-white/5 mx-1" />

              {/* Mode Toggles */}
              <div className="flex items-center gap-1 bg-white/[0.02] p-1 rounded-full border border-white/[0.05]">
                <button onClick={() => setMode('narrative')} className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest transition-all ${mode === 'narrative' ? 'bg-accent/40 text-white border border-accent/40 shadow-[0_0_15px_rgba(20,110,245,0.3)]' : 'bg-white/10 text-white/40 hover:text-white/60'}`}>Narrative</button>
                <button onClick={() => setMode('exploder')} className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest transition-all ${mode === 'exploder' ? 'text-white border shadow-lg' : 'bg-white/10 text-white/40 hover:text-white/60'}`} style={{ backgroundColor: mode === 'exploder' ? `${step.color}66` : undefined, borderColor: mode === 'exploder' ? `${step.color}66` : undefined }}>Exploder</button>
                <button onClick={() => setMode('immersive')} className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest transition-all ${mode === 'immersive' ? 'bg-white text-void shadow-lg' : 'text-white/20 hover:text-white/60'}`} style={{ backgroundColor: mode === 'immersive' ? `${step.color}66` : undefined, borderColor: mode === 'immersive' ? `${step.color}66` : undefined }}>Immersive</button>
              </div>

              <div className="w-px h-6 bg-white/5 mx-1" />

              {/* Audio Toggle */}
              <button onClick={() => setIsMuted(!isMuted)} className="w-8 h-8 flex items-center justify-center text-white/20 hover:text-white transition-all">
                {isMuted ? <SpeakerSlash size={18} /> : <SpeakerHigh size={18} />}
              </button>

              <div className="w-px h-6 bg-white/5 mx-1" />

              {/* Playback Controls */}
              <div className="flex items-center gap-1 md:gap-3">
                <button onClick={() => setIndex((prev) => (prev - 1 + totalSteps) % totalSteps)} className="w-8 h-8 flex items-center justify-center text-white/20 hover:text-white transition-all"><SkipBack size={20} weight="bold" /></button>
                <button onClick={() => setIsPlaying(!isPlaying)} className={`w-10 h-10 md:w-12 md:h-12 backdrop-blur-xl border text-white flex items-center justify-center rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95`} style={{ backgroundColor: `${step.color}33`, borderColor: `${step.color}66` }}>{isPlaying ? <Pause size={24} weight="fill" /> : <Play size={24} weight="fill" />}</button>
                <button onClick={() => setIndex((prev) => (prev + 1) % totalSteps)} className="w-8 h-8 flex items-center justify-center text-white/20 hover:text-white transition-all"><SkipForward size={20} weight="bold" /></button>
              </div>

              <div className="w-px h-6 bg-white/5 mx-1" />

              {/* Export */}
              <div className="relative pointer-events-auto">
                {showResPicker && (
                  <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 bg-void/90 backdrop-blur-3xl border border-white/10 p-2 rounded-2xl flex flex-col gap-1 min-w-[100px] shadow-2xl animate-in fade-in slide-in-from-bottom-2">
                    {RESOLUTIONS.map((res) => (
                      <button 
                        key={res.label}
                        onClick={() => {
                          handleExport(res);
                          setShowResPicker(false);
                        }}
                        className="px-4 py-2 hover:bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-all text-center"
                      >
                        {res.label}
                      </button>
                    ))}
                  </div>
                )}
                <button 
                  onClick={() => setShowResPicker(!showResPicker)}
                  disabled={isRendering} 
                  className={`px-5 h-8 md:h-10 backdrop-blur-xl border text-white flex items-center gap-2 rounded-full font-black text-[8px] uppercase tracking-widest hover:brightness-125 disabled:opacity-50 transition-all ${showResPicker ? 'bg-white/20 border-white/40' : ''}`} 
                  style={{ backgroundColor: `${step.color}44`, borderColor: `${step.color}66` }}
                >
                  <VideoCamera size={16} weight="fill" />
                  <span className="hidden sm:inline">{isRendering ? 'Rendering' : 'Export'}</span>
                </button>
              </div>

            </>
          )}

          {/* Simple icon when Minimized to show we can click */}
          {isMinimized && (
            <div className="px-4">
               <CaretUp size={16} weight="bold" className="text-white/20" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
