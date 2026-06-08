"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Calendar as CalendarIcon, 
  Clock, 
  VideoCamera, 
  UserCircle,
  Plus
} from "phosphor-react"
import { StrokedText } from "@/components/ui/stroked-text"
import { ManualEntryModal } from "@/components/ui/manual-entry-modal"

const appointments = [
  { id: 1, name: "Alice Smith", email: "alice@example.com", date: "2026-06-09", time: "10:00 AM", type: "Discovery Call", status: "Upcoming" },
  { id: 2, name: "Bob Johnson", email: "bob@company.com", date: "2026-06-09", time: "02:00 PM", type: "Strategy Session", status: "Upcoming" },
  { id: 3, name: "Charlie Davis", email: "charlie@startup.io", date: "2026-06-10", time: "11:30 AM", type: "Consultation", status: "Upcoming" },
  { id: 4, name: "Diana Prince", email: "diana@agency.net", date: "2026-06-08", time: "09:00 AM", type: "Discovery Call", status: "Completed" },
]

export default function CalendarPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="space-y-12">
      <ManualEntryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col items-start gap-4">
          <span className="text-accent font-black tracking-widest text-xs uppercase">Schedule Management</span>
          <div className="flex items-center gap-4">
            <h2 className="text-[5.5rem] font-black text-white tracking-tighter leading-[0.8]" style={{ WebkitTextStroke: '0.5px #ffffff' }}>
              Booked
            </h2>
            <div className="flex items-center -mt-2">
              <StrokedText 
                text="Calls" 
                viewBox="0 0 250 120"
                height="4.5rem"
                strokeWidth={2}
                letterSpacing="-0.05em"
                opacity={1}
              />
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-3 px-8 py-3 bg-accent text-white rounded-2xl font-bold hover:bg-accent-dim transition-all shadow-lg shadow-accent/20 mb-2"
        >
          <Plus size={20} weight="bold" />
          <span className="text-sm uppercase tracking-widest">Manual Entry</span>
        </button>
      </div>

      {/* Main Grid Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Simple Calendar Widget */}
        <div className="glass-card rounded-[40px] border-white/5 p-10 bg-white/[0.01] h-fit">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-white tracking-tighter">June 2026</h3>
           </div>
           
           <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-[10px] font-black text-text-muted uppercase tracking-widest">{day}</div>
              ))}
           </div>
           <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 30 }).map((_, i) => {
                const day = i + 1;
                const isToday = day === 8; // Assuming today is June 8, 2026
                const hasAppt = [8, 9, 10].includes(day);
                return (
                  <div 
                    key={i} 
                    className={`aspect-square flex flex-col items-center justify-center rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      isToday ? 'bg-accent text-white shadow-lg shadow-accent/30' : 
                      hasAppt ? 'bg-white/10 text-white' : 'text-text-muted hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {day}
                    {hasAppt && !isToday && <div className="w-1 h-1 bg-accent rounded-full mt-1" />}
                  </div>
                )
              })}
           </div>
        </div>

        {/* Appointments List */}
        <div className="lg:col-span-2 glass-card rounded-[40px] border-white/5 overflow-hidden bg-white/[0.01]">
          <div className="p-10 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-2xl font-black text-white tracking-tighter">Upcoming Appointments</h3>
          </div>
          
          <div className="divide-y divide-white/5">
            {appointments.map((appt, i) => (
              <motion.div 
                key={appt.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-8 hover:bg-white/[0.03] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-6 group"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                     <VideoCamera size={28} weight="duotone" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                       <h4 className="font-black text-white text-lg tracking-tight group-hover:text-accent transition-colors">{appt.name}</h4>
                       <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-tighter ${
                         appt.status === 'Completed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                       }`}>
                         {appt.status}
                       </span>
                    </div>
                    <p className="text-sm text-text-muted">{appt.email} • {appt.type}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-start sm:items-end gap-2 bg-white/5 p-4 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-2 text-white font-bold">
                     <CalendarIcon size={16} className="text-accent" />
                     {appt.date}
                   </div>
                   <div className="flex items-center gap-2 text-text-secondary text-sm">
                     <Clock size={16} />
                     {appt.time}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
