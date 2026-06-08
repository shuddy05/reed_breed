"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const companies = [
  { name: "Snowflake", src: "/snowflakes.svg", width: 140, height: 40 },
  { name: "MOVE", src: "/move.png", width: 70, height: 28 },
  { name: "SPAGE", src: "/spage.png", width: 120, height: 40 },
  { name: "webflow", src: "/webflow.png", width: 120, height: 30 },
  { name: "Rise", src: "/rise.svg", width: 140, height: 50 },
  { name: "AOOB", src: "/aoob.png", width: 110, height: 40 },
]

export const TrustedBy = () => {
  return (
    <div className="bg-transparent py-24 md:py-32 lg:py-48 border-y border-border/10">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <p className="text-center text-white/40 text-lg md:text-xl font-medium mb-20 tracking-tight">
            Teams and companies we work with
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-24 items-center justify-items-center w-full">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, filter: "grayscale(100%) brightness(50%)" }}
                whileInView={{ opacity: 1, filter: "grayscale(100%) brightness(100%)" }}
                whileHover={{ filter: "grayscale(0%) brightness(120%)", scale: 1.05 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="transition-all duration-500 cursor-default flex items-center justify-center"
              >
                <Image
                  src={company.src}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
