import React, { useState, useEffect } from 'react';
import { WHATS_HAPPENING } from '../data/whatsHappening';
import { soundFx } from '../utils/audio';
import { Sparkles, Calendar, Clock, ArrowRight, UserPlus, MessageSquare, Telescope } from 'lucide-react';

interface WhatsHappeningProps {
  onOpenJoinModal: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const WhatsHappening: React.FC<WhatsHappeningProps> = ({
  onOpenJoinModal,
  onNavigateToSection
}) => {
  // Dynamic countdown calculation to 15 September 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateCountdown = () => {
      // Deadline: 15 September 2026, 23:59:59 IST (UTC+5:30)
      const targetDate = new Date('2026-09-15T23:59:59+05:30').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAction = (target: string) => {
    soundFx.playClick();
    if (target === 'join') {
      onOpenJoinModal();
    } else if (target === 'talks') {
      onNavigateToSection('talks');
    } else if (target === 'events') {
      onNavigateToSection('missions');
    }
  };

  const getCardIcon = (id: string) => {
    switch (id) {
      case 'h-01': return <UserPlus className="w-5 h-5 text-cyan-400" />;
      case 'h-02': return <MessageSquare className="w-5 h-5 text-cyan-400" />;
      default: return <Telescope className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="happening" className="relative py-20 bg-[#040817] border-y border-cyan-500/20 overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 font-mono text-[11px] tracking-[0.25em] text-cyan-400 uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              LATEST UPDATES
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              WHAT'S HAPPENING
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light mt-2 max-w-xl">
              Current activity, upcoming student sessions, and recruitments across AMI ASTRO.
            </p>
          </div>

          {/* Dynamic Countdown Ribbon for Recruitment */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/60 via-black/80 to-blue-950/60 border border-cyan-400/40 shadow-[0_0_25px_rgba(0,240,255,0.15)] flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 shrink-0">
              <Clock className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-300 font-bold">
                RECRUITMENT CLOSES IN
              </div>
              <div className="font-heading font-black text-xl text-white tracking-tight flex items-baseline gap-1">
                <span>{timeLeft.days}d</span>
                <span className="text-cyan-400 text-sm">{timeLeft.hours}h</span>
                <span className="text-slate-400 text-sm">{timeLeft.minutes}m</span>
                <span className="text-slate-500 text-xs">{timeLeft.seconds}s</span>
              </div>
            </div>
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenJoinModal();
              }}
              className="ml-2 px-3.5 py-2 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-[11px] font-bold tracking-wider uppercase transition-all shadow hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              APPLY NOW
            </button>
          </div>
        </div>

        {/* 3 Active Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHATS_HAPPENING.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 flex flex-col justify-between group ${
                item.isPrimary
                  ? 'bg-gradient-to-b from-[#071333] to-[#040a1c] border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(0,240,255,0.2)]'
                  : 'bg-[#050b1d]/80 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-[#07112c]'
              }`}
            >
              {/* Top Row: Tag & Badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                    {getCardIcon(item.id)}
                    {item.tag}
                  </span>
                  <span className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    item.isPrimary
                      ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40'
                      : 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight uppercase mb-2 group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-cyan-300/90 mb-3">
                  {item.subtitle}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Row: Deadline & Action */}
              <div className="pt-4 border-t border-cyan-500/15 flex items-center justify-between gap-3">
                <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.dateOrDeadline}</span>
                </div>

                <button
                  onClick={() => handleAction(item.actionTarget)}
                  className="font-mono text-xs font-bold text-cyan-300 hover:text-white flex items-center gap-1.5 group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
