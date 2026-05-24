"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { 
  Atom, 
  Browsers, 
  Graph, 
  Database, 
  ShieldStar, 
  Infinity, 
  Robot, 
  Binoculars 
} from "phosphor-react";

const services = [
  { label: "Operational Automation", icon: Atom },
  { label: "Custom Software", icon: Browsers },
  { label: "Data Architecture", icon: Database },
  { label: "Growth Modeling", icon: Graph },
  { label: "System Security", icon: ShieldStar },
  { label: "Cloud Infrastructure", icon: Infinity },
  { label: "AI Integration", icon: Robot },
  { label: "Performance Analytics", icon: Binoculars },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-void min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <span className="eyebrow block mb-4">SERVICES</span>
            <h1 className="text-display-md font-black text-white mb-8">Systems Built for Scale</h1>
            <p className="text-text-secondary text-body-lg">We architect and deploy specialized infrastructure that removes operational bottlenecks and accelerates growth.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service) => (
              <div
                key={service.label}
                className="p-10 rounded-xl border border-white/5 bg-surface flex flex-col items-center gap-6 transition-all duration-300 hover:border-accent/50 hover:bg-accent/5 group"
              >
                <service.icon size={56} weight="duotone" className="text-accent group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-center text-text-secondary group-hover:text-white">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
