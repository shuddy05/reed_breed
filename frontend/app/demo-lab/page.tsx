"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { 
  Flask, 
  Cube, 
  GitBranch, 
  Path,
  MonitorPlay,
  PresentationChart,
  FilmStrip,
  ArrowRight,
  Browser,
  Icon
} from "phosphor-react";

interface LabItem {
  label: string;
  icon: Icon;
  href: string;
  status: string;
  isVideo?: boolean;
  videoId?: string;
}

interface LabCategory {
  title: string;
  description: string;
  items: LabItem[];
}

const LAB_CATEGORIES: LabCategory[] = [
  {
    title: "Cinematic App Demos",
    description: "Interactive 3D product walkthroughs rendered in real-time.",
    items: [
      { label: "ClassroomPRO", icon: MonitorPlay, href: "/demo/classroom-pro", status: "Live" },
    ]
  },
  {
    title: "Interactive Pitch Decks",
    description: "High-fidelity, animated sales and proposal presentations.",
    items: [
      { label: "Loral Schools", icon: PresentationChart, href: "/decks/loral-schools", status: "Live" },
      { label: "Queening Bridals", icon: PresentationChart, href: "/decks/queening-bridals", status: "Live" },
    ]
  },
  {
    title: "Core Logic Prototypes",
    description: "Functional UI mockups of specific backend engines.",
    items: [
      { label: "CRM Automation", icon: Flask, href: "/demo-lab/crm-automation", status: "Prototype" },
      { label: "Inventory Logic", icon: Cube, href: "/demo-lab/inventory-logic", status: "Prototype" },
      { label: "Lead Scoring", icon: Path, href: "/demo-lab/lead-scoring", status: "Prototype" },
      { label: "Pipeline Visualizer", icon: GitBranch, href: "/demo-lab/pipeline-visualizer", status: "Prototype" },
    ]
  },
  {
    title: "Websites",
    description: "Live functional web platforms and interactive architectures.",
    items: [
      { label: "E-Commerce Architecture", icon: Browser, href: "#", status: "In Development", isVideo: false },
    ]
  },
  {
    title: "Videos",
    description: "Campaign visuals, brand motion graphics, and marketing spots.",
    items: [
      { 
        label: "Brand Campaign Alpha", 
        icon: FilmStrip, 
        href: "#", 
        status: "Live", 
        isVideo: true,
        videoId: "dQw4w9WgXcQ" // Placeholder Rick Roll, replace with actual YouTube ID
      },
    ]
  }
];

import { useState } from "react";

export default function DemoLabPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-void min-h-screen relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16 md:mb-24">
            <span className="eyebrow block mb-4">THE LAB</span>
            <h1 className="text-4xl md:text-display-md font-black text-white mb-8 tracking-tighter">
              Live System Prototypes
            </h1>
            <p className="text-text-secondary text-base md:text-body-lg max-w-2xl leading-relaxed">
              Explore our repository of interactive demonstrations. From full 3D cinematic engines to highly specific backend logic visualizers.
            </p>
          </div>

          <div className="space-y-20">
            {LAB_CATEGORIES.map((category) => (
              <div key={category.title} className="space-y-8">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-2xl font-black text-white tracking-tight">{category.title}</h2>
                  <p className="text-sm text-text-muted mt-2">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item) => {
                    const isDev = item.status === "In Development";
                    
                    const CardContent = (
                      <div 
                        className={`group p-8 rounded-2xl border flex flex-col items-start gap-8 transition-all duration-300 relative overflow-hidden w-full h-full ${
                          isDev 
                            ? 'border-white/5 bg-white/[0.01] cursor-not-allowed' 
                            : 'border-white/10 bg-surface hover:border-accent/50 hover:bg-accent/5 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(20,110,245,0.2)] cursor-pointer'
                        }`}
                      >
                        <div className="flex justify-between w-full items-start">
                          <item.icon 
                            size={40} 
                            weight="duotone" 
                            className={`${isDev ? 'text-white/20' : 'text-accent group-hover:scale-110 transition-transform'}`} 
                          />
                          <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                            item.status === 'Live' ? 'bg-success/10 text-success border-success/20' :
                            item.status === 'Prototype' ? 'bg-warning/10 text-warning border-warning/20' :
                            'bg-white/5 text-white/30 border-white/5'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        
                        <div className="w-full">
                          <h3 className={`font-bold tracking-tight mb-2 ${isDev ? 'text-white/40' : 'text-white'}`}>
                            {item.label}
                          </h3>
                          <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors ${isDev ? 'text-transparent' : 'text-text-muted group-hover:text-accent'}`}>
                            {item.isVideo ? 'Play Video' : 'Launch Module'} <ArrowRight size={12} weight="bold" />
                          </div>
                        </div>
                        
                        {/* Interactive scanline effect for live items */}
                        {!isDev && (
                          <div className="absolute top-0 left-0 w-full h-[2px] bg-accent/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                        )}
                      </div>
                    );

                    if (item.isVideo && !isDev) {
                      return (
                        <div key={item.label} onClick={() => setActiveVideo(item.videoId || null)}>
                          {CardContent}
                        </div>
                      );
                    }

                    return (
                      <Link 
                        key={item.label}
                        href={isDev ? '#' : item.href}
                        className="block"
                      >
                        {CardContent}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
           <div 
             className="absolute inset-0 bg-void/90 backdrop-blur-xl cursor-pointer"
             onClick={() => setActiveVideo(null)}
           />
           <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 animate-in fade-in zoom-in duration-300">
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center rounded-full text-white transition-colors"
              >
                ✕
              </button>
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
                title="Video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
           </div>
        </div>
      )}

      <Footer />
    </>
  );
}
