"use client"

import * as React from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export const Cursor = () => {
  // Set offset to 12px away
  const OFFSET = -12 
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [isHovering, setIsHovering] = React.useState(false)
  const [isHidden, setIsHidden] = React.useState(false)

  // Smooth spring configuration for the "shadow" feel
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  React.useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX + OFFSET)
      cursorY.set(e.clientY + OFFSET)

      // Detect if hovering over clickable elements
      const target = e.target as HTMLElement
      const computedStyle = window.getComputedStyle(target)
      
      const isClickable = 
        target.closest('button') || 
        target.closest('a') || 
        computedStyle.cursor === 'pointer'
      
      setIsHovering(!!isClickable)
      
      // Hide global cursor if the target specifically sets cursor: none (used by OurWork)
      setIsHidden(computedStyle.cursor === 'none')
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [cursorX, cursorY, OFFSET])

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      animate={{
        width: isHovering ? 32 : 16,
        height: isHovering ? 32 : 16,
        backgroundColor: isHovering ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)",
        border: isHovering ? "2px solid rgba(255, 255, 255, 1)" : "0px solid rgba(255, 255, 255, 0)",
        opacity: isHidden ? 0 : 1,
        scale: isHidden ? 0 : 1,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 250,
      }}
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div 
        className="w-1 h-1 bg-white rounded-full"
        animate={{
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0,
        }}
      />
    </motion.div>
  )
}
