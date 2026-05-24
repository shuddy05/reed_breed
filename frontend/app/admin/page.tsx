"use client"

import * as React from "react"
import { useAuth } from "@/context/auth-context"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CheckCircle, Clock, ChartBar, Users } from "phosphor-react"

export default function AdminDashboard() {
  const { user } = useAuth()
  const [audits, setAudits] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchAudits = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/admin/audits", {
          headers: { "Authorization": "Bearer true" } // Actual token handled by cookie
        })
        if (res.ok) {
          const data = await res.json()
          setAudits(data)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchAudits()
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-void">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="eyebrow block mb-4">ADMIN PORTAL</span>
              <h1 className="text-h2 font-black text-white">Audit Manager</h1>
            </div>
            <div className="flex gap-4">
              <div className="glass-card px-6 py-3 rounded-xl flex items-center gap-3">
                <Users className="text-accent" />
                <span className="text-white font-bold">{audits.length}</span>
                <span className="text-text-muted text-[10px] uppercase">Total Leads</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl border-white/5 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface/50 border-b border-white/5">
                  <th className="p-6 text-[10px] font-bold text-text-muted uppercase tracking-widest">Company / Lead</th>
                  <th className="p-6 text-[10px] font-bold text-text-muted uppercase tracking-widest">Industry</th>
                  <th className="p-6 text-[10px] font-bold text-text-muted uppercase tracking-widest">Status</th>
                  <th className="p-6 text-[10px] font-bold text-text-muted uppercase tracking-widest">Date</th>
                  <th className="p-6 text-[10px] font-bold text-text-muted uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr><td colSpan={5} className="p-12 text-center text-text-muted">Loading audits...</td></tr>
                ) : audits.map((audit: any) => (
                  <tr key={audit.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6">
                      <p className="font-bold text-white">{audit.company}</p>
                      <p className="text-[12px] text-text-secondary">{audit.name} • {audit.email}</p>
                    </td>
                    <td className="p-6">
                      <span className="text-[12px] text-text-secondary">{audit.industry}</span>
                    </td>
                    <td className="p-6">
                      <span className={`px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-tighter ${
                        audit.status === "PENDING" ? "bg-warning/20 text-warning" : "bg-success/20 text-success"
                      }`}>
                        {audit.status}
                      </span>
                    </td>
                    <td className="p-6 text-[12px] text-text-muted">
                      {new Date(audit.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-6 text-right">
                      <button className="text-accent hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
