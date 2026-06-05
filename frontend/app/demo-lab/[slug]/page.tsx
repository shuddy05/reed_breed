"use client"

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  Users,
  Target,
  Funnel,
  CheckCircle,
  Clock,
  Cube,
  WarningCircle,
  Database,
  ChartLineUp,
  GitBranch,
  TrendUp,
  Flask
} from 'phosphor-react';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// --- Mock Data & UI Components per Engine ---

const CRMUI = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "Active Triggers", value: "24", icon: Flask, color: "text-pink-500" },
        { title: "Leads Processed (24h)", value: "1,492", icon: Users, color: "text-blue-500" },
        { title: "Conversion Lift", value: "+18.4%", icon: TrendUp, color: "text-green-500" },
      ].map((stat, i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
           <div>
             <p className="text-xs text-text-muted uppercase tracking-widest font-bold mb-2">{stat.title}</p>
             <p className="text-3xl font-black text-white">{stat.value}</p>
           </div>
           <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center ${stat.color}`}>
              <stat.icon size={24} weight="duotone" />
           </div>
        </div>
      ))}
    </div>
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
       <h3 className="text-lg font-bold text-white mb-6">Live Automation Flow</h3>
       <div className="space-y-4">
         {[
           { trigger: "New Lead Capture", action: "Score & Segment", status: "Active" },
           { trigger: "Cart Abandonment", action: "Send SMS sequence", status: "Active" },
           { trigger: "High Intent Activity", action: "Alert Sales Team", status: "Active" },
         ].map((flow, i) => (
           <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-void border border-white/5">
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 rounded bg-white/10 text-xs font-bold text-white uppercase tracking-widest">{flow.trigger}</div>
                <ArrowLeft size={16} className="text-text-muted rotate-180" />
                <div className="text-sm font-medium text-text-secondary">{flow.action}</div>
              </div>
              <div className="flex items-center gap-2 text-success">
                <CheckCircle size={16} weight="fill" />
                <span className="text-xs font-bold uppercase tracking-widest">{flow.status}</span>
              </div>
           </div>
         ))}
       </div>
    </div>
  </div>
);

const InventoryUI = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { title: "SKUs Monitored", value: "8,405" },
        { title: "Low Stock Alerts", value: "12" },
        { title: "Reorder Value", value: "$45.2K" },
        { title: "Auto-Fulfillment", value: "Active" },
      ].map((stat, i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
           <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold mb-2">{stat.title}</p>
           <p className="text-2xl font-black text-white">{stat.value}</p>
        </div>
      ))}
    </div>
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
       <h3 className="text-lg font-bold text-white mb-6">Predictive Restock Engine</h3>
       <div className="overflow-x-auto">
         <table className="w-full text-left">
           <thead>
             <tr className="text-[10px] uppercase tracking-widest text-text-muted border-b border-white/10">
               <th className="pb-4 font-bold">Product ID</th>
               <th className="pb-4 font-bold">Current Stock</th>
               <th className="pb-4 font-bold">7-Day Velocity</th>
               <th className="pb-4 font-bold">Status</th>
             </tr>
           </thead>
           <tbody className="text-sm">
             {[
               { id: "PRD-A109", stock: "14 units", velocity: "-42/wk", status: "Critical", icon: WarningCircle, color: "text-error" },
               { id: "PRD-B202", stock: "85 units", velocity: "-10/wk", status: "Stable", icon: CheckCircle, color: "text-success" },
               { id: "PRD-C304", stock: "4 units", velocity: "-15/wk", status: "Reordering", icon: Clock, color: "text-warning" },
             ].map((row, i) => (
               <tr key={i} className="border-b border-white/5 last:border-0">
                 <td className="py-4 font-medium text-white">{row.id}</td>
                 <td className="py-4 text-text-secondary">{row.stock}</td>
                 <td className="py-4 text-text-secondary">{row.velocity}</td>
                 <td className="py-4">
                    <div className={`flex items-center gap-2 ${row.color}`}>
                       <row.icon size={16} weight="fill" />
                       <span className="text-xs font-bold uppercase tracking-widest">{row.status}</span>
                    </div>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
    </div>
  </div>
);

const LeadScoringUI = () => (
  <div className="space-y-8">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
         <div className="relative w-48 h-48 mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="96" cy="96" r="88" stroke="rgba(255,255,255,0.1)" strokeWidth="12" fill="none" />
              <circle cx="96" cy="96" r="88" stroke="#146ef5" strokeWidth="12" fill="none" strokeDasharray="552.92" strokeDashoffset="110.58" className="transition-all duration-1000 ease-out" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               <span className="text-5xl font-black text-white">80</span>
               <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Avg Quality</span>
            </div>
         </div>
         <h3 className="text-lg font-bold text-white mb-2">Global Lead Health</h3>
         <p className="text-sm text-text-muted">AI engine processing 40+ behavioral data points.</p>
      </div>

      <div className="flex-[2] space-y-4">
         {[
           { name: "Sarah Jenkins", company: "TechFlow Inc.", score: 94, intent: "High" },
           { name: "Michael Chen", company: "Global Retail", score: 88, intent: "High" },
           { name: "Emma Watson", company: "StartupX", score: 45, intent: "Low" },
         ].map((lead, i) => (
           <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">
                  {lead.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{lead.name}</p>
                  <p className="text-xs text-text-muted">{lead.company}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-white mb-1">{lead.score}</p>
                <p className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${lead.intent === 'High' ? 'bg-success/10 text-success border-success/20' : 'bg-white/5 text-text-muted border-white/10'}`}>
                  {lead.intent} Intent
                </p>
              </div>
           </div>
         ))}
      </div>
    </div>
  </div>
);

const PipelineVisualizerUI = () => (
  <div className="space-y-8">
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 min-h-[400px] flex items-center justify-center overflow-hidden relative">
       {/* Mock Node Map */}
       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
       
       <div className="relative z-10 flex items-center gap-8 md:gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex flex-col items-center gap-2">
             <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
               <Database size={24} weight="duotone" />
             </div>
             <p className="text-[10px] font-bold text-white uppercase tracking-widest">Ingestion</p>
          </motion.div>

          <div className="w-16 h-0.5 bg-white/20 relative">
             <div className="absolute top-1/2 left-0 w-full h-full bg-blue-500 -translate-y-1/2 animate-pulse" />
          </div>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col items-center gap-2">
             <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-accent shadow-[0_0_40px_rgba(20,110,245,0.4)] relative">
               <GitBranch size={32} weight="duotone" />
               <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-void" />
             </div>
             <p className="text-[10px] font-bold text-white uppercase tracking-widest mt-2">Logic Engine</p>
          </motion.div>

          <div className="w-16 h-0.5 bg-white/20 relative">
             <div className="absolute top-1/2 left-0 w-full h-full bg-accent -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex flex-col gap-4">
             {[
               { label: "Sales API", icon: ChartLineUp, color: "text-purple-500", border: "border-purple-500", bg: "bg-purple-500/20" },
               { label: "Fulfillment", icon: Cube, color: "text-emerald-500", border: "border-emerald-500", bg: "bg-emerald-500/20" }
             ].map((node, i) => (
               <div key={i} className="flex items-center gap-4">
                 <div className={`w-12 h-12 rounded-xl ${node.bg} border ${node.border} flex items-center justify-center ${node.color}`}>
                   <node.icon size={20} weight="duotone" />
                 </div>
                 <p className="text-[10px] font-bold text-white uppercase tracking-widest">{node.label}</p>
               </div>
             ))}
          </motion.div>
       </div>
    </div>
  </div>
);

// --- Page Engine ---

const engines = {
  'crm-automation': {
    title: "CRM Automation",
    description: "Automated trigger-action workflows that keep leads warm and move deals forward without human intervention.",
    component: CRMUI
  },
  'inventory-logic': {
    title: "Inventory Logic",
    description: "Predictive algorithms that monitor stock velocities and automate reordering before critical thresholds are hit.",
    component: InventoryUI
  },
  'lead-scoring': {
    title: "Lead Scoring",
    description: "AI-driven evaluation matrix that ranks incoming leads based on 40+ behavioral data points.",
    component: LeadScoringUI
  },
  'pipeline-visualizer': {
    title: "Pipeline Visualizer",
    description: "Real-time node mapping of your entire operational data flow from ingestion to endpoint delivery.",
    component: PipelineVisualizerUI
  }
};

export default function DemoLabPrototypePage(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const slug = params.slug as keyof typeof engines;
  const engine = engines[slug];

  if (!engine) {
    notFound();
  }

  const PrototypeComponent = engine.component;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-void min-h-screen">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <Link href="/demo-lab" className="inline-flex items-center gap-2 text-xs font-bold text-text-muted hover:text-white uppercase tracking-widest mb-12 transition-colors">
            <ArrowLeft size={14} weight="bold" /> Back to Lab
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                <Flask size={16} weight="fill" />
              </div>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent">PROTOTYPE MODULE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
              {engine.title}
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
              {engine.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full bg-surface border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl"
          >
             {/* Window Controls Mock */}
             <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-6">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="ml-4 px-3 py-1 rounded bg-white/5 text-[8px] font-bold text-text-muted uppercase tracking-widest">
                  Live Preview // {slug}.os
                </div>
             </div>

             {/* Dynamic Render */}
             <PrototypeComponent />

          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
