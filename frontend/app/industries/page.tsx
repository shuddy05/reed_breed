"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Quotes, Star, ArrowUpRight, CheckCircle } from "phosphor-react";

const testimonials = [
  {
    id: "loral",
    client: "Loral International Schools",
    role: "Director of Operations",
    quote: "Reed Breed didn't just digitize our processes; they entirely reimagined our operational architecture. The biometric verification and real-time fee collection dashboards alone saved us hundreds of administrative hours in the first term.",
    metrics: [
      { label: "Fee Collection Efficiency", value: "92%" },
      { label: "Admin Hours Saved", value: "300+" }
    ]
  },
  {
    id: "queening",
    client: "Queening Bridals",
    role: "Founder & CEO",
    quote: "As a luxury brand, the customer experience is everything. The automated CRM and intelligent booking flow Reed Breed implemented ensured that no high-value lead ever slipped through the cracks. Our consultation bookings doubled within a month.",
    metrics: [
      { label: "Booking Conversion", value: "2.5x" },
      { label: "Lead Response Time", value: "< 5 mins" }
    ]
  },
  {
    id: "tech-logistics",
    client: "Nexus Freight Solutions",
    role: "Chief Technology Officer",
    quote: "We needed a system that could handle thousands of concurrent tracking events without buckling. The custom pipeline visualizer built by Reed Breed gave our dispatchers unprecedented clarity and eliminated the communication silos between our hubs.",
    metrics: [
      { label: "Tracking Accuracy", value: "99.9%" },
      { label: "Silo Reduction", value: "100%" }
    ]
  },
  {
    id: "retail",
    client: "Aura Boutique",
    role: "Head of Marketing",
    quote: "The automated lead scoring logic changed how we prioritize our marketing spend. By identifying our highest-intent buyers automatically, we stopped wasting money on cold leads and drastically improved our return on ad spend.",
    metrics: [
      { label: "ROAS Improvement", value: "310%" },
      { label: "Sales Cycle Faster", value: "40%" }
    ]
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-void min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent">CLIENT SUCCESS</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-display-md font-black text-white mb-8 tracking-tighter leading-tight">
              Systems That Scale. <br/>
              <span className="text-text-muted">Results That Speak.</span>
            </h1>
            <p className="text-text-secondary text-base md:text-body-lg max-w-2xl leading-relaxed">
              Don't just take our word for it. Discover how industry leaders are leveraging our intelligent automation systems to unlock exponential growth and operational clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="p-8 md:p-12 rounded-[2rem] border border-white/5 bg-surface flex flex-col transition-all duration-500 hover:border-white/10 hover:bg-white/[0.02] group relative overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                   <Quotes size={120} weight="fill" />
                </div>

                <div className="flex items-center gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} size={16} weight="fill" className="text-accent" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-10 relative z-10">
                  "{test.quote}"
                </p>

                <div className="mt-auto pt-8 border-t border-white/5 grid grid-cols-2 gap-4 relative z-10">
                  {test.metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">{metric.value}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center justify-between relative z-10">
                  <div>
                    <h3 className="text-white font-bold tracking-tight">{test.client}</h3>
                    <p className="text-xs font-medium text-text-muted mt-1">{test.role}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent transition-all duration-300">
                    <ArrowUpRight size={16} weight="bold" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Banner */}
          <div className="mt-20 md:mt-32 p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-accent/20 to-transparent border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
               <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Ready to build your growth engine?</h2>
               <p className="text-sm text-text-secondary">Join these organizations in automating your operations.</p>
             </div>
             <button className="whitespace-nowrap px-8 py-4 bg-white text-void rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3">
               Book a Strategy Call <ArrowUpRight size={16} weight="bold" />
             </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
