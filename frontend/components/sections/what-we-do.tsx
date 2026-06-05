"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Strategy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export const WhatWeDo = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-48 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start mb-24 md:ml-[5%] lg:ml-[10%]">
          <div className="relative select-none">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[12vw] md:text-[8vw] leading-[0.8] font-black text-white tracking-tighter font-sans"
            >
              We do
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter font-sans mt-2"
              style={{ 
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent"
              }}
            >
              Strategy,
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter font-sans mt-2"
              style={{ 
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent"
              }}
            >
              Development
            </motion.div>
            <div className="flex items-center gap-4 mt-2">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-[12vw] md:text-[8vw] leading-[0.8] font-black text-white tracking-tighter font-sans"
              >
                and
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter font-sans"
                style={{ 
                  WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                  color: "transparent"
                }}
              >
                Design
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-accent p-8 md:p-12 flex flex-col items-start rounded-sm shadow-xl"
            >
              <h3 className="text-[12vw] md:text-[7vw] font-black text-white mb-8 leading-none tracking-tighter">
                {service.title}
              </h3>
              <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-sm">
                {service.desc}
              </p>
              <Button 
                size="md" 
                className="bg-[#146ef5] text-white border-2 border-white hover:bg-[#146ef5]/90 rounded-full px-8 py-3 h-fit text-base font-bold transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
