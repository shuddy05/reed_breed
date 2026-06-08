"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { StrokedText } from "@/components/ui/stroked-text"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar } from "phosphor-react"
import { AppointmentModal } from "@/components/ui/appointment-modal"

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navbar />
      <main className="relative bg-void overflow-hidden">
        {/* Fixed Background Elements (Homepage Style) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-accent/20 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] right-[-5%] w-[60%] h-[60%] bg-accent-dim/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[20%] w-[80%] h-[60%] bg-accent/20 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] bg-repeat" />
        </div>

        {/* Hero Section - Matching contact1.png */}
        <div className="container mx-auto px-6 relative z-10 min-h-screen py-32 md:py-48 flex flex-col items-center text-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center mb-12"
          >
            {/* The Dot */}
            <div className="w-3 h-3 bg-white rounded-full mb-12" />

            <div className="flex justify-center items-center gap-4 md:gap-6 mb-8">
              <span
                className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.8] tracking-tighter"
                style={{ WebkitTextStroke: '0.5px #ffffff' }}
              >
                Contact
              </span>
              <div className="flex items-center -mt-[1.5vw]">
                <StrokedText
                  text="Us"
                  viewBox="0 0 200 120"
                  height="clamp(5rem, 10vw, 8rem)"
                  strokeWidth={2}
                  letterSpacing="-0.05em"
                />
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-xl md:text-2xl lg:text-3xl font-medium max-w-2xl leading-tight tracking-tight mb-20"
          >
            We&apos;re looking for each other. Fill in your company details or give use a phone or video call.
          </motion.p>

          <ScrollIndicator />
        </div>

        {/* Contact Form Section - Matching contact2.png */}
        <section className="relative z-10 py-24 md:py-48">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Form Side */}
              <div className="flex flex-col items-start">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tighter">Write us</h2>
                
                <form className="w-full space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <input 
                      type="text" 
                      placeholder="Name*" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted font-medium"
                    />
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted font-medium"
                    />
                    <input 
                      type="email" 
                      placeholder="Email*" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted font-medium"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted font-medium"
                    />
                    <input 
                      type="url" 
                      placeholder="Website URL*" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted font-medium"
                    />
                    <textarea 
                      placeholder="Project Details*" 
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted font-medium resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                    <Button 
                      className="w-full sm:w-auto px-12 py-6 h-auto rounded-full font-bold text-lg transition-all duration-300"
                    >
                      Send Proposal
                    </Button>
                    <span className="text-text-muted font-bold text-sm uppercase tracking-widest">OR</span>
                    <button 
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full sm:w-auto px-8 py-5 h-auto rounded-full font-bold text-base transition-all duration-300 border-2 border-white/10 text-white hover:border-accent hover:bg-accent/5 flex items-center justify-center gap-3"
                    >
                      <Calendar size={20} />
                      Book a Call
                    </button>
                  </div>
                </form>
              </div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl lg:mt-24"
              >
                <Image 
                  src="/office2.jpeg" 
                  alt="Let's Talk" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
