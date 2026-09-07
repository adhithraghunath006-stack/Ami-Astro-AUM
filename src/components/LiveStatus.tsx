import React, { useEffect, useState, useRef } from 'react';
import { Users, Flag, Calendar, Activity, ShieldCheck, Wifi } from 'lucide-react';

interface MetricConfig {
  id: string;
  label: string;
  targetNumber: number;
  suffix: string;
  subtext: string;
  icon: React.ReactNode;
}

const METRICS: MetricConfig[] = [
  {
    id: 'members',
    label: 'MEMBERS',
    targetNumber: 80,
    suffix: '+',
    subtext: 'Active Student Members',
    icon: <Users className="w-5 h-5 text-cyan-400" />
  },
  {
    id: 'events',
    label: 'EVENTS',
    targetNumber: 15,
    suffix: '+',
    subtext: 'Summits & Observation Nights',
    icon: <Calendar className="w-5 h-5 text-cyan-400" />
  },
  {
    id: 'workshops',
    label: 'WORKSHOPS',
    targetNumber: 10,
    suffix: '+',
    subtext: 'Hands-on Sensor & Code Labs',
    icon: <Activity className="w-5 h-5 text-cyan-400" />
  },
  {
    id: 'years',
    label: 'YEARS OF COMMUNITY',
    targetNumber: 3,
    suffix: '+',
    subtext: 'Building Together Since 2023',
    icon: <Flag className="w-5 h-5 text-cyan-400" />
  },
];

export const LiveStatus: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    members: 0,
    events: 0,
    workshops: 0,
    years: 0
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 1500;
    const startTime = performance.now();

    const frame = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const nextCounts: { [key: string]: number } = {};
      METRICS.forEach(m => {
        nextCounts[m.id] = Math.floor(easeProgress * m.targetNumber);
      });
      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        const finalCounts: { [key: string]: number } = {};
        METRICS.forEach(m => {
          finalCounts[m.id] = m.targetNumber;
        });
        setCounts(finalCounts);
      }
    };

    requestAnimationFrame(frame);
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="hud-panel rounded-xl p-6 sm:p-8 relative overflow-hidden border border-cyan-500/25 bg-[#050b1d]/90 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl tech-border">
        {/* Top Telemetry Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <h2 className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-cyan-300 uppercase">
              AMI ASTRO LIVE STATUS
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Wifi className="w-3.5 h-3.5" />
              CAMPUS CHAPTER ACTIVE
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-cyan-400/80">
              <Activity className="w-3.5 h-3.5" />
              FALL 2026 TERM
            </span>
          </div>
        </div>

        {/* 5-Column Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 items-center divide-y md:divide-y-0 md:divide-x divide-cyan-500/15">
          {METRICS.map((metric) => (
            <div key={metric.id} className="pt-4 md:pt-0 md:px-4 first:pt-0 first:pl-0">
              <div className="flex items-center gap-2 mb-1">
                {metric.icon}
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                  {metric.label}
                </span>
              </div>
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-baseline gap-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300">
                  {counts[metric.id]}
                </span>
                <span className="text-cyan-400 text-2xl sm:text-3xl font-bold">
                  {metric.suffix}
                </span>
              </div>
              <p className="font-mono text-[11px] text-slate-400 mt-1">
                {metric.subtext}
              </p>
            </div>
          ))}

          {/* 5th Column: AMI ASTRO IS ACTIVE */}
          <div className="col-span-2 md:col-span-1 pt-4 md:pt-0 md:px-4">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                COMMUNITY STATUS
              </span>
            </div>
            <div className="font-heading font-extrabold text-xl sm:text-2xl text-emerald-400 tracking-tight flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981] animate-pulse shrink-0" />
              <span>AMI ASTRO IS ACTIVE</span>
            </div>
            <p className="font-mono text-[11px] text-slate-400 mt-1">
              All student nodes connected
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
