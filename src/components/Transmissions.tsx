import React, { useState } from 'react';
import { TRANSMISSIONS_DATA } from '../data/transmissions';
import type { Transmission } from '../data/transmissions';
import { soundFx } from '../utils/audio';
import { Radio, ArrowRight, Clock, User } from 'lucide-react';

export const Transmissions: React.FC = () => {
  const [selectedTx, setSelectedTx] = useState<Transmission | null>(null);

  const handleReadMore = (tx: Transmission) => {
    soundFx.playTransmission();
    setSelectedTx(tx);
  };

  return (
    <section id="transmissions" className="relative py-28 overflow-hidden bg-tech-grid">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 font-mono text-[11px] tracking-[0.25em] text-cyan-400 uppercase mb-4">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              AMI ASTRO STORIES & UPDATES
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase">
              AMI ASTRO TRANSMISSIONS
            </h2>
            <p className="text-slate-300 text-lg font-light mt-3 max-w-xl">
              Club announcements, workshop debriefs, student articles, and recruitment news.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 border-l border-cyan-500/30 pl-4 py-1">
            <span className="text-cyan-400 font-bold block text-sm">REGULAR DISPATCHES</span>
            <span>STUDENT EDITORIAL DESK</span>
          </div>
        </div>

        {/* Transmission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRANSMISSIONS_DATA.map((tx) => (
            <div
              key={tx.id}
              onClick={() => handleReadMore(tx)}
              onMouseEnter={() => soundFx.playHover()}
              className="hud-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/20 hover:border-cyan-400/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,240,255,0.18)] cursor-pointer flex flex-col justify-between bg-[#050b1d]/90 relative overflow-hidden group tech-border"
            >
              <div>
                {/* Header: Code & Priority */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-cyan-500/15">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">
                      {tx.transmissionCode}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-black/60 border border-cyan-500/20 text-cyan-300 font-semibold">
                      {tx.category}
                    </span>
                    <span>{tx.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-black text-2xl sm:text-2xl text-white tracking-wide group-hover:text-cyan-200 transition-colors mb-4 leading-snug">
                  {tx.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {tx.summary}
                </p>
              </div>

              {/* Footer: Read time & CTA */}
              <div className="pt-4 border-t border-cyan-500/15 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {tx.readTime}
                  </span>
                  <span>•</span>
                  <span className="text-slate-300">{tx.author.name}</span>
                </div>

                <span className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                  READ ARTICLE <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transmission Reader Modal */}
        {selectedTx && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in">
            <div className="hud-panel rounded-2xl max-w-2xl w-full p-6 sm:p-10 border border-cyan-400 bg-[#050b1d] relative tech-border shadow-[0_0_60px_rgba(0,240,255,0.3)] max-h-[88vh] overflow-y-auto">
              {/* Dismiss button */}
              <button
                onClick={() => setSelectedTx(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-black/60 border border-cyan-500/30 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-2"
              >
                <span>DISMISS [✕]</span>
              </button>

              {/* Telemetry Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-mono text-xs font-bold uppercase tracking-widest">
                  {selectedTx.transmissionCode}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {selectedTx.date}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-6 leading-tight">
                {selectedTx.title}
              </h2>

              {/* Author Info */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-cyan-500/20 flex items-center justify-between mb-8 font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <User className="w-4 h-4 text-cyan-400" />
                  <span>AUTHOR: {selectedTx.author.name}</span>
                </div>
                <span className="text-cyan-400 font-bold">
                  {selectedTx.author.role}
                </span>
              </div>

              {/* Full Article Content Paragraphs */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {selectedTx.content.map((paragraph, idx) => (
                  <p key={idx} className="bg-black/30 p-4 rounded-xl border border-cyan-500/10">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-cyan-500/20 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>AMI ASTRO OFFICIAL TRANSMISSION RECORD</span>
                <button
                  onClick={() => setSelectedTx(null)}
                  className="px-4 py-2 rounded-lg bg-cyan-400 text-black font-bold uppercase hover:bg-cyan-300 transition-colors"
                >
                  CLOSE LOG
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
