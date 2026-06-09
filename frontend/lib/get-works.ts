import fs from 'fs/promises';
import path from 'path';

export interface WorkItem {
  id: string;
  slug: string;
  type: 'deck' | 'demo' | 'web' | 'video' | 'live';
  title: string;
  thumbnail: string;
  href: string;
  isExternal?: boolean;
}

export async function getWorks(): Promise<WorkItem[]> {
  const works: WorkItem[] = [];
  let baseDir = path.join(process.cwd(), 'app');
  
  // Resiliency: Check if 'app' exists, otherwise try 'frontend/app' (for monorepo/root execution)
  try {
    await fs.access(baseDir);
  } catch {
    baseDir = path.join(process.cwd(), 'frontend', 'app');
  }

  // 1. Process Folder-based Categories
  const categories = [
    { dir: 'decks', type: 'deck' as const },
    { dir: 'demo', type: 'demo' as const },
    { dir: 'web', type: 'web' as const }
  ];

  for (const cat of categories) {
    const fullPath = path.join(baseDir, cat.dir);
    try {
      const items = await fs.readdir(fullPath);
      for (const item of items) {
        if (item.startsWith('.') || ['components', 'assets', 'hooks', 'page.tsx'].includes(item)) {
          continue;
        }

        const itemPath = path.join(fullPath, item);
        const stats = await fs.stat(itemPath);

        if (stats.isDirectory()) {
          let title = item.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          let thumbnail = "/work1.jpg";

          try {
            const metadataPath = path.join(itemPath, 'metadata.json');
            const metadataRaw = await fs.readFile(metadataPath, 'utf-8');
            const metadata = JSON.parse(metadataRaw);
            if (metadata.title) title = metadata.title;
            if (metadata.thumbnail) thumbnail = metadata.thumbnail;
          } catch (e) {}

          works.push({
            id: `${cat.type}-${item}`,
            slug: item,
            type: cat.type,
            title,
            thumbnail,
            href: `/${cat.dir}/${item}`
          });
        }
      }
    } catch (err) {
      console.error(`Error reading ${cat.dir} directory:`, err);
    }
  }

  // 2. Process External Links (Video/Live)
  try {
    const linksPath = path.join(baseDir, 'links.json');
    const linksRaw = await fs.readFile(linksPath, 'utf-8');
    const externalLinks = JSON.parse(linksRaw);
    
    if (Array.isArray(externalLinks)) {
      externalLinks.forEach((link: any, index: number) => {
        works.push({
          id: `external-${index}`,
          slug: `link-${index}`,
          type: link.type || 'live',
          title: link.title || 'Untitled Project',
          thumbnail: link.thumbnail || '/work1.jpg',
          href: link.url || '#',
          isExternal: true
        });
      });
    }
  } catch (e) {
    // links.json might not exist yet
  }

  return works;
}
