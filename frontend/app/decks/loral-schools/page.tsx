'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Calendar, MessageSquare, 
  ShieldCheck, Globe, Star, ShoppingBag, BellRing, PhoneCall, 
  Heart, Camera, TrendingUp, Users, Layout, Award, Rocket, CheckCircle2, Sparkles,
  Home, MessageCircle, GraduationCap, BookOpen, PenTool, CreditCard, BarChart3, 
  MapPin, Clock, Laptop, Zap
} from 'lucide-react';
import { 
  Phone, 
  WhatsappLogo, 
  House, 
  Handbag 
} from "phosphor-react";

// Local Assets
import logo from './assets/logo.png';
import logoGif from './assets/logo_gif.gif';
import photo1 from './assets/photo1.webp';
import photo2 from './assets/photo2.webp';
import photo3 from './assets/photo3.webp';
import photo4 from './assets/photo4.webp';
import photo5 from './assets/photo5.webp';
import photo6 from './assets/photo6.webp';
import photo7 from './assets/photo7.webp';
import photo8 from './assets/photo8.webp';
import photo9 from './assets/photo9.webp';
import photo10 from './assets/photo10.webp';
import photo11 from './assets/photo11.webp';
import photo12 from './assets/photo12.webp';
import photo13 from './assets/photo13.webp';
import photo14 from './assets/photo14.webp';

// --- Sub-Components ---

const ImageSlideshow = ({ images, interval = 5000 }: { images: any[], interval?: number }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].src || images[index]}
          src={images[index].src || images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Loral School"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
    </div>
  );
};

const FloatingElement = ({ children, delay = 0, top, left }: { children: React.ReactNode, delay?: number, top: string, left: string }) => (
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
    className="absolute pointer-events-none z-0"
    style={{ top, left }}
  >
    {children}
  </motion.div>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className={`bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

const ConfettiPiece = ({ color, x, delay, size, speed, blur, borderRadius }: { color: string, x: string, delay: number, size: number, speed: number, blur: string, borderRadius: string }) => (
  <motion.div
    initial={{ y: -20, opacity: 0, rotate: 0 }}
    animate={{ 
      y: ['-10vh', '110vh'],
      opacity: [0, 1, 1, 0.8, 0],
      rotate: [0, 360, 720, 1080],
      rotateX: [0, 180, 360],
      rotateY: [0, 360, 0],
      x: [x, `calc(${x} + ${Math.random() * 100 - 50}px)`, x],
      filter: [
        `blur(${blur}) brightness(1.2)`,
        `blur(${blur}) brightness(2)`,
        `blur(${blur}) brightness(1.2)`,
        `blur(${blur}) brightness(2)`,
        `blur(${blur}) brightness(1.2)`
      ]
    }}
    transition={{ 
      duration: speed, 
      repeat: Infinity, 
      delay, 
      ease: "linear" 
    }}
    className="fixed pointer-events-none z-[60]"
    style={{ 
      backgroundColor: color, 
      left: x, 
      width: size, 
      height: size * (0.5 + Math.random()), 
      filter: `blur(${blur}) brightness(1.2)`,
      borderRadius,
      boxShadow: `0 0 10px ${color}40`
    }}
  />
);

const ConfettiLayer = () => {
  const pieces = Array.from({ length: 50 }); 
  const confettiColors = ["#D31F26", "#3B449B", "#F0A818", "#C69E33", "#FFFFFF", "#FF6B6B"];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[60]">
      {pieces.map((_, i) => {
        const size = 4 + Math.random() * 8;
        const speed = 10 + Math.random() * 15;
        const blur = Math.random() > 0.8 ? '2px' : '0px'; // Depth of field
        const borderRadius = Math.random() > 0.5 ? '50%' : '1px'; // Irregular shapes
        return (
          <ConfettiPiece 
            key={i} 
            color={confettiColors[i % confettiColors.length]} 
            x={`${Math.random() * 100}vw`}
            delay={Math.random() * -30}
            size={size}
            speed={speed}
            blur={blur}
            borderRadius={borderRadius}
          />
        );
      })}
    </div>
  );
};

// --- Main Page Component ---

export default function LoralSchoolsPitch() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Loral Brand Colors
  const colors = {
    red: "#D31F26",
    royalBlue: "#3B449B",
    gold: "#F0A818",
    mutedGold: "#C69E33",
    white: "#FFFFFF",
  };

  const images = {
    campus: [photo1, photo2, photo3],
    students: [photo4, photo5, photo6],
    classroom: [photo7, photo8, photo9],
    tech: [photo10, photo11, photo12],
    activities: [photo13, photo14]
  };

  const initiatives = [
    {
      title: "Digital Admissions Conversion System",
      desc: "Transform every inquiry into a structured enrollment journey through automated follow-ups and parent engagement workflows.",
      impact: ["Higher admission conversion", "Faster response time", "Reduced leakage", "Increased capacity"],
      icon: <Users size={32} />,
      photo: photo4
    },
    {
      title: "Parent Trust & Visibility Experience",
      desc: "A modern parent communication ecosystem with real-time academic updates, attendance visibility, and performance tracking.",
      impact: ["Stronger confidence", "Increased retention", "Reduced gaps", "Premium reputation"],
      icon: <Eye size={32} />,
      photo: photo5
    },
    {
      title: "Smart Examination & Result Processing",
      desc: "Digitize assessments, grading workflows, and report generation to improve speed, accuracy, and decision-making.",
      impact: ["Faster processing", "Reduced workload", "Better analysis", "Improved integrity"],
      icon: <BookOpen size={32} />,
      photo: photo7
    },
    {
      title: "Premium School Branding & Media Positioning",
      desc: "Build a stronger public image through strategic storytelling, student showcases, and digital visibility initiatives.",
      impact: ["Increased visibility", "Stronger positioning", "Higher parent interest", "Competitive edge"],
      icon: <Camera size={32} />,
      photo: photo1
    },
    {
      title: "Student Performance Intelligence System",
      desc: "Track student patterns, strengths, weaknesses, and engagement to enable early intervention and better outcomes.",
      impact: ["Improved performance", "Early intervention", "Better decision-making", "Higher consistency"],
      icon: <TrendingUp size={32} />,
      photo: photo8
    },
    {
      title: "Digital Classroom Coordination",
      desc: "Modernize lesson delivery, assignment management, and learning continuity across physical and digital environments.",
      impact: ["Teaching consistency", "Higher completion rates", "Stronger coordination", "Enhanced continuity"],
      icon: <Laptop size={32} />,
      photo: photo9
    },
    {
      title: "Online Fee Payment & Financial Tracking",
      desc: "Simplify school payments with structured digital payment systems, automated confirmations, and reminders.",
      impact: ["Faster fee collection", "Reduced disputes", "Improved accountability", "Parent convenience"],
      icon: <CreditCard size={32} />,
      photo: photo10
    },
    {
      title: "School Website & Digital Identity Upgrade",
      desc: "Redesign the school’s online presence to reflect the quality and standards of a leading institution.",
      impact: ["Stronger first impression", "Increased inquiries", "Prospective trust", "Online credibility"],
      icon: <Globe size={32} />,
      photo: photo2
    },
    {
      title: "Academic Reporting & Analytics Dashboard",
      desc: "Centralized academic insights across classes, subjects, teachers, attendance, and student performance.",
      impact: ["Faster decision-making", "Better monitoring", "Improved oversight", "Trend analysis"],
      icon: <BarChart3 size={32} />,
      photo: photo11
    },
    {
      title: "Multi-Campus Digital Coordination System",
      desc: "A centralized digital structure for coordination, reporting, and operational visibility across all school branches.",
      impact: ["Campus coordination", "Standardized processes", "Executive oversight", "Scalability"],
      icon: <Zap size={32} />,
      photo: photo3
    },
    {
      title: "Biometric Attendance & Access Control",
      desc: "Implement biometric verification for students, staff, and authorized access points institution-wide.",
      impact: ["Accurate records", "Improved accountability", "Reduced errors", "Enhanced security"],
      icon: <ShieldCheck size={32} />,
      photo: photo12
    },
    {
      title: "Smart Transportation & Route Management",
      desc: "Digitize school bus coordination through route optimization, driver monitoring, and parent visibility.",
      impact: ["Transport efficiency", "Reduced delays", "Fleet coordination", "Safety confidence"],
      icon: <MapPin size={32} />,
      photo: photo13
    },
    {
      title: "Student After-School Engagement Suite",
      desc: "Structured after-school engagement including supervised study, digital learning, and enrichment experiences.",
      impact: ["Increased engagement", "Stronger reinforcement", "Social development", "Revenue growth"],
      icon: <Clock size={32} />,
      photo: photo14
    },
    {
      title: "Software Engineering & Tech Development",
      desc: "Practical exposure to software engineering, coding, and emerging technology skills through learning pathways.",
      impact: ["Future-ready skills", "Innovation appeal", "Stronger STEM", "Competitiveness"],
      icon: <PenTool size={32} />,
      photo: photo10
    },
    {
      title: "Academic Motivation & Competitive Learning",
      desc: "A structured academic motivation ecosystem using intra-class competitions and achievement tracking.",
      impact: ["Student enthusiasm", "Performance culture", "Healthy competition", "Consistency"],
      icon: <Award size={32} />,
      photo: photo6
    }
  ];

  const pages = [
    {
      id: 'cover',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 relative overflow-hidden bg-white">
          <ImageSlideshow images={images.campus} interval={7000} />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/40 to-transparent" />
          
          <div className="max-w-4xl w-full z-10 text-left px-4 md:px-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="w-24 h-24 mb-8 flex items-center justify-center">
                <img src={logo.src} className="w-full h-full object-contain" alt="Loral Logo" />
              </div>
              <p className="text-sm md:text-lg font-bold uppercase tracking-[0.4em] mb-4" style={{ color: colors.royalBlue }}>PROPOSED DIGITAL & GROWTH INITIATIVES</p>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-5xl md:text-8xl font-serif mb-8 text-white leading-tight font-black">
              LORAL <br/><span style={{ color: colors.gold }}>INTERNATIONAL</span> <br/>SCHOOLS
            </motion.h1>
            <motion.div 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ delay: 1, duration: 1 }}
              className="h-2 w-48 origin-left rounded-full" 
              style={{ backgroundColor: colors.red }} 
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-12 right-12 z-10 hidden md:block"
          >
            <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center p-2 backdrop-blur-sm">
                <img src={logoGif.src} className="w-full h-full object-contain opacity-80" alt="Loral GIF" />
            </div>
          </motion.div>
        </section>
      )
    },
    {
      id: '2-landscape',
      content: (
        <section className="h-full w-full flex items-center justify-center p-8 bg-zinc-50 relative overflow-hidden">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center z-10">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif text-blue-950 font-black leading-tight tracking-tight">
                The Evolving Educational Landscape
              </h2>
              <div className="space-y-4">
                {[
                  "Parents expect instant, digital-first communication",
                  "Data-driven decisions are now a mandatory baseline",
                  "Excellence is measured by visibility and transparency",
                  "Competitive markets require modern institutional systems"
                ].map((text, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.red }} />
                    <span className="text-xl text-blue-900/70 font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                 <img src={photo2.src} className="w-full h-full object-cover" alt="Opportunity" />
                 <div className="absolute inset-0 bg-blue-900/20" />
              </div>
              <div className="absolute -bottom-6 -left-6 p-10 bg-white rounded-3xl shadow-xl z-20 border-l-8" style={{ borderLeftColor: colors.gold }}>
                 <p className="text-2xl font-serif italic font-bold text-blue-950">"The standard for premium education has shifted."</p>
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '3-mission',
      content: (
        <section className="h-full w-full flex items-center justify-center p-8 bg-blue-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <img src={photo1.src} className="w-full h-full object-cover grayscale" alt="Mission" />
          </div>
          <div className="max-w-4xl text-center z-10">
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="mb-10">
                <GraduationCap size={80} style={{ color: colors.gold }} className="mx-auto" />
             </motion.div>
             <h2 className="text-4xl md:text-7xl font-serif font-black mb-8 leading-tight">A Mission for Digital Excellence</h2>
             <p className="text-2xl md:text-3xl font-light text-blue-100 leading-relaxed mb-12">
               We aren't just building a website. We are building an intelligent, integrated ecosystem that powers growth, trust, and academic superiority.
             </p>
             <div className="flex flex-wrap justify-center gap-8">
                {["Automation", "Intelligence", "Visibility"].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <Sparkles size={24} style={{ color: colors.gold }} />
                      <span className="text-xl font-bold uppercase tracking-widest">{item}</span>
                   </div>
                ))}
             </div>
          </div>
        </section>
      )
    },
    {
      id: '4-strategy',
      content: (
        <section className="h-full w-full flex items-center justify-center p-8 bg-white overflow-hidden relative">
          <div className="max-w-6xl w-full z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-blue-950 font-black mb-12 text-center">Our Strategic Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Parent Experience", desc: "Admissions & Communication", icon: <Users /> },
                 { title: "Academic Rigor", desc: "Exams, Grading & Intelligence", icon: <GraduationCap /> },
                 { title: "Ops Efficiency", desc: "Finance, HR & Logistics", icon: <Zap /> }
               ].map((item, i) => (
                 <motion.div 
                  key={i} 
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[3rem] bg-zinc-50 border border-zinc-100 shadow-sm text-center flex flex-col items-center"
                 >
                    <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-white" style={{ backgroundColor: colors.royalBlue }}>
                       {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-950 mb-3">{item.title}</h3>
                    <p className="text-blue-900/50 font-medium">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
            <p className="mt-12 text-center text-xl text-blue-900/30 font-bold uppercase tracking-widest">15 Targeted Initiatives</p>
          </div>
        </section>
      )
    },
    {
      id: 'vision',
      content: (
        <section className="h-full w-full flex items-center justify-center p-8 bg-white relative overflow-hidden">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center z-10">
            <div className="space-y-10">
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-7xl font-serif text-blue-950 font-black leading-none italic">
                Leading the Next Decade.
              </motion.h2>
              <div className="space-y-6">
                {[
                  "Digitally Efficient Operations",
                  "Operationally Intelligent Oversight",
                  "High Visibility & Branding",
                  "Deep Parent Trust & Partnership",
                  "STEM & Tech Excellence"
                ].map((text, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + (i * 0.1) }} className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0" style={{ backgroundColor: colors.royalBlue }}>
                       <CheckCircle2 size={24} />
                    </div>
                    <span className="text-xl md:text-2xl text-blue-900 font-bold tracking-tight">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                  <ImageSlideshow images={images.students} />
               </div>
               <div className="absolute -inset-10 bg-blue-50 rounded-[5rem] -rotate-6 z-0" />
               <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border-4 border-dashed border-red-500/20 rounded-full" 
               />
            </div>
          </div>
        </section>
      )
    },
    // Dynamically generate the 15 initiative slides
    ...initiatives.map((item, index) => ({
      id: `initiative-${index + 1}`,
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-zinc-50 relative overflow-hidden">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                 <div className="inline-block px-6 py-2 rounded-full text-sm font-black text-white shadow-xl" style={{ backgroundColor: colors.red }}>INITIATIVE {String(index + 1).padStart(2, '0')}</div>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-blue-950 font-black leading-tight tracking-tight">
                {item.title}
              </h2>
              <p className="text-2xl text-blue-900/60 leading-relaxed font-medium">
                {item.desc}
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {item.impact.map((text, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="p-5 bg-white rounded-2xl shadow-sm border border-blue-100 flex items-center gap-3 group"
                    >
                       <div className="w-2 h-2 rounded-full group-hover:scale-150 transition-all" style={{ backgroundColor: colors.gold }} />
                       <span className="text-sm font-bold text-blue-950 tracking-tight">{text}</span>
                    </motion.div>
                 ))}
              </div>
            </div>
            <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                   <img src={item.photo.src} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]" alt={item.title} />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />
                   <div className="absolute bottom-8 left-8 text-white">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                         {item.icon}
                      </div>
                      <p className="text-xs uppercase tracking-widest font-bold opacity-70">Loral Digital</p>
                      <p className="text-lg font-serif font-black italic">Transformation Pathway</p>
                   </div>
                </div>
                <div className="absolute -inset-4 border-2 border-dashed border-blue-900/20 rounded-[3.5rem] rotate-3 -z-10" />
            </div>
          </div>
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(${colors.royalBlue} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        </section>
      )
    })),
    {
      id: 'closing',
      content: (
        <section className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-blue-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <img src={photo1.src} className="w-full h-full object-cover grayscale blur-sm" alt="bg" />
          </div>
          <div className="absolute inset-0 bg-blue-950/80" />
          
          <div className="z-10 max-w-5xl px-4">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="mb-10 inline-block">
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={logo.src} className="w-full h-full object-contain" alt="Loral" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-8xl font-serif mb-10 leading-[1.1] text-white drop-shadow-2xl font-black">Ready to build the future of Loral?</h2>
            <p className="text-lg md:text-xl text-blue-200 mb-20 font-medium uppercase tracking-[0.2em] max-w-3xl mx-auto drop-shadow-lg leading-relaxed">Positioning Loral International Schools as a modern digital institution for the next decade.</p>
            
            <div className="flex flex-col items-center gap-12 mt-12">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#fff', color: colors.royalBlue }}
                whileTap={{ scale: 0.98 }}
                className="px-14 py-4 rounded-xl text-lg font-black uppercase tracking-[0.2em] transition-all border border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                style={{ backgroundColor: colors.red, color: '#fff', borderColor: colors.red }}
              >
                Let's Begin
              </motion.button>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                {[
                  { label: "Phone", icon: <Phone size={24} weight="duotone" />, href: "tel:+2348035428870" },
                  { label: "WhatsApp", icon: <WhatsappLogo size={24} weight="duotone" />, href: "https://wa.me/2348035428870" },
                  { label: "About", icon: <House size={24} weight="duotone" />, href: "/" },
                  { label: "Pricing", icon: <Handbag size={24} weight="duotone" />, href: "/#pricing" }
                ].map((cta, i) => (
                  <motion.a
                    key={i}
                    href={cta.href}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div 
                      className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-xl group-hover:border-white group-hover:bg-white transition-all duration-500"
                      style={{ color: colors.gold }}
                    >
                      {cta.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300 group-hover:text-white transition-colors">{cta.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
    }
  ];

  const paginate = (newDirection: number) => {
    if (currentPage + newDirection >= 0 && currentPage + newDirection < pages.length) {
      setDirection(newDirection);
      setCurrentPage(currentPage + newDirection);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      rotateY: direction > 0 ? 45 : -45,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      rotateY: direction < 0 ? 45 : -45,
      opacity: 0,
    }),
  };

  // Pre-calculate page count for display
  const totalPages = pages.length;

  return (
    <div className="h-screen w-screen bg-white text-zinc-900 overflow-hidden perspective-1000 selection:bg-blue-100 selection:text-blue-600">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            rotateY: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {pages[currentPage].content}
        </motion.div>
      </AnimatePresence>

      {/* Global Cinematic Confetti Layer */}
      <ConfettiLayer />

      {/* Brand Logo - Positioned just above the progress indicators */}
      <div className="absolute bottom-20 md:bottom-28 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 opacity-30 hover:opacity-100 transition-opacity">
        <span className="font-sans text-lg font-bold text-white tracking-[-0.08em]">
          Reed Breed
        </span>
        <div className="w-1.5 h-1.5 rounded-full mt-1" style={{ backgroundColor: '#146ef5' }} />
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 flex justify-center items-center gap-4 md:gap-16 z-50">
        <button
          onClick={() => paginate(-1)}
          disabled={currentPage === 0}
          className={`group flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black transition-all ${currentPage === 0 ? 'opacity-0' : 'text-zinc-400 hover:text-blue-900'}`}
        >
          <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-blue-900 transition-colors"><ChevronLeft size={16} /></div> 
          <span className="hidden md:inline">Previous</span>
        </button>
        
        <div className="flex gap-2 md:gap-3 overflow-x-auto no-scrollbar max-w-[250px] md:max-w-none px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50">
            {pages.map((_, i) => (
                <div 
                    key={i} 
                    onClick={() => {
                        setDirection(i > currentPage ? 1 : -1);
                        setCurrentPage(i);
                    }}
                    className={`h-2 transition-all duration-500 rounded-full cursor-pointer ${i === currentPage ? 'w-10 md:w-16' : 'w-2 bg-zinc-200 hover:bg-zinc-300'}`}
                    style={{ backgroundColor: i === currentPage ? colors.royalBlue : undefined }}
                />
            ))}
        </div>

        <button
          onClick={() => paginate(1)}
          disabled={currentPage === totalPages - 1}
          className={`group flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black transition-all ${currentPage === totalPages - 1 ? 'opacity-0' : 'text-zinc-900'}`}
        >
          <span className="hidden md:inline" style={{ color: currentPage < totalPages - 1 ? colors.royalBlue : undefined }}>Next Slide</span>
          <div className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:scale-110 transition-all" style={{ borderColor: colors.royalBlue, backgroundColor: colors.royalBlue, color: 'white' }}><ChevronRight size={16} /></div>
        </button>
      </div>

      {/* Header Branding */}
      <div className="absolute top-6 md:top-10 left-6 md:left-12 z-50 flex items-center gap-6">
        <motion.div 
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center" 
        >
          <img src={logo.src} className="w-full h-full object-contain" alt="Loral" />
        </motion.div>
        <div className="hidden md:block">
           <p className="text-[10px] uppercase tracking-[0.4em] font-black text-blue-950">Loral International Schools</p>
           <p className="text-[8px] uppercase tracking-[0.3em] font-bold text-blue-900/40">Digital Proposal 2026</p>
        </div>
      </div>
      
      {/* Slide Number */}
      <div className="absolute top-6 md:top-10 right-6 md:right-12 z-50">
        <div className="px-4 py-2 bg-blue-950 text-white rounded-full text-[10px] font-black tracking-widest shadow-xl">
          {String(currentPage + 1).padStart(2, '0')} <span className="text-blue-900">/</span> {totalPages}
        </div>
      </div>
    </div>
  );
}

// Missing icons helper
function Eye(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
