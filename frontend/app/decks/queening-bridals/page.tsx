'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Calendar, MessageSquare, 
  ShieldCheck, Globe, Star, ShoppingBag, BellRing, PhoneCall, 
  Heart, Camera, TrendingUp, Users, Layout, Award, Rocket, CheckCircle2, Sparkles,
  Home, MessageCircle, Monitor
} from 'lucide-react';
import { 
  Phone, 
  WhatsappLogo, 
  House, 
  Handbag 
} from "phosphor-react";
// Local Assets
import photo1 from './assets/photo1.jpg';
import photo2 from './assets/photo2.jpg';
import photo3 from './assets/photo3.jpg';
import photo4 from './assets/photo4.jpg';
import photo5 from './assets/photo5.jpg';
import photo6 from './assets/photo6.jpg';
import photo7 from './assets/photo7.jpg';

// --- Sub-Components for Motion ---

const ImageSlideshow = ({ images, interval = 5000 }: { images: any[], interval?: number }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].src || images[index]}
          src={images[index].src || images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Bridal"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  );
};

const AnimatedFrame = ({ children, color }: { children: React.ReactNode, color: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="relative p-1 rounded-[2.5rem] overflow-hidden group"
  >
    <motion.div
      animate={{
        rotate: [0, 360],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute -inset-20 opacity-30 group-hover:opacity-100 transition-opacity"
      style={{
        background: `conic-gradient(from 0deg, transparent, ${color}, transparent, ${color}, transparent)`
      }}
    />
    <div className="relative bg-white rounded-[2.4rem] h-full">
      {children}
    </div>
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
  const confettiColors = ["#FF1695", "#FFA6CA", "#F47EAB", "#DA4F8E", "#FFFFFF", "#FFCFD8", "#FFAC6A"];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[60]">
      {pieces.map((_, i) => {
        const size = 4 + Math.random() * 8;
        const speed = 10 + Math.random() * 15;
        const blur = Math.random() > 0.8 ? '2px' : '0px'; 
        const borderRadius = Math.random() > 0.5 ? '50%' : '1px';
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
const MobileWarning = () => (
  <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center p-8 text-center md:hidden">
    <div className="w-20 h-20 mb-8 rounded-3xl bg-white/10 flex items-center justify-center border border-white/20">
      <Monitor size={40} className="text-white" />
    </div>
    <h2 className="text-2xl font-serif text-white mb-4 italic">Desktop Optimized</h2>
    <p className="text-zinc-400 leading-relaxed max-w-xs mx-auto text-sm font-light">
      This high-fidelity interactive pitch is best experienced on a larger screen. Please switch to a desktop device for the full bridal transformation walkthrough.
    </p>
    <div className="mt-12 flex items-center gap-2 opacity-30">
      <span className="font-sans text-sm font-bold text-white tracking-[-0.08em]">Reed Breed</span>
      <div className="w-1 h-1 rounded-full bg-pink-500" />
    </div>
  </div>
);

// --- Main Page Component ---

export default function QueeningBridalsPitch() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);
  const mainScrollRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      const activeDot = scrollRef.current.children[currentPage] as HTMLElement;
      if (activeDot) {
        scrollRef.current.scrollTo({
          left: activeDot.offsetLeft - (scrollRef.current.offsetWidth / 2) + (activeDot.offsetWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [currentPage]);

  // User Provided Bridal Palette (Corrected)
  const colors = {
    softPink: "#FFCFD8",
    accentPink: "#FFA6CA",
    hotPink: "#FF1695",
    blush: "#FF9CB4",
    rose: "#F47EAB",
    deepRose: "#DA4F8E",
  };

  const images = {
    gowns: [photo2, photo3, photo4],
    details: [photo6, photo7],
    brides: [photo1, photo5]
  };

  const pages = [
    {
      id: '1-cover',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 relative overflow-hidden bg-white">
          <ImageSlideshow images={images.gowns} interval={6000} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white" />

          <div className="max-w-4xl w-full z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white shadow-xl flex items-center justify-center" style={{ color: colors.hotPink }}>
                <Heart size={40} fill={colors.hotPink} />
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-4xl md:text-7xl font-serif mb-6 text-zinc-900 leading-tight">
              Queening Bridals
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-lg md:text-2xl font-light text-zinc-600 mb-10">
              <p className="text-sm md:text-lg font-bold uppercase tracking-[0.3em] mb-4 text-zinc-500">Digital Transformation Plan</p>
            </motion.p>
            <div className="h-1.5 w-48 mx-auto rounded-full" style={{ background: `linear-gradient(to right, ${colors.accentPink}, ${colors.hotPink})` }} />
          </div>
        </section>
      )
    },
    {
      id: '2-opportunity',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-[#FCF9F2] relative overflow-hidden">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
            <div className="space-y-8">
              <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-4xl md:text-6xl font-serif text-zinc-900">Bridal Shopping Has Changed</motion.h2>
              <div className="space-y-4">
                {[
                  "Search online first", "Compare styles and prices", "Read reviews",
                  "Ask questions digitally", "Book appointments online", "Expect fast responses"
                ].map((text, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: colors.hotPink }}
                    />
                    <span className="text-xl text-zinc-700 font-light">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <AnimatedFrame color={colors.hotPink}>
              <div className="p-10 text-center">
                <p className="text-2xl md:text-4xl font-serif italic text-zinc-800 leading-relaxed">
                  "Queening Bridals has the reputation. Now it needs the digital engine."
                </p>
              </div>
            </AnimatedFrame>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full border border-pink-100 border-dashed opacity-50"
          />
        </section>
      )
    },
    {
      id: '3-challenges',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-zinc-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
            <img src={photo4.src} className="w-full h-full object-cover blur-sm" alt="bg" />
          </div>
          <div className="max-w-5xl w-full z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-10 text-center text-white/90">Common Pain Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Manual Operations", desc: "Endless WhatsApp & IG DMs. Repetitive inquiries. Missed messages.", icon: <MessageSquare size={20} />, color: colors.hotPink },
                { title: "Limited Visibility", desc: "Customers only see what's posted, not the full collection.", icon: <Layout size={20} />, color: colors.accentPink },
                { title: "Weak Follow-up", desc: "Interested brides disappear without a structured nurture.", icon: <BellRing size={20} />, color: colors.rose },
                { title: "Revenue Leakage", desc: "Missed bookings. Lost Inquiries. No recovery system for abadoned leads.", icon: <TrendingUp size={20} />, color: colors.blush }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl">
                  <div className="mb-4 inline-block p-2 rounded-lg bg-zinc-800" style={{ color: item.color }}>{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: item.color }}>{item.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      )
    },
    {
      id: '4-vision',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-white overflow-hidden relative">
          <div className="max-w-5xl w-full z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] w-full">
              <motion.div
                animate={{ rotate: 5, y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 z-10"
              >
                <ImageSlideshow images={images.brides} />
              </motion.div>
              <motion.div
                animate={{ rotate: -5, x: [-10, 0, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-4 border-2 border-dashed rounded-[3rem] opacity-30"
                style={{ borderColor: colors.hotPink }}
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 leading-tight">Imagine a bridal experience where:</h2>
              <div className="space-y-1 text-left">
                {[
                  "Brides browse gowns 24/7",
                  "Book fittings online",
                  "Get instant answers",
                  "View authentic testimonies",
                  "Receive reminders automatically",
                  "Join an exclusive bridal list",
                  "Experience Queening Bridals as a premium luxury brand"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.hotPink }} />
                    <span className="text-lg md:text-xl text-zinc-600 font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-10 border-l-8 rounded-r-3xl bg-zinc-50 shadow-inner"
                style={{ borderLeftColor: colors.hotPink }}
              >
                <p className="text-2xl md:text-3xl font-serif text-zinc-800">
                  "This is more than a website. It is a bridal conversion system."
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '5-overview',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-zinc-50 relative overflow-hidden">
          <div className="max-w-6xl w-full relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-12 text-zinc-900 text-center">10 Integrated Solutions</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { icon: <ShoppingBag />, label: "24/7 Showroom" },
                { icon: <Star />, label: "Testimony Hub" },
                { icon: <Calendar />, label: "Smart Booking" },
                { icon: <MessageSquare />, label: "AI Chatbot" },
                { icon: <Users />, label: "Lead Collection" },
                { icon: <Sparkles />, label: "Offers Engine" },
                { icon: <Globe />, label: "Google Visibility" },
                { icon: <ShieldCheck />, label: "Digital Catalog" },
                { icon: <PhoneCall />, label: "Recovery System" },
                { icon: <Rocket />, label: "Premium Website" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white p-6 rounded-3xl shadow-lg border border-zinc-100 text-center flex flex-col items-center justify-center group"
                >
                  <div className="mb-4 p-4 rounded-2xl bg-zinc-50 group-hover:bg-pink-50 transition-colors" style={{ color: colors.hotPink }}>{item.icon}</div>
                  <span className="text-sm font-bold text-zinc-800 leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )
    },
    {
      id: '6-showroom',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-white relative overflow-hidden">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-6 py-2 rounded-full text-sm font-bold text-white shadow-xl" style={{ backgroundColor: colors.hotPink }}>FEATURE 01</motion.div>
              <h2 className="text-4xl md:text-7xl font-serif text-zinc-900 leading-tight">24/7 Online Showroom</h2>
              <p className="text-2xl text-zinc-500 italic leading-relaxed">“Brides browse your collection anytime, anywhere.”</p>
              <div className="space-y-4">
                {["Available Dresses", "Booked Gowns", "Accessories", "New Arrivals"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-zinc-50 rounded-2xl border-l-8 shadow-sm flex items-center justify-between group cursor-default"
                    style={{ borderColor: colors.accentPink }}
                  >
                    <span className="text-lg font-bold text-zinc-800">{item}</span>
                    <ChevronRight className="text-zinc-300 group-hover:text-pink-400 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-pink-100 rounded-[3rem] rotate-3 -z-10 group-hover:rotate-0 transition-transform duration-500" />
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <ImageSlideshow images={[photo3, photo4]} interval={4000} />
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 p-6 bg-white rounded-3xl shadow-2xl z-20"
              >
                <ShoppingBag style={{ color: colors.hotPink }} size={32} />
              </motion.div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '7-testimony',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-[#FCF9F2] relative overflow-hidden">
          <div className="max-w-5xl w-full text-center z-10">
            <div className="inline-block px-6 py-2 rounded-full text-sm font-bold text-white mb-10 shadow-lg" style={{ backgroundColor: colors.accentPink }}>FEATURE 02</div>
            <h2 className="text-4xl md:text-7xl font-serif text-zinc-900 mb-12">Client Testimony Hub</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square">
                <motion.div
                  animate={{ rotate: -5 }}
                  className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl z-10"
                >
                  <ImageSlideshow images={[photo5, photo1]} interval={5000} />
                </motion.div>
                <div className="absolute inset-0 rounded-[3rem] border-8 border-white -rotate-3 translate-x-4 translate-y-4 shadow-xl" />
              </div>
              <div className="text-left space-y-8">
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} fill={colors.hotPink} style={{ color: colors.hotPink }} />)}
                </div>
                <p className="text-3xl md:text-5xl font-serif italic text-zinc-800 leading-tight">
                  "People trust brides more than adverts."
                </p>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-zinc-100">
                  <p className="text-xl text-zinc-500 italic">"Turn happy brides into your most powerful sales ambassadors."</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '8-booking',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-white">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-sm bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border border-zinc-100"
              >
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-serif font-bold">Book a Fitting</h3>
                    <Calendar style={{ color: colors.hotPink }} />
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className={`aspect-square rounded-xl border ${i === 3 ? 'bg-pink-500 text-white' : 'bg-zinc-50'}`} />)}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full py-4 rounded-2xl text-white font-bold text-center shadow-lg"
                    style={{ background: `linear-gradient(to right, ${colors.accentPink}, ${colors.hotPink})` }}
                  >
                    Confirm Booking
                  </motion.div>
                </div>
                <div className="bg-zinc-950 p-6 text-white flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest">Available Slots Today</span>
                  <span className="text-pink-400 font-bold">12 Total</span>
                </div>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[20px] border-pink-50 border-dashed rounded-full -z-10 opacity-50"
              />
            </div>
            <div className="space-y-8">
              <div className="inline-block px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg" style={{ backgroundColor: colors.rose }}>FEATURE 03</div>
              <h2 className="text-4xl md:text-7xl font-serif text-zinc-900 leading-tight">Smart Online Booking</h2>
              <p className="text-2xl text-zinc-600 leading-relaxed">Eliminate scheduling friction. Brides book fittings, consultations, measurement, and pick-ups instantly.</p>
              <div className="grid grid-cols-1 gap-4">
                {["Automated Reminders", "Calendar Sync", "Reduced No-shows", "Professional Workflow"].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300"><CheckCircle2 size={20} /></div>
                    <span className="text-xl font-bold text-zinc-800">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '9-chatbot',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-zinc-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,22,149,0.1),transparent_70%)]" />
          <div className="max-w-4xl w-full text-center relative z-10">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="mb-10 inline-block p-6 rounded-full bg-white/5 border border-white/10">
              <MessageSquare size={48} style={{ color: colors.accentPink }} />
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-serif mb-8 text-white/90">Bridal Inquiry Chatbot</h2>
            <p className="text-2xl text-zinc-400 mb-16 max-w-2xl mx-auto italic">"Instant responses, day or night. Capture every lead while you sleep."</p>

            <div className="max-w-lg mx-auto space-y-6 text-left">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="p-6 bg-zinc-900 rounded-[2rem] rounded-bl-none text-lg border border-white/5 shadow-2xl">
                Do you have the Ivory gown in Size 12?
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="p-6 rounded-[2rem] rounded-br-none text-lg self-end ml-16 shadow-[0_20px_50px_rgba(255,22,149,0.3)] border border-white/10" style={{ background: `linear-gradient(135deg, ${colors.deepRose}, ${colors.hotPink})` }}>
                Yes, it's available! Would you like to see photos or book a fitting for this Saturday?
              </motion.div>
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-zinc-500 text-sm ml-2">Chatbot is typing...</motion.div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '10-leads',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-white overflow-hidden">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-block px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg" style={{ backgroundColor: colors.blush }}>FEATURE 05</div>
              <h2 className="text-4xl md:text-7xl font-serif text-zinc-900 leading-tight">Lead Capture System</h2>
              <p className="text-2xl text-zinc-600">Turn casual browsers into a structured bridal database for consistent sales follow-up.</p>
              <div className="grid grid-cols-2 gap-6">
                {["Wedding Date", "Style Preference", "Phone Number", "Niche Interests"].map((item, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center" style={{ color: colors.hotPink }}><Heart size={20} /></div>
                    <span className="font-bold text-zinc-800">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-pink-100 rounded-full blur-[100px] opacity-30" />
              <div className="relative z-10 p-12 bg-white rounded-[4rem] shadow-2xl border border-zinc-100 text-center">
                <Users size={64} className="mx-auto mb-8" style={{ color: colors.hotPink }} />
                <p className="text-3xl md:text-4xl font-serif text-zinc-900 mb-8 italic">
                  "Most bridal sales happen through follow-up, not first contact."
                </p>
                <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 2 }}
                    className="h-full"
                    style={{ backgroundColor: colors.hotPink }}
                  />
                </div>
                <p className="mt-4 text-sm font-bold text-zinc-400 uppercase tracking-widest">85% Higher Conversion with Nurture</p>
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '11-pricing',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-[#FCF9F2] relative">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 rounded-full text-sm font-bold text-white mb-6 shadow-lg" style={{ backgroundColor: colors.accentPink }}>FEATURE 06</div>
              <h2 className="text-4xl md:text-7xl font-serif text-zinc-900">Packages & Urgency</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <motion.div whileHover={{ y: -10 }} className="p-12 rounded-[3rem] bg-white shadow-xl border border-zinc-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Heart size={160} style={{ color: colors.hotPink }} />
                </div>
                <h3 className="text-3xl font-serif mb-6 text-zinc-900">Bridal Packages</h3>
                <p className="text-xl text-zinc-500 mb-8 leading-relaxed">Create structured rental plans, customized add-ons, and luxury pre-order offers that increase average order value.</p>
                <div className="flex items-center gap-4 text-pink-600 font-bold">
                  <span>View Examples</span>
                  <ChevronRight />
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="p-12 rounded-[3rem] bg-white shadow-xl border border-zinc-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <TrendingUp size={160} style={{ color: colors.hotPink }} />
                </div>
                <h3 className="text-3xl font-serif mb-6 text-zinc-900">Urgency Engine</h3>
                <p className="text-xl text-zinc-500 mb-8 leading-relaxed">Limited-time promotional banners, seasonal countdowns, and "last style available" alerts to drive faster decisions.</p>
                <div className="flex items-center gap-4 text-pink-600 font-bold">
                  <span>Explore Tools</span>
                  <ChevronRight />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '12-google',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-zinc-950 text-white relative">
          <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg" style={{ backgroundColor: colors.hotPink }}>FEATURE 07</div>
              <h2 className="text-4xl md:text-7xl font-serif leading-tight">Google Visibility</h2>
              <p className="text-2xl text-zinc-400 italic">"Be the first bridal shop Owerri brides find when they search."</p>
              <div className="space-y-4">
                {["Search Visibility", "Google Map Discovery", "Reputation Management"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-pink-500/20 text-pink-400 font-bold">{i + 1}</div>
                    <span className="text-xl text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-900 p-12 rounded-[3rem] border border-zinc-800 shadow-2xl transform rotate-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <div className="w-4 h-4 rounded-full bg-yellow-500" />
                <div className="w-4 h-4 rounded-full bg-green-500" />
              </div>
              <div className="space-y-6">
                <div className="h-4 bg-zinc-800 rounded-full w-1/3" />
                <div className="h-10 bg-zinc-800 rounded-2xl w-full border border-zinc-700 p-3">
                  <span className="text-zinc-500 text-sm italic">Bridal shop in Owerri</span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="p-6 bg-white rounded-2xl"
                >
                  <p className="text-blue-600 font-bold text-lg mb-1">Queening Bridals Owerri</p>
                  <div className="flex gap-1 text-yellow-500 mb-2">★★★★★</div>
                  <p className="text-zinc-400 text-xs">Owerri's #1 Luxury Bridal Experience. Shop online 24/7...</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '13-catalog',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-white overflow-hidden relative">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-6 relative">
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl relative z-10"
              >
                <ImageSlideshow images={[photo6, photo7]} interval={3500} />
              </motion.div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl mt-12"
              >
                <ImageSlideshow images={[photo3, photo4]} interval={4500} />
              </motion.div>
              <div className="absolute inset-0 border-2 border-pink-100 rounded-full blur-[100px] -z-10" />
            </div>
            <div className="space-y-8">
              <div className="inline-block px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg" style={{ backgroundColor: colors.rose }}>FEATURE 08</div>
              <h2 className="text-4xl md:text-7xl font-serif text-zinc-900 leading-tight">Digital Catalog</h2>
              <p className="text-2xl text-zinc-600 italic">"Stop sending endless photos in DMs. Present your collection with luxury."</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: "Smart Filters", desc: "Browse by style, size, or category." },
                  { title: "HD Visuals", desc: "Zoom into textures and fine details." },
                  { title: "Live Status", desc: "Instantly see what's available for rent." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0" style={{ color: colors.hotPink }}><Camera size={20} /></div>
                    <div>
                      <p className="font-bold text-zinc-900 text-base">{item.title}</p>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '14-recovery',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-[#FCF9F2] relative overflow-hidden">
          <div className="max-w-4xl w-full text-center z-10">
            <div className="inline-block px-6 py-2 rounded-full text-sm font-bold text-white mb-10 shadow-lg" style={{ backgroundColor: colors.deepRose }}>FEATURE 09</div>
            <h2 className="text-4xl md:text-7xl font-serif mb-8 text-zinc-900 leading-tight">Recover Lost Sales</h2>
            <p className="text-2xl text-zinc-500 mb-12 font-light">"Identifying brides who disappeared and bringing them back automatically."</p>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative max-w-lg mx-auto mt-12"
            >
              {/* Overlapping Bell Icon (Reduced) */}
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl z-20 border border-pink-50"
              >
                <BellRing size={32} style={{ color: colors.hotPink }} />
              </motion.div>

              <div className="relative p-10 rounded-[2.5rem] bg-white shadow-2xl border border-zinc-100 overflow-hidden">
                <div className="space-y-6 mt-2">
                  <p className="text-2xl font-serif text-zinc-800">Abandoned Inquiry Recovery</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {["Unfinished Bookings", "Unanswered Inquiries", "Disappeared Leads"].map((tag, i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                        className="px-6 py-2 bg-zinc-50 rounded-xl text-sm font-bold text-zinc-400 border border-zinc-100"
                      >
                        Recovering {tag}...
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>          </div>
        </section>
      )
    },
    {
      id: '15-premium',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-white overflow-hidden">
          <div className="max-w-5xl w-full text-center relative">
            <div className="inline-block px-6 py-2 rounded-full text-sm font-bold text-white mb-10 shadow-lg" style={{ backgroundColor: colors.hotPink }}>FEATURE 10</div>
            <h2 className="text-4xl md:text-7xl font-serif mb-10 text-zinc-900">Premium Brand Positioning</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center text-left">
              <div className="space-y-8">
                <p className="text-3xl font-serif leading-tight text-zinc-800">
                  "A premium website supports premium pricing. When you look like luxury, you can charge like luxury."
                </p>
                <div className="space-y-4">
                  {[
                    "Professional Visual Storytelling", "Mobile-First Luxury Experience", "Ultrafast Loading Speed"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 text-xl font-bold text-zinc-600">
                      <Heart size={24} style={{ color: colors.hotPink }} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <AnimatedFrame color={colors.hotPink}>
                <div className="aspect-square">
                  <ImageSlideshow images={[photo1, photo2, photo3]} interval={5000} />
                </div>
              </AnimatedFrame>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '16-impact',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-zinc-50">
          <div className="max-w-5xl w-full text-center">
            <h2 className="text-4xl md:text-7xl font-serif mb-16 text-zinc-900 leading-tight">Expected Business Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { label: "More Inquiries", val: "+45%", icon: <TrendingUp /> },
                { label: "Bookings", val: "+30%", icon: <Calendar /> },
                { label: "Manual Work", val: "-60%", icon: <Rocket /> },
                { label: "Conversion", val: "+25%", icon: <Award /> },
                { label: "Lead Response", val: "Instant", icon: <MessageSquare /> },
                { label: "Brand Equity", val: "Premium", icon: <Star /> }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="p-10 bg-white rounded-[3rem] shadow-xl border border-zinc-100 flex flex-col items-center group transition-all"
                >
                  <div className="mb-6 p-4 rounded-2xl bg-zinc-50 group-hover:bg-pink-500 group-hover:text-white transition-colors" style={{ color: colors.hotPink }}>{stat.icon}</div>
                  <div className="text-4xl font-black mb-2 leading-none" style={{ color: colors.hotPink }}>{stat.val}</div>
                  <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )
    },
    {
      id: '17-roadmap',
      content: (
        <section className="h-full w-full flex items-center justify-center p-6 bg-[#FCF9F2] relative overflow-hidden">
          <div className="max-w-4xl w-full relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-10 text-center text-zinc-900 leading-tight">Implementation Roadmap</h2>
            <div className="space-y-3 relative">
              <div className="absolute left-[31px] top-6 bottom-6 w-0.5 bg-zinc-200 -z-10" />
              {[
                { text: "Phase 1: Planning & Luxury Design", color: colors.hotPink },
                { text: "Phase 2: Website & Catalog Architecture", color: colors.accentPink },
                { text: "Phase 3: Automation & AI System Integration", color: colors.rose },
                { text: "Phase 4: Optimization, Testing & Launch", color: colors.deepRose },
                { text: "Phase 5: Ongoing Growth & Support", color: colors.blush }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{
                    x: { type: "spring", stiffness: 100, damping: 20 },
                    delay: i * 0.1
                  }}
                  className="flex items-center gap-6 p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-all group cursor-default"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-serif font-black italic bg-zinc-50 transition-colors shadow-inner"
                    style={{ color: i === 0 ? 'white' : phase.color, backgroundColor: i === 0 ? phase.color : undefined }}
                  >
                    0{i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-bold text-zinc-800 group-hover:text-zinc-900">{phase.text}</div>
                    <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ backgroundColor: phase.color }} />
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: phase.color }}>
                    <Sparkles size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/50 rounded-full blur-[100px] -mr-32 -mt-32" />
        </section>
      )
    },
    {
      id: '18-closing',
      content: (
        <section className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-zinc-950 text-white relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center opacity-50 pointer-events-none"
            style={{ backgroundImage: `url(${photo1.src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20" />
          <div className="z-10 max-w-5xl px-4">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="mb-8 inline-block">
              <div className="w-20 h-20 rounded-3xl bg-white shadow-2xl flex items-center justify-center" style={{ color: colors.hotPink }}>
                <Heart size={48} fill={colors.hotPink} />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-8xl font-serif mb-10 leading-[1.1] text-white drop-shadow-2xl">Let's build the future of Queening Bridals.</h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-20 font-medium uppercase tracking-[0.2em] max-w-3xl mx-auto drop-shadow-lg leading-relaxed">Let's expand your premium bridal experience beyond Owerri, through a world-class digital storefront.</p>

            <div className="flex flex-col items-center gap-12 mt-12">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#fff', color: colors.hotPink }}
                whileTap={{ scale: 0.98 }}
                className="px-14 py-4 rounded-xl text-lg font-black uppercase tracking-[0.2em] transition-all border border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                style={{ backgroundColor: colors.hotPink, color: '#fff', borderColor: colors.hotPink }}
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
                      className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-xl group-hover:border-white group-hover:bg-white transition-all duration-500"
                      style={{ color: colors.hotPink }}
                    >
                      {cta.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">{cta.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Site Logo - Last Slide Only (Above Progress Indicators) */}
          <div className="absolute bottom-20 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
            <span className="font-sans text-lg font-bold text-white tracking-[-0.08em]">
              Reed Breed
            </span>
            <div className="w-1.5 h-1.5 rounded-full mt-1" style={{ backgroundColor: '#146ef5' }} />
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

  return (
    <div ref={mainScrollRef} className="min-h-screen w-screen bg-white text-zinc-900 overflow-y-auto no-scrollbar selection:bg-pink-100 selection:text-pink-600 relative">
      <MobileWarning />
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
          className="min-h-screen w-full flex flex-col items-center py-20 md:py-0"
        >
          {pages[currentPage].content}
        </motion.div>
      </AnimatePresence>

      {/* Global Cinematic Confetti Layer */}
      {mounted && <ConfettiLayer />}

      {/* Navigation Controls */}
      <div className="fixed bottom-6 md:bottom-12 left-0 right-0 flex justify-center items-center gap-4 md:gap-16 z-50">
        <button
          onClick={() => paginate(-1)}
          disabled={currentPage === 0}
          className={`group flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.2em] font-black transition-all ${currentPage === 0 ? 'opacity-0' : 'text-zinc-400 hover:text-zinc-900'}`}
        >
          <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-900 transition-colors"><ChevronLeft size={16} /></div>
          <span className="hidden md:inline">Previous</span>
        </button>

        <div ref={scrollRef} className="flex gap-2 md:gap-3 overflow-x-auto no-scrollbar max-w-[250px] md:max-w-none px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50">
          {pages.map((_, i) => (
            <div
              key={i}
              onClick={() => {
                setDirection(i > currentPage ? 1 : -1);
                setCurrentPage(i);
              }}
              className={`h-2 transition-all duration-500 rounded-full cursor-pointer ${i === currentPage ? 'w-10 md:w-16' : 'w-2 bg-zinc-200 hover:bg-zinc-300'}`}
              style={{ backgroundColor: i === currentPage ? colors.hotPink : undefined }}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          disabled={currentPage === pages.length - 1}
          className={`group flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.2em] font-black transition-all ${currentPage === pages.length - 1 ? 'opacity-0' : 'text-zinc-900'}`}
        >
          <span className="hidden md:inline" style={{ color: currentPage < pages.length - 1 ? colors.hotPink : undefined }}>Next Slide</span>
          <div className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:scale-110 transition-all" style={{ borderColor: colors.hotPink, backgroundColor: colors.hotPink, color: 'white' }}><ChevronRight size={16} /></div>
        </button>
      </div>

      {/* Header Branding */}
      <div className="fixed top-6 md:top-10 left-6 md:left-12 z-50 flex items-center gap-6">
        <motion.div
          whileHover={{ rotate: 180 }}
          className="w-12 h-12 md:w-16 md:h-16 rounded-[1.2rem] flex items-center justify-center text-white font-serif italic text-2xl md:text-3xl shadow-[0_10px_30px_rgba(255,22,149,0.3)] transition-all"
          style={{ background: `linear-gradient(135deg, ${colors.accentPink}, ${colors.hotPink})` }}
        >
          Q
        </motion.div>
        <div className="hidden md:block">
          <p className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-900">Queening Bridals</p>
          <p className="text-[8px] uppercase tracking-[0.3em] font-bold text-zinc-400">Proposal 2026</p>
        </div>
      </div>

      {/* Slide Number */}
      <div className="fixed top-6 md:top-10 right-6 md:right-12 z-50">
        <div className="px-4 py-2 bg-zinc-900 text-white rounded-full text-[10px] font-black tracking-widest shadow-xl">
          {String(currentPage + 1).padStart(2, '0')} <span className="text-zinc-600">/</span> {pages.length}
        </div>
      </div>
    </div>
  );
}
