"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { 
  Leaf, 
  Drop, 
  Factory, 
  Lightning, 
  Wrench, 
  ShoppingBag, 
  Truck, 
  ForkKnife, 
  Globe, 
  Bank, 
  Buildings, 
  Briefcase, 
  UserGear, 
  PoliceCar, 
  GraduationCap, 
  FirstAid, 
  MaskHappy, 
  Users, 
  House, 
  MapTrifold, 
  Asterisk 
} from "phosphor-react";

const industries = [
  { label: "Agriculture", icon: Leaf },
  { label: "Mining", icon: Drop },
  { label: "Manufacturing", icon: Factory },
  { label: "Energy & Utilities", icon: Lightning },
  { label: "Water & Waste", icon: Drop },
  { label: "Construction", icon: Wrench },
  { label: "Retail & Trade", icon: ShoppingBag },
  { label: "Logistics", icon: Truck },
  { label: "Hospitality", icon: ForkKnife },
  { label: "Technology", icon: Globe },
  { label: "Finance", icon: Bank },
  { label: "Real Estate", icon: Buildings },
  { label: "Professional Services", icon: Briefcase },
  { label: "Admin Support", icon: UserGear },
  { label: "Public Sector", icon: PoliceCar },
  { label: "Education", icon: GraduationCap },
  { label: "Healthcare", icon: FirstAid },
  { label: "Arts & Entertainment", icon: MaskHappy },
  { label: "NGOs & Others", icon: Users },
  { label: "Household", icon: House },
  { label: "International Org", icon: MapTrifold },
  { label: "Special Projects", icon: Asterisk },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-void min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <span className="eyebrow block mb-4">INDUSTRIES</span>
            <h1 className="text-display-md font-black text-white mb-8">Specialized Automation for Every Sector</h1>
            <p className="text-text-secondary text-body-lg">We build high-performance systems tailored to the unique operational challenges of these industries.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="p-8 rounded-xl border border-white/5 bg-surface flex flex-col items-center gap-6 transition-all duration-300 hover:border-accent/50 hover:bg-accent/5 group"
              >
                <ind.icon size={48} weight="duotone" className="text-accent group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-center text-text-secondary group-hover:text-white">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
