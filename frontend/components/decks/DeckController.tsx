"use client"

import React, { useState, useEffect, useRef } from "react";
import { 
  CaretLeft, 
  CaretRight, 
  Play, 
  Pause,
  Export
} from "phosphor-react";

interface DeckControllerProps {
  currentPage: number;
  totalPages: number;
  paginate: (dir: number) => void;
  setCurrentPage: (page: number) => void;
  setDirection: (dir: number) => void;
  accentColor: string;
  autoplayDelay?: number;
  onExport?: () => void;
}

export const DeckController: React.FC<DeckControllerProps> = ({
  currentPage,
  totalPages,
  paginate,
  setCurrentPage,
  setDirection,
  accentColor,
  autoplayDelay = 5000,
  onExport
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        if (currentPage < totalPages - 1) {
          paginate(1);
        } else {
          // Loop back to start or stop
          setIsPlaying(false);
        }
      }, autoplayDelay);
    }
    
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, currentPage, totalPages, autoplayDelay, paginate]);

  // Handle Export Placeholder
  const handleExport = () => {
    if (onExport) {
      onExport();
    } else {
      window.print();
    }
  };

  return (
    <div className="fixed bottom-6 md:bottom-12 left-0 right-0 flex justify-center items-center gap-4 md:gap-16 z-[100] px-4">
      <div className="flex items-center gap-4">
        {/* Play/Pause Button */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full border bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
          style={{ borderColor: accentColor, color: accentColor }}
        >
          {isPlaying ? <Pause size={18} weight="fill" /> : <Play size={18} weight="fill" />}
        </button>

        {/* Previous Button */}
        <button 
          onClick={() => paginate(-1)} 
          disabled={currentPage === 0} 
          className={`group flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black transition-all ${currentPage === 0 ? 'opacity-0 pointer-events-none' : 'text-zinc-400 hover:text-zinc-900'}`}
        >
          <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-900 transition-colors">
            <CaretLeft size={16} />
          </div>
          <span className="hidden md:inline">Previous</span>
        </button>
      </div>

      {/* Progress Bar / Dots */}
      <div 
        ref={scrollRef} 
        className="flex gap-2 md:gap-3 overflow-x-auto no-scrollbar max-w-[180px] sm:max-w-[300px] md:max-w-none px-5 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 scroll-smooth"
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            id={`step-${i}`}
            onClick={() => { 
              setDirection(i > currentPage ? 1 : -1); 
              setCurrentPage(i); 
              // Reset timer on manual interaction
              if (isPlaying) {
                setIsPlaying(false);
                setTimeout(() => setIsPlaying(true), 100);
              }
            }}
            className={`h-2 transition-all duration-500 rounded-full cursor-pointer shrink-0 ${i === currentPage ? 'w-10 md:w-16' : 'w-2 bg-zinc-200 hover:bg-zinc-300'}`}
            style={{ backgroundColor: i === currentPage ? accentColor : undefined }}
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        {/* Next Button */}
        <button 
          onClick={() => paginate(1)} 
          disabled={currentPage === totalPages - 1} 
          className={`group flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black transition-all ${currentPage === totalPages - 1 ? 'opacity-0 pointer-events-none' : 'text-zinc-900'}`}
        >
          <span className="hidden md:inline" style={{ color: currentPage < totalPages - 1 ? accentColor : undefined }}>Next</span>
          <div className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:scale-110 transition-all" style={{ borderColor: accentColor, backgroundColor: accentColor, color: 'white' }}>
            <CaretRight size={16} />
          </div>
        </button>

        {/* Export Button */}
        <button 
          onClick={handleExport}
          className="hidden md:flex w-10 h-10 rounded-full border bg-white/80 backdrop-blur-md items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 text-zinc-600 hover:text-zinc-900 border-zinc-200 hover:border-zinc-400"
          title="Export Deck"
        >
          <Export size={18} weight="duotone" />
        </button>
      </div>
    </div>
  );
};
