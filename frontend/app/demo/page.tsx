import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Monitor } from "lucide-react";

export default async function DemosIndex() {
  const demosDir = path.join(process.cwd(), 'app', 'demo');
  let demos: string[] = [];

  try {
    const items = await fs.readdir(demosDir);
    for (const item of items) {
      // Skip the index page itself and any utility folders
      if (['page.tsx', 'components', 'assets', 'hooks'].includes(item)) continue;
      
      const stats = await fs.stat(path.join(demosDir, item));
      if (stats.isDirectory()) {
        demos.push(item);
      }
    }
  } catch (err) {
    console.error("Error reading demos directory", err);
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-void min-h-screen text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <span className="eyebrow block mb-4">APP DEMOS</span>
            <h1 className="text-display-md font-black mb-8">Live Product Prototypes</h1>
            <p className="text-text-secondary text-body-lg">
              Explore our functional app demonstrations. Each demo represents a specific product vision, featuring bespoke logic and interactive state.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demos.map((slug) => (
              <Link
                key={slug}
                href={`/demo/${slug}`}
                className="p-10 rounded-2xl border border-white/5 bg-surface flex flex-col items-start gap-8 transition-all duration-500 hover:border-accent/50 hover:bg-accent/5 group relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Monitor size={32} />
                </div>
                
                <div className="space-y-2">
                   <h2 className="text-2xl font-black capitalize">{slug.replace(/-/g, ' ')}</h2>
                   <p className="text-sm text-text-secondary group-hover:text-white/60 transition-colors">Functional System Prototype</p>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                   Launch Demo
                   <div className="w-4 h-[1px] bg-accent group-hover:w-8 transition-all" />
                </div>

                {/* Decorative element */}
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Monitor size={120} />
                </div>
              </Link>
            ))}
          </div>

          {demos.length === 0 && (
            <div className="p-20 text-center border border-white/5 rounded-xl bg-surface">
              <p className="text-text-muted">No app demos found in the repository.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
