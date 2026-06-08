"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "phosphor-react"
import { Button } from "@/components/ui/button"

interface ManualEntryModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ManualEntryModal = ({ isOpen, onClose }: ManualEntryModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-void/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-surface border border-white/10 rounded-[32px] overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5 shrink-0">
              <div>
                <h3 className="text-2xl font-black text-white tracking-tighter">Manual Entry</h3>
                <p className="text-sm text-text-muted mt-1">Log an offline or direct booking.</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-text-muted hover:text-white transition-colors"
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2 block">Client Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent placeholder:text-text-muted/50" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2 block">Email</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent placeholder:text-text-muted/50" />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2 block">Date</label>
                      <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent [color-scheme:dark]" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2 block">Time</label>
                      <input type="time" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent [color-scheme:dark]" />
                    </div>
                 </div>

                 <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2 block">Call Type</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent [color-scheme:dark]">
                       <option value="discovery">Discovery Call</option>
                       <option value="strategy">Strategy Session</option>
                       <option value="consultation">Consultation</option>
                    </select>
                 </div>
                 
                 <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2 block">Notes (Optional)</label>
                    <textarea rows={3} placeholder="Any specific topics to discuss..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent resize-none placeholder:text-text-muted/50"></textarea>
                 </div>
              </form>
            </div>
            
            {/* Footer */}
            <div className="p-6 md:p-8 border-t border-white/5 bg-white/[0.02] flex justify-end gap-4 shrink-0">
               <button 
                 onClick={onClose}
                 className="px-6 py-3 text-sm font-bold text-text-muted hover:text-white transition-colors"
               >
                 Cancel
               </button>
               <Button 
                 onClick={onClose}
                 className="px-8 py-3 bg-accent text-white rounded-xl font-bold hover:bg-accent-dim transition-all shadow-lg shadow-accent/20"
               >
                 Save Booking
               </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
