import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
// Lucide icons are RSC compatible
import { Presentation } from "lucide-react";

export default async function CaseStudiesPage() {
  const decksDir = path.join(process.cwd(), 'app', 'decks');
  let decks: string[] = [];

  try {
    const items = await fs.readdir(decksDir);
    for (const item of items) {
      const stats = await fs.stat(path.join(decksDir, item));
      if (stats.isDirectory() && item !== 'components') {
        decks.push(item);
      }
    }
  } catch (err) {
    console.error("Error reading decks directory", err);
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-void min-h-screen text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <span className="eyebrow block mb-4">PORTFOLIO</span>
            <h1 className="text-display-md font-black mb-8">Client Case Studies</h1>
            <p className="text-text-secondary text-body-lg">
              Explore our collection of interactive, bespoke digital experiences tailored for premium brands and enterprises.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {decks.map((slug) => (
              <Link
                key={slug}
                href={`/decks/${slug}`}
                className="p-10 rounded-xl border border-white/5 bg-surface flex flex-col items-center gap-6 transition-all duration-300 hover:border-accent/50 hover:bg-accent/5 group relative overflow-hidden"
              >
                <Presentation size={56} className="text-accent group-hover:scale-110 transition-transform" />
                <div className="flex flex-col gap-1 items-center">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-center text-text-secondary group-hover:text-white transition-colors">Interactive Deck</span>
                   <h2 className="text-sm font-bold text-center capitalize">{slug.replace(/-/g, ' ')}</h2>
                </div>
                
                {/* Desktop Indicator Tag */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-[8px] font-black uppercase tracking-wider text-accent">Desktop Only</span>
                  <div className="w-3.5 h-3.5 rounded bg-accent/10 flex items-center justify-center text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {decks.length === 0 && (
            <div className="p-20 text-center border border-white/5 rounded-xl bg-surface">
              <p className="text-text-muted">No case studies found in the repository.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
