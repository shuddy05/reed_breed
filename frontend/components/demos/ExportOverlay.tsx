"use client"

import React from "react";

interface ExportOverlayProps {
  isRendering: boolean;
  progress: number;
  status: string;
}

export const ExportOverlay = ({ 
  isRendering, 
  progress, 
  status 
}: ExportOverlayProps) => {
  if (!isRendering) return null;

  return (
    <div className="absolute inset-0 z-[500] bg-void/98 backdrop-blur-3xl flex flex-col items-center justify-center p-12 text-center no-export">
      <div className="relative w-32 h-32 mb-12">
        {/* Spinning Render Core */}
        <div className="absolute inset-0 border-4 border-accent/20 rounded-full" />
        <div 
          className="absolute inset-0 border-4 border-accent rounded-full border-t-transparent animate-spin" 
          style={{ animationDuration: '0.8s' }}
        />
        <div className="absolute inset-0 flex items-center justify-center font-black text-2xl text-white">
          {progress}%
        </div>
      </div>
      
      <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-white">
        Encoding Cinematic Video
      </h2>
      
      <p className="text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-12 animate-pulse">
        {status}
      </p>
      
      <div className="w-full max-w-md h-1.5 bg-white/5 rounded-full overflow-hidden">
         <div 
           className="h-full bg-accent transition-all duration-500 ease-out" 
           style={{ width: `${progress}%` }} 
         />
      </div>
      
      <p className="text-text-muted mt-8 text-xs font-medium max-w-xs">
        Please keep this tab active. We are rendering 4K/2K frames directly in your browser.
      </p>
    </div>
  );
};
