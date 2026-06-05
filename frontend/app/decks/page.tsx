import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export default async function PitchesIndex() {
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
    <div className="min-h-screen bg-zinc-950 text-white p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Client Pitch Decks</h1>
        <p className="text-zinc-400 mb-12 text-xl">Each deck is a completely bespoke experience with isolated UI and logic.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {decks.map((slug) => (
            <Link 
              key={slug} 
              href={`/decks/${slug}`}
              className="group block p-10 rounded-3xl border border-zinc-800 hover:border-sky-500/50 transition-all bg-zinc-900/50 hover:bg-zinc-900"
            >
              <h2 className="text-3xl font-bold mb-2 capitalize group-hover:text-sky-400 transition-colors">{slug.replace(/-/g, ' ')}</h2>
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-sky-500" />
                <span>Bespoke Interactive Experience</span>
              </div>
            </Link>
          ))}
        </div>
        
        {decks.length === 0 && (
          <p className="text-zinc-500">No client pitch decks found in /app/decks/.</p>
        )}
      </div>
    </div>
  );
}