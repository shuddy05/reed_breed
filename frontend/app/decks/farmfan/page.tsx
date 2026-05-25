'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function FarmfanPitch() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const primaryColor = "#22c55e";
  const secondaryColor = "#14532d";

  const pages = [
    {
      id: 'hero',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 relative overflow-hidden" style={{ backgroundColor: primaryColor }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute w-[800px] h-[800px] rounded-full blur-3xl -top-1/4 -right-1/4 pointer-events-none"
            style={{ backgroundColor: secondaryColor }}
          />
          <div className="max-w-4xl w-full z-10 text-center">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-2xl font-medium mb-4 uppercase tracking-wider text-white/80">Prepared for Farmfan</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-4xl md:text-8xl font-bold mb-6 leading-tight">Grow Your Farming Business</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-lg md:text-3xl text-white/90">The all-in-one platform for modern agriculture.</motion.p>
          </div>
        </section>
      )
    },
    {
      id: 'problem',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-zinc-950">
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 border-l-8 pl-4 md:pl-6" style={{ borderColor: primaryColor }}>The Barrier</h2>
              <p className="text-xl md:text-3xl text-zinc-400 italic">"Farming is hard. Managing data shouldn't be."</p>
            </div>
            <div className="flex-1 w-full bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800">
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-4 bg-zinc-800 rounded-full w-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${Math.random() * 60 + 40}%` }} transition={{ duration: 1, delay: i * 0.2 }} className="h-full bg-green-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 'solution',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-black">
          <div className="max-w-4xl text-center">
            <h2 className="text-3xl md:text-6xl font-bold mb-10">The Farmfan Solution</h2>
            <div className="p-10 md:p-16 rounded-[2rem] md:rounded-[4rem] border-2 border-green-500/20 bg-green-500/5 backdrop-blur-sm">
              <p className="text-2xl md:text-5xl font-medium leading-tight text-green-400">
                Farmfan centralizes your data, giving you actionable insights.
              </p>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 'cta',
      content: (
        <section className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-zinc-950">
          <h2 className="text-4xl md:text-7xl font-bold mb-10">Ready to scale?</h2>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 md:px-12 md:py-6 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-green-500/40"
            style={{ backgroundColor: primaryColor }}
          >
            Book Strategy Call
          </motion.button>
        </section>
      )
    }
  ];

  const paginate = (newDirection: number) => {
    if (currentPage + newDirection >= 0 && currentPage + newDirection < pages.length) {
      setDirection(newDirection);
      setCurrentPage(currentPage + newDirection);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      rotateY: direction > 0 ? 45 : -45,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      rotateY: direction < 0 ? 45 : -45,
      opacity: 0,
    }),
  };

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden perspective-1000">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            rotateY: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {pages[currentPage].content}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-50">
        <button
          onClick={() => paginate(-1)}
          disabled={currentPage === 0}
          className={`p-4 rounded-full border border-white/20 transition-all ${currentPage === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 active:scale-90'}`}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => paginate(1)}
          disabled={currentPage === pages.length - 1}
          className={`p-4 rounded-full border border-white/20 transition-all ${currentPage === pages.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 active:scale-90'}`}
          style={{ backgroundColor: currentPage < pages.length - 1 ? primaryColor : 'transparent' }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div 
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
      
      {/* Page Counter */}
      <div className="absolute bottom-8 left-8 text-sm font-mono text-white/50 z-50">
        {String(currentPage + 1).padStart(2, '0')} / {String(pages.length).padStart(2, '0')}
      </div>
    </div>
  );
}
