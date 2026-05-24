"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ForkKnife, GraduationCap, FirstAid, Buildings, Leaf, ShoppingBag, Briefcase } from "phosphor-react"

const industries = [
  { name: "Restaurant", icon: ForkKnife },
  { name: "Education", icon: GraduationCap },
  { name: "Healthcare", icon: FirstAid },
  { name: "Real Estate", icon: Buildings },
  { name: "Beauty", icon: Leaf },
  { name: "Retail", icon: ShoppingBag },
  { name: "Consulting", icon: Briefcase },
]

export const TrustedBy = () => {
  return (
    <div className="bg-void py-24 md:py-32 lg:py-48 border-y border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-caption text-text-muted text-center mb-8 uppercase tracking-widest font-semibold">
          Trusted by businesses in:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-text-muted hover:text-[#ffffff] transition-colors cursor-default group"
            >
              <industry.icon size={24} className="group-hover:text-accent transition-colors" />
              <span className="text-body-sm font-medium tracking-wide">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
