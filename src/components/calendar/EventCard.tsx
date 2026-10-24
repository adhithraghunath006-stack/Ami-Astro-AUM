'use client';

import React from 'react';
import { CelestialEvent, TimeZoneMode } from '@/types/calendar';
import {
  formatEventDateTime,
  getEventStatus,
  getGoogleCalendarLink,
} from '@/utils/calendarUtils';
import {
  Clock,
  Eye,
  Telescope,
  CalendarPlus,
  Compass,
  ArrowRight,
} from 'lucide-react';

interface EventCardProps {
  event: CelestialEvent;
  timeZoneMode: TimeZoneMode;
  onOpenDetails: (event: CelestialEvent) => void;
}

export default function EventCard({
  event,
  timeZoneMode,
  onOpenDetails,
}: EventCardProps) {
  const { displayDate, displayTime, hasTime, dateRolledOver, timeZoneLabel } =
    formatEventDateTime(event, timeZoneMode);

  const status = getEventStatus(event);

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'moon-phase':
        return {
          pill: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          dot: 'bg-amber-400',
          accent: 'border-amber-500/30',
        };
      case 'meteor-shower':
        return {
          pill: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
          dot: 'bg-cyan-400',
          accent: 'border-cyan-500/30',
        };
      case 'eclipse':
        return {
          pill: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
          dot: 'bg-rose-400',
          accent: 'border-rose-500/30',
        };
      case 'planetary':
        return {
          pill: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
          dot: 'bg-purple-400',
          accent: 'border-purple-500/30',
        };
      case 'solstice-equinox':
        return {
          pill: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          dot: 'bg-emerald-400',
          accent: 'border-emerald-500/30',
        };
      default:
        return {
          pill: 'bg-slate-700 text-slate-300 border-slate-600',
          dot: 'bg-slate-400',
          accent: 'border-slate-700',
        };
    }
  };

  const getEquipmentIcon = (equipment: string) => {
    if (equipment.includes('Telescope')) {
      return <Telescope className="w-3.5 h-3.5 text-[#38BDF8]" />;
    }
    if (equipment.includes('Binoculars')) {
      return <Eye className="w-3.5 h-3.5 text-[#A78BFA]" />;
    }
    return <Eye className="w-3.5 h-3.5 text-emerald-400" />;
  };

  const catStyle = getCategoryStyles(event.category);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative group ${
        status === 'today'
          ? 'bg-[#141C34] border-cyan-500/50 shadow-[0_0_30px_rgba(56,189,248,0.25)] ring-1 ring-cyan-500/30'
          : status === 'upcoming'
          ? 'bg-[#0E1424]/90 border-[#1E293B] hover:border-[#6C63FF]/50 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_35px_rgba(108,99,255,0.15)] hover:-translate-y-1'
          : 'bg-[#0B0F19]/80 border-[#1E293B]/60 opacity-80 hover:opacity-100 hover:border-[#1E293B]'
      }`}
    >
      {/* Top Banner Ambient Glow */}
      <div
        className="absolute top-0 inset-x-0 h-1"
        style={{
          background:
            event.category === 'meteor-shower'
              ? 'linear-gradient(90deg, #38BDF8, #818CF8)'
              : event.category === 'eclipse'
              ? 'linear-gradient(90deg, #FB7185, #F43F5E)'
              : event.category === 'planetary'
              ? 'linear-gradient(90deg, #A855F7, #6366F1)'
              : event.category === 'solstice-equinox'
              ? 'linear-gradient(90deg, #34D399, #10B981)'
              : 'linear-gradient(90deg, #FBBF24, #F59E0B)',
        }}
      />

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Top Metadata Row: Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          {/* Category Pill */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${catStyle.pill}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
            {event.categoryLabel}
          </span>

          {/* Status Badge */}
          {status === 'today' ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Today
            </span>
          ) : status === 'upcoming' ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Upcoming
            </span>
          ) : (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-slate-800 text-slate-400 border border-slate-700/60">
              Past
            </span>
          )}
        </div>

        {/* Event Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-[#A78BFA] transition-colors">
          {event.title}
        </h3>

        {/* Date & Time converted badge */}
        <div className="rounded-xl bg-[#12182B] border border-[#1E293B] p-3 mb-4 space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6C63FF]" />
              {displayDate}
            </span>

            {hasTime && (
              <span className="text-[10px] font-bold tracking-wider text-[#A78BFA] bg-[#6C63FF]/15 px-2 py-0.5 rounded border border-[#6C63FF]/30">
                {timeZoneLabel}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#64748B]" />
              <span>{displayTime}</span>
            </span>

            {dateRolledOver && (
              <span className="text-[10px] text-amber-300 font-medium">
                *Rollover date in {timeZoneLabel}
              </span>
            )}
          </div>
        </div>

        {/* Short Original Description */}
        <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3 mb-4 flex-1">
          {event.shortDescription}
        </p>

        {/* Equipment & Sky Direction Row */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#1E293B]/70 mb-4 text-[11px]">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#12182B] border border-[#1E293B] text-[#E2E8F0] font-medium">
            {getEquipmentIcon(event.equipment)}
            <span>{event.equipment}</span>
          </span>

          {event.skyDirection && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#12182B] border border-[#1E293B] text-[#94A3B8] truncate max-w-[200px]" title={event.skyDirection}>
              <Compass className="w-3 h-3 text-[#A78BFA] shrink-0" />
              <span className="truncate">{event.skyDirection}</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-5 py-3.5 bg-[#080C16]/90 border-t border-[#1E293B] flex items-center justify-between gap-3">
        <a
          href={getGoogleCalendarLink(event)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#94A3B8] hover:text-white flex items-center gap-1.5 transition-colors p-1"
          title="Add to Google Calendar"
        >
          <CalendarPlus className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Add to Cal</span>
        </a>

        <button
          onClick={() => onOpenDetails(event)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#6C63FF]/20 hover:bg-[#6C63FF]/30 border border-[#6C63FF]/40 text-xs font-bold text-[#A78BFA] hover:text-white transition-all shadow-[0_0_12px_rgba(108,99,255,0.2)] focus:outline-none"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
