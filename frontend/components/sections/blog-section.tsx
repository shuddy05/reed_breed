"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { StrokedText } from "@/components/ui/stroked-text"

const posts = [
  {
    id: "blog-1",
    category: "Marketing",
    title: "Curating a workplace that inspires all of us",
    image: "/blog1.jpg",
    link: "#"
  },
  {
    id: "blog-2",
    category: "Design",
    title: "Designers who changed the web with Webflow",
    image: "/blog2.jpg",
    link: "#"
  },
  {
    id: "blog-3",
    category: "Code",
    title: "Communication between departments",
    image: "/blog3.jpg",
    link: "#"
  }
]

export const BlogSection = () => {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center gap-4 mb-10"
          >
            <span 
              className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.8] tracking-tighter"
              style={{ WebkitTextStroke: '0.5px #ffffff' }}
            >
              From
            </span>
            <div className="flex items-center -mt-[1.5vw]">
              <StrokedText 
                text="Blog" 
                viewBox="0 0 350 120"
                height="clamp(5rem, 10vw, 8rem)"
                strokeWidth={2}
                letterSpacing="-0.05em"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/blog"
              className="px-8 py-3 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent/90 transition-colors"
            >
              View All
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
              onMouseMove={(e) => handleMouseMove(e, post.id)}
              className="flex flex-col group cursor-none"
            >
              <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-sm">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Custom Cursor Badge */}
                <motion.div
                  className="pointer-events-none absolute z-50 flex items-center justify-center"
                  animate={{
                    x: mousePos.x - 40,
                    y: mousePos.y - 40,
                    scale: hoveredId === post.id ? 1 : 0,
                    opacity: hoveredId === post.id ? 1 : 0,
                  }}
                  transition={{ type: "spring", damping: 30, stiffness: 250, mass: 0.5 }}
                >
                  <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                     <div className="absolute inset-0 flex items-center justify-center animate-[spin_8s_linear_infinite]">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path id={`blogCirclePath-${post.id}`} d="M 50, 50 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" fill="none" />
                          <text className="text-[12px] font-black uppercase tracking-[0.1em] fill-void">
                            <textPath xlinkHref={`#blogCirclePath-${post.id}`}>READ MORE READ MORE</textPath>
                          </text>
                        </svg>
                     </div>
                     <div className="relative z-10 w-2 h-2 bg-void rounded-full" />
                  </div>
                </motion.div>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-void border border-white/40 rounded-full" />
                <span className="text-white font-medium">{post.category}</span>
              </div>

              <div className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight tracking-tight group-hover:text-accent transition-colors">
                {post.title}
              </div>
              
              <Link 
                href={post.link}
                className="w-max px-6 py-2 bg-accent text-white rounded-full font-bold hover:bg-accent/90 transition-colors"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
