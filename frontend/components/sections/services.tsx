"use client"

import * as React from "react"
import { Funnel, Robot, ChartPieSlice, FlowArrow, Megaphone, PresentationChart, ArrowRight } from "phosphor-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    title: "Lead Generation Systems",
    desc: "Built-for-conversion funnels that turn strangers into interested prospects.",
    icon: Funnel,
    deliverables: ["Landing Page Design", "Ad Management", "Lead Magnet Strategy"],
  },
  {
    title: "AI Customer Automation",
    desc: "Intelligent bots that handle inquiries, bookings, and support 24/7.",
    icon: Robot,
    deliverables: ["WhatsApp Bots", "AI Receptionist", "Smart Auto-replies"],
  },
  {
    title: "Conversion Funnel Design",
    desc: "Optimizing every touchpoint to maximize the percentage of leads that close.",
    icon: ChartPieSlice,
    deliverables: ["User Journey Mapping", "A/B Testing", "Copywriting"],
  },
  {
    title: "CRM & Workflow Automation",
    desc: "Connect your tools and automate the boring stuff so you can focus on growth.",
    icon: FlowArrow,
    deliverables: ["HubSpot/Zoho Setup", "Zapier/Make Workflows", "Sales Pipeline Design"],
  },
  {
    title: "Growth Campaigns",
    desc: "High-impact marketing campaigns designed for immediate ROI.",
    icon: Megaphone,
    deliverables: ["Email Marketing", "SMS Campaigns", "Retargeting"],
  },
  {
    title: "Business Intelligence",
    desc: "Real-time dashboards that show you exactly where your growth is coming from.",
    icon: PresentationChart,
    deliverables: ["ROI Tracking", "Lead Scoring", "Performance Audits"],
  },
]

export const Services = () => {
  return (
    <section className="py-section-md bg-void relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="eyebrow block mb-4">WHAT WE BUILD</span>
          <h2 className="text-h2 font-black text-text-primary">&quot;Growth systems, not guesswork.&quot;</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              variant="service"
              className="group cursor-default"
            >
              <div className="p-4 bg-accent/10 rounded-2xl text-accent w-fit mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <service.icon size={32} weight="duotone" />
              </div>
              <h3 className="text-h3 font-bold text-[#ffffff] mb-4 transition-colors">
                {service.title}
              </h3>
              <p className="text-body-md text-text-secondary leading-relaxed mb-6">
                {service.desc}
              </p>
              
              <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40">
                <ul className="space-y-2 mb-6">
                  {service.deliverables.map((item) => (
                    <li key={item} className="text-body-sm text-text-muted flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 text-accent font-semibold text-body-sm group-hover:translate-x-2 transition-transform">
                Learn more <ArrowRight weight="bold" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
