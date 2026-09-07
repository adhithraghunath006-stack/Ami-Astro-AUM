import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Activity, ShieldCheck, Orbit, Compass } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { Astronaut3D } from './Astronaut3D';

interface HeroProps {
  onExploreClick: () => void;
  onCrewClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCrewClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [missionClock, setMissionClock] = useState('');
  const [activeVisualTab, setActiveVisualTab] = useState<'orbits' | 'astronaut'>('astronaut');
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const ist = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
      }) + ' IST';
      setMissionClock(ist);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#020905]"
    >
      {/* Background Loki Temporal Aura Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-700/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-12rem)]">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Header Pill */}
            <div className="inline-flex items-center gap-3 p-1 pr-4 rounded-full bg-emerald-950/40 border border-emerald-500/40 w-fit mb-6 shadow-[0_0_25px_rgba(16,185,129,0.2)] backdrop-blur-md">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-1.5 border border-emerald-500/40">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                WELCOME TO AMI ASTRO
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-emerald-400 font-semibold">
                  TEMPORAL LOOM ACTIVE
                </span>
                <span className="text-emerald-500/40 text-xs">|</span>
                <span className="font-mono text-[10px] tracking-wider text-emerald-200/70">
                  {missionClock}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black tracking-tighter text-white uppercase leading-[0.9] text-5xl sm:text-7xl xl:text-8xl mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-emerald-100">
                EXPLORE.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-300 drop-shadow-[0_0_35px_rgba(16,185,129,0.5)]">
                CREATE.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-slate-300">
                CONNECT.
              </span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed mb-10 border-l-2 border-emerald-500/60 pl-4 bg-gradient-to-r from-emerald-950/30 to-transparent py-1">
              “A student community for people who love learning, building, creating and trying something new.”
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                onClick={() => {
                  soundFx.playClick();
                  onExploreClick();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 text-black font-mono font-extrabold text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
              >
                <span>EXPLORE AMI ASTRO</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-black" />
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onCrewClick();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="group px-7 py-4 rounded-lg bg-black/70 hover:bg-emerald-950/50 border border-emerald-500/40 hover:border-emerald-400/80 text-emerald-200 hover:text-white font-mono font-semibold text-sm tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-md flex items-center gap-3 cursor-pointer"
              >
                <Users className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>JOIN THE CREW</span>
                <span className="text-emerald-400">→</span>
              </button>
            </div>

            {/* Telemetry Footer */}
            <div className="mt-12 pt-6 border-t border-emerald-500/20 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                  CHAPTER
                </span>
                <span className="font-mono text-xs text-emerald-300 font-semibold">
                  AMI ASTRO
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                  TIMELINE
                </span>
                <span className="font-mono text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <Activity className="w-3 h-3 animate-pulse text-emerald-400" />
                  BRANCH ACTIVE
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                  TERM
                </span>
                <span className="font-mono text-xs text-slate-300 font-semibold">
                  COLLEGIATE 2026
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Visual Selector Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-black/80 border border-emerald-500/40 mb-4 backdrop-blur-md z-20 shadow-[0_0_20px_rgba(0,0,0,0.9)]">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveVisualTab('astronaut');
                }}
                className={`px-3.5 py-1.5 rounded-full font-mono text-[10px] font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeVisualTab === 'astronaut'
                    ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Compass className="w-3 h-3 text-emerald-400" />
                3D EXPLORER
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveVisualTab('orbits');
                }}
                className={`px-3.5 py-1.5 rounded-full font-mono text-[10px] font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeVisualTab === 'orbits'
                    ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Orbit className="w-3 h-3 text-emerald-400" />
                ORBITAL SYSTEM
              </button>
            </div>

            {activeVisualTab === 'astronaut' ? (
              <div className="relative w-[340px] h-[380px] sm:w-[460px] sm:h-[460px] flex items-center justify-center">
                <Astronaut3D className="w-full h-full" />
              </div>
            ) : (
              <div
                className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center transition-transform duration-300 ease-out"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`
                }}
              >
                <div className="absolute inset-0 rounded-full border border-emerald-500/30 border-dashed animate-spin-slower" />

                <div
                  className="absolute w-[112%] h-[45%] rounded-[100%] border border-emerald-400/50 animate-spin-slow pointer-events-none"
                  style={{ transform: 'rotate(-32deg)' }}
                >
                  <div className="absolute top-0 right-1/4 w-3.5 h-3.5 -mt-1.5 rounded-full bg-emerald-300 shadow-[0_0_15px_#10b981] animate-ping" />
                  <div className="absolute top-0 right-1/4 w-3 h-3 -mt-1 rounded-full bg-white shadow-[0_0_10px_#10b981]" />
                </div>

                <div
                  className="absolute w-[90%] h-[90%] rounded-full border border-amber-500/30 animate-spin-reverse pointer-events-none"
                  style={{ borderStyle: 'dotted', borderWidth: '2px' }}
                >
                  <div className="absolute bottom-6 left-12 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]" />
                </div>

                <div className="absolute w-[72%] h-[72%] rounded-full border border-emerald-500/30 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-emerald-400/70 animate-spin-slow" />
                </div>

                {/* Core */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-[#062419] via-[#02120b] to-[#010603] border-2 border-emerald-400/50 shadow-[0_0_80px_rgba(16,185,129,0.35)] flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent animate-radar origin-center pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-emerald-500/50 via-white/80 to-emerald-300/50 border-2 border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.8)] mb-2.5 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <img
                        src="/ami-astro-logo.png"
                        alt="AMI ASTRO Official Crest"
                        className="w-full h-full object-cover rounded-full bg-white"
                      />
                    </div>
                    <span className="font-heading font-black text-sm sm:text-base tracking-[0.25em] text-white">
                      AMI ASTRO
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-emerald-400 font-bold mt-0.5">
                      OFFICIAL CLUB CREST
                    </span>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-3 left-0 px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-emerald-500/40 font-mono text-[10px] tracking-[0.2em] text-emerald-300 flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-float">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  TEMPORAL CORE
                </div>

                <div className="absolute top-8 -right-6 px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-emerald-500/40 font-mono text-[10px] tracking-[0.2em] text-emerald-300 flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-float" style={{ animationDelay: '1.5s' }}>
                  <Activity className="w-3 h-3 text-emerald-400" />
                  GLORIOUS PURPOSE
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};