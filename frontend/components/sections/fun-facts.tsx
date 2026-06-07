"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const facts = [
  { value: "7", label: "Members," },
  { value: "340+", label: "Project Done," },
  { value: "99%", label: "Top Feedback," },
  { value: "4", label: "Global Offices." },
]

import { StrokedText } from "@/components/ui/stroked-text"

export const FunFacts = () => {
  return (
    <section className="relative min-h-[600px] flex flex-col md:flex-row overflow-hidden pr-6 md:pr-12 lg:pr-24">
      {/* Left Content */}
      <div className="w-full md:w-[65%] flex flex-col justify-center py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white/60 text-lg md:text-xl font-bold mb-8"
        >
          Some fun facts...
        </motion.p>
        
        <div className="space-y-4">
          {facts.map((fact, index) => (
            <motion.div 
              key={fact.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="text-[9vw] md:text-[5vw] font-black text-white leading-none tracking-tighter">
                {fact.value}
              </span>
              <div className="flex items-center">
                <StrokedText 
                  text={fact.label} 
                  viewBox={`0 0 ${fact.label.length * 55} 120`}
                  height="clamp(3rem, 5vw, 4.5rem)"
                  strokeWidth={2}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[35%] relative min-h-[400px] md:min-h-full my-12 rounded-2xl overflow-hidden">
        <Image 
          src="/office2.jpeg"
          alt="Our Team"
          fill
          className="object-cover transition-all duration-1000"
        />
        
        {/* Subtle overlay gradient to blend with text on smaller screens if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-void/20 via-transparent to-transparent md:hidden" />
      </div>
    </section>
  )
}
