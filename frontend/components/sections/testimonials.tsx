"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote: "Since switching to Reed Breed, I feel so much more confident about our brand’s overall presentation.",
    name: "John Doe",
    company: "Rise",
    avatar: "/avatar1.jpg"
  },
  {
    quote: "The support is awesome - if you have any questions you can call the support and have the answer within 5 minutes.",
    name: "Loha Simson",
    company: "Snowflake",
    avatar: "/avatar2.jpg"
  },
  {
    quote: "Not only they are extremely knowledgable in their field, but they also has an excellent design aesthetic...",
    name: "Parid Oter",
    company: "Aoob",
    avatar: "/avatar3.jpg"
  }
]

import { StrokedText } from "@/components/ui/stroked-text"

export const Testimonials = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-48 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center"
          >
            <StrokedText 
              text="Testimonials" 
              viewBox="0 0 700 120"
              height="clamp(5rem, 10vw, 8rem)"
              strokeWidth={2}
              letterSpacing="-0.05em"
              className="-mt-[1.5vw]"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <div className="relative w-24 h-24 mb-10 overflow-hidden rounded-full">
                <Image 
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <blockquote className="text-xl md:text-2xl font-bold text-white mb-8 leading-snug tracking-tight">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              
              <div className="flex flex-col">
                <span className="text-white/60 text-lg font-medium">— {item.name}, {item.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
