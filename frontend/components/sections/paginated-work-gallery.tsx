"use client"

import * as React from "react"
import { OurWork } from "./our-work"
import { WorkItem } from "@/lib/get-works"
import { motion, AnimatePresence } from "framer-motion"

export const PaginatedWorkGallery = ({ works }: { works: WorkItem[] }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;
  
  const totalPages = Math.ceil(works.length / itemsPerPage);
  const paginatedWorks = works.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="relative z-10 pb-32">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <OurWork works={paginatedWorks} />
        </motion.div>
      </AnimatePresence>
      
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          {currentPage > 1 && (
            <button 
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold uppercase tracking-widest text-xs text-white"
            >
              Previous
            </button>
          )}
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${
                  currentPage === i + 1 
                    ? "bg-accent text-white" 
                    : "bg-white/5 text-text-muted hover:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {currentPage < totalPages && (
            <button 
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold uppercase tracking-widest text-xs text-white"
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  )
}
