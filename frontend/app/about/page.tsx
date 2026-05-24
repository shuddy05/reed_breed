"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { 
  FlyingSaucer, 
  Sparkle, 
  Handshake, 
  Crosshair 
} from "phosphor-react";

const values = [
  { label: "Precision", icon: Crosshair },
  { label: "Innovation", icon: Sparkle },
  { label: "Velocity", icon: FlyingSaucer },
  { label: "Partnership", icon: Handshake },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-void min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <span className="eyebrow block mb-4">ABOUT US</span>
            <h1 className="text-display-md font-black text-white mb-8">Architects of Growth</h1>
            <p className="text-text-secondary text-body-lg">Reed Breed Technologies is a boutique systems-engineering firm dedicated to solving the complex scalability challenges of modern enterprises.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((val) => (
              <div
                key={val.label}
                className="p-10 rounded-xl border border-white/5 bg-surface flex flex-col items-center gap-6 transition-all duration-300 hover:border-accent/50 hover:bg-accent/5 group"
              >
                <val.icon size={56} weight="duotone" className="text-accent group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-center text-text-secondary group-hover:text-white">{val.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
