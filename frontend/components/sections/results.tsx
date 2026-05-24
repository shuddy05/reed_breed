"use client"

import * as React from "react"
import { motion } from "framer-motion"

const stats = [
  { value: "3.4×", label: "Avg ROI Increase" },
  { value: "89%", label: "Lead Reply Rate" },
  { value: "< 4min", label: "Avg System Response" },
  { value: "12+", label: "Industries Served" },
]

export const Results = () => {
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-void">
      <div className="container mx-auto px-6 text-center">
        <span className="eyebrow block mb-4">THE NUMBERS</span>
        <h2 className="text-h2 font-black text-text-primary mb-20">&quot;Revenue is the only metric that matters.&quot;</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[32px] flex flex-col items-center justify-center border-white/5"
            >
              <span className="text-h2 font-mono font-bold text-gold mb-2 leading-none">
                {stat.value}
              </span>
              <span className="text-body-sm text-text-secondary font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
