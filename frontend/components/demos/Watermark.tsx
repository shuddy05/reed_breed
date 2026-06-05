"use client"

import React from "react";

export const Watermark = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className={`fixed bottom-6 md:bottom-12 right-6 md:right-12 z-[400] flex items-center gap-3 transition-opacity duration-300 pointer-events-none ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <span className="font-sans text-xl md:text-3xl font-bold text-white tracking-[-0.08em]">Reed Breed</span>
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent" />
    </div>
  );
};
