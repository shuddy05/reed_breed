'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  WhatsappLogo, 
  House, 
  Handbag,
  UserPlus,
  Heart,
  Exam,
  Megaphone,
  ChartLineUp,
  Desktop,
  CreditCard,
  Globe,
  ChartPieSlice,
  ChartBar,
  SquaresFour,
  Fingerprint,
  Bus,
  Timer,
  Code,
  Trophy,
  CaretRight,
  CaretLeft,
  Sparkle,
  GraduationCap,
  CheckCircle,
  Lightning,
  ShoppingBag,
  Star,
  Calendar,
  ChatCircleText,
  Bell,
  IdentificationCard,
  Rocket,
  Brain,
  Handshake,
  Atom
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

const DigitalEcosystemGraphic = () => (
  <div className="relative w-full max-w-2xl mx-auto h-64 md:h-80 bg-blue-900/20 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
    <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
      <div className="w-2 h-2 rounded-full bg-red-400" />
      <div className="w-2 h-2 rounded-full bg-yellow-400" />
      <div className="w-2 h-2 rounded-full bg-green-400" />
      <div className="mx-auto text-[10px] uppercase tracking-widest opacity-30 font-bold font-sans">loral-digital-intelligence.os</div>
    </div>
    
    <div className="p-6 grid grid-cols-3 h-full gap-4">
      <div className="flex flex-col items-center justify-center border-r border-white/5 pr-4">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="relative mb-4">
          <div className="w-16 h-16 border-4 border-dashed border-red-500/40 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
             <Lightning weight="duotone" size={24} className="text-red-500" />
          </div>
        </motion.div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 font-sans">Automation</p>
      </div>

      <div className="flex flex-col items-center justify-center border-r border-white/5 px-4">
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative mb-4">
          <div className="w-20 h-20 bg-blue-500/10 rounded-full blur-xl absolute -inset-2" />
          <ChartBar weight="duotone" size={40} className="text-blue-400 relative z-10" />
        </motion.div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 font-sans">Intelligence</p>
      </div>

      <div className="flex flex-col items-center justify-center pl-4">
        <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative mb-4">
          <Globe weight="duotone" size={40} style={{ color: '#F0A818' }} />
        </motion.div>
        <p className="text-[10px] font-bold uppercase tracking-widest font-sans" style={{ color: '#F0A818' }}>Visibility</p>
      </div>
    </div>
  </div>
);

const StrategicConnectivity = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div animate={{ rotate: 360, opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-dashed border-blue-900/20 rounded-full" />
    <motion.div animate={{ rotate: -360, opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-900/10 rounded-full" />
  </div>
);

const AdmissionsConversionGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] shadow-2xl border border-blue-100 overflow-hidden flex flex-col items-center justify-center p-8 gap-8">
    <div className="relative w-full flex flex-col items-center gap-2 z-10">
      {[
        { label: "Inquiries", width: "w-full", color: "bg-blue-600", opacity: "opacity-100" },
        { label: "Engagement", width: "w-4/5", color: "bg-blue-500", opacity: "opacity-80" },
        { label: "Applications", width: "w-3/5", color: "bg-blue-400", opacity: "opacity-60" },
        { label: "Enrollment", width: "w-2/5", color: "bg-red-500", opacity: "opacity-100" }
      ].map((step, i) => (
        <div key={i} className="flex flex-col items-center w-full">
          <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: "100%", opacity: 1 }} transition={{ delay: i * 0.2, duration: 1 }} className="flex flex-col items-center w-full">
            <div className={`${step.width} h-12 ${step.color} ${step.opacity} rounded-xl shadow-sm flex items-center justify-center text-white text-[10px] font-black uppercase tracking-tighter font-sans`}>
              {step.label}
            </div>
          </motion.div>
          {i < 3 && <motion.div animate={{ height: [10, 20, 10] }} transition={{ repeat: Infinity, duration: 2 }} className="w-0.5 bg-blue-100 my-1" />}
        </div>
      ))}
    </div>
    <div className="z-10 text-center">
       <p className="text-blue-900/40 font-black text-xs uppercase tracking-[0.2em] mb-1 font-sans">Efficiency</p>
       <p className="text-4xl font-black text-blue-950 font-sans">+85%</p>
    </div>
  </div>
);

const PremiumBrandingGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden p-6 flex flex-col gap-6 border border-zinc-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(211,31,38,0.05),transparent_70%)]" />
    
    {/* Animated "Visibility Waves" */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
       {[1,2,3].map(i => (
         <motion.div 
           key={i}
           animate={{ scale: [1, 2], opacity: [0.3, 0] }}
           transition={{ duration: 4, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
           className="absolute w-40 h-40 border border-blue-900/10 rounded-full"
         />
       ))}
    </div>

    {/* Header: Storytelling Sim */}
    <div className="relative z-10 flex items-center gap-3 mb-2">
       <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg">
          <Megaphone weight="duotone" size={20} />
       </div>
       <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 leading-none font-sans">Storytelling</p>
          <p className="text-xs font-bold text-blue-950 font-sans">Media Positioning</p>
       </div>
    </div>

    {/* "Live" Social Feed Simulation */}
    <div className="relative z-10 space-y-4">
       {[
         { label: "Student Showcase", img: photo5, likes: "1.2k" },
         { label: "Academic Excellence", img: photo9, likes: "850" }
       ].map((item, i) => (
         <motion.div 
           key={i}
           initial={{ x: -20, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ delay: i * 0.5 }}
           className="bg-zinc-50 rounded-2xl p-3 border border-zinc-100 shadow-sm"
         >
            <div className="flex items-center gap-3 mb-2">
               <div className="w-6 h-6 rounded-full bg-blue-900/10 overflow-hidden">
                  <img src={item.img.src} className="w-full h-full object-cover" alt="feed" />
               </div>
               <p className="text-[9px] font-black text-blue-950/60 font-sans">{item.label}</p>
               <div className="ml-auto flex items-center gap-1">
                  <Heart size={10} weight="fill" className="text-red-500" />
                  <span className="text-[8px] font-bold text-zinc-400">1.2k</span>
               </div>
            </div>
            <div className="h-24 w-full rounded-xl overflow-hidden relative">
               <img src={item.img.src} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" alt="post" />
               <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-red-500/90 text-[7px] text-white font-black tracking-widest font-sans">CAMPAIGN</div>
            </div>
         </motion.div>
       ))}
    </div>

    {/* Branding Reach Bar */}
    <div className="mt-auto bg-blue-950 rounded-2xl p-4 text-white">
       <div className="flex justify-between items-end mb-3">
          <p className="text-[8px] font-black uppercase tracking-widest text-white/40 font-sans">Reach Growth</p>
          <p className="text-sm font-black text-gold font-sans" style={{ color: '#F0A818' }}>4.5x</p>
       </div>
       <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "90%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-red-500 to-amber-500"
          />
       </div>
    </div>
  </div>
);

const ParentCommunicationGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-blue-950 rounded-[3rem] shadow-2xl overflow-hidden p-6 flex flex-col gap-6 border-4 border-blue-900/50">
    {/* Animated Header */}
    <div className="flex items-center justify-between px-2">
      <div className="flex gap-2">
         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold" style={{ color: '#F0A818' }}>
            <Heart weight="duotone" size={20} />
         </div>
         <div>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest font-sans">Portal</p>
            <p className="text-xs text-white font-bold font-sans">Loral Connect</p>
         </div>
      </div>
      <motion.div 
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" 
      />
    </div>

    {/* Notification Cards */}
    <div className="flex flex-col gap-4">
      {[
        { label: "Attendance", val: "Present (9:15 AM)", color: "bg-blue-400", delay: 0 },
        { label: "Academic Update", val: "Science Test: Grade A", color: "bg-amber-500", delay: 1 },
        { label: "Announcement", val: "Inter-House Sports tomorrow", color: "bg-red-500", delay: 2 }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: item.delay, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 group hover:bg-white/10 transition-colors"
        >
          <div className={`w-1 h-8 rounded-full ${item.color}`} />
          <div className="flex-1">
             <p className="text-[8px] font-black uppercase text-white/40 tracking-wider mb-1 font-sans">{item.label}</p>
             <p className="text-[11px] text-white font-medium font-sans">{item.val}</p>
          </div>
          <CaretRight className="text-white/20 group-hover:text-white transition-colors" size={14} />
        </motion.div>
      ))}
    </div>

    {/* Analytics Preview */}
    <div className="mt-auto bg-white/5 rounded-2xl p-4 border border-white/5">
       <p className="text-[9px] font-black text-white/30 uppercase mb-3 font-sans">Term Performance</p>
       <div className="flex items-end gap-2 h-16">
          {[40, 70, 55, 90, 60, 85].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 1 + (i * 0.1), duration: 1 }}
              className="flex-1 bg-blue-500/40 rounded-t-sm relative"
            >
               {h > 80 && <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500 animate-ping" />}
            </motion.div>
          ))}
       </div>
    </div>

    {/* Floating Elements */}
    <motion.div 
      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute top-20 right-4 p-3 bg-red-500 rounded-2xl shadow-xl text-white z-20"
    >
       <Bell size={18} weight="duotone" />
    </motion.div>
  </div>
);

const ExaminationProcessingGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-[3rem] shadow-2xl overflow-hidden p-8 flex flex-col items-center justify-center gap-8 border border-zinc-200">
    {/* Scanning Animation */}
    <div className="relative w-full h-40 bg-white rounded-2xl shadow-inner border border-zinc-100 p-6 overflow-hidden">
       <motion.div 
        animate={{ top: ['-10%', '110%', '-10%'] }} 
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-1 bg-red-500/30 z-20 shadow-[0_0_15px_red]" 
       />
       
       <div className="space-y-4">
          <div className="flex justify-between items-center">
             <div className="h-3 bg-zinc-100 rounded-full w-1/2" />
             <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"><CheckCircle weight="duotone" size={20} /></div>
          </div>
          <div className="h-2 bg-zinc-50 rounded-full w-full" />
          <div className="h-2 bg-zinc-50 rounded-full w-3/4" />
       </div>
    </div>

    {/* Data Processing Nodes */}
    <div className="flex items-center gap-4 w-full">
       <div className="flex-1 h-1 bg-zinc-200 rounded-full overflow-hidden">
          <motion.div 
            animate={{ x: ['-100%', '100%'] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-1/2 h-full bg-red-500" 
          />
       </div>
       <div className="p-4 rounded-2xl bg-white shadow-md border border-zinc-100">
          <Exam weight="duotone" size={32} className="text-blue-900" />
       </div>
       <div className="flex-1 h-1 bg-zinc-200 rounded-full overflow-hidden">
          <motion.div 
            animate={{ x: ['-100%', '100%'] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            className="w-1/2 h-full bg-blue-500" 
          />
       </div>
    </div>

    {/* Result Output */}
    <div className="w-full bg-white rounded-2xl p-6 shadow-lg border border-zinc-100">
       <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest font-sans">Verified Result</p>
          <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full uppercase">Verified</span>
       </div>
       <div className="flex items-end justify-between">
          <div className="space-y-1">
             <p className="text-3xl font-black text-blue-950 font-sans">A+</p>
             <p className="text-[9px] text-zinc-400 italic">Processing time: 0.4s</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 rounded-full border-4 border-amber-500 flex items-center justify-center text-amber-500 font-black text-sm"
            style={{ borderColor: '#F0A818' }}
          >
            98%
          </motion.div>
       </div>
    </div>
  </div>
);

const VisionaryLeadershipGraphic = () => (
  <div className="relative w-full aspect-square flex items-center justify-center pointer-events-none">
    {/* Concentric Pulsing Circles */}
    {[1, 2, 3].map(i => (
      <motion.div 
        key={i}
        animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }}
        className="absolute w-40 h-40 border-2 border-blue-900/20 rounded-full"
      />
    ))}
    
    {/* Central Core */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="relative w-48 h-48 rounded-full border-4 border-dashed border-gold/40 flex items-center justify-center"
      style={{ borderColor: '#F0A81866' }}
    >
       <div className="w-32 h-32 rounded-full bg-blue-950 shadow-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent" />
          <Rocket weight="duotone" size={64} className="text-white relative z-10" />
       </div>
    </motion.div>

    {/* Orbiting Tech Icons */}
    {[
      { icon: <Brain weight="duotone" />, top: "10%", left: "10%" },
      { icon: <Atom weight="duotone" />, bottom: "10%", right: "10%" },
      { icon: <Handshake weight="duotone" />, top: "10%", right: "10%" },
      { icon: <Lightning weight="duotone" />, bottom: "10%", left: "10%" }
    ].map((item, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        className="absolute w-12 h-12 rounded-xl bg-white shadow-xl border border-blue-100 flex items-center justify-center text-blue-900"
        style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right }}
      >
        {item.icon}
      </motion.div>
    ))}
  </div>
);

const ConfettiPiece = ({ color, x, delay, size, speed, blur, borderRadius, skew }: { color: string, x: string, delay: number, size: number, speed: number, blur: string, borderRadius: string, skew: string }) => (
  <motion.div
    initial={{ y: -20, opacity: 0, rotate: 0 }}
    animate={{ 
      y: ['-10vh', '110vh'],
      opacity: [0, 1, 1, 0.8, 0],
      rotate: [0, 360, 720, 1080],
      rotateX: [0, 180, 360, 540],
      rotateY: [0, 360, 0, 720],
      skew: [skew, '0deg', skew],
      x: [x, `calc(${x} + ${Math.random() * 120 - 60}px)`, x],
      filter: [
        `blur(${blur}) brightness(1.2)`,
        `blur(${blur}) brightness(2.5)`,
        `blur(${blur}) brightness(1.2)`,
        `blur(${blur}) brightness(2.5)`,
        `blur(${blur}) brightness(1.2)`
      ]
    }}
    transition={{ duration: speed, repeat: Infinity, delay, ease: "linear" }}
    className="fixed pointer-events-none z-[60]"
    style={{ backgroundColor: color, left: x, width: size, height: size * (0.3 + Math.random() * 1.5), filter: `blur(${blur}) brightness(1.2)`, borderRadius, boxShadow: `0 0 15px ${color}30` }}
  />
);

const ConfettiLayer = () => {
  const pieces = Array.from({ length: 35 }); 
  const confettiColors = ["#D31F26", "#3B449B", "#F0A818", "#C69E33", "#FFFFFF", "#FF6B6B"];
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[60]">
      {pieces.map((_, i) => {
        const size = 3 + Math.random() * 10;
        const speed = 12 + Math.random() * 15;
        const blur = Math.random() > 0.85 ? '1.5px' : '0px'; 
        const borderRadius = Math.random() > 0.6 ? '50%' : Math.random() > 0.3 ? '2px' : '0%';
        const skew = `${Math.random() * 40 - 20}deg`;
        return <ConfettiPiece key={i} color={confettiColors[i % confettiColors.length]} x={`${Math.random() * 100}vw`} delay={Math.random() * -30} size={size} speed={speed} blur={blur} borderRadius={borderRadius} skew={skew} />;
      })}
    </div>
  );
};

// --- Main Page Component ---

export default function LoralSchoolsPitch() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const colors = { red: "#D31F26", royalBlue: "#3B449B", gold: "#F0A818", mutedGold: "#C69E33", white: "#FFFFFF" };
  const images = { campus: [photo1, photo2, photo3], students: [photo4, photo5, photo6], classroom: [photo7, photo8, photo9], tech: [photo10, photo11, photo12], activities: [photo13, photo14] };

  const initiatives = [
    { title: "Digital Admissions Conversion System", desc: "Transform every inquiry into a structured enrollment journey through automated follow-ups.", impact: ["Higher conversion", "Faster response", "Reduced leakage", "Increased capacity"], icon: <UserPlus size={32} weight="duotone" />, photo: photo4 },
    { title: "Parent Trust & Visibility Experience", desc: "A modern parent communication ecosystem with real-time academic updates.", impact: ["Stronger confidence", "Increased retention", "Reduced gaps", "Premium reputation"], icon: <Heart size={32} weight="duotone" />, photo: photo5 },
    { title: "Smart Examination & Result Processing", desc: "Digitize assessments, grading workflows, and report generation.", impact: ["Faster processing", "Reduced workload", "Better analysis", "Improved integrity"], icon: <Exam size={32} weight="duotone" />, photo: photo7 },
    { title: "Premium School Branding & Media Positioning", desc: "Build a stronger public image through strategic storytelling.", impact: ["Increased visibility", "Stronger positioning", "Higher parent interest", "Competitive edge"], icon: <Megaphone size={32} weight="duotone" />, photo: photo1 },
    { title: "Student Performance Intelligence System", desc: "Track student patterns, strengths, weaknesses, and engagement.", impact: ["Improved performance", "Early intervention", "Better decision-making", "Higher consistency"], icon: <ChartLineUp size={32} weight="duotone" />, photo: photo8 },
    { title: "Digital Classroom Coordination", desc: "Modernize lesson delivery, assignment management, and learning continuity.", impact: ["Teaching consistency", "Higher completion rates", "Stronger coordination", "Enhanced continuity"], icon: <Desktop size={32} weight="duotone" />, photo: photo9 },
    { title: "Online Fee Payment & Financial Tracking", desc: "Simplify school payments with structured digital payment systems.", impact: ["Faster collection", "Reduced disputes", "Improved accountability", "Parent convenience"], icon: <CreditCard size={32} weight="duotone" />, photo: photo10 },
    { title: "School Website & Digital Identity Upgrade", desc: "Redesign the school’s online presence to reflect institutions quality.", impact: ["Stronger impression", "Increased inquiries", "Prospective trust", "Online credibility"], icon: <Globe size={32} weight="duotone" />, photo: photo2 },
    { title: "Academic Reporting & Analytics Dashboard", desc: "Centralized academic insights across classes, subjects, and teachers.", impact: ["Faster decisions", "Better monitoring", "Improved oversight", "Trend analysis"], icon: <ChartPieSlice size={32} weight="duotone" />, photo: photo11 },
    { title: "Multi-Campus Digital Coordination System", desc: "A centralized digital structure for operational visibility across branches.", impact: ["Campus coordination", "Standardized processes", "Executive oversight", "Scalability"], icon: <SquaresFour size={32} weight="duotone" />, photo: photo3 },
    { title: "Biometric Attendance & Access Control", desc: "Implement biometric verification for students and staff institution-wide.", impact: ["Accurate records", "Improved accountability", "Reduced errors", "Enhanced security"], icon: <Fingerprint size={32} weight="duotone" />, photo: photo12 },
    { title: "Smart Transportation & Route Management", desc: "Digitize school bus coordination through route optimization.", impact: ["Transport efficiency", "Reduced delays", "Fleet coordination", "Safety confidence"], icon: <Bus size={32} weight="duotone" />, photo: photo13 },
    { title: "Student After-School Engagement Suite", desc: "Structured after-school engagement including supervised study and clubs.", impact: ["Increased engagement", "Stronger reinforcement", "Social development", "Revenue growth"], icon: <Timer size={32} weight="duotone" />, photo: photo14 },
    { title: "Software Engineering & Tech Development", desc: "Practical exposure to software engineering and emerging tech skills.", impact: ["Future-ready skills", "Innovation appeal", "Stronger STEM", "Competitiveness"], icon: <Code size={32} weight="duotone" />, photo: photo10 },
    { title: "Academic Motivation & Competitive Learning", desc: "A structured motivation ecosystem using intra-class competitions.", impact: ["Student enthusiasm", "Performance culture", "Healthy competition", "Consistency"], icon: <Trophy size={32} weight="duotone" />, photo: photo6 }
  ];

  const pages = [
    { id: 'cover', content: (
      <section className="h-full w-full flex items-center justify-center p-6 relative overflow-hidden bg-white">
        <ImageSlideshow images={images.campus} interval={7000} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/40 to-transparent" />
        <div className="max-w-4xl w-full z-10 text-left px-4 md:px-12 font-sans">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="w-24 h-24 mb-8 flex items-center justify-center"><img src={logo.src} className="w-full h-full object-contain" alt="Loral Logo" /></div>
            <p className="text-sm md:text-lg font-bold uppercase tracking-[0.4em] mb-4" style={{ color: colors.royalBlue }}>PROPOSED DIGITAL & GROWTH INITIATIVES</p>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-5xl md:text-8xl mb-8 text-white leading-tight font-black">LORAL <br/><span style={{ color: colors.gold }}>INTERNATIONAL</span> <br/>SCHOOLS</motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 1 }} className="h-2 w-48 origin-left rounded-full" style={{ backgroundColor: colors.red }} />
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-12 right-12 z-10 hidden md:block">
          <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center p-2 backdrop-blur-sm"><img src={logoGif.src} className="w-full h-full object-contain opacity-80" alt="Loral GIF" /></div>
        </motion.div>
      </section>
    )},
    { id: '2-landscape', content: (
      <section className="h-full w-full flex items-center justify-center p-8 bg-zinc-50 relative overflow-hidden font-sans">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center z-10">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl text-blue-950 font-black leading-tight tracking-tight text-sans">The Evolving Educational Landscape</h2>
            <div className="space-y-4">
              {["Parents expect instant communication", "Data-driven decisions are now mandatory", "Excellence is measured by visibility", "Markets require modern institutional systems"].map((text, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.red }} /><span className="text-xl text-blue-900/70 font-medium">{text}</span></motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white"><ImageSlideshow images={[photo2, photo1, photo3]} interval={4000} /></div>
            <div className="absolute -bottom-6 -left-6 p-10 bg-white rounded-3xl shadow-xl z-20 border-l-8" style={{ borderLeftColor: colors.gold }}><p className="text-2xl italic font-bold text-blue-950">"The standard for premium education has shifted."</p></div>
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute -inset-10 border-2 border-dashed border-blue-900/10 rounded-[4rem] z-0" />
          </div>
        </div>
      </section>
    )},
    { id: '3-mission', content: (
      <section className="h-full w-full flex items-center justify-center p-8 bg-blue-950 text-white relative overflow-hidden font-sans">
        <div className="absolute inset-0 opacity-10"><img src={photo1.src} className="w-full h-full object-cover grayscale" alt="Mission" /></div>
        <div className="max-w-4xl text-center z-10">
           <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="mb-6"><GraduationCap size={64} weight="duotone" style={{ color: colors.gold }} className="mx-auto" /></motion.div>
           <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">A Mission for Digital Excellence</h2>
           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10"><DigitalEcosystemGraphic /></motion.div>
           <p className="text-xl md:text-2xl font-light text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">We are building an intelligent, integrated ecosystem that powers growth, trust, and superiority through:</p>
           <div className="flex flex-wrap justify-center gap-10">
              {[{ label: "Automation", color: colors.red, icon: <Lightning weight="duotone" /> }, { label: "Intelligence", color: colors.royalBlue, icon: <ChartBar weight="duotone" /> }, { label: "Visibility", color: colors.gold, icon: <Globe weight="duotone" /> }].map((item, i) => (
                 <div key={i} className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10" style={{ color: item.color }}>{item.icon}</div><span className="text-lg font-bold uppercase tracking-widest">{item.label}</span></div>
              ))}
           </div>
        </div>
      </section>
    )},
    { id: '4-strategy', content: (
      <section className="h-full w-full flex items-center justify-center p-8 bg-white overflow-hidden relative font-sans">
        <StrategicConnectivity />
        <div className="max-w-6xl w-full z-10">
          <h2 className="text-4xl md:text-6xl text-blue-950 font-black mb-16 text-center">Our Strategic Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {[{ title: "Parent Experience", desc: "Admissions & Communication", icon: <UserPlus weight="duotone" size={32} />, color: colors.royalBlue }, { title: "Academic Rigor", desc: "Exams, Grading & Intelligence", icon: <Exam weight="duotone" size={32} />, color: colors.red }, { title: "Ops Efficiency", desc: "Finance, HR & Logistics", icon: <Lightning weight="duotone" size={32} />, color: colors.gold }].map((item, i) => (
               <motion.div key={i} initial={{ opacity: 0, scale: 0.9, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} whileHover={{ y: -15 }} transition={{ delay: i * 0.2, type: "spring" }} className="p-10 rounded-[3rem] bg-zinc-50 border border-zinc-100 text-center flex flex-col items-center group overflow-hidden">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }} className="w-20 h-20 rounded-2xl mb-8 flex items-center justify-center text-white shadow-lg relative overflow-hidden" style={{ backgroundColor: item.color }}>{item.icon}</motion.div>
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">{item.title}</h3>
                  <p className="text-blue-900/50 font-medium">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>
    )},
    { id: 'vision', content: (
      <section className="h-full w-full flex items-center justify-center p-8 bg-white relative overflow-hidden font-sans">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center z-10">
          <div className="space-y-10">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-7xl text-blue-950 font-black italic">Leading the Next Decade.</motion.h2>
            <div className="space-y-6">
              {[
                { text: "Digitally Efficient Operations", icon: <Lightning weight="duotone" /> },
                { text: "Operationally Intelligent Oversight", icon: <Brain weight="duotone" /> },
                { text: "High Visibility & Branding", icon: <Megaphone weight="duotone" /> },
                { text: "Deep Parent Trust", icon: <Handshake weight="duotone" /> },
                { text: "STEM Excellence", icon: <Atom weight="duotone" /> }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + (i * 0.1) }} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0" style={{ backgroundColor: colors.royalBlue }}>
                     {item.icon}
                  </div>
                  <span className="text-xl md:text-2xl text-blue-900 font-bold tracking-tight">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
             <VisionaryLeadershipGraphic />
          </div>
        </div>
      </section>
    )},
    ...initiatives.map((item, index) => ({
      id: `initiative-${index + 1}`,
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-zinc-50 relative overflow-hidden font-sans">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center z-10">
            <div className="space-y-8">
              <div className="inline-block px-6 py-2 rounded-full text-sm font-black text-white shadow-xl" style={{ backgroundColor: colors.red }}>INITIATIVE {String(index + 1).padStart(2, '0')}</div>
              <h2 className="text-3xl md:text-5xl text-blue-950 font-black leading-tight">{item.title}</h2>
              <p className="text-2xl text-blue-900/60 leading-relaxed font-medium">{item.desc}</p>
              <div className="grid grid-cols-2 gap-4">
                 {item.impact.map((text, i) => (
                    <div key={i} className="p-5 bg-white rounded-2xl shadow-sm border border-blue-100 flex items-center gap-3"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.gold }} /><span className="text-sm font-bold text-blue-950">{text}</span></div>
                 ))}
              </div>
            </div>
            <div className="relative">
                {index === 0 ? <AdmissionsConversionGraphic /> : index === 1 ? <ParentCommunicationGraphic /> : index === 2 ? <ExaminationProcessingGraphic /> : index === 3 ? <PremiumBrandingGraphic /> : <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10"><img src={item.photo.src} className="w-full h-full object-cover" alt={item.title} /><div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" /><div className="absolute bottom-8 left-8 text-white"><div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">{item.icon}</div><p className="text-lg font-black italic">Transformation Pathway</p></div></div>}
            </div>
          </div>
        </section>
      )
    })),
    { id: 'closing', content: (
      <section className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-blue-950 text-white relative overflow-hidden font-sans">
        <div className="z-10 max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="mb-10 inline-block"><div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center p-4"><img src={logo.src} className="w-full h-full object-contain" alt="Loral" /></div></motion.div>
          <h2 className="text-4xl md:text-8xl font-black mb-10 leading-[1.1] text-white">Ready to build the future of Loral?</h2>
          <p className="text-lg md:text-xl text-blue-200 mb-20 font-medium uppercase tracking-[0.2em] max-w-3xl mx-auto">Expanding Loral International Schools digital authority across Nigeria.</p>
          <div className="flex flex-col items-center gap-12 mt-12">
            <motion.button whileHover={{ scale: 1.02, backgroundColor: '#fff', color: colors.royalBlue }} className="px-14 py-4 rounded-xl text-lg font-black uppercase tracking-[0.2em] transition-all border border-white" style={{ backgroundColor: colors.red, color: '#fff', borderColor: colors.red }}>Let's Begin</motion.button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              {[{ label: "Phone", icon: <Phone size={24} weight="duotone" />, href: "tel:+2348035428870" }, { label: "WhatsApp", icon: <WhatsappLogo size={24} weight="duotone" />, href: "https://wa.me/2348035428870" }, { label: "About", icon: <House size={24} weight="duotone" />, href: "/" }, { label: "Pricing", icon: <Handbag size={24} weight="duotone" />, href: "/#pricing" }].map((cta, i) => (
                <motion.a key={i} href={cta.href} whileHover={{ y: -5 }} className="flex flex-col items-center gap-3 group"><div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-950 transition-all" style={{ color: colors.gold }}>{cta.icon}</div><span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300 group-hover:text-white transition-colors">{cta.label}</span></motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 md:bottom-28 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 opacity-40 transition-opacity"><span className="font-sans text-lg font-bold text-white tracking-[-0.08em]">Reed Breed</span><div className="w-1.5 h-1.5 rounded-full mt-1" style={{ backgroundColor: '#146ef5' }} /></div>
      </section>
    )}
  ];

  const paginate = (newDir: number) => { if (currentPage + newDir >= 0 && currentPage + newDir < pages.length) { setDirection(newDir); setCurrentPage(currentPage + newDir); } };
  const variants = { enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', rotateY: dir > 0 ? 45 : -45, opacity: 0 }), center: { zIndex: 1, x: 0, rotateY: 0, opacity: 1 }, exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? '100%' : '-100%', rotateY: dir < 0 ? 45 : -45, opacity: 0 }) };
  const totalPages = pages.length;

  return (
    <div className="h-screen w-screen bg-white text-zinc-900 overflow-hidden perspective-1000 selection:bg-blue-100 selection:text-blue-600 font-sans">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div key={currentPage} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 }, rotateY: { duration: 0.4 } }} className="absolute inset-0 w-full h-full">{pages[currentPage].content}</motion.div>
      </AnimatePresence>
      <ConfettiLayer />
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 flex justify-center items-center gap-4 md:gap-16 z-50">
        <button onClick={() => paginate(-1)} disabled={currentPage === 0} className={`group flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black transition-all ${currentPage === 0 ? 'opacity-0' : 'text-zinc-400'}`}><div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-blue-900"><CaretLeft size={16} /></div><span className="hidden md:inline">Previous</span></button>
        <div className="flex gap-2 md:gap-3 overflow-x-auto no-scrollbar max-w-[250px] px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-white/50">{pages.map((_, i) => ( <div key={i} onClick={() => { setDirection(i > currentPage ? 1 : -1); setCurrentPage(i); }} className={`h-2 transition-all duration-500 rounded-full cursor-pointer ${i === currentPage ? 'w-10 md:w-16' : 'w-2 bg-zinc-200'}`} style={{ backgroundColor: i === currentPage ? colors.royalBlue : undefined }} /> ))}</div>
        <button onClick={() => paginate(1)} disabled={currentPage === totalPages - 1} className={`group flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black transition-all ${currentPage === totalPages - 1 ? 'opacity-0' : 'text-zinc-900'}`}><span className="hidden md:inline" style={{ color: currentPage < totalPages - 1 ? colors.royalBlue : undefined }}>Next Slide</span><div className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:scale-110 transition-all" style={{ borderColor: colors.royalBlue, backgroundColor: colors.royalBlue, color: 'white' }}><CaretRight size={16} /></div></button>
      </div>
      <div className="absolute top-6 md:top-10 left-6 md:left-12 z-50 flex items-center gap-6">
        <motion.div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"><img src={logo.src} className="w-full h-full object-contain" alt="Loral" /></motion.div>
        <div className="hidden md:block"><p className="text-[10px] uppercase tracking-[0.4em] font-black text-blue-950">Loral International Schools</p><p className="text-[8px] uppercase tracking-[0.3em] font-bold text-blue-900/40">Digital Proposal 2026</p></div>
      </div>
      <div className="absolute top-6 md:top-10 right-6 md:right-12 z-50"><div className="px-4 py-2 bg-blue-950 text-white rounded-full text-[10px] font-black tracking-widest shadow-xl">{String(currentPage + 1).padStart(2, '0')} <span className="text-blue-900">/</span> {totalPages}</div></div>
    </div>
  );
}

function Eye(p: any) { return <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>; }
