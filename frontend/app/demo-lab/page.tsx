"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { 
  Flask, 
  Cube, 
  GitBranch, 
  Path 
} from "phosphor-react";

const experiments = [
  { label: "CRM Automation", icon: Flask },
  { label: "Inventory Logic", icon: Cube },
  { label: "Lead Scoring", icon: Path },
  { label: "Pipeline Visualizer", icon: GitBranch },
];

export default function DemoLabPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-void min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <span className="eyebrow block mb-4">DEMO LAB</span>
            <h1 className="text-display-md font-black text-white mb-8">Live System Prototypes</h1>
            <p className="text-text-secondary text-body-lg">Interactive demonstrations of the core engines we deploy to solve specific operational bottlenecks.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {experiments.map((exp) => (
              <div
                key={exp.label}
                className="p-10 rounded-xl border border-white/5 bg-surface flex flex-col items-center gap-6 transition-all duration-300 hover:border-accent/50 hover:bg-accent/5 group cursor-pointer"
              >
                <exp.icon size={56} weight="duotone" className="text-accent group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-center text-text-secondary group-hover:text-white">{exp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
