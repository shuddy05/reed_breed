"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Snowflake, HandWaving, Monitor, TrendDown, PlugsConnected, ArrowRight, SpeakerHigh, Database, UsersThree, ChartBar } from "phosphor-react"

const problems = [
  {
    title: "Inconsistent Leads",
    desc: "Revenue shouldn't be a roller coaster. We stabilize your lead flow.",
    icon: TrendDown,
  },
  {
    title: "Weak Follow-up",
    desc: "Leads go cold because of slow or non-existent response systems.",
    icon: Snowflake,
  },
  {
    title: "No Clear Brand Message",
    desc: "If you sound like everyone else, you're competing on price alone.",
    icon: SpeakerHigh,
  },
  {
    title: "Manual Operations",
    desc: "Wasting hours on repetitive tasks that should take seconds.",
    icon: HandWaving,
  },
  {
    title: "Poor Conversion",
    desc: "You're getting traffic, but it's not turning into paying customers.",
    icon: Monitor,
  },
  {
    title: "Scattered Customer Data",
    desc: "Information is everywhere, making it impossible to see the big picture.",
    icon: Database,
  },
  {
    title: "No Systems for Sales or Feedback",
    desc: "Growth is stalled because you're flying blind without data loops.",
    icon: PlugsConnected,
  },
  {
    title: "High Customer Churn",
    desc: "Losing customers as fast as you gain them because of poor engagement.",
    icon: UsersThree,
  },
  {
    title: "Invisible ROI",
    desc: "Spending money on marketing without knowing exactly which Naira is working.",
    icon: ChartBar,
  },
]

export const Problems = () => {
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-void">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="eyebrow block mb-4">DIAGNOSIS</span>
          <h2 className="text-h2 font-black text-text-primary mb-6">&quot;Where are you bleeding?&quot;</h2>
          <p className="text-p-lg text-text-primary max-w-2xl mx-auto">
            Most businesses lose revenue to these core problems. We diagnose and fix them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 bg-void hover:bg-surface/30 transition-colors group"
            >
              <div className="p-2 bg-accent/5 rounded-lg text-accent w-fit mb-4 group-hover:bg-accent group-hover:text-[#ffffff] transition-all duration-300">
                <problem.icon size={24} />
              </div>
              <h3 className="text-h3 font-bold text-text-primary mb-2">{problem.title}</h3>
              <p className="text-p-lg text-text-primary leading-relaxed">{problem.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 border border-accent/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 bg-accent/5"
        >
          <p className="text-p-lg font-bold text-text-primary">
            Ready to stop the bleeding?
          </p>
          <Button variant="primary" size="lg" className="gap-2 whitespace-nowrap">
            Request a Diagnostic Call <ArrowRight weight="bold" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
