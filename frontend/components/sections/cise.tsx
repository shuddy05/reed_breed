"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Cpu, Lightning, ShieldCheck, ChartBar } from "phosphor-react"

const capabilities = [
  {
    title: "Deep Analysis",
    desc: "Studies your business and market conditions with surgical precision.",
    icon: ChartBar,
  },
  {
    title: "Tailored Generation",
    desc: "Produces strategy blueprints and demos faster and more accurately.",
    icon: Lightning,
  },
  {
    title: "Predictive Insights",
    desc: "Identifies growth opportunities you might have missed.",
    icon: Cpu,
  },
  {
    title: "Delivery Assurance",
    desc: "Ensures every deliverable meets our premium strategy standards.",
    icon: ShieldCheck,
  },
]

export const Cise = () => {
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-void bg-gradient-glow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/20 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="eyebrow block mb-4">THE INTELLIGENCE ENGINE</span>
          <h2 className="text-h2 font-black text-text-primary mb-8">
            Our delivery is powered by <span className="text-accent">CISE</span>
          </h2>
          <p className="text-p-lg text-text-primary leading-relaxed">
            CISE — our Client Intelligence & Strategy Engine — helps us study each business, 
            analyze market conditions, and generate tailored strategy, proposal, and demo outputs 
            faster and more accurately than any traditional agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border-accent/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-accent mb-6">
                <cap.icon size={40} weight="duotone" />
              </div>
              <h3 className="text-h3 font-bold text-text-primary mb-4">{cap.title}</h3>
              <p className="text-body-sm text-text-primary leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
