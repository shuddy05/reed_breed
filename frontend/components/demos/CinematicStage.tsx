"use client"

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { BookOpen, Users, Brain, ShieldCheck, Broadcast, Selection, TrendUp } from "phosphor-react";
import { IPhoneModel } from "./IPhone";
import { Watermark } from "./Watermark";

interface CinematicStageProps {
  index: number;
  mode: string;
  data: any[];
  isWatermarkVisible: boolean;
  isCaptureMode?: boolean;
}

export const CinematicStage = ({ 
  index, 
  mode, 
  data,
  isWatermarkVisible, 
  isCaptureMode = false 
}: CinematicStageProps) => {
  const step = data[index];
  
  return (
    <div className={`relative bg-void flex items-center justify-center overflow-hidden ${isCaptureMode ? 'w-[2560px] h-[1440px]' : 'w-full h-full'}`}>
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,110,245,0.03)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {mode === 'exploder' && (
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="bg-symbol absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-0">
            <step.icon size={isCaptureMode ? 1800 : 800} weight="thin" style={{ color: step.color }} />
          </div>
          
          <div className={`container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center relative z-20 ${isCaptureMode ? 'scale-[2] transform-gpu' : ''}`}>
            
            <div className="space-y-3 md:space-y-4 lg:pl-10 relative">
              {/* Background Accent Text */}
              <div className="absolute -left-10 md:left-0 top-[-15%] -translate-y-1/2 z-[-1] pointer-events-none select-none">
                <h2 className="accent-text text-[12vw] font-black leading-none tracking-tighter italic opacity-0" style={{ color: step.color }}>
                  {step.accent}
                </h2>
              </div>

              <div className="content-text flex items-center gap-4">
                <div className="w-8 md:w-12 h-0.5" style={{ backgroundColor: step.color }} />
                <span className="text-[10px] md:text-sm font-black tracking-[0.5em] uppercase opacity-60">{step.title}</span>
              </div>
              <h1 className="content-text text-4xl md:text-5xl lg:text-7xl font-black leading-[1.0] tracking-tighter text-white">
                {step.id === 'engine' && <>High-Octane <br/> <span style={{ color: step.color }}>Operations</span></>}
                {step.id === 'students' && <>Next-Gen <br/> <span style={{ color: step.color }}>Verification</span></>}
                {step.id === 'live' && <>Immersive <br/> <span style={{ color: step.color }}>Engagement</span></>}
                {step.id === 'security' && <>Iron-Clad <br/> <span style={{ color: step.color }}>Architecture</span></>}
              </h1>
              <p className="content-text typewriter-text text-base md:text-p-xl text-text-secondary max-w-lg leading-relaxed font-medium min-h-[100px]"></p>
            </div>

            <div className="relative flex justify-center">
              <div className="feature-card relative w-full max-w-[320px] md:max-w-md aspect-[4/5] bg-depth border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden hidden md:block">
                  <div className="ui-scan-line absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-white/5 to-transparent z-10 opacity-0 pointer-events-none" />
                  <div className="absolute inset-0 p-10 flex flex-col z-20">
                    <div className="flex justify-between items-center mb-12 text-white">
                        <div className="ui-icon-box w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center" style={{ color: step.color }}><step.icon size={32} weight="duotone" /></div>
                        <Selection size={32} className="ui-selection-icon text-white/20" />
                    </div>
                    <div className="space-y-4 mb-auto">
                        <div className="ui-bar h-2 w-1/3 bg-white/10 rounded-full" />
                        <div className="ui-bar h-10 w-full bg-white/5 rounded-2xl border border-white/5" />
                        <div className="ui-bar h-10 w-4/5 bg-white/5 rounded-2xl border border-white/5" />
                    </div>
                    <div className="ui-insight-panel mt-auto bg-void/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 text-white">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-3">Module Insight</p>
                        <div className="flex items-end justify-between">
                          <div className="text-4xl font-black">{step.impact.split(' ')[0]}</div>
                          <div className="text-[10px] font-black text-white/40 uppercase mb-1">{step.impact.split(' ').slice(1).join(' ')}</div>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="absolute -right-8 top-1/4 ui-satellite hidden lg:block opacity-0">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl" style={{ color: step.color }}>
                   <step.icon size={32} weight="fill" />
                </div>
              </div>
              <div className="absolute -left-8 bottom-1/4 ui-satellite hidden lg:block opacity-0">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-success">
                   <TrendUp size={32} weight="fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === 'narrative' && (
        <div className="narrative-scene w-full h-full flex items-center justify-center relative px-6 md:px-12">
          {index === 0 && (
            <div className="max-w-4xl text-center">
              <div className="logo-glow absolute inset-0 bg-accent blur-[60px] opacity-20" />
              <BookOpen size={120} weight="duotone" className="text-accent relative z-10 mx-auto mb-12" />
              <h1 className="text-display-lg font-black mb-6 tracking-tight text-white">The Future of Education</h1>
              <p className="typewriter-text text-p-xl text-text-secondary max-w-2xl mx-auto leading-relaxed min-h-[60px]"></p>
            </div>
          )}
          {index === 1 && (
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center text-white">
               <div className="space-y-8">
                  <div className="narrative-ui flex items-center gap-4">
                    <div className="w-12 h-0.5 bg-accent" />
                    <span className="text-sm font-black tracking-[0.4em] uppercase text-accent">01 // ARCHITECTURE</span>
                  </div>
                  <h2 className="narrative-ui text-4xl md:text-6xl font-black leading-tight tracking-tighter">Modular <br/> Assembly</h2>
                  <p className="typewriter-text text-p-xl text-text-secondary max-w-lg leading-relaxed font-medium min-h-[100px]"></p>
               </div>
               <div className="narrative-ui grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="glass-card p-8 rounded-3xl border-white/5 bg-white/5 flex flex-col items-center justify-center aspect-square">
                       <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                          <Selection size={24} className="text-accent" />
                       </div>
                       <div className="h-1 w-12 bg-white/10 rounded-full" />
                    </div>
                  ))}
               </div>
            </div>
          )}
          {index === 2 && (
            <div className="w-full max-w-5xl aspect-video relative flex flex-col items-center justify-center">
               <div className="narrative-ui bg-depth rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl w-full h-full flex flex-col relative z-10">
                  <div className="h-16 bg-white/5 border-b border-white/10 flex items-center px-8 gap-4">
                    <div className="w-3 h-3 rounded-full bg-error" />
                    <span className="text-xs font-black uppercase tracking-widest opacity-40 text-white">Live Pulse // Monitoring_Active</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center relative">
                     <div className="relative">
                        <div className="pulse-ring absolute inset-0 border-4 border-accent rounded-full opacity-20" />
                        <Broadcast size={120} className="text-accent" weight="duotone" />
                     </div>
                  </div>
               </div>
               <div className="narrative-ui mt-12 text-center max-w-2xl">
                  <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter text-white">Intelligent Monitoring</h2>
                  <p className="typewriter-text text-p-xl text-text-secondary leading-relaxed font-medium min-h-[80px]"></p>
               </div>
            </div>
          )}
          {index === 3 && (
            <div className="max-w-4xl text-center">
              <div className="narrative-ui flex justify-center gap-12 mb-16">
                 <div className="text-center">
                    <p className="text-5xl md:text-7xl font-black text-white mb-2">99.9%</p>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">Uptime</p>
                 </div>
                 <div className="w-px h-20 bg-white/10" />
                 <div className="text-center">
                    <p className="text-5xl md:text-7xl font-black text-white mb-2">0ms</p>
                    <p className="text-xs font-bold text-success uppercase tracking-widest">Latency</p>
                 </div>
              </div>
              <h2 className="narrative-ui text-4xl md:text-display-md font-black tracking-tight leading-none mb-8 text-white">Scalable Growth.</h2>
              <p className="typewriter-text text-p-xl text-text-secondary max-w-2xl mx-auto leading-relaxed min-h-[60px]"></p>
            </div>
          )}
        </div>
      )}

      {mode === 'immersive' && (
        <div className="w-full h-full flex items-center justify-center relative px-6 md:px-12">
          <div className="immersive-video absolute inset-0 z-0 overflow-hidden">
             {step.video && (
               <video key={step.video} autoPlay muted loop playsInline crossOrigin="anonymous" className="w-full h-full object-cover grayscale opacity-60">
                 <source src={step.video} type="video/mp4" />
               </video>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
          </div>
          <div className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center relative z-10 ${isCaptureMode ? 'scale-[2]' : ''}`}>
             <div className="immersive-ui space-y-10">
                <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter text-white">Human Synergy. <br/><span style={{ color: step.color }}>{step.accent}</span></h1>
                <p className="typewriter-text text-p-xl text-text-secondary max-w-lg leading-relaxed font-medium min-h-[100px]"></p>
             </div>
             <div className="h-[500px] md:h-[700px] w-full relative z-[1]">
                <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 35 }}>
                  <ambientLight intensity={1.5} />
                  <spotLight position={[5, 10, 5]} angle={0.25} penumbra={1} intensity={2} castShadow shadow-mapSize={1024} />
                  <React.Suspense fallback={null}>
                    <IPhoneModel index={index} screenImg={step.screenImg} />
                  </React.Suspense>
                  <Environment preset="city" />
                  <ContactShadows position={[0, -5, 0]} opacity={0.6} scale={20} blur={3} far={10} color="#000" />
                </Canvas>
             </div>
          </div>
        </div>
      )}

      {/* Watermark */}
      <Watermark isVisible={isWatermarkVisible} />
    </div>
  );
};
