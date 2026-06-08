"use client"

import * as React from "react"
import { useParams, notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BlogSection } from "@/components/sections/blog-section"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import Image from "next/image"

// Mock data - In a real app, this would come from a CMS or API
const posts = [
  {
    slug: "curating-a-workplace",
    category: "Marketing",
    title: "Curating a workplace that inspires all of us",
    date: "March 9, 2021",
    image: "/blog1.jpg",
    content: `
      <p>Building a workspace that fosters creativity and well-being is no longer a luxury—it's a necessity. In today's fast-paced digital world, the environment in which we work significantly impacts our output and mental health.</p>
      <p>From ergonomic furniture to natural lighting, every detail matters. But beyond the physical aspects, the culture and community within the workplace are what truly inspire.</p>
      <h2>The Power of Environment</h2>
      <p>Studies have shown that natural elements like plants and sunlight can boost productivity by up to 15%. Incorporating these into your office design can create a more inviting and energizing atmosphere.</p>
      <p>However, inspiration also comes from collaboration. Open spaces that encourage spontaneous discussions and brainstorming sessions are vital for innovation.</p>
    `
  },
  {
    slug: "designers-who-changed-the-web",
    category: "Design",
    title: "Designers who changed the web with Webflow",
    date: "June 12, 2021",
    image: "/blog2.jpg",
    content: `
      <p>Webflow has revolutionized how we think about web design. By bridging the gap between visual design and production-ready code, it has empowered a new generation of designers to bring their visions to life without being held back by technical limitations.</p>
      <p>In this article, we look at some of the most influential designers who have leveraged Webflow to push the boundaries of what's possible on the web.</p>
    `
  },
  {
    slug: "communication-between-departments",
    category: "Code",
    title: "Communication between departments",
    date: "September 24, 2021",
    image: "/blog3.jpg",
    content: `
      <p>Effective communication is the backbone of any successful organization. When departments work in silos, information is lost, and efficiency drops. Breaking down these barriers is essential for growth and innovation.</p>
      <p>Whether it's between design and engineering or sales and marketing, clear and transparent communication channels ensure that everyone is aligned with the company's goals.</p>
    `
  }
]

export default function BlogPostPage() {
  const params = useParams()
  const post = posts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="relative bg-void overflow-hidden min-h-screen">
        {/* Fixed Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-accent/20 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] right-[-5%] w-[60%] h-[60%] bg-accent-dim/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[20%] w-[80%] h-[60%] bg-accent/20 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] bg-repeat" />
        </div>

        {/* Hero Section - Matching single-posts1.png */}
        <div className="container mx-auto px-6 relative z-10 pt-48 pb-24 md:pt-64 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* The Dot */}
            <div className="w-3 h-3 bg-white rounded-full mb-12" />
            
            <div className="text-[10vw] md:text-[6vw] font-black text-white leading-[1.0] tracking-tighter mb-8 max-w-5xl">
              {post.title}
            </div>
            
            <p className="text-white font-bold text-lg md:text-xl uppercase tracking-widest mb-16">
              {post.date}
            </p>

            <ScrollIndicator />
          </motion.div>
        </div>

        {/* Post Content */}
        <div className="container mx-auto px-6 relative z-10 pb-32">
          <div className="max-w-4xl mx-auto">
             {/* Feature Image */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-24 shadow-2xl"
             >
               <Image 
                 src={post.image}
                 alt={post.title}
                 fill
                 className="object-cover"
               />
             </motion.div>

             <div className="prose prose-invert prose-lg max-w-none mb-24">
                <div 
                  className="text-text-secondary text-xl md:text-2xl font-medium leading-relaxed space-y-8"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
             </div>

             {/* Author & Share Section */}
             <div className="flex flex-col md:flex-row items-center justify-between py-12 border-t border-b border-white/5 mb-32 gap-8">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-full overflow-hidden bg-surface relative">
                      <Image 
                        src="/director.jpg" 
                        alt="Author" 
                        fill 
                        className="object-cover"
                      />
                   </div>
                   <div className="text-left">
                      <p className="text-white font-bold text-lg">Ifeanyi Reed</p>
                      <p className="text-text-muted text-sm uppercase tracking-widest">Founder & Director</p>
                   </div>
                </div>
                
                <div className="flex items-center gap-4">
                   <span className="text-text-muted font-bold uppercase tracking-widest text-xs mr-4">Share this:</span>
                   {['Twitter', 'LinkedIn', 'Facebook'].map(platform => (
                      <button key={platform} className="px-6 py-2 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white hover:text-void transition-all">
                        {platform}
                      </button>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="border-t border-white/5 pt-20">
          <BlogSection title="Related Posts" excludeSlug={post.slug} />
        </div>
      </main>
      <Footer />
    </>
  )
}
