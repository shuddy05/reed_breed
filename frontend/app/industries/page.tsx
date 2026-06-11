"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { StrokedText } from "@/components/ui/stroked-text"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { 
  Buildings, 
  ShoppingCart, 
  GraduationCap, 
  Truck,
  Heartbeat,
  UsersThree,
  ArrowRight
} from "phosphor-react"
import Link from "next/link"

const industries = [
  {
    title: "Education",
    icon: <GraduationCap size={40} weight="duotone" />,
    description: "We help schools automate fee collection, biometric tracking, and student management systems.",
    caseStudy: "Loral International Schools achieved 92% fee collection efficiency.",
    color: "text-blue-400"
  },
  {
    title: "Retail & E-commerce",
    icon: <ShoppingCart size={40} weight="duotone" />,
    description: "Intelligent inventory systems and high-converting storefronts that drive sales 24/7.",
    caseStudy: "Aura Boutique improved Return on Ad Spend (ROAS) by 310%.",
    color: "text-accent"
  },
  {
    title: "Logistics & Freight",
    icon: <Truck size={40} weight="duotone" />,
    description: "Real-time pipeline visualizers and event tracking for complex supply chains.",
    caseStudy: "Nexus Freight Solutions handles thousands of concurrent tracking events.",
    color: "text-orange-400"
  },
  {
    title: "Healthcare & Wellness",
    icon: <Heartbeat size={40} weight="duotone" />,
    description: "Automated booking flows and CRM systems for specialized clinics and bridal studios.",
    caseStudy: "Queening Bridals increased bookings by 2.5x with intelligent flows.",
    color: "text-emerald-400"
  },
  {
    title: "Real Estate",
    icon: <Buildings size={40} weight="duotone" />,
    description: "Lead scoring logic and automated follow-ups for high-ticket property sales.",
    color: "text-purple-400"
  },
  {
    title: "SMEs & Startups",
    icon: <UsersThree size={40} weight="duotone" />,
    description: "Bespoke growth engines designed to help small teams compete with industry giants.",
    color: "text-pink-400"
  }
]

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-void overflow-hidden">
        {/* Fixed Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-accent/20 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] right-[-5%] w-[60%] h-[60%] bg-accent-dim/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[20%] w-[80%] h-[60%] bg-accent/20 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] bg-repeat" />
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-6 relative z-10 min-h-screen py-32 md:py-48 flex flex-col items-center text-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center mb-12"
          >
            <span
              className="text-[12vw] md:text-[8vw] font-black text-white leading-none tracking-tighter"
              style={{ WebkitTextStroke: '0.5px #ffffff' }}
            >
              Industries
            </span>
            <div className="flex items-center -mt-[1vw] md:-mt-[2vw]">
              <StrokedText
                text="Served"
                viewBox="0 0 400 120"
                height="clamp(5rem, 10vw, 8rem)"
                strokeWidth={2}
                letterSpacing="-0.05em"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-xl md:text-2xl lg:text-3xl font-medium max-w-4xl leading-tight tracking-tight mb-20"
          >
            We don&apos;t just build software. We build industry-specific growth engines that solve real business problems.
          </motion.p>

          <ScrollIndicator />
        </div>

        {/* Industries Grid */}
        <div className="container mx-auto px-6 relative z-10 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-10 rounded-[30px] border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group border"
              >
                <div className={`${industry.color} mb-8 transition-transform group-hover:rotate-12 duration-500`}>
                  {industry.icon}
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{industry.title}</h3>
                <p className="text-text-secondary mb-8 leading-relaxed font-medium">
                  {industry.description}
                </p>
                
                {industry.caseStudy && (
                   <div className="mt-auto pt-6 border-t border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">Proven Result</p>
                      <p className="text-sm text-white font-bold italic">&quot;{industry.caseStudy}&quot;</p>
                   </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic CTA */}
        <section className="py-32 relative z-10 overflow-hidden">
           <div className="absolute inset-0 bg-accent/10 blur-[120px] rounded-full translate-y-1/2" />
           <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter">
                Your Industry, <br /> Our <span className="text-accent">Intelligence.</span>
              </h2>
              <Link href="/contact">
                <button className="group relative px-12 py-6 bg-white text-void font-black text-xl rounded-2xl transition-all hover:bg-accent hover:text-white">
                  START YOUR DIAGNOSTIC
                  <ArrowRight size={24} weight="bold" className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
           </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
