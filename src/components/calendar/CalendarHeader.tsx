'use client';

import React from 'react';
import { Sparkles, Calendar, Telescope } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface CalendarHeaderProps {
  totalEvents: number;
  upcomingCount: number;
}

export default function CalendarHeader({
  totalEvents,
  upcomingCount,
}: CalendarHeaderProps) {
  return (
    <div className="relative pt-6 pb-10 sm:pb-14 border-b border-[#1E293B]/70 overflow-hidden mb-8 sm:mb-12">
      {/* Background Cosmic Atmosphere & Ambient Nebula Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none -z-10 select-none overflow-hidden"
      >
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1100px] h-[380px] opacity-35 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(108,99,255,0.35) 0%, rgba(56,189,248,0.18) 45%, transparent 75%)',
          }}
        />
        <div className="absolute inset-0 stars-bg opacity-30" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: 'HOME', href: '/' },
              { label: 'CALENDAR', href: '/calendar' },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            {/* Celestial Almanac Pill */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-5 h-px bg-[#6C63FF]" />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase px-3 py-1 rounded-full bg-[#6C63FF]/15 text-[#A78BFA] border border-[#6C63FF]/30 flex items-center gap-1.5 shadow-[0_0_12px_rgba(108,99,255,0.25)]">
                <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
                2026 CELESTIAL ALMANAC
              </span>
            </div>

            {/* Main Required Page Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
              ASTRONOMY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#38BDF8]">CALENDAR</span>
            </h1>

            {/* Required Subtitle */}
            <p className="text-base sm:text-lg text-[#E2E8F0] font-medium italic mb-3">
              &ldquo;Look up, mark the dates, and discover what&apos;s happening in our night sky.&rdquo;
            </p>

            {/* Introduction paragraph */}
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-2xl">
              Welcome to the official AMI-ASTRO Celestial Almanac. Whether you are observing with the naked eye, binoculars, or our club telescopes on the Amity University Mumbai terrace, this guide tracks every prominent 2026 celestial event—including moon phases, meteor showers, solar and lunar eclipses, planetary oppositions, elongations, and seasonal milestones.
            </p>
          </div>

          {/* Quick Metrics / Summary Stat Badges */}
          <div className="flex sm:flex-row lg:flex-col gap-3 shrink-0">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#12182B]/80 border border-[#1E293B] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/15 border border-[#6C63FF]/30 flex items-center justify-center text-[#A78BFA]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider block font-medium">
                  Year-Round Events
                </span>
                <span className="text-lg font-bold text-white leading-tight">
                  {totalEvents} Major Events
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#12182B]/80 border border-[#1E293B] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Telescope className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider block font-medium">
                  Current Status
                </span>
                <span className="text-sm font-semibold text-cyan-300 leading-tight">
                  {upcomingCount} Upcoming from Today
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
