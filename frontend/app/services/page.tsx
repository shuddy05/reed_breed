"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { StrokedText } from "@/components/ui/stroked-text"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { 
  Robot, 
  Code, 
  Megaphone, 
  Palette,
  ArrowRight
} from "phosphor-react"
import Link from "next/link"

const services = [
  {
    title: "AI & Automation",
    icon: <Robot size={40} weight="duotone" />,
    description: "We architect autonomous systems that handle repetitive tasks, from intelligent chatbots to workflow optimization.",
    features: ["AI Chatbot Integration", "AI-Generated Content", "Workflow Optimization", "Internal AI Tools"],
    color: "text-accent"
  },
  {
    title: "Software Engineering",
    icon: <Code size={40} weight="duotone" />,
    description: "High-performance custom software and web platforms built for scalability and conversion.",
    features: ["Custom Software for SMEs", "E-commerce Platforms", "Mobile Apps", "High-Converting Landing Pages"],
    color: "text-blue-400"
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone size={40} weight="duotone" />,
    description: "Growth-driven marketing strategies that fill your funnel and scale your revenue.",
    features: ["Sales Funnels", "Lead Generation", "Business Development", "Social Media Management"],
    color: "text-purple-400"
  },
  {
    title: "Content & Creative",
    icon: <Palette size={40} weight="duotone" />,
    description: "Visual storytelling and brand identity that commands attention and builds trust.",
    features: ["Cinematography & Editing", "Brand Identity", "Graphics Design", "Content Strategy"],
    color: "text-pink-400"
  }
]

export default function ServicesPage() {
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
              Our
            </span>
            <div className="flex items-center -mt-[1vw] md:-mt-[2vw]">
              <StrokedText
                text="Services"
                viewBox="0 0 500 120"
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
            Intelligence meets Creative Execution. We architect comprehensive growth systems that automate success.
          </motion.p>

          <ScrollIndicator />
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-6 relative z-10 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-12 rounded-[40px] border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
              >
                <div className={`${service.color} mb-8 transition-transform group-hover:scale-110 duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-4xl font-black text-white mb-6 tracking-tight">{service.title}</h3>
                <p className="text-xl text-text-secondary mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-10">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-white font-bold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-accent font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
                >
                  Get Started <ArrowRight size={18} weight="bold" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-32 relative z-10 bg-white/[0.02] border-y border-white/5">
           <div className="container mx-auto px-6 text-center">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter">
                Ready to <span className="text-accent">Automate</span> Your Growth?
              </h2>
              <Link href="/contact">
                <button className="px-12 py-6 bg-accent text-white font-black text-xl rounded-2xl hover:bg-accent/90 transition-all hover:scale-105 shadow-[0_10px_40px_rgba(20,110,245,0.4)]">
                  BOOK A STRATEGY CALL
                </button>
              </Link>
           </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
