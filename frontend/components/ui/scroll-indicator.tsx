"use client"

import * as React from "react"
import { motion } from "framer-motion"

export const ScrollIndicator = () => {
  return (
    <div className="w-full flex justify-center py-20 z-30 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative w-20 h-20"
      >
        <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-2xl">
          <defs>
            <mask id="scroll-mouse-mask">
              <rect width="80" height="80" fill="white" />
              {/* The mouse shape as a cutout */}
              <rect x="28" y="20" width="24" height="40" rx="12" fill="black" />
            </mask>
          </defs>
          <rect width="80" height="80" rx="40" fill="white" mask="url(#scroll-mouse-mask)" />
        </svg>

        {/* Scrolling Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-10 flex justify-center p-1.5 -mt-0">
            <motion.div 
              animate={{ 
                y: [0, 15, 0],
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-[2px] h-1 bg-white rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
