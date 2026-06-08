"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  MagnifyingGlass, 
  Funnel, 
  DotsThreeVertical,
  Export,
  ArrowUpRight,
  UserCircle
} from "phosphor-react"
import { StrokedText } from "@/components/ui/stroked-text"

const leads = [
  { id: 1, company: "Loral International", contact: "John Doe", email: "john@loral.edu", phone: "+234 801 234 5678", website: "loral.edu", status: "New", industry: "Education", details: "Looking to redesign our school's primary landing page and integrate a student portal." },
  { id: 2, company: "Queening Bridals", contact: "Sarah Jane", email: "sarah@queening.com", phone: "+234 802 234 5678", website: "queening.com", status: "In Progress", industry: "Retail", details: "Need a complete e-commerce overhaul with an automated booking system for fittings." },
  { id: 3, company: "GIG Logistics", contact: "Mike Ross", email: "mike@gig.com", phone: "+234 803 234 5678", website: "gig.com", status: "Qualified", industry: "Logistics", details: "Interested in a custom dashboard for tracking fleet logistics in real-time." },
]

export default function LeadsFunnel() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col items-start gap-4">
          <span className="text-accent font-black tracking-widest text-xs uppercase">Lead Management</span>
          <div className="flex items-center gap-4">
            <h2 className="text-[5.5rem] font-black text-white tracking-tighter leading-[0.8]" style={{ WebkitTextStroke: '0.5px #ffffff' }}>
              Leads
            </h2>
            <div className="flex items-center -mt-2">
              <StrokedText 
                text="Funnel" 
                viewBox="0 0 450 120"
                height="4.5rem"
                strokeWidth={2}
                letterSpacing="-0.05em"
                opacity={1}
              />
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mb-2">
          <button className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">
            <Export size={20} />
            <span className="text-sm uppercase tracking-widest text-white">Export</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 relative max-w-2xl">
        <MagnifyingGlass className="absolute left-6 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
        <input 
          type="text" 
          placeholder="Search leads, companies or contacts..." 
          className="w-full bg-white/[0.02] border border-white/5 rounded-2xl py-4 pl-16 pr-6 text-white focus:outline-none focus:border-accent transition-all font-medium placeholder:text-text-muted"
        />
      </div>

      {/* Table */}
      <div className="glass-card rounded-[40px] border-white/5 overflow-hidden bg-white/[0.01]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="px-10 py-6 text-[10px] font-black text-text-muted uppercase tracking-widest">Company / Name</th>
              <th className="px-10 py-6 text-[10px] font-black text-text-muted uppercase tracking-widest">Contact Info</th>
              <th className="px-10 py-6 text-[10px] font-black text-text-muted uppercase tracking-widest">Website</th>
              <th className="px-10 py-6 text-[10px] font-black text-text-muted uppercase tracking-widest w-1/4">Project Details</th>
              <th className="px-10 py-6 text-[10px] font-black text-text-muted uppercase tracking-widest">Status</th>
              <th className="px-10 py-6 text-[10px] font-black text-text-muted uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {leads.map((lead, i) => (
              <motion.tr 
                key={lead.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="hover:bg-white/[0.03] transition-colors group cursor-pointer"
              >
                <td className="px-10 py-8 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <UserCircle size={28} weight="duotone" />
                    </div>
                    <div>
                      <p className="font-black text-white text-lg tracking-tight group-hover:text-accent transition-colors">{lead.company}</p>
                      <p className="text-xs text-text-muted uppercase font-bold tracking-widest">{lead.contact}</p>
                    </div>
                  </div>
                </td>
                <td className="px-10 py-8">
                  <p className="font-bold text-white">{lead.email}</p>
                  <p className="text-sm text-text-muted">{lead.phone}</p>
                </td>
                <td className="px-10 py-8">
                  <p className="text-sm font-bold text-white opacity-60 truncate max-w-[150px]">{lead.website}</p>
                </td>
                <td className="px-10 py-8">
                  <p className="text-sm text-text-secondary line-clamp-2">{lead.details}</p>
                </td>
                <td className="px-10 py-8">
                   <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                     lead.status === 'Qualified' ? 'bg-success/10 text-success' : 
                     lead.status === 'New' ? 'bg-accent/10 text-accent' : 'bg-warning/10 text-warning'
                   }`}>
                      {lead.status}
                   </span>
                </td>
                <td className="px-10 py-8 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="w-10 h-10 rounded-xl hover:bg-white/5 flex items-center justify-center text-text-muted hover:text-white transition-all">
                      <ArrowUpRight size={20} />
                    </button>
                    <button className="w-10 h-10 rounded-xl hover:bg-white/5 flex items-center justify-center text-text-muted hover:text-white transition-all">
                      <DotsThreeVertical size={24} weight="bold" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
