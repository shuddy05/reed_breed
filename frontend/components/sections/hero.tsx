"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CaretRight, Play, MagnifyingGlass } from "phosphor-react"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-32 lg:pb-48 overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-accent/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-5%] w-[60%] h-[60%] bg-accent-dim/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[20%] w-[80%] h-[60%] bg-accent/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] bg-repeat" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-6"
          >
            GROWTH INTELLIGENCE FOR AFRICAN SMES
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-satoshi font-black text-h0 text-[#ffffff] leading-[1.04] tracking-tight mb-8"
          >
            We help SMEs grow with <span className="text-accent">smarter marketing</span>, tailored demos, and AI-powered systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-lg text-text-primary mb-12 max-w-2xl leading-relaxed"
          >
            From brand strategy to automation and sales management, we build the systems that help businesses attract leads, convert faster, and operate smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-nowrap gap-4 overflow-x-auto pb-2 -mb-2 no-scrollbar">
              <Button size="md" className="gap-2 whitespace-nowrap">
                Book a Strategy Call <CaretRight weight="bold" />
              </Button>
              <Button variant="secondary" size="md" className="gap-2 whitespace-nowrap">
                <MagnifyingGlass weight="bold" /> Request a Growth Audit
              </Button>
            </div>
            <div>
              <Button variant="ghost" size="md" className="gap-2 whitespace-nowrap">
                <Play weight="fill" /> See a Sample Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
