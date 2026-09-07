import React from 'react';
import { COMMUNITY_VOICES } from '../data/testimonials';
import { MessageSquareQuote, Star, Users } from 'lucide-react';

export const CommunityVoices: React.FC = () => {
  return (
    <section id="community-voices" className="relative py-28 overflow-hidden bg-tech-grid">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 font-mono text-[11px] tracking-[0.25em] text-cyan-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            SHARED EXPERIENCES
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase mb-6">
            FROM THE AMI ASTRO COMMUNITY
          </h2>
          <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Real stories and reflections from students, alumni, and committee leads who have been part of our journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMMUNITY_VOICES.map((voice) => (
            <div
              key={voice.id}
              className="hud-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/25 bg-[#050b1d]/85 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-400/50 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <MessageSquareQuote className="w-8 h-8 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                  <div className="flex items-center gap-1 text-cyan-400/80">
                    <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                    <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                    <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                    <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                    <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                  </div>
                </div>

                <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-normal italic">
                  “{voice.quote}”
                </p>
              </div>

              {/* Author Profile */}
              <div className="pt-4 border-t border-cyan-500/15 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/50 shrink-0 bg-black">
                  <img
                    src={voice.avatar}
                    alt={voice.author}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-black text-white text-base tracking-wide group-hover:text-cyan-200 transition-colors">
                    {voice.author}
                  </h4>
                  <div className="font-mono text-xs text-cyan-400 flex items-center gap-2">
                    <span>{voice.role}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{voice.batch}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
