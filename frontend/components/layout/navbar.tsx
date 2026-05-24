"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Button } from "@/components/ui/button"
import { List, X, CaretRight } from "phosphor-react"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "relative text-[15px] font-medium transition-colors hover:text-[#ffffff]",
        isActive ? "text-[#ffffff]" : "text-text-secondary"
      )}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent" />
      )}
    </Link>
  )
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300 border-b border-white/5",
          isScrolled
            ? "bg-void/90 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            : "bg-void/40 backdrop-blur-sm py-5"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-1">
            <span className="font-satoshi text-2xl font-semibold text-[#ffffff] tracking-[-0.08em]">
              Reed Breed
            </span>
            <span className="h-2 w-2 rounded-full bg-accent mt-1.5" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/industries">Industries</NavLink>
            <NavLink href="/demo-lab">Demo Lab</NavLink>
            <NavLink href="/case-studies">Case Studies</NavLink>
            <NavLink href="/about">About</NavLink>
            <div className="ml-4 h-6 w-px bg-border" />
            <Button size="md" className="gap-2 whitespace-nowrap">
              Book Call <CaretRight weight="bold" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-[#ffffff] lg:hidden relative z-[70]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <List size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-void/80 backdrop-blur-md lg:hidden animate-in fade-in duration-700"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-void border-l border-white/5 p-8 pt-24 animate-in slide-in-from-right duration-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Inside Menu */}
            <button
              className="absolute top-6 right-6 text-[#ffffff] hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-start gap-8">
              <Link href="/services" className="text-[15px] font-medium text-text-secondary hover:text-[#ffffff] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link href="/industries" className="text-[15px] font-medium text-text-secondary hover:text-[#ffffff] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
              <Link href="/demo-lab" className="text-[15px] font-medium text-text-secondary hover:text-[#ffffff] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Demo Lab</Link>
              <Link href="/case-studies" className="text-[15px] font-medium text-text-secondary hover:text-[#ffffff] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
              <Link href="/about" className="text-[15px] font-medium text-text-secondary hover:text-[#ffffff] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <div className="w-full pt-8 border-t border-white/5">
                <Button className="w-full gap-2 whitespace-nowrap" size="lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Call <CaretRight weight="bold" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
