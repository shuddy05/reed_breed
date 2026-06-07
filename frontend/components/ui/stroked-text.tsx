"use client"

import React from 'react'

interface StrokedTextProps {
  text: string
  className?: string
  fontSize?: string
  viewBox?: string
  height?: string
  strokeWidth?: number
  opacity?: number
  rectWidth?: number
}

export const StrokedText: React.FC<StrokedTextProps> = ({ 
  text, 
  className = "", 
  fontSize = "110px",
  viewBox = "0 0 450 120",
  height = "clamp(4.5rem, 10vw, 8rem)",
  strokeWidth = 3,
  opacity = 0.4,
  rectWidth = 800
}) => {
  const maskId = `mask-${text.toLowerCase().replace(/\s+/g, '-')}`
  
  return (
    <svg 
      viewBox={viewBox}
      className={`w-full h-auto overflow-visible ${className}`}
      style={{ 
        height: height, 
        width: 'auto' 
      }}
    >
      <defs>
        <mask id={maskId}>
          <text 
            x="0" 
            y="107" 
            fill="white" 
            stroke="white" 
            strokeWidth={strokeWidth} 
            strokeLinejoin="round" 
            className="font-black tracking-tighter" 
            style={{ fontSize: fontSize }}
          >
            {text}
          </text>
          <text 
            x="0" 
            y="107" 
            fill="black" 
            stroke="none" 
            className="font-black tracking-tighter" 
            style={{ fontSize: fontSize }}
          >
            {text}
          </text>
        </mask>
      </defs>
      <rect 
        x="-20" 
        y="-20" 
        width={rectWidth} 
        height="200" 
        fill={`rgba(255,255,255,${opacity})`} 
        mask={`url(#${maskId})`} 
      />
    </svg>
  )
}
