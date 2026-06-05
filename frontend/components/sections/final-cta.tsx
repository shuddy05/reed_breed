"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CaretRight } from "phosphor-react"

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-void relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/10 blur-[160px] rounded-full translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card rounded-[40px] p-12 lg:p-24 text-center border-accent/20 bg-accent/[0.03]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 font-black text-text-primary mb-10 max-w-4xl mx-auto"
          >
            Ready to stop guessing and start growing?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="px-12 py-6 p-lg gap-3 mb-10">
              Request Your Diagnostic Call <CaretRight weight="bold" />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-text-primary p-lg"
          >
            Every engagement ends with a clear deliverable: strategy, demo, system, and next-step roadmap.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
