import React, { useState } from 'react';
import { Telescope, Cpu, Users2, TrendingUp, Sparkles, Orbit } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string;
  icon: React.ReactNode;
  orbitIndex: string;
}

const PILLARS: Pillar[] = [
  {
    id: 'explore',
    title: 'EXPLORE',
    subtitle: 'Discover new ideas & perspectives.',
    description: 'Venturing into unfamiliar scientific domains, deep-sky observation, astrophysics simulations, and satellite mechanics that challenge conventional classroom limits.',
    metrics: '200+ Telescopic Hours',
    icon: <Telescope className="w-6 h-6 text-emerald-400" />,
    orbitIndex: 'PILLAR 01'
  },
  {
    id: 'create',
    title: 'CREATE',
    subtitle: 'Turn ideas into meaningful experiences.',
    description: 'Transforming theoretical blueprints into tangible hardware prototypes: high-altitude atmospheric probes, planetary rover chassis, and ground station receivers.',
    metrics: '30+ Engineered Prototypes',
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    orbitIndex: 'PILLAR 02'
  },
  {
    id: 'connect',
    title: 'CONNECT',
    subtitle: 'Build a strong student community.',
    description: 'Bringing together coders, astrophysicists, mechanical makers, and digital artists under one shared celestial mission, forging lifelong peer collaborations.',
    metrics: '500+ Inter-Campus Explorers',
    icon: <Users2 className="w-6 h-6 text-emerald-400" />,
    orbitIndex: 'PILLAR 03'
  },
  {
    id: 'evolve',
    title: 'EVOLVE',
    subtitle: 'Learn, experiment and grow.',
    description: 'Fostering continuous learning through rigorous technical sprints, mentorship from aerospace veterans, and competitive national hackathon expeditions.',
    metrics: '94% Leadership Placement',
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    orbitIndex: 'PILLAR 04'
  },
];

export const About: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('explore');

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Subtle Background Orbital Circuit Guides */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-tech-dots" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 font-mono text-[11px] tracking-[0.25em] text-emerald-400 uppercase mb-4">
            <Orbit className="w-3.5 h-3.5 animate-spin-slow" />
            THE AMI ASTRO MISSION
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none mb-6 uppercase">
            THE AMI ASTRO MISSION
          </h2>
          <p className="text-xl sm:text-2xl font-light text-emerald-300/90 leading-relaxed border-l-2 border-emerald-400 pl-4 py-1">
            “AMI ASTRO exists for students who refuse to stop exploring.”
          </p>
        </div>

        {/* Narrative & Impact Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Founded as a student community and space technology initiative, <strong className="text-white font-semibold">AMI ASTRO</strong> unites engineers, designers, programmers, and science storytellers under a shared conviction: space is not merely a distant frontier, but a catalyst for curiosity and Earth-changing innovation.
            </p>
            <p>
              At AMI ASTRO, we don’t just read textbooks about satellite avionics or listen to lectures on exoplanet transit spectroscopy. We build functioning CanSats, write ground telemetry software, deploy telescopes on campus nights, and host hackathons where students prototype robotics in 24-hour sprints.
            </p>
            <p>
              Our vision is to build a vibrant student ecosystem—empowering students to learn, build, collaborate, and explore without limits.
            </p>
          </div>

          {/* Quick Metrics / Institutional Identity Card */}
          <div className="lg:col-span-5">
            <div className="hud-panel rounded-xl p-6 sm:p-8 border border-emerald-500/25 relative overflow-hidden bg-gradient-to-b from-[#041d14] to-[#020b08]">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4 mb-6">
                <span className="font-mono text-xs tracking-widest text-emerald-400 font-semibold uppercase">
                  AMI ASTRO CHARTER & SEAL
                </span>
                <span className="font-mono text-[10px] tracking-widest text-slate-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
                  EST. 2026
                </span>
              </div>

              {/* Official Logo Emblem Showcase */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-amber-950/20 border border-emerald-400/40 mb-5 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0 bg-white shadow-lg">
                  <img
                    src="/ami-astro-logo.png"
                    alt="AMI ASTRO Official Club Crest"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-0.5">
                    OFFICIAL CLUB CREST
                  </div>
                  <div className="font-heading font-black text-sm text-white">
                    AMI ASTRO SEAL
                  </div>
                  <p className="text-[11px] text-slate-300 font-light mt-0.5 leading-snug">
                    Depicting the cosmic hemisphere, observatory telescope, and celestial comet trajectory.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-black/40 border border-emerald-500/15">
                  <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                    PRIMARY HEADQUARTERS
                  </div>
                  <div className="font-heading font-bold text-white text-base">
                    Innovation Complex Level 4, Center for Aerospace Technology
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-emerald-500/15">
                  <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                    STUDENT IMPACT RADIUS
                  </div>
                  <div className="font-heading font-bold text-emerald-300 text-base">
                    Multi-Departmental: Computer Science, Avionics, Physics, Media & Design
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-emerald-500/15">
                  <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                    OFFICIAL MOTTO
                  </div>
                  <div className="font-mono text-xs text-amber-400 font-bold tracking-widest">
                    EXPLORE. CREATE. EVOLVE.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Four Pillars with Orbital Connectors */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="font-mono text-xs tracking-[0.25em] text-emerald-400 font-semibold uppercase mb-1">
                CORE ARCHITECTURE
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                THE FOUR PILLARS OF AMI ASTRO
              </h3>
            </div>
            <span className="hidden sm:inline font-mono text-[11px] tracking-wider text-slate-500">
              INTERCONNECTED ORBITAL MATRIX
            </span>
          </div>

          {/* Connected Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* SVG Connecting Track Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-emerald-500/0 via-emerald-400/30 to-emerald-500/0 pointer-events-none z-0" />

            {PILLARS.map((pillar) => {
              const isSelected = activePillar === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActivePillar(pillar.id);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative z-10 rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#062c1e] to-[#02130c] border-2 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.25)] scale-[1.02]'
                      : 'hud-panel hover:border-emerald-400/50 hover:bg-[#041a12]'
                  }`}
                >
                  {/* Top Bar with vector code and icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-black/60 border border-emerald-500/30 flex items-center justify-center shadow-inner">
                      {pillar.icon}
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-emerald-400/80 font-semibold px-2 py-1 rounded bg-emerald-950/40 border border-emerald-500/20">
                      {pillar.orbitIndex}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="font-heading font-black text-2xl text-white tracking-wide mb-2 uppercase">
                    {pillar.title}
                  </h4>
                  <div className="font-mono text-xs text-emerald-300 font-semibold mb-4 leading-snug">
                    {pillar.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Footer metric badge */}
                  <div className="pt-4 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 text-[10px] uppercase tracking-wider">
                      IMPACT
                    </span>
                    <span className="text-emerald-300 font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      {pillar.metrics}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};