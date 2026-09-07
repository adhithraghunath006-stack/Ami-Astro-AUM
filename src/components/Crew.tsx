import React, { useState } from 'react';
import { CREW_DATA } from '../data/crew';
import type { CrewMember } from '../data/crew';
import { soundFx } from '../utils/audio';
import { Mail, Shield, Cpu, Palette, Megaphone, BookOpen, Wrench, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const CATEGORIES = [
  { id: 'ALL', label: 'ALL CREW' },
  { id: 'CORE COMMITTEE', label: 'CORE COMMITTEE', icon: <Shield className="w-3.5 h-3.5" /> },
  { id: 'TECHNICAL', label: 'TECHNICAL', icon: <Cpu className="w-3.5 h-3.5" /> },
  { id: 'DESIGN', label: 'DESIGN', icon: <Palette className="w-3.5 h-3.5" /> },
  { id: 'MARKETING', label: 'MARKETING', icon: <Megaphone className="w-3.5 h-3.5" /> },
  { id: 'EDITORIAL', label: 'EDITORIAL', icon: <BookOpen className="w-3.5 h-3.5" /> },
  { id: 'OPERATIONS', label: 'OPERATIONS', icon: <Wrench className="w-3.5 h-3.5" /> },
];

export const Crew: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedMember, setSelectedMember] = useState<CrewMember | null>(null);

  const filteredCrew = activeCategory === 'ALL'
    ? CREW_DATA
    : CREW_DATA.filter(member => member.department === activeCategory);

  const handleCategoryChange = (catId: string) => {
    soundFx.playClick();
    setActiveCategory(catId);
  };

  return (
    <section id="crew" className="relative py-28 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 font-mono text-[11px] tracking-[0.25em] text-cyan-400 uppercase mb-4">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              THE STUDENT COMMITTEE
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase">
              MEET THE AMI ASTRO CREW
            </h2>
            <p className="text-slate-300 text-lg font-light mt-3 max-w-xl">
              The engineers, designers, researchers, and organizers leading every initiative.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 border-l border-cyan-500/30 pl-4 py-1">
            <span className="text-cyan-400 font-bold block text-sm">80+ ACTIVE MEMBERS</span>
            <span>6 DEPARTMENTS</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-cyan-500/15">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-2 rounded-lg font-mono text-xs tracking-[0.18em] uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-bold shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'bg-black/40 text-slate-400 hover:text-white border border-cyan-500/20 hover:bg-cyan-950/30'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Crew Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCrew.map((member) => (
            <div
              key={member.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedMember(member);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative hud-panel rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,240,255,0.18)] cursor-pointer overflow-hidden bg-[#050b1d]/90 flex flex-col justify-between"
            >
              {/* Subtle Scanning Grid Pattern on Hover */}
              <div className="absolute inset-0 bg-tech-dots opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />

              <div>
                {/* Photo & Orbital Ring Container */}
                <div className="relative mb-6 flex justify-center">
                  {/* Outer Orbital Ring on hover */}
                  <div className="absolute inset-0 -m-2 rounded-full border border-cyan-400/0 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-500 pointer-events-none animate-spin-slow" />
                  
                  {/* Member Photo Frame */}
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-lg bg-black">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                    {/* Futuristic holographic scanline */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>

                  {/* Department Badge */}
                  <div className="absolute bottom-0 px-2.5 py-0.5 rounded-full bg-black/90 border border-cyan-500/40 text-[9px] font-mono tracking-widest text-cyan-300 font-bold shadow">
                    {member.position}
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <div className="font-mono text-[10px] tracking-[0.25em] text-cyan-400 uppercase mb-1 font-semibold">
                    {member.department}
                  </div>
                  <h3 className="font-heading font-black text-xl text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-slate-400 mt-1 mb-3">
                    {member.position}
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 px-2">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Card Footer: Specialty & Socials */}
              <div className="mt-6 pt-4 border-t border-cyan-500/15 flex items-center justify-between">
                <span className="font-mono text-[10px] text-slate-400 tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  {member.specialty}
                </span>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="p-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
                      title="Email Transmission"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Member Detail Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="hud-panel rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-cyan-400 bg-[#050b1d] relative tech-border shadow-[0_0_50px_rgba(0,240,255,0.3)]">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white font-mono text-xs border border-cyan-500/20 rounded-md"
              >
                CLOSE [✕]
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-cyan-400 shadow-md"
                />
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-cyan-400 font-bold">
                    {selectedMember.position} • {selectedMember.department}
                  </span>
                  <h3 className="font-heading font-black text-2xl text-white">
                    {selectedMember.name}
                  </h3>
                  <p className="font-mono text-xs text-slate-400">
                    {selectedMember.position}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6 text-sm text-slate-300">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-1">
                    BIOGRAPHY & SCOPE
                  </span>
                  <p className="leading-relaxed bg-black/40 p-3 rounded-lg border border-cyan-500/15">
                    {selectedMember.bio}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-1">
                    TECHNICAL SPECIALTY
                  </span>
                  <p className="font-mono text-xs text-cyan-300">
                    {selectedMember.specialty}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-500/20 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">
                  AMI ASTRO CREW VERIFIED
                </span>
                <div className="flex items-center gap-3">
                  {selectedMember.socials.linkedin && (
                    <a
                      href={selectedMember.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-1.5 hover:bg-cyan-900/60"
                    >
                      <LinkedinIcon className="w-3 h-3" />
                      CONNECT
                    </a>
                  )}
                  {selectedMember.socials.email && (
                    <a
                      href={`mailto:${selectedMember.socials.email}`}
                      className="px-3 py-1.5 rounded bg-black/60 border border-cyan-500/30 text-xs font-mono text-slate-300 flex items-center gap-1.5 hover:text-white"
                    >
                      <Mail className="w-3 h-3" />
                      TRANSMIT
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
