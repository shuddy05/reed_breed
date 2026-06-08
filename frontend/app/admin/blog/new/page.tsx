"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  CloudArrowUp, 
  Eye, 
  Trash,
  Image as ImageIcon
} from "phosphor-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// TipTap Editor (Standard WYSIWYG for Next.js)
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import LinkExtension from '@tiptap/extension-link'

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null

  return (
    <div className="flex flex-wrap gap-2 p-4 border-b border-white/10 bg-white/[0.02]">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${editor.isActive('bold') ? 'bg-accent text-white' : 'bg-white/5 text-text-secondary hover:text-white'}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${editor.isActive('italic') ? 'bg-accent text-white' : 'bg-white/5 text-text-secondary hover:text-white'}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${editor.isActive('heading', { level: 2 }) ? 'bg-accent text-white' : 'bg-white/5 text-text-secondary hover:text-white'}`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${editor.isActive('bulletList') ? 'bg-accent text-white' : 'bg-white/5 text-text-secondary hover:text-white'}`}
      >
        Bullet List
      </button>
    </div>
  )
}

export default function NewBlogPost() {
  const [title, setTitle] = React.useState("")
  const [category, setCategory] = React.useState("Marketing")

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      LinkExtension.configure({
        openOnClick: false,
      }),
    ],
    content: '<p>Start writing your masterpiece...</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-invert prose-lg max-w-none focus:outline-none min-h-[400px] p-8',
      },
    },
  })

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Link href="/admin/blog" className="flex items-center gap-3 text-text-muted hover:text-white transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm uppercase tracking-widest">Back to CMS</span>
        </Link>

        <div className="flex gap-4">
          <button className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all text-white">
            <Eye size={20} />
            <span className="text-sm uppercase tracking-widest">Preview</span>
          </button>
          <button className="flex items-center gap-3 px-8 py-3 bg-accent text-white rounded-2xl font-bold hover:bg-accent-dim transition-all shadow-lg shadow-accent/20">
            <CloudArrowUp size={20} weight="bold" />
            <span className="text-sm uppercase tracking-widest">Publish Post</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Main Editor */}
        <div className="xl:col-span-2 space-y-8">
          <div className="space-y-4">
             <input 
              type="text" 
              placeholder="Post Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-transparent text-5xl md:text-6xl font-black text-white placeholder:text-white/10 focus:outline-none tracking-tighter"
             />
          </div>

          <div className="glass-card rounded-[32px] border-white/5 overflow-hidden bg-white/[0.01]">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-8">
           <div className="glass-card p-8 rounded-[32px] border-white/5 bg-white/[0.02] space-y-8">
              <div>
                 <label className="text-[10px] font-black uppercase tracking-widest text-text-muted block mb-4">Category</label>
                 <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-void border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
                 >
                    <option>Marketing</option>
                    <option>Design</option>
                    <option>Code</option>
                    <option>Strategy</option>
                 </select>
              </div>

              <div>
                 <label className="text-[10px] font-black uppercase tracking-widest text-text-muted block mb-4">Featured Image</label>
                 <div className="aspect-video rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-4 hover:border-accent/40 hover:bg-accent/[0.02] transition-all cursor-pointer group text-white">
                    <ImageIcon size={32} className="text-text-muted group-hover:text-accent transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-white transition-colors text-white">Upload Image</span>
                 </div>
              </div>

              <div>
                 <label className="text-[10px] font-black uppercase tracking-widest text-text-muted block mb-4">SEO Excerpt</label>
                 <textarea 
                  rows={4}
                  className="w-full bg-void border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent resize-none placeholder:text-text-muted"
                  placeholder="Short description for search results..."
                 ></textarea>
              </div>

              <div className="pt-4">
                 <button className="w-full py-4 rounded-2xl bg-error/10 text-error font-bold uppercase tracking-widest text-xs hover:bg-error hover:text-white transition-all flex items-center justify-center gap-3">
                    <Trash size={18} />
                    Discard Draft
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
