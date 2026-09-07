import React, { useState } from 'react';
import { ALUMNI_DATA } from '../data/alumni';
import { soundFx } from '../utils/audio';
import { History, Briefcase, Heart } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

const CATEGORIES = [
  'ALL',
  'PAST PRESIDENTS',
  'PAST SECRETARIES',
  'FORMER CREW'
] as const;

export const Alumni: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredAlumni = activeCategory === 'ALL'
    ? ALUMNI_DATA
    : ALUMNI_DATA.filter(item => item.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    soundFx.playClick();
    setActiveCategory(cat);
  };

  return (
    <section id="alumni" className="relative py-28 overflow-hidden bg-[#030712]">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 font-mono text-[11px] tracking-[0.25em] text-cyan-400 uppercase mb-4">
              <History className="w-3.5 h-3.5 text-cyan-400" />
              AMI ASTRO HERITAGE
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase">
              THE PEOPLE WHO CAME BEFORE US
            </h2>
            <p className="text-xl sm:text-2xl font-light text-cyan-300 border-l-2 border-cyan-400 pl-4 py-1 mt-3">
              “Every chapter of AMI ASTRO is shaped by the people who helped build it.”
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 border-l border-cyan-500/30 pl-4 py-1">
            <span className="text-cyan-400 font-bold block text-sm">SINCE 2023</span>
            <span>PRESERVING CLUB MEMORY</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-cyan-500/15">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                    : 'bg-black/40 text-slate-400 hover:text-white border border-cyan-500/20 hover:bg-cyan-950/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Alumni Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlumni.map((alum) => (
            <div
              key={alum.id}
              className="hud-panel rounded-2xl p-6 sm:p-7 border border-cyan-500/20 bg-[#050b1d]/85 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-400/50 hover:shadow-[0_10px_35px_rgba(0,240,255,0.15)] transition-all duration-300"
            >
              <div>
                {/* Header: Photo, Name & Tenure */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-cyan-400/40 shrink-0 bg-black shadow-md">
                    <img
                      src={alum.photo}
                      alt={alum.name}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 uppercase tracking-widest inline-block mb-1.5">
                      {alum.category}
                    </span>
                    <h3 className="font-heading font-black text-xl text-white tracking-wide group-hover:text-cyan-200 transition-colors leading-tight">
                      {alum.name}
                    </h3>
                    <p className="font-mono text-xs text-cyan-400 font-semibold mt-0.5">
                      {alum.role}
                    </p>
                    <p className="font-mono text-[11px] text-slate-400">
                      {alum.tenure}
                    </p>
                  </div>
                </div>

                {/* Contribution Note */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal bg-black/40 p-3.5 rounded-xl border border-cyan-500/10">
                  “{alum.note}”
                </p>
              </div>

              {/* Footer: Where they are today */}
              <div className="pt-4 border-t border-cyan-500/15 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate max-w-[180px] sm:max-w-[210px]" title={`${alum.currentRole} at ${alum.currentOrg}`}>
                    {alum.currentRole} • <strong className="text-cyan-300">{alum.currentOrg}</strong>
                  </span>
                </div>

                {alum.linkedin && (
                  <a
                    href={alum.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-black/60 border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-300 transition-colors"
                    title="Connect on LinkedIn"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Historic Continuity */}
        <div className="mt-12 p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-cyan-400 shrink-0" />
            <p className="font-mono text-xs text-slate-300">
              Are you a former AMI ASTRO member or committee lead? We would love to feature your journey.
            </p>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-black/60 hover:bg-cyan-900/40 border border-cyan-400/50 text-cyan-300 hover:text-white font-mono text-xs font-semibold tracking-wider whitespace-nowrap transition-colors"
          >
            UPDATE ALUMNI PROFILE →
          </a>
        </div>

      </div>
    </section>
  );
};
