'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function EliteHospitalPitch() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const primaryColor = "#0ea5e9";

  const pages = [
    {
      id: 'hero',
      content: (
        <section className="h-full w-full flex items-center p-6 md:p-24 bg-zinc-50 relative overflow-hidden text-zinc-900">
          <div className="max-w-4xl z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="px-3 py-1 md:px-4 md:py-2 rounded-full text-sky-700 bg-sky-100 text-xs md:text-sm font-bold uppercase tracking-widest">Healthcare Innovation 2026</span>
              <h1 className="text-4xl md:text-8xl font-black mt-6 md:mt-8 mb-8 md:mb-10 text-zinc-950 leading-none">Modernizing<br/>Patient Care.</h1>
              <p className="text-lg md:text-2xl text-zinc-600 max-w-2xl leading-relaxed">
                Streamlining administrative workflows for <span className="text-sky-600 font-semibold">Elite Hospital</span> to prioritize what matters most: saving lives.
              </p>
            </motion.div>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 top-1/4 w-64 h-64 md:w-96 md:h-96 opacity-10 pointer-events-none"
          >
            <div className="absolute top-1/2 left-0 w-full h-16 md:h-24 bg-sky-500 -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-16 md:w-24 h-full bg-sky-500 -translate-x-1/2" />
          </motion.div>
        </section>
      )
    },
    {
      id: 'problem',
      content: (
        <section className="h-full w-full py-12 px-6 bg-white text-zinc-900 flex items-center">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="order-2 md:order-1">
               <div className="grid grid-cols-2 gap-4">
                  {[1,2,3,4].map(i => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="aspect-square bg-zinc-100 rounded-2xl flex items-center justify-center p-6 text-center text-xs md:text-sm font-medium text-zinc-400 border border-zinc-200">
                      Legacy System Latency #{i}
                    </motion.div>
                  ))}
               </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">The Friction Point</h2>
              <p className="text-xl md:text-3xl leading-snug text-zinc-500">
                "Patient records are scattered and inefficient. Doctors spend 40% of their time on paperwork."
              </p>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 'solution',
      content: (
        <section className="h-full w-full py-12 px-6 bg-sky-900 text-white flex items-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center">The Unified Protocol</h2>
            <div className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/20">
              <p className="text-2xl md:text-4xl text-center font-light leading-tight">
                Elite Hospital unifies health records <span className="text-sky-300 font-medium">securely and fast</span>.
              </p>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 'cta',
      content: (
        <section className="h-full w-full py-12 px-6 text-center bg-zinc-50 text-zinc-900 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Let's discuss the future.</h2>
          <button className="px-10 py-5 md:px-12 md:py-6 bg-zinc-950 text-white rounded-full text-lg md:text-xl font-bold hover:bg-zinc-800 transition-all shadow-xl">
            Schedule Consultation
          </button>
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
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
    }),
  };

  return (
    <div className="h-screen w-screen bg-white overflow-hidden">
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
            opacity: { duration: 0.3 },
            scale: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {pages[currentPage].content}
        </motion.div>
      </AnimatePresence>

      {/* Hospital Styled Controls */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 z-50">
        <button
          onClick={() => paginate(-1)}
          disabled={currentPage === 0}
          className={`flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-all ${currentPage === 0 ? 'opacity-0' : 'text-zinc-400 hover:text-sky-600'}`}
        >
          <ArrowLeft size={18} /> Prev
        </button>
        
        <div className="flex gap-2 items-center">
          {pages.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentPage ? 'w-8 bg-sky-600' : 'w-2 bg-zinc-200'}`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          disabled={currentPage === pages.length - 1}
          className={`flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-all ${currentPage === pages.length - 1 ? 'opacity-0' : 'text-zinc-900 hover:text-sky-600'}`}
        >
          Next <ArrowRight size={18} />
        </button>
      </div>

      {/* Navigation Hint for Mobile */}
      <div className="absolute top-6 right-6 md:hidden text-[10px] font-bold text-zinc-300 uppercase tracking-widest z-50">
        Slide {currentPage + 1} of {pages.length}
      </div>
    </div>
  );
}
