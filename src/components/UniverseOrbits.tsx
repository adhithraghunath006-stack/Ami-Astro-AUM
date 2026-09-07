import React, { useState } from 'react';
import { UNIVERSE_ORBITS } from '../data/universe';
import type { UniverseOrbit } from '../data/universe';
import { soundFx } from '../utils/audio';
import { ArrowUpRight, Radar, CheckCircle2 } from 'lucide-react';

export const UniverseOrbits: React.FC = () => {
  const [selectedOrbit, setSelectedOrbit] = useState<UniverseOrbit>(UNIVERSE_ORBITS[0]);

  const handleSelectOrbit = (orbit: UniverseOrbit) => {
    soundFx.playClick();
    setSelectedOrbit(orbit);
  };

  const scrollToSection = (sectionId: string) => {
    soundFx.playSuccess();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="universe" className="relative py-28 overflow-hidden bg-tech-grid border-y border-emerald-500/15">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 font-mono text-[11px] tracking-[0.25em] text-emerald-400 uppercase mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Radar className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
            SIGNATURE SYSTEM ARCHITECTURE
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none mb-6">
            THE AMI ASTRO UNIVERSE
          </h2>
          <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Representing the core dimensions of AMI ASTRO as an interconnected celestial orbital ecosystem. Select an orbit to inspect its telemetry and operations.
          </p>
        </div>

        {/* Orbit Quick Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {UNIVERSE_ORBITS.map((orbit) => {
            const isSelected = selectedOrbit.id === orbit.id;
            return (
              <button
                key={orbit.id}
                onClick={() => handleSelectOrbit(orbit)}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-2 rounded-lg font-mono text-xs tracking-[0.2em] uppercase transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400 font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-black/40 text-slate-400 hover:text-white border border-emerald-500/20 hover:bg-emerald-950/30'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-400 animate-ping' : 'bg-slate-600'}`} />
                <span>{orbit.orbitNumber}</span>
                <span className="opacity-50">•</span>
                <span>{orbit.title}</span>
              </button>
            );
          })}
        </div>

        {/* Signature Interactive Radar & Telemetry Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Multi-Ring Celestial Radar Visualizer */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[400px] sm:min-h-[480px]">
            <div className="relative w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] flex items-center justify-center">
              
              {/* Radar Grid Circles */}
              <div className="absolute inset-0 rounded-full border border-emerald-500/20 pointer-events-none" />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-emerald-500/15 pointer-events-none" />
              <div className="absolute w-[60%] h-[60%] rounded-full border border-emerald-500/15 pointer-events-none" />
              <div className="absolute w-[40%] h-[40%] rounded-full border border-emerald-500/20 pointer-events-none" />

              {/* Crosshair telemetry lines */}
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent pointer-events-none" />
              <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent pointer-events-none" />

              {/* Radar sweep beam */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent animate-radar origin-center pointer-events-none" />

              {/* Concentric Orbit Rings with Clickable Track Targets */}
              {UNIVERSE_ORBITS.map((orbit, index) => {
                const isSelected = selectedOrbit.id === orbit.id;
                const sizePercent = 40 + index * 15;
                const animDuration = 30 + index * 12;

                return (
                  <div
                    key={orbit.id}
                    onClick={() => handleSelectOrbit(orbit)}
                    className={`absolute rounded-full cursor-pointer transition-all duration-300 group ${
                      isSelected
                        ? 'border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.4)]'
                        : 'border border-emerald-500/25 hover:border-emerald-400/60 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                    }`}
                    style={{
                      width: `${sizePercent}%`,
                      height: `${sizePercent}%`,
                    }}
                  >
                    {/* Rotating Satellite Node on the Orbit Track */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        animation: `spinSlow ${animDuration}s linear infinite`
                      }}
                    >
                      <div
                        className={`absolute -top-2 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300 pointer-events-auto ${
                          isSelected
                            ? 'w-4 h-4 bg-white border-2 border-emerald-400 shadow-[0_0_15px_#10b981] scale-125'
                            : 'w-2.5 h-2.5 bg-emerald-400/80 hover:scale-150'
                        }`}
                        title={`${orbit.orbitNumber}: ${orbit.title}`}
                      />
                    </div>
                  </div>
                );
              })}

              {/* Center Command Core - Cosmic Singularity/Celestial Entity */}
              <div className="relative z-10 w-28 h-28 rounded-full bg-[#020b08] border-2 border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.6)] flex flex-col items-center justify-center p-1 text-center pointer-events-none">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-emerald-400/60 bg-black mb-1 shadow-inner relative">
                  <img
                    src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=300&q=80"
                    alt="Cosmic Core Entity"
                    className="w-full h-full object-cover scale-110"
                  />
                  <div className="absolute inset-0 bg-emerald-500/20 mix-blend-color" />
                </div>
                <span className="font-heading font-black text-[9px] tracking-wider text-white">
                  SINGULARITY
                </span>
                <span className="font-mono text-[7px] text-emerald-400 font-bold">
                  ORBITAL CORE
                </span>
              </div>

            </div>
          </div>

          {/* Right: Telemetry Panel & Orbit Inspection */}
          <div className="lg:col-span-6">
            <div className="hud-panel rounded-2xl p-6 sm:p-10 border border-emerald-500/30 bg-[#04120c]/90 relative overflow-hidden tech-border shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              
              {/* Header Telemetry Line */}
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-xs font-bold tracking-[0.25em] text-emerald-400 uppercase">
                    {selectedOrbit.systemCode}
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-400 font-semibold px-2.5 py-1 rounded bg-black/60 border border-emerald-500/20">
                  {selectedOrbit.orbitNumber}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mb-2">
                {selectedOrbit.title}
              </h3>
              <p className="font-mono text-sm text-emerald-300 font-semibold mb-6">
                “{selectedOrbit.subtitle}”
              </p>

              {/* Detailed narrative */}
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                {selectedOrbit.description}
              </p>

              {/* Orbit Key Dimensions / Highlights */}
              <div className="space-y-3 mb-8">
                <div className="font-mono text-xs tracking-wider text-slate-400 uppercase mb-2">
                  ORBITAL COMPONENTS:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedOrbit.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-black/40 border border-emerald-500/15 text-xs font-mono text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric & Navigation CTA */}
              <div className="pt-6 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                    {selectedOrbit.metricLabel}
                  </div>
                  <div className="font-heading font-extrabold text-3xl text-emerald-300 tracking-tight">
                    {selectedOrbit.metric}
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection(selectedOrbit.targetSectionId)}
                  className="group px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-600/20 hover:from-emerald-500/30 hover:to-teal-600/40 border border-emerald-400/60 hover:border-emerald-300 text-emerald-200 hover:text-white font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                  <span>NAVIGATE TO {selectedOrbit.title}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-300" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};