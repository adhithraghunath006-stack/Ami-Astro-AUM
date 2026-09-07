import React, { useState } from 'react';
import { ASTRO_TALKS_DATA } from '../data/astroTalks';
import type { AstroTalk } from '../data/astroTalks';
import { soundFx } from '../utils/audio';
import confetti from 'canvas-confetti';
import { MessageSquare, Calendar, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const AstroTalks: React.FC = () => {
  const [selectedTalk, setSelectedTalk] = useState<AstroTalk | null>(null);
  const [registeredTalkId, setRegisteredTalkId] = useState<string | null>(null);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleOpenTalk = (talk: AstroTalk) => {
    soundFx.playClick();
    setSelectedTalk(talk);
    setHasSubmitted(false);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();
    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#f59e0b', '#ffffff']
      });
    } catch {
      // Fallback
    }
    if (selectedTalk) {
      setRegisteredTalkId(selectedTalk.id);
    }
    setHasSubmitted(true);
  };

  return (
    <section id="talks" className="relative py-28 overflow-hidden bg-[#030008] border-y border-purple-900/30">
      {/* Black Hole Singularity Visual & Accretion Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/20 via-purple-600/25 to-violet-900/30 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-black rounded-full shadow-[0_0_80px_20px_rgba(245,158,11,0.25)] pointer-events-none border border-amber-500/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 font-mono text-[11px] tracking-[0.25em] text-purple-300 uppercase mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            ALUMNI SESSIONS
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none mb-4 uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            ASTRO TALKS
          </h2>
          <p className="text-xl sm:text-2xl font-light text-amber-200 border-l-2 border-amber-500 pl-4 py-1">
            “Learn from the people who were once in your place.”
          </p>
          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl font-normal leading-relaxed">
            Informal discussions, candid career advice, and leadership lessons hosted by AMI ASTRO alumni working in aerospace engineering, product design, and robotics.
          </p>
        </div>

        {/* 3 Talk Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ASTRO_TALKS_DATA.map((talk) => {
            const isRegistered = registeredTalkId === talk.id;
            return (
              <div
                key={talk.id}
                className="hud-panel rounded-2xl p-6 sm:p-8 border border-purple-500/20 bg-[#07020d]/90 relative overflow-hidden flex flex-col justify-between group hover:border-amber-500/50 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
              >
                <div>
                  {/* Speaker Profile Header */}
                  <div className="flex items-center gap-4 pb-6 mb-6 border-b border-purple-900/40">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500/60 shrink-0 bg-black shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                      <img
                        src={talk.avatar}
                        alt={talk.speaker}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-lg text-white group-hover:text-amber-200 transition-colors">
                        {talk.speaker}
                      </h4>
                      <p className="font-mono text-xs text-purple-300 font-medium">
                        {talk.speakerFormerRole}
                      </p>
                      <p className="font-mono text-[11px] text-slate-400 mt-0.5">
                        {talk.currentRole}
                      </p>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded bg-purple-950/80 border border-purple-500/30 text-amber-300 uppercase tracking-wider mb-2 inline-block">
                      {talk.status}
                    </span>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight uppercase mb-3">
                      {talk.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-normal">
                      {talk.description}
                    </p>
                  </div>

                  {/* Date & Venue Chips */}
                  <div className="space-y-2 mb-8 font-mono text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{talk.date} • {talk.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{talk.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-5 border-t border-purple-900/40 flex items-center justify-between">
                  {isRegistered ? (
                    <span className="font-mono text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> SEAT RESERVED
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-slate-400">
                      Free for all students
                    </span>
                  )}

                  <button
                    onClick={() => handleOpenTalk(talk)}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500/20 to-purple-600/20 hover:from-amber-500/30 hover:to-purple-600/40 border border-amber-500/50 text-amber-200 hover:text-white font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                  >
                    <span>{isRegistered ? 'VIEW DETAILS' : 'REGISTER NOW'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Talk Registration & Details Modal */}
        {selectedTalk && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-in fade-in">
            <div className="hud-panel rounded-2xl max-w-2xl w-full p-6 sm:p-10 border border-amber-500/60 bg-[#05010a] relative tech-border shadow-[0_0_70px_rgba(168,85,247,0.25)] max-h-[88vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedTalk(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-black/80 border border-purple-500/30 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-2"
              >
                <span>CLOSE [✕]</span>
              </button>

              {/* Speaker Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedTalk.avatar}
                  alt={selectedTalk.speaker}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                />
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-purple-950 text-amber-300 font-mono text-[10px] uppercase font-bold border border-purple-500/30 mb-1 inline-block">
                    ASTRO TALKS SESSION
                  </span>
                  <h3 className="font-heading font-black text-2xl text-white uppercase">
                    {selectedTalk.title}
                  </h3>
                  <p className="font-mono text-xs text-purple-300">
                    With {selectedTalk.speaker} ({selectedTalk.speakerFormerRole})
                  </p>
                </div>
              </div>

              {/* Narrative */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedTalk.description}
              </p>

              {/* Key Takeaways */}
              <div className="mb-6 bg-black/60 p-5 rounded-xl border border-purple-500/20">
                <h4 className="font-mono text-xs uppercase tracking-widest text-amber-300 font-bold mb-3">
                  WHAT YOU'LL TAKE AWAY:
                </h4>
                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  {selectedTalk.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Date & Time info box */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/20 text-slate-300 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{selectedTalk.date}</span>
                </div>
                <div className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/20 text-slate-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{selectedTalk.time}</span>
                </div>
              </div>

              {/* Registration Form / Status */}
              {hasSubmitted ? (
                <div className="p-5 rounded-xl bg-purple-950/40 border border-emerald-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="font-heading font-black text-lg text-white">
                    YOU ARE REGISTERED!
                  </h4>
                  <p className="text-slate-300 text-xs font-mono max-w-sm mx-auto">
                    We’ve reserved your seat for <strong className="text-white">{selectedTalk.title}</strong>. A calendar invite has been sent to {attendeeEmail || 'your email'}.
                  </p>
                  <button
                    onClick={() => setSelectedTalk(null)}
                    className="mt-3 px-6 py-2 rounded bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-amber-300"
                  >
                    DONE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-3 font-mono text-xs">
                  <h4 className="font-bold text-white uppercase tracking-wider">
                    RESERVE YOUR FREE SEAT
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={attendeeName}
                      onChange={(e) => setAttendeeName(e.target.value)}
                      className="px-3.5 py-2.5 rounded-lg bg-black/80 border border-purple-500/30 text-white focus:border-amber-400 focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="University Email"
                      value={attendeeEmail}
                      onChange={(e) => setAttendeeEmail(e.target.value)}
                      className="px-3.5 py-2.5 rounded-lg bg-black/80 border border-purple-500/30 text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                  >
                    CONFIRM REGISTRATION →
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};