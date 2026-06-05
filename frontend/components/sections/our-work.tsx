"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const workItems = [
  { id: 1, src: "/work1.jpg", alt: "Modern Flyer Design" },
  { id: 2, src: "/work2.jpg", alt: "UI/UX Portfolio" },
  { id: 3, src: "/work3.jpg", alt: "Graphic Design Showcase" },
  { id: 4, src: "/work4.jpg", alt: "Brand Identity Design" },
]

export const OurWork = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative py-24 md:py-32 lg:py-48 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="relative mb-12 select-none">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[12vw] md:text-[8vw] leading-[0.8] font-black text-white tracking-tighter font-sans inline-block mr-4"
            >
              Our
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter font-sans inline-block"
              style={{ 
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent"
              }}
            >
              Work
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 max-w-4xl mx-auto">
          {workItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onMouseMove={(e) => handleMouseMove(e, item.id)}
              className="relative aspect-[2/3] rounded-sm overflow-hidden group bg-surface shadow-2xl cursor-none"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Custom Cursor Badge */}
              <motion.div 
                className="pointer-events-none absolute z-50 flex items-center justify-center"
                animate={{
                  x: mousePos.x - 40,
                  y: mousePos.y - 40,
                  scale: hoveredId === item.id ? 1 : 0,
                  opacity: hoveredId === item.id ? 1 : 0,
                }}
                transition={{ type: "spring", damping: 30, stiffness: 250, mass: 0.5 }}
              >
                <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                   <div className="absolute inset-0 flex items-center justify-center animate-[spin_8s_linear_infinite]">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path id={`circlePath-${item.id}`} d="M 50, 50 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" fill="none" />
                        <text className="text-[12px] font-black uppercase tracking-[0.1em] fill-void">
                          <textPath xlinkHref={`#circlePath-${item.id}`}>VIEW WORK VIEW WORK</textPath>
                        </text>
                      </svg>
                   </div>
                   <div className="relative z-10 w-2 h-2 bg-void rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            size="md" 
            className="px-10 py-3.5 h-fit text-xl font-sans font-bold tracking-tight whitespace-nowrap rounded-full transition-all duration-500"
          >
            View All Work
          </Button>
        </div>
      </div>
    </section>
  )
}
