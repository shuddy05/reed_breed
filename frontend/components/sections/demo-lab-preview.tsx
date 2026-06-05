"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WhatsappLogo, Funnel, FlowArrow, ChatCircleDots, Cpu, ChartLineUp, ClockCounterClockwise } from "phosphor-react"

const tabs = [
  { id: "whatsapp", label: "WhatsApp Automation", icon: WhatsappLogo },
  { id: "lead-capture", label: "Lead Capture Flow", icon: Funnel },
  { id: "crm", label: "CRM Pipeline", icon: FlowArrow },
  { id: "ai", label: "AI Receptionist", icon: ChatCircleDots },
]

export const DemoLabPreview = () => {
  const [activeTab, setActiveTab] = React.useState("whatsapp")

  return (
    <section className="py-24 md:py-32 lg:py-48 bg-void">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="eyebrow block mb-4">DEMO LAB PREVIEW</span>
          <h2 className="text-h2 font-black text-text-primary mb-6">&quot;Watch the machine work.&quot;</h2>
          <p className="text-body-md text-text-secondary max-w-2xl mx-auto">
            This isn&apos;t a slideshow. These are real workflows.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-[0.5rem] border transition-all duration-300 font-bold text-p-lg min-h-[56px] ${
                activeTab === tab.id
                  ? "bg-accent border-accent text-[#ffffff] hover:text-[#ffffff] hover:bg-accent-dim hover:border-accent-dim"
                  : "bg-surface border-border text-text-secondary hover:border-border-glow hover:!text-[#ffffff]"
              }`}
            >
              <tab.icon size={20} weight={activeTab === tab.id ? "fill" : "regular"} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demo Display */}
        <div className="glass-card rounded-[32px] p-8 lg:p-12 min-h-[500px] flex items-center justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "whatsapp" && (
              <motion.div
                key="whatsapp"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Phone Mockup */}
                <div className="relative mx-auto lg:mx-0 w-full max-w-[320px]">
                  <div className="aspect-[9/19] rounded-[3rem] border-[6px] border-surface bg-[#0b141a] overflow-hidden shadow-2xl relative flex flex-col">
                    {/* Status Bar */}
                    <div className="bg-[#202c33] px-6 py-4 flex items-center gap-3 border-b border-white/5">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-accent to-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-p-sm font-bold text-[#e9edef] leading-tight">Bloom Dental Clinic</p>
                        <motion.div 
                          className="text-[10px] text-accent font-medium h-3 overflow-hidden"
                        >
                          <motion.p
                            initial={{ y: 0 }}
                            animate={{ y: [0, -12, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1.2, times: [0, 0.1, 0.9, 1] }}
                          >
                            Online
                          </motion.p>
                          <motion.p
                            initial={{ y: 0 }}
                            animate={{ y: [0, -12, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1.2, times: [0, 0.1, 0.9, 1] }}
                            className="text-accent"
                          >
                            typing...
                          </motion.p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Chat Area with Wallpaper Pattern */}
                    <div className="flex-1 p-4 space-y-4 relative overflow-y-auto">
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://static.whatsapp.net/rsrc.php/v3/yL/r/S8_8Wp38G9V.png')] bg-repeat" />
                      
                      {/* Incoming Message (User) */}
                      <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="relative bg-[#202c33] p-3 rounded-2xl rounded-tl-none text-p-sm leading-snug text-[#e9edef] self-start max-w-[85%] shadow-sm"
                      >
                        Hi, I want to book an appointment
                        <span className="block text-[9px] text-[#8696a0] text-right mt-1">10:42 AM</span>
                      </motion.div>

                      {/* Outgoing Message (Bot) */}
                      <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 2.2 }}
                        className="relative bg-[#005c4b] p-3 rounded-2xl rounded-tr-none text-p-sm leading-snug font-medium text-[#e9edef] self-end ml-auto max-w-[85%] shadow-sm"
                      >
                        Hi John! Welcome to Bloom Dental. What service are you interested in?
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <span className="text-[9px] text-[#8696a0]">10:42 AM</span>
                          <motion.div
                            initial={{ color: "#8696a0" }}
                            whileInView={{ color: "#53bdeb" }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.5 }}
                          >
                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.25 10L0 5.75L1.06 4.69L4.25 7.88L11.19 1.12L12.25 2.18L4.25 10Z" fill="currentColor"/>
                              <path d="M15.25 2.18L7.25 10L5.94 8.69L7 7.63L14.19 1.12L15.25 2.18Z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Quick Replies */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 3.2 }}
                        className="flex flex-col gap-2 mt-4"
                      >
                        <button className="bg-[#202c33] border border-white/5 text-accent text-[11px] p-2.5 rounded-full text-center font-bold hover:bg-[#2a3942] transition-colors">
                          Teeth Whitening
                        </button>
                        <button className="bg-[#202c33] border border-white/5 text-accent text-[11px] p-2.5 rounded-full text-center font-bold hover:bg-[#2a3942] transition-colors">
                          Regular Cleaning
                        </button>
                      </motion.div>
                    </div>

                    {/* Bottom Input Bar */}
                    <div className="bg-[#202c33] p-3 flex items-center gap-3 border-t border-white/5">
                      <div className="flex-1 bg-[#2a3942] h-9 rounded-full px-4 flex items-center">
                        <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
                      </div>
                      <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Column */}
                <div className="space-y-6">
                  <h3 className="text-h3 font-bold">Restaurant Reservation Bot</h3>
                  <p className="text-text-secondary text-body-md">
                    Automated WhatsApp sequence handles the entire booking process, reducing staff workload by 80%.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Instant response (under 2s)",
                      "Direct CRM integration",
                      "Automated follow-up reminders",
                      "No-show reduction by 40%",
                    ].map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="flex items-center gap-3 text-text-primary font-medium"
                      >
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
            
            {activeTab === "lead-capture" && (
              <motion.div
                key="lead-capture"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-5xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center relative">
                  {/* Pipeline Path (Background) */}
                  <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-accent/10 -translate-y-1/2 z-0" />

                  {/* Stage 1: Ad Source */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px rgba(20, 110, 245, 0)", "0 0 20px rgba(20, 110, 245, 0.4)", "0 0 0px rgba(20, 110, 245, 0)"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-20 w-20 rounded-2xl bg-surface border border-white/5 flex items-center justify-center text-accent"
                    >
                      <WhatsappLogo size={40} weight="fill" />
                    </motion.div>
                    <p className="mt-4 text-p-sm font-bold text-[#ffffff]">Ad Click</p>
                    <p className="text-[10px] text-text-secondary uppercase tracking-widest">Source</p>
                  </div>

                  {/* Stage 2: Landing Page */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      initial={{ borderColor: "rgba(54, 54, 54, 1)" }}
                      animate={{ borderColor: ["rgba(54, 54, 54, 1)", "rgba(20, 110, 245, 1)", "rgba(54, 54, 54, 1)"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="h-32 w-full max-w-[200px] rounded-xl bg-depth border-2 flex flex-col p-3 gap-2 overflow-hidden"
                    >
                      <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
                      <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
                      <div className="mt-auto h-6 w-full bg-accent/20 rounded-lg flex items-center justify-center">
                        <motion.div 
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          className="h-1 w-12 bg-accent rounded-full" 
                        />
                      </div>
                    </motion.div>
                    <p className="mt-4 text-p-sm font-bold text-[#ffffff]">Conversion</p>
                    <p className="text-[10px] text-text-secondary uppercase tracking-widest">System 1</p>
                  </div>

                  {/* Stage 3: CISE Scanner */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center relative overflow-hidden">
                      <Cpu size={32} className="text-accent" />
                      <motion.div
                        animate={{ top: ["-10%", "110%", "-10%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 w-full h-0.5 bg-accent shadow-[0_0_10px_#146ef5] z-20"
                      />
                    </div>
                    <p className="mt-4 text-p-sm font-bold text-[#ffffff]">CISE Scoring</p>
                    <p className="text-[10px] text-text-secondary uppercase tracking-widest">High Intent</p>
                  </div>

                  {/* Stage 4: CRM Destination */}
                  <div className="relative z-10 flex flex-col items-center lg:items-end">
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-full max-w-[240px] bg-[#222222] border border-accent/30 rounded-xl p-4 shadow-2xl"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold text-[#ffffff] uppercase tracking-tighter">CRM Dashboard</span>
                        <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.5, duration: 0.5 }}
                          className="bg-accent/10 border border-accent/20 p-2 rounded-lg flex items-center justify-between"
                        >
                          <div className="flex flex-col gap-1">
                            <div className="h-1.5 w-16 bg-white/20 rounded-full" />
                            <div className="h-1 w-10 bg-white/10 rounded-full" />
                          </div>
                          <span className="text-[9px] font-bold text-accent">NEW</span>
                        </motion.div>
                        <div className="bg-white/5 p-2 rounded-lg h-8" />
                      </div>
                    </motion.div>
                    <p className="mt-4 text-p-sm font-bold text-[#ffffff]">Booked Call</p>
                    <p className="text-[10px] text-text-secondary uppercase tracking-widest text-right">Destination</p>
                  </div>

                  {/* Moving Packet (The Lead) */}
                  <motion.div
                    animate={{ 
                      left: ["12.5%", "37.5%", "62.5%", "87.5%"],
                      opacity: [0, 1, 1, 1, 0],
                      scale: [0.5, 1.2, 1, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      times: [0, 0.1, 0.5, 0.9, 1],
                      ease: "easeInOut"
                    }}
                    className="hidden lg:block absolute top-1/2 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_#146ef5] z-30 -translate-y-1/2 -translate-x-1/2"
                  />
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { label: "Capture Rate", value: "94%", desc: "Of visitors engage" },
                    { label: "Analysis Time", value: "< 2s", desc: "For full lead profiling" },
                    { label: "Direct Sync", value: "Real-time", desc: "To your sales team" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="text-center"
                    >
                      <p className="text-h3 font-black text-[#ffffff] mb-1">{stat.value}</p>
                      <p className="text-p-sm font-bold text-accent uppercase tracking-widest mb-2">{stat.label}</p>
                      <p className="text-[11px] text-text-secondary">{stat.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "crm" && (
              <motion.div
                key="crm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 items-start"
              >
                {/* Main Pipeline Board */}
                <div className="flex-1 w-full bg-[#1a1a1a] rounded-2xl border border-white/5 p-6 shadow-2xl overflow-hidden">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                    <div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Active Pipeline</span>
                      <h4 className="text-p-lg font-bold text-[#ffffff]">Sales Engine Dashboard</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-text-secondary uppercase">Projected Revenue</span>
                      <div className="flex items-center gap-2">
                        <ChartLineUp size={16} className="text-success" />
                        <span className="text-h3 font-black text-[#ffffff]">₦12.4M</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 h-[320px]">
                    {/* Column 1: Incoming */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[10px] font-bold text-text-secondary uppercase">
                        <span>Incoming</span>
                        <span className="bg-white/5 px-1.5 py-0.5 rounded">2</span>
                      </div>
                      <div className="space-y-3">
                        <motion.div 
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="bg-surface/50 p-3 rounded-lg border border-white/5 opacity-50"
                        >
                          <div className="h-2 w-16 bg-white/10 rounded mb-2" />
                          <div className="h-1.5 w-12 bg-white/5 rounded" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Column 2: Processing (CISE) */}
                    <div className="space-y-4 relative bg-accent/[0.02] rounded-xl p-2 border border-accent/5">
                      <div className="flex items-center justify-between text-[10px] font-bold text-accent uppercase">
                        <span>Analyzing</span>
                        <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      </div>
                      
                      {/* Migrating Card */}
                      <motion.div
                        animate={{ 
                          x: [0, 0, 0, 0], // Placeholders for logic
                          y: [0, 20, 0],
                          borderColor: ["rgba(255,255,255,0.05)", "rgba(20,110,245,0.4)", "rgba(255,255,255,0.05)"]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="bg-surface p-4 rounded-xl border-2 border-accent/20 shadow-xl relative z-20"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-[10px] font-bold">JD</div>
                          <span className="text-[8px] font-bold bg-accent/10 text-accent px-1.5 py-0.5 rounded uppercase">High Intent</span>
                        </div>
                        <div className="h-2 w-24 bg-[#ffffff] rounded mb-2" />
                        <div className="h-1.5 w-16 bg-white/20 rounded" />
                        
                        {/* CISE Scan Effect */}
                        <motion.div 
                          animate={{ left: ["-100%", "200%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="absolute top-0 w-8 h-full bg-gradient-to-r from-transparent via-accent/20 to-transparent -skew-x-12"
                        />
                      </motion.div>
                    </div>

                    {/* Column 3: Conversion */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[10px] font-bold text-success uppercase">
                        <span>Conversion</span>
                        <span className="bg-success/10 text-success px-1.5 py-0.5 rounded">14</span>
                      </div>
                      <div className="space-y-3">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 3, duration: 0.5, repeat: Infinity, repeatDelay: 3.5 }}
                          className="bg-success/5 p-3 rounded-lg border border-success/20"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-4 w-4 rounded-full bg-success/20 flex items-center justify-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-success" />
                            </div>
                            <div className="h-2 w-20 bg-success/20 rounded" />
                          </div>
                          <span className="text-[8px] font-bold text-success uppercase tracking-widest">Meeting Booked</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activity Feed Side-Panel */}
                <div className="w-full lg:w-72 space-y-6">
                  <div className="bg-[#1a1a1a] rounded-2xl border border-white/5 p-5 shadow-xl">
                    <div className="flex items-center gap-2 mb-6">
                      <ClockCounterClockwise size={16} className="text-accent" />
                      <span className="text-[10px] font-bold text-[#ffffff] uppercase tracking-widest">System Activity</span>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        { time: "Now", action: "CISE Scored John D.", status: "Verified" },
                        { time: "2m ago", action: "WhatsApp Bot replied", status: "Active" },
                        { time: "5m ago", action: "New Lead from Meta", status: "Incoming" },
                        { time: "12m ago", action: "Meeting synchronized", status: "Success" },
                      ].map((log, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.2 }}
                          className="relative pl-4 border-l border-white/5"
                        >
                          <p className="text-[9px] text-text-secondary mb-1">{log.time}</p>
                          <p className="text-p-sm font-bold text-[#ffffff] leading-tight mb-1">{log.action}</p>
                          <span className="text-[8px] font-bold text-accent uppercase tracking-tighter">{log.status}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-accent/5 rounded-2xl border border-accent/10 p-5">
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Autonomous Action</p>
                    <p className="text-p-sm text-[#ffffff] leading-relaxed">
                      System identified 3 high-intent leads and initiated automated follow-up sequences without human input.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "ai" && (
              <motion.div
                key="ai"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Left: Intelligence Core */}
                <div className="relative h-[400px] flex items-center justify-center">
                  {/* Floating Data Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        x: [0, (i % 2 === 0 ? 100 : -100)], 
                        y: [0, (i < 3 ? 100 : -100)],
                        opacity: [0, 0.5, 0],
                        scale: [0, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 3 + i, 
                        repeat: Infinity, 
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute w-12 h-px bg-accent/30 rounded-full"
                    />
                  ))}

                  {/* The Core */}
                  <div className="relative z-10 h-48 w-48 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-accent/10 blur-2xl"
                    />
                    <ChatCircleDots size={64} className="text-accent relative z-20" weight="duotone" />
                    
                    {/* Orbiting Labels */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border border-dashed border-white/5 rounded-full"
                    />
                  </div>

                  {/* Knowledge Ingestion Labels */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[
                      { text: "Business PDF", pos: "top-10 left-10" },
                      { text: "Sales History", pos: "bottom-10 right-10" },
                      { text: "Live FAQ", pos: "top-1/2 -left-12" },
                      { text: "CRM Context", pos: "bottom-1/4 -right-8" },
                    ].map((label, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i }}
                        className={`absolute ${label.pos} bg-surface/50 border border-white/5 px-3 py-1.5 rounded-lg text-[9px] font-bold text-text-secondary uppercase tracking-widest`}
                      >
                        {label.text}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right: Response Interface */}
                <div className="space-y-6">
                  <div className="bg-[#1a1a1a] rounded-2xl border border-white/5 p-6 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Autonomous Response</span>
                      <span className="text-[9px] font-bold text-success uppercase">99.4% Accuracy</span>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold text-text-secondary uppercase">Customer Query</p>
                        <p className="text-p-sm text-[#ffffff] font-medium leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                          &quot;I&apos;m interested but I&apos;m worried your system won&apos;t integrate with our existing Lagos-based logistics provider. Can you verify this?&quot;
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <motion.div 
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="h-1.5 w-1.5 rounded-full bg-accent" 
                          />
                          <span className="text-[9px] font-bold text-accent uppercase tracking-tighter">Analyzing Knowledge Base...</span>
                        </div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2, duration: 0.5 }}
                          className="space-y-2"
                        >
                          <p className="text-[10px] font-bold text-text-secondary uppercase">AI Reasoning</p>
                          <div className="text-p-sm text-[#ffffff] leading-relaxed border-l-2 border-accent pl-4 py-1">
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2.5, duration: 1 }}
                            >
                              Yes, I can confirm. We have successfully integrated with GIG Logistics and Red Star Express in Lagos. The API latency is sub-200ms. I have also checked your specific volume tier and it matches their enterprise protocol.
                            </motion.span>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex gap-3">
                      <Button variant="primary" size="sm" className="flex-1 text-[10px]">Generate Response</Button>
                      <Button variant="ghost" size="sm" className="flex-1 text-[10px]">View Sources</Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-accent/5 border border-accent/10 p-4 rounded-xl">
                      <p className="text-[10px] font-bold text-accent uppercase mb-1">Response Time</p>
                      <p className="text-h3 font-black text-[#ffffff]">1.4s</p>
                    </div>
                    <div className="bg-success/5 border border-success/10 p-4 rounded-xl">
                      <p className="text-[10px] font-bold text-success uppercase mb-1">Human Handover</p>
                      <p className="text-h3 font-black text-[#ffffff]">0%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
