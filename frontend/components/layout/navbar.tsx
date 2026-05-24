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

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-200 border-t border-white/5",
        isScrolled
          ? "bg-void/85 backdrop-blur-3xl py-4"
          : "bg-transparent py-6"
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
          className="text-[#ffffff] lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-void/98 flex flex-col items-center justify-center gap-8 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <button
            className="absolute top-6 right-6 text-[#ffffff]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8">
            <Link href="/services" className="text-2xl font-semibold text-[#ffffff]" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/industries" className="text-2xl font-semibold text-[#ffffff]" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
            <Link href="/demo-lab" className="text-2xl font-semibold text-[#ffffff]" onClick={() => setIsMobileMenuOpen(false)}>Demo Lab</Link>
            <Link href="/case-studies" className="text-2xl font-semibold text-[#ffffff]" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
            <Link href="/about" className="text-2xl font-semibold text-[#ffffff]" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Button className="mt-4 gap-2 whitespace-nowrap" size="lg" onClick={() => setIsMobileMenuOpen(false)}>
              Book Call <CaretRight weight="bold" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
