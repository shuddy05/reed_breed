"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { StrokedText } from "@/components/ui/stroked-text"

import { Button } from "@/components/ui/button"

const posts = [
  {
    id: "blog-1",
    slug: "curating-a-workplace",
    category: "Marketing",
    title: "Curating a workplace that inspires all of us",
    image: "/blog1.jpg",
    link: "/blog/curating-a-workplace"
  },
  {
    id: "blog-2",
    slug: "designers-who-changed-the-web",
    category: "Design",
    title: "Designers who changed the web with Webflow",
    image: "/blog2.jpg",
    link: "/blog/designers-who-changed-the-web"
  },
  {
    id: "blog-3",
    slug: "communication-between-departments",
    category: "Code",
    title: "Communication between departments",
    image: "/blog3.jpg",
    link: "/blog/communication-between-departments"
  }
]

export const BlogSection = ({ 
  isFullPage = false, 
  excludeSlug,
  title = "Blog"
}: { 
  isFullPage?: boolean,
  excludeSlug?: string,
  title?: string
}) => {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const filteredPosts = excludeSlug 
    ? posts.filter(post => post.slug !== excludeSlug)
    : posts

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header - Only on Homepage or if specifically titled */}
        {!isFullPage && (
          <div className="flex flex-col items-center mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center gap-4 md:gap-6 mb-12"
            >
              <span 
                className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.8] tracking-tighter"
                style={{ WebkitTextStroke: '0.5px #ffffff' }}
              >
                {title === "Blog" ? "From" : title.split(' ')[0]}
              </span>
              <div className="flex items-center -mt-[1.5vw]">
                <StrokedText 
                  text={title === "Blog" ? "Blog" : title.split(' ').slice(1).join(' ')} 
                  viewBox="0 0 550 120"
                  height="clamp(5rem, 10vw, 8rem)"
                  strokeWidth={2}
                  letterSpacing="-0.05em"
                />
              </div>
            </motion.div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto mb-20">
          {filteredPosts.map((post, index) => (
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
              <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-sm bg-surface shadow-xl">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
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
                          <text className="text-[10px] font-black uppercase tracking-[0.1em] fill-void">
                            <textPath xlinkHref={`#blogCirclePath-${post.id}`}>READ MORE READ MORE</textPath>
                          </text>
                        </svg>
                     </div>
                     <div className="relative z-10 w-2 h-2 bg-void rounded-full" />
                  </div>
                </motion.div>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  {post.category}
                </span>
              </div>

              <div className="text-[8vw] md:text-[4vw] lg:text-[2.8vw] xl:text-[2.2vw] font-extrabold text-white mb-8 leading-[1.1] tracking-tighter group-hover:text-accent transition-colors">
                {post.title}
              </div>
              
              <Link href={post.link}>
                <Button 
                  className="px-8 py-4 h-auto rounded-full font-bold text-base transition-all duration-300"
                >
                  Read More
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {!isFullPage && (
          <div className="flex justify-center">
            <Link href="/blog">
              <Button 
                className="px-12 py-6 h-auto text-xl font-sans font-bold tracking-tight whitespace-nowrap rounded-full transition-all duration-500"
              >
                View All
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
