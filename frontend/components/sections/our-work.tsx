"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WorkItem } from "@/lib/get-works"
import { StrokedText } from "@/components/ui/stroked-text"

export const OurWork = ({ works = [], isHomePage = false }: { works?: WorkItem[], isHomePage?: boolean }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative py-24 md:py-32 lg:py-48 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 max-w-6xl mx-auto">
          {works?.map((item, index) => (
            <Link 
              key={item.id} 
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onMouseMove={(e) => handleMouseMove(e, item.id)}
                className="relative aspect-[3/4] rounded-[32px] overflow-hidden group bg-surface shadow-2xl cursor-none"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">{item.type}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight">{item.title}</h3>
                </div>

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
                  <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                     <div className="absolute inset-0 flex items-center justify-center animate-[spin_8s_linear_infinite]">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path id={`circlePath-${item.id}`} d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" fill="none" />
                          <text className="text-[9px] font-black uppercase tracking-[0.12em] fill-void">
                            <textPath xlinkHref={`#circlePath-${item.id}`}>VIEW PROJECT VIEW PROJECT</textPath>
                          </text>
                        </svg>
                     </div>
                     <div className="relative z-10 w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_rgba(20,110,245,0.5)]" />
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          {isHomePage ? (
            <Link href="/work">
              <Button 
                className="px-12 py-6 h-auto text-xl font-sans font-bold tracking-tight whitespace-nowrap rounded-full transition-all duration-500"
              >
                View More
              </Button>
            </Link>
          ) : (
            <Link href="/contact">
              <Button 
                className="px-12 py-6 h-auto text-xl font-sans font-bold tracking-tight whitespace-nowrap rounded-full transition-all duration-500"
              >
                Start a Project
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}


