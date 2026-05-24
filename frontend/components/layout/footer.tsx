"use client"

import * as React from "react"
import Link from "next/link"
import { LinkedinLogo, TwitterLogo, InstagramLogo, WhatsappLogo } from "phosphor-react"

export const Footer = () => {
  return (
    <footer className="bg-void border-t border-accent/20 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="font-satoshi text-2xl font-semibold text-[#ffffff] tracking-[-0.08em]">
                Reed Breed
              </span>
              <span className="h-2 w-2 rounded-full bg-accent mt-1.5" />
            </Link>
            <p className="text-text-secondary max-w-sm mb-8">
              &quot;Growth Systems for the Modern SME&quot;
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com/company/reedbreed" target="_blank" className="text-text-muted hover:text-accent transition-colors"><LinkedinLogo size={24} /></Link>
              <Link href="https://twitter.com/reedbreed" target="_blank" className="text-text-muted hover:text-accent transition-colors"><TwitterLogo size={24} /></Link>
              <Link href="https://instagram.com/reedbreed" target="_blank" className="text-text-muted hover:text-accent transition-colors"><InstagramLogo size={24} /></Link>
              <Link href="https://wa.me/2348035428870" target="_blank" className="text-text-muted hover:text-accent transition-colors"><WhatsappLogo size={24} /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-satoshi font-bold text-[#ffffff] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-text-secondary hover:text-[#ffffff] transition-colors">About</Link></li>
              <li><Link href="/case-studies" className="text-text-secondary hover:text-[#ffffff] transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-text-secondary hover:text-[#ffffff] transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-text-secondary hover:text-[#ffffff] transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-satoshi font-bold text-[#ffffff] mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-text-secondary hover:text-[#ffffff] transition-colors">Lead Generation</Link></li>
              <li><Link href="#" className="text-text-secondary hover:text-[#ffffff] transition-colors">AI Automation</Link></li>
              <li><Link href="#" className="text-text-secondary hover:text-[#ffffff] transition-colors">CRM Workflows</Link></li>
              <li><Link href="#" className="text-text-secondary hover:text-[#ffffff] transition-colors">Campaigns</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-body-sm text-text-muted">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <span>Lagos, Nigeria</span>
            <a href="mailto:hello@reedbreed.com" className="hover:text-text-secondary transition-colors">hello@reedbreed.com</a>
            <a href="tel:+2348035428870" className="hover:text-text-secondary transition-colors">+234 803 542 8870</a>
          </div>
          <p>© 2025 Reed Breed Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
