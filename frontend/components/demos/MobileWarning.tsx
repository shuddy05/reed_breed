"use client"

import React from "react";
import { Monitor, DeviceMobile } from "phosphor-react";

export const MobileWarning = () => {
  return (
    <div className="fixed inset-0 z-[500] bg-void flex flex-col items-center justify-center p-8 text-center md:hidden">
      <div className="relative mb-12">
        <div className="w-24 h-24 rounded-3xl bg-accent/10 flex items-center justify-center border border-accent/20">
          <Monitor size={48} weight="duotone" className="text-accent" />
        </div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl bg-void border border-white/10 flex items-center justify-center animate-bounce">
          <DeviceMobile size={24} weight="fill" className="text-white rotate-90" />
        </div>
      </div>
      
      <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Cinematic Mode</h2>
      <p className="text-text-secondary leading-relaxed max-w-xs mx-auto text-sm font-medium mb-8">
        This high-fidelity product demonstration is best experienced on a **Desktop** or by **tilting your phone** to Landscape mode.
      </p>

      <div className="flex items-center gap-2 opacity-30 mt-auto">
        <span className="font-sans text-sm font-bold text-white tracking-[-0.08em]">Reed Breed</span>
        <div className="w-1 h-1 rounded-full bg-accent" />
      </div>
    </div>
  );
};
