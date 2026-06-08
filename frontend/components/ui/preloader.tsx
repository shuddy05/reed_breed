"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useSearchParams } from "next/navigation"

export const Preloader = () => {
  const [loading, setLoading] = React.useState(true)
  const [isFinished, setIsFinished] = React.useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Reset preloader on route change
  React.useEffect(() => {
    setLoading(true)
    setIsFinished(false)
    
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) // Adjust timing for navigation speed

    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  React.useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setIsFinished(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [loading])

  React.useEffect(() => {
    if (!isFinished) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isFinished])

  if (isFinished) return null

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="black-bg"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, delay: 0.6 }} // Fade out exactly when blue panel covers
            className="absolute inset-0 bg-void flex items-center justify-center pointer-events-auto"
          >
            {/* Rotating Loading Circle */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path 
                    id="loaderCirclePath" 
                    d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" 
                    fill="none" 
                  />
                  <text className="text-[11px] font-black uppercase tracking-[0.1em] fill-void">
                    <textPath xlinkHref="#loaderCirclePath">LOADING LOADING LOADING </textPath>
                  </text>
                </svg>
              </motion.div>
              <div className="relative z-10 w-2 h-2 bg-void rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-in transition panel - Always present but animates once */}
      <motion.div
        initial={{ x: "100%" }}
        animate={!loading ? { x: "-100%" } : { x: "100%" }}
        transition={{ 
          duration: 1.2, 
          ease: [0.87, 0, 0.13, 1],
        }}
        className="absolute inset-0 bg-accent z-[10000] pointer-events-auto"
      />
    </div>
  )
}
