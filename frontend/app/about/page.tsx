"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { 
  Brain, 
  Code, 
  Megaphone, 
  PaintBrush,
  ArrowRight
} from "phosphor-react";

const services = [
  {
    category: "AI & Automation",
    icon: Brain,
    items: [
      "AI Automation",
      "AI Chatbot Integration",
      "AI-Generated Content",
      "Workflow Optimization"
    ]
  },
  {
    category: "Software & Web Engineering",
    icon: Code,
    items: [
      "Custom Software for SMEs",
      "Website Design & Development",
      "E-commerce Websites",
      "Custom Web Apps & Mobile Apps",
      "High-Converting Landing Pages"
    ]
  },
  {
    category: "Digital Marketing & Growth",
    icon: Megaphone,
    items: [
      "General Digital Marketing",
      "Sales Funnels & Lead Generation",
      "Business Development",
      "Sales & Marketing Support",
      "Social Media Management"
    ]
  },
  {
    category: "Content & Creative Design",
    icon: PaintBrush,
    items: [
      "Cinematography & Video Editing",
      "Live Shot & Recorded Content",
      "Brand Identity & Graphics Design",
      "Content Strategy & Copywriting"
    ]
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-void min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Header Section */}
          <div className="max-w-4xl mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent">WHO WE ARE</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-display-md font-black text-white mb-8 tracking-tighter leading-tight">
              Intelligence meets <br/>
              <span className="text-text-muted">Creative Execution.</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl leading-relaxed">
              Reed Breed AI Agency is a premier digital firm that operates at the intersection of <strong className="text-white">software engineering, creative design, digital marketing, and AI-powered execution.</strong> We don't just build websites or run ads; we architect comprehensive growth systems that automate your success.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="mb-32">
            <h2 className="text-2xl font-black text-white mb-10 tracking-tight">Our Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <div key={i} className="p-10 rounded-[2rem] border border-white/5 bg-surface hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                      <service.icon size={32} weight="duotone" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{service.category}</h3>
                  </div>
                  <ul className="space-y-4">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-text-secondary group-hover:text-white transition-colors duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent">LEADERSHIP</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-surface to-void relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(20,110,245,0.05),transparent_50%)] pointer-events-none" />
              
              {/* Director Image */}
              <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-full md:rounded-[2rem] overflow-hidden border-4 border-white/10 relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="/director.jpg" 
                  alt="Ifeanyi Felix - Director" 
                  width={320} 
                  height={320} 
                  className="w-full h-full object-cover object-center scale-105"
                  priority
                />
              </div>

              {/* Director Bio */}
              <div className="flex-1 relative z-10 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">Ifeanyi Felix</h3>
                <p className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Director</p>
                
                <p className="text-text-secondary leading-relaxed mb-8">
                  As the Director of Reed Breed AI Agency, Ifeanyi merges a deep understanding of software engineering with cutting-edge AI automation and creative digital strategy. His vision is to transform SMEs by replacing fragmented efforts with unified, intelligent systems that drive measurable growth and operational efficiency.
                </p>

                <a href="https://www.linkedin.com/in/ifeanyi-felix-a48788102/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-void transition-colors inline-flex items-center gap-3">
                  Connect on LinkedIn <ArrowRight size={16} weight="bold" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
