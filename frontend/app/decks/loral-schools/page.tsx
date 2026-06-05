'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  WhatsappLogo,
  House,
  Handbag,
  UserPlus,
  Users,
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
  Atom,
  BookOpen,
  Cards,
  Question
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

import { DeckController } from "@/components/decks/DeckController";

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

const MobileWarning = () => (
  <div className="fixed inset-0 z-[100] bg-blue-950 flex flex-col items-center justify-center p-8 text-center md:hidden">
    <div className="w-20 h-20 mb-8 rounded-3xl bg-white/10 flex items-center justify-center border border-white/20">
      <Desktop size={40} weight="duotone" className="text-white" />
    </div>
    <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Desktop Optimized</h2>
    <p className="text-blue-200/60 leading-relaxed max-w-xs mx-auto text-sm font-medium">
      This high-fidelity interactive pitch is best experienced on a larger screen. Please switch to a desktop device for the full institutional walkthrough.
    </p>
    <div className="mt-12 flex items-center gap-2 opacity-30">
      <span className="font-sans text-sm font-bold text-white tracking-[-0.08em]">Reed Breed</span>
      <div className="w-1 h-1 rounded-full bg-blue-500" />
    </div>
  </div>
);

const DigitalEcosystemGraphic = () => (
  <div className="relative w-full max-w-2xl mx-auto h-64 md:h-80 bg-blue-900/20 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
    <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
      <div className="w-2 h-2 rounded-full bg-red-400" />
      <div className="w-2 h-2 rounded-full bg-yellow-400" />
      <div className="w-2 h-2 rounded-full bg-green-400" />
      <div className="mx-auto text-[10px] uppercase tracking-widest opacity-30 font-bold font-sans text-white">loral-digital-intelligence.os</div>
    </div>

    <div className="p-6 grid grid-cols-3 h-full gap-4 text-white">
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
          <Globe weight="duotone" size={40} className="text-amber-500" />
        </motion.div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500 font-sans">Visibility</p>
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
      {[1, 2, 3].map(i => (
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
    <div className="mt-auto bg-zinc-50 rounded-2xl p-4 border border-zinc-100 shadow-inner">
      <div className="flex justify-between items-end mb-3">
        <p className="text-[8px] font-black uppercase tracking-widest text-zinc-400 font-sans">Reach Growth</p>
        <p className="text-sm font-black text-red-500 font-sans">4.5x</p>
      </div>
      <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
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
  <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden p-6 flex flex-col gap-6 border border-blue-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,68,155,0.03),transparent_70%)]" />

    {/* Animated Header */}
    <div className="flex items-center justify-between px-2 relative z-10">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
          <Heart weight="duotone" size={20} />
        </div>
        <div>
          <p className="text-[10px] text-blue-900/40 font-bold uppercase tracking-widest font-sans">Portal</p>
          <p className="text-xs text-blue-950 font-bold font-sans">Loral Connect</p>
        </div>
      </div>
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#4ade80]"
      />
    </div>

    {/* Notification Cards */}
    <div className="flex flex-col gap-4 relative z-10">
      {[
        { label: "Attendance", val: "Present (9:15 AM)", color: "bg-blue-500", delay: 0 },
        { label: "Academic Update", val: "Science Test: Grade A", color: "bg-amber-500", delay: 1 },
        { label: "Announcement", val: "Inter-House Sports tomorrow", color: "bg-red-500", delay: 2 }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: item.delay, duration: 0.8 }}
          className="bg-zinc-50 border border-zinc-100 p-4 rounded-2xl flex items-center gap-4 group hover:bg-white hover:shadow-md transition-all"
        >
          <div className={`w-1.5 h-8 rounded-full ${item.color} shadow-sm`} />
          <div className="flex-1">
            <p className="text-[8px] font-black uppercase text-zinc-400 tracking-wider mb-1 font-sans">{item.label}</p>
            <p className="text-[11px] text-blue-950 font-bold font-sans">{item.val}</p>
          </div>
          <CaretRight className="text-zinc-300 group-hover:text-blue-600 transition-colors" size={14} />
        </motion.div>
      ))}
    </div>

    {/* Analytics Preview */}
    <div className="mt-auto bg-zinc-50 rounded-2xl p-5 border border-zinc-100 shadow-inner relative z-10">
      <p className="text-[9px] font-black text-zinc-400 uppercase mb-3 font-sans">Term Performance</p>
      <div className="flex items-end gap-2 h-16">
        {[40, 70, 55, 90, 60, 85].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 1 + (i * 0.1), duration: 1 }}
            className="flex-1 bg-blue-600/10 rounded-t-sm relative border-t border-blue-600/20"
          >
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ delay: 1.5 + (i * 0.1), duration: 1 }}
              className="absolute inset-0 bg-blue-600/20 rounded-t-sm"
            />
            {h > 80 && <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500 animate-ping" />}
          </motion.div>
        ))}
      </div>
    </div>

    {/* Floating Elements */}
    <motion.div
      animate={{ scale: [1, 1.1, 1], y: [0, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute top-20 right-4 p-3 bg-red-500 rounded-2xl shadow-xl text-white z-20 border border-white/20"
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
        className="absolute w-40 h-40 border-2 border-blue-900/10 rounded-full"
      />
    ))}

    {/* Central Core */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="relative w-48 h-48 rounded-full border-4 border-dashed border-gold/30 flex items-center justify-center"
    >
      <div className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center relative overflow-hidden border border-zinc-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(211,31,38,0.05),transparent_70%)]" />
        <Rocket weight="duotone" size={64} className="text-blue-900 relative z-10" />
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

const ClassroomCoordinationGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden p-8 flex flex-col gap-6 border border-blue-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,68,155,0.03),transparent_70%)]" />

    {/* Teacher Console (Top) */}
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="relative z-20 w-full bg-zinc-50 border border-zinc-200 p-5 rounded-2xl flex items-center justify-between shadow-sm"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
          <Desktop weight="fill" size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Instructional Hub</p>
          <p className="text-sm font-bold text-blue-950">Teacher Command Console</p>
        </div>
      </div>
      <div className="flex gap-2">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"
        />
        <span className="text-[9px] font-black text-green-600 uppercase tracking-tighter">Broadcasting</span>
      </div>
    </motion.div>

    {/* Content Flow Animation */}
    <div className="relative flex-1 flex flex-col items-center justify-center">
      {/* Central Pulse */}
      <motion.div
        animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute w-32 h-32 border-2 border-blue-600/10 rounded-full"
      />

      {/* Student Sync Nodes */}
      <div className="grid grid-cols-2 gap-x-20 gap-y-12 relative z-10">
        {[
          { id: "S1", active: true },
          { id: "S2", active: true },
          { id: "S3", active: false },
          { id: "S4", active: true }
        ].map((student, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
            className="relative"
          >
            <div className="w-16 h-20 bg-zinc-50 border border-zinc-100 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm">
              <div className={`w-8 h-10 rounded-md ${student.active ? 'bg-blue-600/10 text-blue-600 border-blue-600/20' : 'bg-zinc-100 text-zinc-300 border-zinc-200'} flex items-center justify-center border`}>
                <Users size={16} weight={student.active ? "fill" : "regular"} />
              </div>
              <p className="text-[8px] font-black text-zinc-400">{student.id}</p>
            </div>

            {/* Connection Pulse */}
            {student.active && (
              <motion.div
                animate={{
                  height: [0, 40],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-t from-blue-600 to-transparent"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>

    {/* Synchronization Gauge */}
    <div className="mt-auto bg-zinc-50 rounded-2xl p-6 border border-zinc-200 relative overflow-hidden shadow-inner">
      <div className="relative z-10 flex justify-between items-end mb-4">
        <div>
          <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Lesson Continuity</p>
          <p className="text-2xl font-black text-blue-950">Sync Status</p>
        </div>
        <p className="text-3xl font-black text-blue-600">98%</p>
      </div>
      <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "98%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-700 to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
        />
      </div>
      <div className="mt-3 flex justify-between items-center">
        <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">32 Students Active</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map(i => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
              className="w-1 h-3 bg-blue-600/30 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const PerformanceIntelligenceGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden p-6 flex flex-col gap-6 border border-zinc-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(59,68,155,0.05),transparent_70%)]" />

    {/* Profile Header */}
    <div className="relative z-10 flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-900 shadow-sm border border-blue-100">
        <ChartLineUp weight="duotone" size={28} />
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Intelligence Node</p>
        <p className="text-sm font-bold text-blue-950">Student Performance Tracker</p>
      </div>
    </div>

    {/* Intelligence Insights */}
    <div className="relative z-10 space-y-3">
      {[
        { label: "Pattern Recognition", val: "Consistent Growth", color: "text-green-500", icon: <CheckCircle /> },
        { label: "Intervention Required", val: "Critical (Mathematics)", color: "text-red-500", icon: <Lightning />, pulse: true }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.4 }}
          className="bg-zinc-50 rounded-2xl p-4 border border-zinc-100 flex items-center gap-4 group"
        >
          <div className={`p-2 rounded-xl bg-white shadow-sm ${item.color}`}>
            {item.icon}
          </div>
          <div>
            <p className="text-[9px] font-black uppercase text-zinc-400 leading-none mb-1">{item.label}</p>
            <p className="text-xs font-bold text-blue-950 flex items-center gap-2">
              {item.val}
              {item.pulse && <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Multi-Series Graph Simulation */}
    <div className="mt-auto bg-zinc-50 rounded-[2rem] p-6 text-blue-950 relative overflow-hidden border border-zinc-100 shadow-inner">
      <div className="flex justify-between items-start mb-6 relative z-10">
        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Academic Trend Analysis</p>
        <div className="flex gap-2">
          <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /><span className="text-[7px] font-bold text-zinc-400 uppercase">Math</span></div>
          <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /><span className="text-[7px] font-bold text-zinc-400 uppercase">Eng</span></div>
        </div>
      </div>

      <div className="relative h-24 flex items-end gap-2 z-10">
        {/* Simulated Line Chart Points */}
        {[60, 45, 80, 55, 95, 70, 85].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end gap-1 relative h-full">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
              className="w-full bg-blue-600/10 rounded-t-sm relative group border-t border-blue-600/20"
            >
              {i === 4 && <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_gold] z-10" style={{ backgroundColor: '#F0A818' }} />}
            </motion.div>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${h * 0.7}%` }}
              transition={{ delay: 0.8 + (i * 0.1), duration: 1 }}
              className="w-full bg-red-500/10 rounded-t-sm absolute bottom-0 left-0 border-t border-red-500/20"
            />
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16" />
    </div>
  </div>
);

const FinancialTrackingGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden p-8 flex flex-col gap-6 border border-emerald-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.03),transparent_70%)]" />

    {/* Animated Payment Header */}
    <div className="flex items-center justify-between z-10 relative">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-sm">
          <CreditCard weight="duotone" size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600/40">Financials</p>
          <p className="text-sm font-bold text-blue-950">Digital Fee Gateway</p>
        </div>
      </div>
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[9px] font-black uppercase tracking-widest"
      >
        Live Sync
      </motion.div>
    </div>

    {/* Transaction Feed Animation */}
    <div className="flex-1 flex flex-col gap-4 mt-4 relative z-10">
      {[
        { user: "Tunde A.", amt: "₦245,000", status: "Success", delay: 0 },
        { user: "Sarah O.", amt: "₦180,000", status: "Verified", delay: 1.5 },
        { user: "James I.", amt: "₦320,000", status: "Success", delay: 3 }
      ].map((tx, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: tx.delay,
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 4,
            repeatType: "loop"
          }}
          className="bg-zinc-50 border border-zinc-100 p-4 rounded-2xl flex items-center justify-between shadow-sm group hover:bg-white hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 border border-emerald-500/20">
              <CheckCircle weight="fill" size={16} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-blue-950">{tx.user}</p>
              <p className="text-[9px] text-zinc-400 italic">Tuition & Levies</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-black text-blue-950">{tx.amt}</p>
            <p className="text-[8px] font-bold text-emerald-600 uppercase tracking-tighter">{tx.status}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Collection Progress */}
    <div className="mt-auto bg-zinc-50 rounded-2xl p-6 border border-zinc-100 relative overflow-hidden shadow-inner group">
      <div className="relative z-10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Term Collection</p>
            <p className="text-2xl font-black text-blue-950">92.4%</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-1">Target</p>
            <p className="text-xs font-bold text-zinc-400">₦45.2M</p>
          </div>
        </div>
        <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "92.4%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-emerald-600 to-cyan-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
          />
        </div>
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -right-8 -bottom-8 w-24 h-24 border-2 border-dashed border-zinc-200 rounded-full"
      />
    </div>

    {/* Floating Coin Elements */}
    <motion.div
      animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute top-1/2 right-4 w-10 h-10 bg-gradient-to-tr from-amber-400 to-yellow-600 rounded-full shadow-xl flex items-center justify-center text-white border border-white/50"
    >
      <span className="font-black text-sm">₦</span>
    </motion.div>
  </div>
);

const DigitalIdentityGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden p-8 flex flex-col gap-6 border border-zinc-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,68,155,0.03),transparent_70%)]" />

    {/* Browser Frame Simulation */}
    <div className="relative z-10 w-full bg-zinc-50 rounded-2xl border border-zinc-200 shadow-xl overflow-hidden flex flex-col">
      <div className="h-10 border-b border-zinc-200 flex items-center px-4 gap-2 bg-white">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
        </div>
        <div className="flex-1 max-w-xs mx-auto h-5 bg-zinc-100 rounded-md flex items-center px-3">
          <div className="w-full h-1 bg-zinc-200 rounded-full" />
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="w-20 h-6 bg-blue-900/10 rounded-md" />
          <div className="flex gap-2">
            <div className="w-8 h-2 bg-zinc-200 rounded-full" />
            <div className="w-8 h-2 bg-zinc-200 rounded-full" />
          </div>
        </div>
        <div className="h-32 w-full bg-blue-50 rounded-xl relative overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe size={48} weight="duotone" className="text-blue-900/20" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-12 bg-zinc-100 rounded-lg" />
          <div className="h-12 bg-zinc-100 rounded-lg" />
        </div>
      </div>
    </div>

    {/* Responsive Indicators */}
    <div className="relative z-10 grid grid-cols-3 gap-4">
      {[
        { icon: <Desktop />, label: "Desktop", active: true },
        { icon: <Phone />, label: "Mobile", active: true },
        { icon: <Globe />, label: "SEO", active: true }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center gap-2"
        >
          <div className="text-blue-900">{item.icon}</div>
          <p className="text-[9px] font-black uppercase text-zinc-400">{item.label}</p>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
        </motion.div>
      ))}
    </div>

    {/* Performance Metrics */}
    <div className="mt-auto bg-blue-950 rounded-2xl p-6 text-white overflow-hidden relative">
      <div className="relative z-10 flex justify-between items-center">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Web Performance</p>
          <p className="text-2xl font-black text-white">Elite Status</p>
        </div>
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/10" />
            <motion.circle
              cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent"
              strokeDasharray={175.9}
              initial={{ strokeDashoffset: 175.9 }}
              whileInView={{ strokeDashoffset: 175.9 * (1 - 0.98) }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-gold"
              style={{ color: '#F0A818' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black">98%</div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        {["Fast", "Secure", "Optimized"].map((tag, i) => (
          <span key={i} className="text-[8px] font-black uppercase px-2 py-1 bg-white/10 rounded-md border border-white/5">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const ReportingAnalyticsGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-[3rem] shadow-2xl overflow-hidden p-8 flex flex-col gap-6 border border-zinc-200">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(211,31,38,0.03),transparent_70%)]" />

    {/* Central Analytics Hub */}
    <div className="relative z-10 flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-blue-900 flex items-center justify-center text-white shadow-lg">
          <ChartPieSlice weight="duotone" size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Executive View</p>
          <p className="text-sm font-bold text-blue-950">Academic Dashboard</p>
        </div>
      </div>
      <div className="flex -space-x-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
            <div className="w-full h-full bg-blue-900/10 flex items-center justify-center text-[10px] font-bold text-blue-900">JSS</div>
          </div>
        ))}
      </div>
    </div>

    {/* Multi-Class Performance Comparison */}
    <div className="relative z-10 space-y-4">
      {[
        { label: "Class JSS 1", val: 88, color: "bg-blue-600", delay: 0 },
        { label: "Class JSS 2", val: 74, color: "bg-red-500", delay: 0.2 },
        { label: "Class JSS 3", val: 92, color: "bg-amber-500", delay: 0.4 }
      ].map((item, i) => (
        <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-black uppercase text-zinc-500">{item.label}</span>
            <span className="text-xs font-bold text-blue-950">{item.val}% Avg.</span>
          </div>
          <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.val}%` }}
              transition={{ delay: item.delay, duration: 1.5, ease: "easeOut" }}
              className={`h-full ${item.color}`}
            />
          </div>
        </div>
      ))}
    </div>

    {/* Central Pie Chart Simulation */}
    <div className="relative z-10 flex-1 bg-blue-950 rounded-[2rem] p-6 flex flex-col items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border-[20px] border-dashed border-white rounded-full scale-150"
        />
      </div>

      <div className="relative w-32 h-32 mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <motion.circle
            cx="64" cy="64" r="50" stroke="currentColor" strokeWidth="20" fill="transparent"
            strokeDasharray={314}
            initial={{ strokeDashoffset: 314 }}
            whileInView={{ strokeDashoffset: 314 * (1 - 0.65) }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-blue-500"
          />
          <motion.circle
            cx="64" cy="64" r="50" stroke="currentColor" strokeWidth="20" fill="transparent"
            strokeDasharray={314}
            initial={{ strokeDashoffset: 314 }}
            whileInView={{ strokeDashoffset: 314 * (1 - 0.35) }}
            strokeDashoffset={314 * (1 - 0.35)}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            className="text-red-500"
            style={{ strokeDashoffset: 314 * 0.65 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-lg font-black leading-none">A+</p>
          <p className="text-[8px] font-bold text-white/40 uppercase">Top Tier</p>
        </div>
      </div>
      <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Overall Performance Index</p>
    </div>

    {/* Insight Notification */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="absolute bottom-12 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-blue-100 flex items-center gap-4"
    >
      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
        <Sparkle weight="fill" size={20} />
      </div>
      <div>
        <p className="text-[9px] font-black uppercase text-amber-600">AI Insight</p>
        <p className="text-[10px] font-bold text-blue-950">Mathematics improvement across JSS 2 identified.</p>
      </div>
    </motion.div>
  </div>
);

const MultiCampusCoordinationGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-[3rem] shadow-2xl overflow-hidden p-8 flex flex-col items-center justify-center border border-zinc-200">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,68,155,0.08),transparent_70%)]" />

    {/* Central Control Hub */}
    <div className="relative z-20 flex flex-col items-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-24 h-24 rounded-full border border-blue-900/10 flex items-center justify-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 border border-blue-50">
          <SquaresFour weight="fill" size={32} />
        </div>
      </motion.div>
      <div className="mt-4 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-950">Central Command</p>
        <p className="text-[8px] font-bold text-zinc-400 uppercase">Operational Oversight</p>
      </div>
    </div>

    {/* Orbiting Campuses */}
    <div className="absolute inset-0 z-10 pointer-events-none">
      {[
        { name: "Day Secondary", pos: "top-20 left-20", delay: 0 },
        { name: "Boarding Secondary", pos: "top-20 right-20", delay: 1 },
        { name: "Primary / Nursery", pos: "bottom-40 left-12", delay: 2 },
        { name: "Igbesa Campus", pos: "bottom-40 right-12", delay: 3 }
      ].map((campus, i) => (
        <div key={i} className={`absolute ${campus.pos} flex flex-col items-center group pointer-events-auto`}>
          {/* Connection Line to Center (Subtle) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[1px] bg-blue-900/5 -z-10 rotate-45" />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + (i * 0.2), type: "spring" }}
            className="w-14 h-14 rounded-2xl bg-white shadow-xl border border-blue-100 flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-50 transition-colors"
          >
            <House weight="fill" size={24} />
          </motion.div>
          <p className="text-[8px] font-black uppercase text-blue-900/60 tracking-widest">{campus.name}</p>
          <div className="flex items-center gap-2 mt-1.5">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: campus.delay }}
              className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"
            />
            <span className="text-[7px] font-black text-green-600 uppercase tracking-tighter">Synced</span>
          </div>
        </div>
      ))}
    </div>

    {/* Data Flow Rings */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[1, 2, 3].map(i => (
        <motion.div
          key={i}
          animate={{ scale: [0.5, 1.8], opacity: [0.4, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1.3 }}
          className="absolute w-64 h-64 border-2 border-blue-600/10 rounded-full"
        />
      ))}
    </div>

    {/* Operational Metrics */}
    <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4 z-20">
      <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-zinc-100 shadow-sm">
        <p className="text-[8px] font-black uppercase text-zinc-400 mb-1">Total Branches</p>
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-black text-blue-950">05</p>
          <span className="text-[8px] text-green-600 font-bold uppercase">Connected</span>
        </div>
      </div>
      <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-zinc-100 shadow-sm">
        <p className="text-[8px] font-black uppercase text-zinc-400 mb-1">Global Sync</p>
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-black text-blue-950">99%</p>
          <span className="text-[8px] text-blue-600 font-bold uppercase">Uptime</span>
        </div>
      </div>
    </div>
  </div>
);

const BiometricAttendanceGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-zinc-50 rounded-[3rem] shadow-2xl overflow-hidden p-8 flex flex-col items-center justify-center gap-8 border border-indigo-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_70%)]" />

    {/* Scanning Animation */}
    <div className="relative w-48 h-48 flex items-center justify-center">
      <motion.div
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 border-4 border-indigo-500/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 border border-dashed border-indigo-500/20 rounded-full"
      />

      <div className="relative z-10 text-indigo-600">
        <Fingerprint size={80} weight="duotone" className="drop-shadow-[0_0_10px_rgba(79,70,229,0.2)]" />
        <motion.div
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-0.5 bg-indigo-400 shadow-[0_0_10px_rgba(79,70,229,0.5)] z-20"
        />
      </div>
    </div>

    {/* Access Status */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="bg-white border border-indigo-100 px-6 py-2.5 rounded-xl flex items-center gap-3 shadow-sm"
    >
      <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.4)] animate-pulse" />
      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-600">Attendance Active</span>
    </motion.div>

    {/* Log Feed */}
    <div className="w-full space-y-3 relative z-10 overflow-hidden h-40">
      {[
        { name: "Abiodun K.", time: "08:14 AM", status: "Present", delay: 0 },
        { name: "Chidima O.", time: "08:16 AM", status: "Present", delay: 1 },
        { name: "Tunde W.", time: "08:19 AM", status: "Present", delay: 2 }
      ].map((log, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [50, 0, -50, -100]
          }}
          transition={{
            delay: log.delay,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-full bg-white border border-zinc-100 p-4 rounded-2xl flex justify-between items-center group hover:border-indigo-200 transition-colors shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
              <IdentificationCard size={18} weight="duotone" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-blue-950">{log.name}</p>
              <p className="text-[9px] text-zinc-400 font-medium">{log.time}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black uppercase text-indigo-600 tracking-tighter">{log.status}</span>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 rounded-full bg-indigo-400"
            />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Stats Summary */}
    <div className="mt-auto w-full grid grid-cols-2 gap-4 relative z-10">
      <div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm">
        <p className="text-[8px] font-black text-zinc-400 uppercase mb-1 tracking-widest">Zone Integrity</p>
        <div className="flex items-center gap-2">
          <p className="text-xl font-black text-blue-950">99.9%</p>
          <div className="w-1 h-1 rounded-full bg-indigo-500 shadow-[0_0_5px_rgba(79,70,229,0.5)]" />
        </div>
      </div>
      <div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm">
        <p className="text-[8px] font-black text-zinc-400 uppercase mb-1 tracking-widest">Active Nodes</p>
        <p className="text-xl font-black text-indigo-600">14</p>
      </div>
    </div>
  </div>
);

const SmartTransportationGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden p-8 flex flex-col gap-6 border border-zinc-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(211,31,38,0.05),transparent_70%)]" />

    {/* Map Header */}
    <div className="relative z-10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center text-white shadow-lg">
          <Bus weight="duotone" size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Logistics Hub</p>
          <p className="text-sm font-bold text-blue-950">Fleet Management</p>
        </div>
      </div>
      <div className="bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">
        <p className="text-[8px] font-black text-blue-900/40 uppercase">12 Active Buses</p>
      </div>
    </div>

    {/* Route Simulation Map */}
    <div className="relative flex-1 bg-zinc-100 rounded-[2rem] border border-zinc-200 overflow-hidden">
      {/* Background Grid/Map Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3B449B 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Route Path */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M 50 100 Q 150 50 250 150 T 450 100"
          fill="transparent"
          stroke="#3B449B"
          strokeWidth="4"
          strokeDasharray="8 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          className="opacity-20"
        />
        <motion.path
          d="M 50 100 Q 150 50 250 150 T 450 100"
          fill="transparent"
          stroke="#D31F26"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>

      {/* Moving Bus Icon */}
      <motion.div
        animate={{
          x: [50, 150, 250, 350, 450],
          y: [100, 50, 150, 125, 100],
          rotate: [0, -20, 40, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-8 h-8 bg-white rounded-lg shadow-xl border border-zinc-200 flex items-center justify-center text-red-500 z-20"
        style={{ top: 0, left: 0 }}
      >
        <Bus weight="fill" size={16} />
      </motion.div>

      {/* Stop Points */}
      {[
        { top: '100px', left: '50px' },
        { top: '150px', left: '250px' },
        { top: '100px', left: '450px' }
      ].map((stop, i) => (
        <div key={i} className="absolute w-3 h-3 bg-blue-900 rounded-full border-2 border-white shadow-md z-10" style={{ top: stop.top, left: stop.left }} />
      ))}
    </div>

    {/* Efficiency Metrics */}
    <div className="grid grid-cols-2 gap-4 relative z-10">
      <div className="bg-blue-950 p-4 rounded-2xl text-white">
        <div className="flex items-center gap-2 mb-2">
          <Timer size={14} className="text-gold" style={{ color: colors.gold }}>
            <Timer weight="duotone" size={24} />
          </Timer>
          <p className="text-[8px] font-black uppercase text-white/40">Delay Reduction</p>
        </div>
        <p className="text-xl font-black">-35%</p>
      </div>
      <div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <ChartBar size={14} className="text-red-500" />
          <p className="text-[8px] font-black uppercase text-zinc-400">Fuel Efficiency</p>
        </div>
        <p className="text-xl font-black text-blue-950">+22%</p>
      </div>
    </div>

    {/* Real-time Status */}
    <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <p className="text-[10px] font-bold text-blue-950">Bus 04: Festac Route</p>
      </div>
      <p className="text-[10px] font-black text-blue-900/40 uppercase">Arrival: 4 mins</p>
    </div>
  </div>
);

const StudentPracticeGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden p-8 flex flex-col gap-6 border border-blue-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(59,68,155,0.03),transparent_70%)]" />

    {/* Header */}
    <div className="relative z-10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
          <BookOpen weight="duotone" size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Learning Portal</p>
          <p className="text-sm font-bold text-blue-950">Active Practice Hub</p>
        </div>
      </div>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[9px] font-black uppercase tracking-widest"
      >
        Study Mode
      </motion.div>
    </div>

    {/* Practice Modules */}
    <div className="relative z-10 space-y-4 flex-1">
      {[
        { label: "Class Notes", desc: "Interactive & Summarized", icon: <ChatCircleText />, color: "text-blue-500", bg: "bg-blue-50" },
        { label: "Active Recall Quizzes", desc: "Test Your Knowledge", icon: <Question />, color: "text-red-500", bg: "bg-red-50" },
        { label: "Visual Flashcards", desc: "Spaced Repetition System", icon: <Cards />, color: "text-amber-500", bg: "bg-amber-50" }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="bg-zinc-50 border border-zinc-100 p-4 rounded-2xl flex items-center gap-4 group hover:bg-white hover:shadow-md transition-all"
        >
          <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shadow-sm border border-white`}>
            {item.icon}
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-blue-950">{item.label}</p>
            <p className="text-[10px] text-zinc-400 font-medium">{item.desc}</p>
          </div>
          <CaretRight size={14} className="text-zinc-300 group-hover:text-blue-600" />
        </motion.div>
      ))}
    </div>

    {/* Live Mastery Animation */}
    <div className="mt-auto bg-zinc-50 rounded-2xl p-6 border border-zinc-100 relative overflow-hidden shadow-inner flex items-center justify-center min-h-[140px]">
      <motion.div
        animate={{
          rotateY: [0, 180, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-48 h-24 bg-white rounded-xl shadow-xl border border-blue-100 flex items-center justify-center p-4 relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 flex items-center justify-center backface-hidden">
          <p className="text-xs font-black text-blue-900 text-center uppercase tracking-widest px-4">What is the capital of Nigeria?</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
          <div className="text-center">
            <CheckCircle size={24} className="text-green-500 mx-auto mb-1" />
            <p className="text-sm font-black text-zinc-900">Abuja</p>
          </div>
        </div>
      </motion.div>

      <div className="absolute top-4 left-6">
        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Mastery Progress</p>
        <p className="text-lg font-black text-blue-950">14/25 Cards</p>
      </div>
    </div>
  </div>
);

const SoftwareEngineeringGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden p-8 flex flex-col gap-6 border border-blue-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,68,155,0.03),transparent_70%)]" />

    {/* Code Editor Header */}
    <div className="relative z-10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
          <Code weight="duotone" size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">STEM Lab</p>
          <p className="text-sm font-bold text-blue-950">Dev Ecosystem</p>
        </div>
      </div>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
      </div>
    </div>

    {/* Terminal / Code Simulation (Light IDE) */}
    <div className="relative flex-1 bg-zinc-50 rounded-2xl border border-zinc-200 p-6 font-mono text-[10px] overflow-hidden shadow-inner">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <Code size={120} weight="thin" className="text-blue-900" />
      </div>

      <div className="space-y-2 relative z-10">
        {[
          { tag: "class", name: "LoralInnovation", color: "text-purple-600" },
          { tag: "function", name: "buildFuture()", color: "text-blue-600" },
          { tag: "const", name: "skills = ['AI', 'Web', 'Data']", color: "text-amber-600" }
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.3 }}
            className="flex gap-2"
          >
            <span className={`${line.color} font-bold`}>{line.tag}</span>
            <span className="text-blue-950">{line.name}</span>
          </motion.div>
        ))}

        <div className="mt-4 pt-4 border-t border-zinc-200 space-y-1">
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-green-600 font-bold"
          >
            &gt; Compiling curriculum...
          </motion.p>
          <p className="text-zinc-400">&gt; Modules loaded: 14</p>
          <p className="text-zinc-400">&gt; System status: Optimized</p>
        </div>
      </div>

      {/* Animated Cursor */}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="w-2 h-4 bg-blue-600 mt-2"
      />
    </div>

    {/* Tech Stack Icons */}
    <div className="relative z-10 flex justify-between px-2">
      {[<Atom />, <Globe />, <Desktop />, <Code />].map((icon, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          className="w-10 h-10 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center text-blue-600/60"
        >
          {icon}
        </motion.div>
      ))}
    </div>

    {/* Mastery Gauge */}
    <div className="mt-auto bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex items-center justify-between shadow-inner">
      <div>
        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">STEM Readiness</p>
        <p className="text-xl font-black text-blue-950">Mastery Level</p>
      </div>
      <div className="flex items-end gap-1">
        {[1, 2, 3, 4, 5].map(i => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${20 + i * 15}%` }}
            transition={{ delay: 1 + (i * 0.1), duration: 0.5 }}
            className={`w-2 rounded-full ${i < 5 ? 'bg-blue-600' : 'bg-amber-500 animate-pulse'}`}
          />
        ))}
      </div>
    </div>
  </div>
);

const CompetitiveLearningGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden p-8 flex flex-col gap-6 border border-zinc-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(240,168,24,0.05),transparent_70%)]" />

    {/* Motivation Header */}
    <div className="relative z-10 flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
          style={{ backgroundColor: '#F0A818' }}
        >
          <Trophy weight="duotone" size={24} />
        </motion.div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Student Culture</p>
          <p className="text-sm font-bold text-blue-950">Motivation Ecosystem</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
        <Star weight="fill" className="text-blue-600" size={12} />
        <span className="text-[9px] font-black text-blue-900 uppercase">Season 04</span>
      </div>
    </div>

    {/* Animated Leaderboard */}
    <div className="relative z-10 space-y-3 flex-1">
      {[
        { name: "Chisom E.", points: "1,240 pts", rank: 1, color: "bg-gold" },
        { name: "Daniel A.", points: "1,180 pts", rank: 2, color: "bg-zinc-300" },
        { name: "Fatima S.", points: "1,150 pts", rank: 3, color: "bg-amber-600" }
      ].map((student, i) => (
        <motion.div
          key={i}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.2, type: "spring" }}
          className="bg-zinc-50 border border-zinc-100 p-4 rounded-2xl flex items-center justify-between group hover:bg-white hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-black ${student.color}`} style={{ backgroundColor: student.rank === 1 ? '#F0A818' : undefined }}>
              {student.rank}
            </div>
            <div>
              <p className="text-xs font-bold text-blue-950">{student.name}</p>
              <p className="text-[9px] text-zinc-400 font-medium">House Academic Lead</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-black text-blue-950">{student.points}</p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
              className="flex items-center justify-end gap-1"
            >
              <Lightning weight="fill" className="text-amber-500" size={10} />
              <span className="text-[8px] font-black text-amber-500 uppercase">+15</span>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Achievement Badges */}
    <div className="relative z-10 flex gap-4">
      {[
        { icon: <CheckCircle />, label: "Consistency" },
        { icon: <Sparkle />, label: "Excellence" }
      ].map((badge, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5 }}
          className="flex-1 bg-blue-950 rounded-2xl p-4 flex flex-col items-center gap-2 border border-white/5"
        >
          <div className="text-gold" style={{ color: '#F0A818' }}>{badge.icon}</div>
          <p className="text-[8px] font-black uppercase tracking-widest text-white/60">{badge.label}</p>
        </motion.div>
      ))}
    </div>

    {/* Performance Surge Indicator */}
    <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-6 rounded-[2rem] text-white relative overflow-hidden">
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">Impact Analysis</p>
          <p className="text-lg font-black">Engagement Surge</p>
        </div>
        <p className="text-3xl font-black shrink-0 whitespace-nowrap mt-[-18px]" style={{ color: '#F0A818' }}>+65%</p>
      </div>
      <div className="mt-4 flex gap-1 items-end h-8">
        {[20, 40, 30, 60, 50, 80, 100].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              height: { delay: 1.5 + (i * 0.1), duration: 0.5 },
              opacity: { duration: 3, repeat: Infinity, delay: i * 0.2 }
            }}
            className="flex-1 bg-white rounded-t-sm"
          />
        ))}
      </div>
    </div>
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
      skewX: [skew, '0deg', skew],
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
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const mainScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentPage]);

  useEffect(() => {
    if (scrollRef.current) {
      const activeDot = document.getElementById(`step-${currentPage}`);
      if (activeDot) {
        const container = scrollRef.current;
        const scrollLeft = activeDot.offsetLeft - (container.offsetWidth / 2) + (activeDot.offsetWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [currentPage]);

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
    { title: "Student Practice & Mastery Suite", desc: "Interactive digital tools for active learning, including class notes, quizzes, and flashcards.", impact: ["Active recall", "Improved retention", "Practice consistency", "Mobile access"], icon: <BookOpen size={32} weight="duotone" />, photo: photo14 },
    { title: "Software Engineering & Tech Development", desc: "Practical exposure to software engineering and emerging tech skills.", impact: ["Future-ready skills", "Innovation appeal", "Stronger STEM", "Competitiveness"], icon: <Code size={32} weight="duotone" />, photo: photo10 },
    { title: "Academic Motivation & Competitive Learning", desc: "A structured motivation ecosystem using intra-class competitions.", impact: ["Student enthusiasm", "Performance culture", "Healthy competition", "Consistency"], icon: <Trophy size={32} weight="duotone" />, photo: photo6 }
  ];

  const pages = [
    {
      id: 'cover', content: (
        <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-8 relative overflow-hidden font-sans py-32">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center z-10">
            {/* Image Frame on the Left */}
            <div className="relative h-[400px] md:h-[600px] w-full order-2 md:order-1">
              <motion.div
                animate={{ rotate: -2, y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
              >
                <ImageSlideshow images={images.campus} interval={7000} />
              </motion.div>
              <motion.div
                animate={{ rotate: 2, x: [10, 0, 10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-4 border-2 border-dashed rounded-[3rem] opacity-20"
                style={{ borderColor: colors.royalBlue }}
              />
            </div>

            {/* Content on the Right */}
            <div className="space-y-8 text-left order-1 md:order-2">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <div className="w-24 h-24 md:w-32 md:h-32 mb-8 flex items-center justify-center"><img src={logo.src} className="w-full h-full object-contain" alt="Loral Logo" /></div>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-4xl md:text-7xl mb-8 text-blue-950 leading-tight font-black">
                LORAL <br />
                <span style={{ color: colors.gold }}>INTERNATIONAL</span> <br />
                SCHOOLS
              </motion.h1>
              <div className="space-y-4">
                <p className="text-sm md:text-lg font-bold uppercase tracking-[0.3em]" style={{ color: colors.royalBlue }}>PROPOSED DIGITAL & GROWTH INITIATIVES</p>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 1 }} className="h-1.5 w-48 origin-left rounded-full" style={{ backgroundColor: colors.red }} />
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-12 right-12 z-10 hidden md:block">
            <div className="w-24 h-24 rounded-full border border-zinc-200 flex items-center justify-center p-2 backdrop-blur-sm bg-white/50"><img src={logoGif.src} className="w-full h-full object-contain opacity-80" alt="Loral GIF" /></div>
          </motion.div>
        </section>
      )
    },
    {
      id: '2-landscape', content: (
        <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-8 relative overflow-hidden font-sans py-32">
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
      )
    },
    {
      id: '3-mission', content: (
        <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-8 relative overflow-hidden font-sans py-32 bg-blue-950 text-white">
          <div className="absolute inset-0 opacity-10"><img src={photo1.src} className="w-full h-full object-cover grayscale" alt="Mission" /></div>
          <div className="max-w-4xl text-center z-10">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="mb-6"><GraduationCap size={64} weight="duotone" style={{ color: colors.gold }} className="mx-auto" /></motion.div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">A Mission for Digital Excellence</h2>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10"><DigitalEcosystemGraphic /></motion.div>
            <p className="text-xl md:text-2xl font-light text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">We are building an intelligent, integrated ecosystem that powers growth, trust, and superiority through:</p>
            <div className="flex wrap justify-center gap-10">
              {[{ label: "Automation", color: colors.red, icon: <Lightning weight="duotone" /> }, { label: "Intelligence", color: colors.royalBlue, icon: <ChartBar weight="duotone" /> }, { label: "Visibility", color: colors.gold, icon: <Globe weight="duotone" /> }].map((item, i) => (
                <div key={i} className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10" style={{ color: item.color }}>{item.icon}</div><span className="text-lg font-bold uppercase tracking-widest">{item.label}</span></div>
              ))}
            </div>
          </div>
        </section>
      )
    },
    {
      id: '4-strategy', content: (
        <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-8 relative overflow-hidden font-sans py-32">
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
      )
    },
    {
      id: 'vision', content: (
        <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-8 relative overflow-hidden font-sans py-32">
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
      )
    },
    ...initiatives.map((item, index) => ({
      id: `initiative-${index + 1}`,
      content: (
        <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-8 relative overflow-hidden font-sans py-32">
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
              {index === 0 ? <AdmissionsConversionGraphic /> : index === 1 ? <ParentCommunicationGraphic /> : index === 2 ? <ExaminationProcessingGraphic /> : index === 3 ? <PremiumBrandingGraphic /> : index === 4 ? <PerformanceIntelligenceGraphic /> : index === 5 ? <ClassroomCoordinationGraphic /> : index === 6 ? <FinancialTrackingGraphic /> : index === 7 ? <DigitalIdentityGraphic /> : index === 8 ? <ReportingAnalyticsGraphic /> : index === 9 ? <MultiCampusCoordinationGraphic /> : index === 10 ? <BiometricAttendanceGraphic /> : index === 11 ? <SmartTransportationGraphic /> : index === 12 ? <StudentPracticeGraphic /> : index === 13 ? <SoftwareEngineeringGraphic /> : index === 14 ? <CompetitiveLearningGraphic /> : <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10"><img src={item.photo.src} className="w-full h-full object-cover" alt={item.title} /><div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" /><div className="absolute bottom-8 left-8 text-white"><div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">{item.icon}</div><p className="text-lg font-black italic">Transformation Pathway</p></div></div>}
            </div>          </div>
        </section>
      )
    })),
    {
      id: 'closing', content: (
        <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-8 relative overflow-hidden font-sans py-32 bg-blue-950 text-white">
          {/* Cinematic Background Image with Motion */}
          <div className="absolute inset-0 z-0 scale-110">
            <motion.img
              src={photo12.src}
              className="w-full h-full object-cover opacity-20 grayscale"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 0.5, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              alt="Campus Background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/90 to-blue-950/40" />
          </div>

          <div className="z-10 max-w-5xl px-4 flex flex-col items-center">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="mb-6 inline-block">
              <div className="w-56 h-56 flex items-center justify-center">
                <img src={logo.src} className="w-full h-full object-contain" alt="Loral" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-8xl font-black mb-4 leading-[1.1] text-white">Ready to build the future of Loral?</h2>
            <p className="text-sm md:text-base text-blue-100/90 mb-12 font-bold uppercase tracking-[0.25em] max-w-3xl mx-auto">Let's double your impact, while reducing your input.</p>
            <div className="flex flex-col items-center gap-12 mt-4">
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
      )
    }
  ];

  const paginate = (newDir: number) => { if (currentPage + newDir >= 0 && currentPage + newDir < pages.length) { setDirection(newDir); setCurrentPage(currentPage + newDir); } };
  const variants = { enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', rotateY: dir > 0 ? 45 : -45, opacity: 0 }), center: { zIndex: 1, x: 0, rotateY: 0, opacity: 1 }, exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? '100%' : '-100%', rotateY: dir < 0 ? 45 : -45, opacity: 0 }) };
  const totalPages = pages.length;

  return (
    <div ref={mainScrollRef} className="min-h-screen w-screen bg-white text-zinc-900 overflow-y-auto no-scrollbar selection:bg-blue-100 selection:text-blue-600 font-sans relative">
      <MobileWarning />
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 }, rotateY: { duration: 0.4 } }}
          className="min-h-screen w-full flex flex-col items-center py-20 md:py-0"
        >
          {pages[currentPage].content}
        </motion.div>
      </AnimatePresence>
      {mounted && <ConfettiLayer />}
      <DeckController
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        setDirection={setDirection}
        accentColor={colors.royalBlue}
        autoplayDelay={6000}
      />
      <div className="fixed top-6 md:top-10 left-6 md:left-12 z-50 flex items-center gap-6">
        <motion.div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"><img src={logo.src} className="w-full h-full object-contain" alt="Loral" /></motion.div>
        <div className="hidden md:block">
          <p className={`text-[10px] uppercase tracking-[0.4em] font-black transition-colors ${[2, 20].includes(currentPage) ? 'text-white' : 'text-blue-950'}`}>Loral International Schools</p>
          <p className={`text-[8px] uppercase tracking-[0.3em] font-bold transition-colors ${[2, 20].includes(currentPage) ? 'text-blue-300' : 'text-blue-900/40'}`}>Digital Proposal 2026</p>
        </div>
      </div>
      <div className="fixed top-6 md:top-10 right-6 md:right-12 z-50"><div className="px-4 py-2 bg-blue-950 text-white rounded-full text-[10px] font-black tracking-widest shadow-xl">{String(currentPage + 1).padStart(2, '0')} <span className="text-blue-400">/</span> {totalPages}</div></div>
    </div>
  );
}

function Eye(p: any) { return <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>; }
