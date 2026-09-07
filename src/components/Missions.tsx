import React, { useState, useEffect } from 'react';
import { MISSIONS_DATA } from '../data/missions';
import type { Mission } from '../data/missions';
import { soundFx } from '../utils/audio';
import { 
  Calendar, Clock, MapPin, ArrowRight, 
  Sparkles, Users 
} from 'lucide-react';

interface MissionsProps {
  onSelectMission: (mission: Mission) => void;
  onOpenJoinModal?: () => void;
  onCrewClick?: () => void;
}

const CATEGORIES = [
  'ALL',
  'WORKSHOPS',
  'COMPETITIONS',
  'HACKATHONS',
  'TALKS',
  'COMMUNITY'
] as const;

export const Missions: React.FC<MissionsProps> = ({
  onSelectMission,
  onOpenJoinModal,
  onCrewClick
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [daysRemaining, setDaysRemaining] = useState(12);

  useEffect(() => {
    const targetDate = new Date('2026-09-15T23:59:59+05:30').getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff > 0) {
      setDaysRemaining(Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }
  }, []);

  const filteredMissions = activeCategory === 'ALL'
    ? MISSIONS_DATA
    : MISSIONS_DATA.filter(m => m.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    soundFx.playClick();
    setActiveCategory(cat);
  };

  return (
    <section id="missions" className="relative py-28 overflow-hidden bg-tech-grid">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 font-mono text-[11px] tracking-[0.25em] text-cyan-400 uppercase mb-4">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              AMI ASTRO EVENTS
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase">
              AMI ASTRO EVENTS
            </h2>
            <p className="text-cyan-300 text-lg sm:text-xl font-light mt-3 border-l-2 border-cyan-400 pl-4 py-0.5">
              “There's always something happening at AMI ASTRO.”
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 border-l border-cyan-500/30 pl-4 py-1">
            <span className="text-cyan-400 font-bold block text-sm">15+ EVENTS • 10+ WORKSHOPS</span>
            <span>NEXT SUMMIT: 14 DEC 2026</span>
          </div>
        </div>

        {/* Featured Section: AMI ASTRO CREW ONBOARDING 2026 */}
        <div className="mb-16">
          <div className="text-[11px] font-mono tracking-[0.25em] text-cyan-400 uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            FEATURED INITIATIVE
          </div>

          <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/60 bg-gradient-to-r from-[#071333] via-[#050b1d] to-[#02050e] shadow-[0_0_50px_rgba(0,240,255,0.25)] tech-border group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 relative z-10">
              
              {/* Left Col: Recruitment Campaign Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase">
                    CREW ONBOARDING 2026
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    APPLICATIONS OPEN
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase">
                    DEADLINE: 15 SEPTEMBER 2026
                  </span>
                </div>

                <h3 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-4 group-hover:text-cyan-200 transition-colors">
                  JOIN THE AMI ASTRO CREW
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  “We're looking for curious, creative and driven students to join the next chapter of AMI ASTRO.” Whether you build circuits, write code, craft digital visuals, tell science stories, or love organizing campus experiences—there is an active role for you.
                </p>

                {/* Metadata Chips */}
                <div className="flex flex-wrap gap-4 mb-8 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2 bg-black/60 px-3.5 py-2 rounded-lg border border-cyan-500/20">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>Applications Close: 15 September 2026</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/60 px-3.5 py-2 rounded-lg border border-cyan-500/20">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-bold">{daysRemaining} Days Remaining</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/60 px-3.5 py-2 rounded-lg border border-cyan-500/20">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span>Open to all departments & years</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      if (onOpenJoinModal) onOpenJoinModal();
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-mono font-black text-xs sm:text-sm tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer"
                  >
                    <span>APPLY NOW</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>

                  <button
                    onClick={() => {
                      soundFx.playClick();
                      if (onCrewClick) onCrewClick();
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className="px-6 py-4 rounded-xl bg-black/60 hover:bg-cyan-950/50 border border-cyan-500/40 text-cyan-300 hover:text-white font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span>MEET THE CREW</span>
                  </button>
                </div>
              </div>

              {/* Right Col: Poster Image & Atmosphere */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-xl overflow-hidden border border-cyan-400/40 shadow-2xl h-72 sm:h-96">
                  <img
                    src="https://images.unsplash.com/photo-1517976487541-11d23485c276?auto=format&fit=crop&w=1000&q=80"
                    alt="AMI ASTRO Crew Gathering"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03081a] via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-cyan-500/30 font-mono text-xs">
                    <span className="text-cyan-300 font-bold block mb-0.5">STUDENT RECRUITMENT DRIVE</span>
                    <span className="text-slate-400 text-[11px]">Core Committee • Technical • Design • Editorial • Marketing</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Category Filters for Events */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-cyan-500/15">
          <div className="flex flex-wrap items-center gap-2">
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

          <span className="font-mono text-xs text-slate-400">
            SHOWING {filteredMissions.length} UPCOMING SESSIONS
          </span>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMissions.map((mission) => (
            <div
              key={mission.id}
              onClick={() => {
                soundFx.playClick();
                onSelectMission(mission);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="hud-panel rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,240,255,0.2)] cursor-pointer flex flex-col justify-between bg-[#050b1d]/90 relative group tech-border"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b1d] via-[#050b1d]/40 to-transparent" />

                {/* Event Number & Category */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                    {mission.missionNumber}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 backdrop-blur-md border border-cyan-500/30 text-white font-mono text-[10px] font-semibold uppercase">
                    {mission.category}
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 font-mono text-[9px] font-bold uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {mission.status}
                  </span>
                </div>
              </div>

              {/* Event Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-xl text-white tracking-wide uppercase group-hover:text-cyan-200 transition-colors mb-3 leading-snug line-clamp-2">
                    {mission.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 font-normal">
                    {mission.description}
                  </p>
                </div>

                {/* Event Details Footer */}
                <div>
                  <div className="space-y-2 mb-6 font-mono text-xs text-slate-300 border-t border-cyan-500/15 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{mission.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{mission.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{mission.venue}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-cyan-500/15">
                    <span className="font-mono text-xs text-cyan-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      VIEW FULL EVENT <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {mission.registeredCount}/{mission.maxCapacity} SLOTS
                    </span>
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
