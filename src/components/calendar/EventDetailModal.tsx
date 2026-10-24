'use client';

import React, { useEffect } from 'react';
import { CelestialEvent } from '@/types/calendar';
import {
  formatEventDateTime,
  generateIcsUrl,
  getGoogleCalendarLink,
} from '@/utils/calendarUtils';
import {
  X,
  Clock,
  Compass,
  Telescope,
  Eye,
  CalendarPlus,
  Download,
  ExternalLink,
  Sparkles,
  AlertCircle,
  BookOpen,
} from 'lucide-react';

interface EventDetailModalProps {
  event: CelestialEvent | null;
  onClose: () => void;
}

export default function EventDetailModal({
  event,
  onClose,
}: EventDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  const istFormatted = formatEventDateTime(event, 'IST');
  const utcFormatted = formatEventDateTime(event, 'UTC');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-2xl bg-[#0E1424] border border-[#1E293B] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        {/* Top Gradient Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#6C63FF] via-[#38BDF8] to-[#A78BFA]" />

        {/* Header Bar */}
        <div className="p-6 pb-4 flex items-start justify-between gap-4 border-b border-[#1E293B]/70 bg-[#12182B]/60">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#6C63FF]/20 text-[#A78BFA] border border-[#6C63FF]/30 mb-2">
              <Sparkles className="w-3 h-3 text-[#A78BFA]" />
              {event.categoryLabel}
            </span>
            <h2
              id="modal-title"
              className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug"
            >
              {event.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors border border-[#1E293B] shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#94A3B8] leading-relaxed scrollbar-thin">
          {/* Dual Timezone & Schedule Card */}
          <div className="p-4 rounded-2xl bg-[#12182B] border border-[#1E293B] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#38BDF8]" />
              Observing Timing & Time Zones
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* IST (India Standard Time) */}
              <div className="p-3 rounded-xl bg-[#0B0F19] border border-[#1E293B]/80">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase text-[#A78BFA] tracking-wider">
                    Indian Standard Time (IST)
                  </span>
                  <span className="text-[10px] text-[#64748B]">UTC +5:30</span>
                </div>
                <div className="font-bold text-white text-sm">
                  {istFormatted.displayDate}
                </div>
                <div className="text-[#94A3B8] text-[11px]">
                  {istFormatted.displayTime}
                </div>
              </div>

              {/* UTC (Universal Time) */}
              <div className="p-3 rounded-xl bg-[#0B0F19] border border-[#1E293B]/80">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase text-[#38BDF8] tracking-wider">
                    Universal Time (UTC)
                  </span>
                  <span className="text-[10px] text-[#64748B]">Standard Reference</span>
                </div>
                <div className="font-bold text-white text-sm">
                  {utcFormatted.displayDate}
                </div>
                <div className="text-[#94A3B8] text-[11px]">
                  {utcFormatted.displayTime}
                </div>
              </div>
            </div>

            {istFormatted.dateRolledOver && (
              <p className="text-[11px] text-amber-300/90 flex items-center gap-1.5 pt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                Note: Converted time crosses midnight in India, falling on the following calendar day in IST.
              </p>
            )}
          </div>

          {/* Detailed Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-[#A78BFA]" />
              Astronomical Overview
            </h3>
            <p className="text-[#CBD5E1] text-xs sm:text-sm leading-relaxed mb-3">
              {event.detailedOverview}
            </p>

            {event.scientificContext && (
              <div className="p-3.5 rounded-xl bg-[#12182B]/60 border border-[#1E293B] text-xs text-[#94A3B8] space-y-1">
                <span className="font-semibold text-white block">Celestial Mechanics:</span>
                <p>{event.scientificContext}</p>
              </div>
            )}
          </div>

          {/* Observing Guidance & Equipment Card */}
          <div className="p-4 rounded-2xl bg-[#12182B]/80 border border-[#1E293B] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Telescope className="w-4 h-4 text-emerald-400" />
              Observing Equipment & Location Guide
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-[#64748B] uppercase tracking-wider text-[10px] block">
                  Recommended Gear
                </span>
                <span className="font-bold text-white text-sm flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#38BDF8]" />
                  {event.equipment}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[#64748B] uppercase tracking-wider text-[10px] block">
                  Visibility Region
                </span>
                <span className="font-medium text-[#E2E8F0]">
                  {event.visibilityRegion || 'Global'}
                </span>
              </div>

              {event.skyDirection && (
                <div className="space-y-1 sm:col-span-2">
                  <span className="text-[#64748B] uppercase tracking-wider text-[10px] block">
                    Sky Orientation & Direction
                  </span>
                  <span className="font-medium text-[#E2E8F0] flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#A78BFA]" />
                    {event.skyDirection}
                  </span>
                </div>
              )}
            </div>

            {event.equipmentNotes && (
              <p className="text-[11px] text-[#94A3B8] border-t border-[#1E293B] pt-2 mt-2">
                <span className="font-semibold text-[#E2E8F0]">Equipment Advice: </span>
                {event.equipmentNotes}
              </p>
            )}

            {event.viewingTip && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200 text-xs">
                <span className="font-bold text-amber-300 block mb-0.5">Stargazing Tip:</span>
                {event.viewingTip}
              </div>
            )}
          </div>

          {/* Specific Astronomical Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {event.parentBody && (
              <span className="px-3 py-1.5 rounded-xl bg-[#12182B] border border-[#1E293B] text-[#94A3B8]">
                <strong className="text-white">Parent Body:</strong> {event.parentBody}
              </span>
            )}
            {event.radiantConstellation && (
              <span className="px-3 py-1.5 rounded-xl bg-[#12182B] border border-[#1E293B] text-[#94A3B8]">
                <strong className="text-white">Radiant:</strong> {event.radiantConstellation}
              </span>
            )}
            {event.peakRatePerHour && (
              <span className="px-3 py-1.5 rounded-xl bg-[#12182B] border border-[#1E293B] text-[#94A3B8]">
                <strong className="text-white">Zenithal Hourly Rate:</strong> {event.peakRatePerHour}
              </span>
            )}
            {event.magnitude && (
              <span className="px-3 py-1.5 rounded-xl bg-[#12182B] border border-[#1E293B] text-[#94A3B8]">
                <strong className="text-white">Apparent Magnitude:</strong> {event.magnitude}
              </span>
            )}
            {event.moonInterference && (
              <span className="px-3 py-1.5 rounded-xl bg-[#12182B] border border-[#1E293B] text-[#94A3B8]">
                <strong className="text-white">Moon Interference:</strong> {event.moonInterference}
              </span>
            )}
          </div>

          {/* Source Attribution (Copyright & Ephemeris Verification) */}
          <div className="p-3.5 rounded-xl bg-[#080C16] border border-[#1E293B] flex items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <span className="text-[10px] text-[#64748B] uppercase tracking-wider block font-semibold">
                Ephemeris Verification Source
              </span>
              <span className="text-white font-medium">{event.sourceName}</span>
            </div>

            <a
              href={event.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#12182B] hover:bg-[#1E293B] border border-[#1E293B] text-[#A78BFA] hover:text-white transition-colors text-[11px] font-semibold"
            >
              <span>Verify Source</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#080C16] border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={getGoogleCalendarLink(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#6C63FF]/20 hover:bg-[#6C63FF]/30 border border-[#6C63FF]/40 text-xs font-bold text-[#A78BFA] hover:text-white transition-all shadow-[0_0_15px_rgba(108,99,255,0.2)]"
            >
              <CalendarPlus className="w-4 h-4 text-[#38BDF8]" />
              <span>Google Calendar</span>
            </a>

            <a
              href={generateIcsUrl(event)}
              download={`ami-astro-${event.id}.ics`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#12182B] hover:bg-[#1E293B] border border-[#1E293B] text-xs font-semibold text-[#E2E8F0] hover:text-white transition-colors"
            >
              <Download className="w-4 h-4 text-[#94A3B8]" />
              <span>Download .iCal</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
