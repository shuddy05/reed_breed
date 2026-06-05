"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check } from "phosphor-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Starter",
    price: "₦250k – ₦500k",
    desc: "Fast, premium entry point to identify your biggest growth bottlenecks.",
    features: [
      "Full Business Audit",
      "Market Scan & Competitor Review",
      "Funnel & Automation Review",
      "Growth Diagnostic Report",
      "Implementation Roadmap"
    ],
    cta: "Request Growth Audit",
    popular: false,
  },
  {
    name: "Growth",
    price: "₦750k – ₦1.5m",
    desc: "Complete brand and marketing blueprint with a tailored demo of your future system.",
    features: [
      "Everything in Starter",
      "Brand Positioning & Messaging",
      "Complete Marketing Strategy",
      "Channel & Content Plan",
      "Tailored System Prototype",
      "Investment Proposal"
    ],
    cta: "Book Strategy Call",
    popular: true,
  },
  {
    name: "Transformation",
    price: "₦2m – ₦5m+",
    desc: "Full-scale implementation of strategy, automation, and lead management systems.",
    features: [
      "Everything in Growth",
      "Full CRM & Pipeline Setup",
      "Custom Automation Build",
      "Lead Capture System Deploy",
      "Dashboards & BI Setup",
      "Team Handover & Training"
    ],
    cta: "Start Transformation",
    popular: false,
  },
  {
    name: "Retainer",
    price: "₦400k – ₦1.5m",
    desc: "Ongoing optimization and strategic advisory to ensure predictable growth.",
    features: [
      "Monthly Growth Advisory",
      "Campaign Management",
      "Automation Monitoring",
      "Continuous Optimization",
      "Lead Follow-up Reviews",
      "Monthly Performance Reporting"
    ],
    cta: "Secure Retainer",
    priceSuffix: "/mo",
    popular: false,
  },
]

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 lg:py-48 bg-void">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="eyebrow block mb-4">THE PRICING LADDER</span>
          <h2 className="text-h2 font-black text-text-primary">Ready to scale? Pick your starting point.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-[32px] border transition-all duration-300 flex flex-col ${
                tier.popular
                  ? "bg-gradient-card border-accent scale-105 z-10 shadow-[0_0_64px_rgba(0,212,170,0.1)]"
                  : "bg-surface border-border hover:border-border-glow"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-[#ffffff] text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-h3 font-bold text-text-primary mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span className="text-2xl lg:text-3xl font-bold text-text-primary">{tier.price}</span>
                  {tier.priceSuffix && <span className="text-text-muted">{tier.priceSuffix}</span>}
                </div>
              </div>

              <p className="text-text-secondary text-body-sm mb-8 leading-relaxed flex-grow">
                {tier.desc}
              </p>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-body-md text-text-primary">
                    <div className={`p-1 mt-0.5 rounded-full ${tier.popular ? "bg-accent/20 text-accent" : "bg-white/5 text-text-muted"}`}>
                      <Check size={12} weight="bold" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "primary" : "ghost"}
                className="w-full"
                size="md"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
