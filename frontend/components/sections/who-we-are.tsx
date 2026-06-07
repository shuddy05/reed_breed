"use client"

import * as React from "react"
import { motion } from "framer-motion"

import Image from "next/image"

import { StrokedText } from "@/components/ui/stroked-text"

export const WhoWeAre = () => {
  return (
    <section className="relative py-24 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center relative">
          
          {/* Left Image with Overlap */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative md:absolute md:left-[2%] lg:left-[5%] w-[80%] md:w-[40%] aspect-[4/3] z-0 mb-12 md:mb-0"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/office.jpeg"
                alt="Our Vision"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Subtle glow behind image */}
            <div className="absolute -inset-4 bg-accent/10 blur-3xl -z-10 rounded-full" />
          </motion.div>

          {/* Typography - Constrained to approx 1/3 width, Left Justified */}
          <div className="w-full md:w-[50%] lg:w-[40%] flex flex-col items-start text-left relative z-10 md:ml-[38%] lg:ml-[42%]">
            <div className="relative mb-8 select-none w-full">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[15vw] md:text-[10vw] leading-[0.8] font-black text-white tracking-tighter font-sans"
              >
                Who
              </motion.div>
              <div className="flex items-center mt-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-[15vw] md:text-[10vw] leading-[0.8] font-black text-white tracking-tighter font-sans"
                >
                  we
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex items-center"
                >
                  <StrokedText 
                    text="are" 
                    viewBox="0 0 200 120"
                    height="clamp(4.5rem, 10vw, 8rem)"
                  />
                </motion.div>
              </div>
            </div>

            {/* Left-Aligned Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-text-secondary text-base md:text-xl font-medium leading-tight max-w-md"
            >
              We are a forward-thinking team of designers and developers driven by passion — and fueled by curiosity.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
