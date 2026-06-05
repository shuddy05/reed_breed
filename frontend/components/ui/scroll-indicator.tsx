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
        className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
      >
        <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center p-1.5">
          <motion.div 
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1.5 h-1.5 bg-black rounded-full"
          />
        </div>
      </motion.div>
    </div>
  )
}
