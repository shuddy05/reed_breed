"use client"

import * as React from "react"
import { motion } from "framer-motion"

const steps = [
  {
    title: "Discover",
    desc: "We dive deep into your business, market, and data to identify hidden opportunities.",
    icon: "01",
  },
  {
    title: "Diagnose",
    desc: "We pinpoint the exact bottlenecks killing your growth and design the solution.",
    icon: "02",
  },
  {
    title: "Design",
    desc: "We build tailored strategy blueprints and interactive system prototypes.",
    icon: "03",
  },
  {
    title: "Deploy",
    desc: "We launch your growth systems and optimize for maximum revenue impact.",
    icon: "04",
  },
]

export const Process = () => {
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-void relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/10 blur-[140px] rounded-full opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="eyebrow block mb-4">HOW IT WORKS</span>
          <h2 className="text-h2 font-black text-text-primary">Simple. Premium. Results-driven.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-h1 font-black text-accent/10 group-hover:text-accent/20 transition-colors mb-4">
                {step.icon}
              </div>
              <h3 className="text-h3 font-bold text-text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-p-lg text-text-primary leading-relaxed">
                {step.desc}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-6 w-12 h-px bg-border group-hover:bg-accent transition-colors" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
