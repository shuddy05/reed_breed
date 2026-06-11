"use client"

import * as React from "react"
import { useAuth } from "@/context/auth-context"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CheckCircle, Clock, Calendar, RocketLaunch } from "phosphor-react"

import { ProtectedRoute } from "@/components/auth/protected-route"

export default function ClientDashboard() {
  const { user, getToken } = useAuth()
  const [projects, setProjects] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchOverview = async () => {
      try {
        const token = getToken()
        const res = await fetch("http://127.0.0.1:8000/api/client/overview", {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        })
        if (res.ok) {
          const data = await res.json()
          setProjects(data)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchOverview()
  }, [getToken])

  return (
    <ProtectedRoute>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-void">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <span className="eyebrow block mb-4">CLIENT PORTAL</span>
            <h1 className="text-h2 font-black text-white">Agency Operations Tracker</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {loading ? (
                <div className="p-12 text-center text-text-muted glass-card rounded-2xl">Loading your projects...</div>
              ) : projects.map((project: any) => (
                <div key={project.id} className="glass-card rounded-2xl border-white/5 overflow-hidden">
                  <div className="p-8 border-b border-white/5 bg-surface/30">
                    <h3 className="text-h3 font-bold text-white mb-2">{project.name}</h3>
                    <div className="flex items-center gap-4 text-text-muted text-[11px] font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-2"><Clock /> {project.status}</span>
                      <span className="flex items-center gap-2"><Calendar /> Started {new Date(project.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-6">Deliverables Timeline</p>
                    <div className="space-y-6">
                      {project.deliverables?.map((del: any) => (
                        <div key={del.id} className="flex items-start gap-4 group">
                          <div className={`mt-1 h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            del.status === "COMPLETED" ? "bg-success border-success text-void" : "border-white/20 text-transparent"
                          }`}>
                            <CheckCircle size={14} weight="fill" />
                          </div>
                          <div className="flex-1 pb-6 border-b border-white/5 group-last:border-0">
                            <p className={`font-bold ${del.status === "COMPLETED" ? "text-text-muted line-through" : "text-white"}`}>{del.title}</p>
                            <p className="text-[12px] text-text-secondary mt-1">{del.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl border-accent/20 bg-accent/5">
                <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Account Status</h4>
                <p className="text-h3 font-black text-white mb-2">Growth Plan</p>
                <p className="text-text-secondary text-body-sm mb-6">Your next billing date is June 24, 2026.</p>
                <button className="w-full bg-accent text-white py-3 rounded-lg font-bold text-[12px] uppercase tracking-widest hover:bg-accent-dim transition-colors">Manage Subscription</button>
              </div>

              <div className="glass-card p-8 rounded-2xl border-white/5">
                <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">Quick Actions</h4>
                <div className="space-y-4">
                  <button className="w-full text-left p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors flex items-center justify-between group">
                    <span className="text-[12px] font-bold text-white">Book Strategy Call</span>
                    <RocketLaunch className="text-accent group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </ProtectedRoute>
  )
}
