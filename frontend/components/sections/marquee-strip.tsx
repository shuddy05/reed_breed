"use client"

import * as React from "react"
import { motion } from "framer-motion"

const services = [
  { name: "Development", weight: "font-black" },
  { name: "Strategy", weight: "font-light" },
  { name: "Automation", weight: "font-medium" },
  { name: "AI Native", weight: "font-black" },
  { name: "Application", weight: "font-light" },
  { name: "Prototyping", weight: "font-medium" },
  { name: "Web Design", weight: "font-black" },
  { name: "Marketing", weight: "font-light" },
  { name: "Strategy", weight: "font-medium" },
  { name: "AI Native", weight: "font-black" },
  { name: "Development", weight: "font-light" },
  { name: "Automation", weight: "font-medium" }
]

export const MarqueeStrip = () => {
  return (
    <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden bg-transparent -mt-20 z-20">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background Strip (Faded) */}
        <div className="absolute w-[120%] rotate-[-3deg] opacity-50">
          <Marquee velocity={25} direction="right" className="bg-white/5 py-4">
            {services.map((service, i) => (
              <span key={i} className={`text-xl md:text-2xl ${service.weight} text-white px-6 flex items-center gap-6 tracking-tight`}>
                {service.name} <span className="w-1.5 h-1.5 bg-white rounded-full opacity-50" />
              </span>
            ))}
          </Marquee>
        </div>

        {/* Foreground Strip (Solid) */}
        <div className="absolute w-[120%] rotate-[4deg] z-10 shadow-xl">
          <Marquee velocity={30} direction="left" className="bg-white py-5">
            {services.map((service, i) => (
              <span key={i} className={`text-xl md:text-2xl ${service.weight} text-black px-6 flex items-center gap-6 tracking-tight`}>
                {service.name} <span className="w-1.5 h-1.5 bg-black rounded-full" />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

const Marquee = ({ children, velocity = 20, direction = "left", className = "" }: any) => {
  return (
    <div className={`flex overflow-hidden ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0]
        }}
        transition={{
          duration: velocity,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  )
}
