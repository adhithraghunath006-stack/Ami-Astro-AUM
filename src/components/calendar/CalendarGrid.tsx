'use client';

import React from 'react';
import { CelestialEvent } from '@/types/calendar';

interface CalendarGridProps {
  currentMonth: number; // 0-11
  currentYear: number;
  events: CelestialEvent[];
  onEventClick: (event: CelestialEvent) => void;
  selectedDate: string | null;
  onDateSelect: (dateStr: string | null) => void;
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarGrid({
  currentMonth,
  currentYear,
  events,
  onEventClick,
  selectedDate,
  onDateSelect,
}: CalendarGridProps) {
  // Days in month
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  // First day offset (0 = Sunday, 6 = Saturday)
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  // Reference for "today": 2026-10-24
  const isCurrentYear = currentYear === 2026;
  const isOctober = currentMonth === 9; // Oct is 9

  // Helper to map events to each day
  const eventsByDay: Record<number, CelestialEvent[]> = {};
  for (let i = 1; i <= totalDays; i++) {
    eventsByDay[i] = [];
  }

  events.forEach((ev) => {
    // Determine start day and end day
    const startParts = ev.startDate.split('-').map(Number);
    const startM = startParts[1] - 1;
    const startD = startParts[2];

    if (startParts[0] === currentYear && startM === currentMonth) {
      if (eventsByDay[startD]) {
        eventsByDay[startD].push(ev);
      }
    }

    // If multi-day (e.g. meteor shower spanning across 2 days)
    if (ev.endDate) {
      const endParts = ev.endDate.split('-').map(Number);
      const endM = endParts[1] - 1;
      const endD = endParts[2];
      if (endParts[0] === currentYear && endM === currentMonth && endD !== startD) {
        if (eventsByDay[endD] && !eventsByDay[endD].includes(ev)) {
          eventsByDay[endD].push(ev);
        }
      }
    }
  });

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'moon-phase':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'meteor-shower':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
      case 'eclipse':
        return 'bg-rose-500/15 text-rose-300 border-rose-500/30';
      case 'planetary':
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      case 'solstice-equinox':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  const getCategoryDotColor = (category: string) => {
    switch (category) {
      case 'moon-phase':
        return 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]';
      case 'meteor-shower':
        return 'bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]';
      case 'eclipse':
        return 'bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.5)]';
      case 'planetary':
        return 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.5)]';
      case 'solstice-equinox':
        return 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <div className="rounded-2xl border border-[#1E293B] bg-[#0E1424]/90 shadow-2xl overflow-hidden mb-12">
      {/* Weekday Header */}
      <div className="grid grid-cols-7 border-b border-[#1E293B] bg-[#12182B]">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="py-3 text-center text-xs font-bold uppercase tracking-wider text-[#94A3B8]"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Grid of Days */}
      <div className="grid grid-cols-7 auto-rows-fr bg-[#0B0F19]/40 divide-x divide-y divide-[#1E293B]/70">
        {/* Empty cells before month start */}
        {Array.from({ length: firstDayIndex }).map((_, idx) => (
          <div
            key={`empty-start-${idx}`}
            className="min-h-[90px] sm:min-h-[120px] p-2 bg-[#080C16]/60 opacity-30 select-none"
          />
        ))}

        {/* Days of the month */}
        {Array.from({ length: totalDays }).map((_, idx) => {
          const dayNum = idx + 1;
          const dayEvents = eventsByDay[dayNum] || [];
          const hasEvents = dayEvents.length > 0;

          // Check if this cell is "Today": October 24, 2026
          const isToday = isCurrentYear && isOctober && dayNum === 24;

          // Check if this date is past
          const isPast =
            isCurrentYear &&
            (currentMonth < 9 || (isOctober && dayNum < 24));

          const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
          const isSelected = selectedDate === dateStr;

          return (
            <div
              key={`day-${dayNum}`}
              onClick={() => {
                if (hasEvents) {
                  onDateSelect(isSelected ? null : dateStr);
                }
              }}
              className={`min-h-[90px] sm:min-h-[120px] p-2 sm:p-2.5 transition-all relative flex flex-col justify-between group ${
                isSelected
                  ? 'bg-[#182038] ring-2 ring-[#6C63FF]'
                  : hasEvents
                  ? 'bg-[#0E1424]/80 hover:bg-[#151D33] cursor-pointer'
                  : 'bg-[#0B0F19]/40'
              } ${isPast ? 'opacity-70' : ''}`}
            >
              {/* Day Number & Badges Header */}
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs sm:text-sm font-bold flex items-center justify-center w-6 h-6 rounded-full ${
                    isToday
                      ? 'bg-cyan-500 text-black font-black ring-2 ring-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.7)]'
                      : isSelected
                      ? 'bg-[#6C63FF] text-white'
                      : 'text-white/80 group-hover:text-white'
                  }`}
                >
                  {dayNum}
                </span>

                {isToday && (
                  <span className="hidden sm:inline-flex text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse">
                    Today
                  </span>
                )}

                {hasEvents && (
                  <span className="text-[10px] font-bold text-[#A78BFA] sm:hidden">
                    • {dayEvents.length}
                  </span>
                )}
              </div>

              {/* Event indicators / previews in cell */}
              <div className="space-y-1 my-auto overflow-hidden">
                {dayEvents.slice(0, 2).map((ev) => (
                  <button
                    key={ev.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventClick(ev);
                    }}
                    className={`w-full text-left truncate text-[10px] sm:text-[11px] font-medium px-1.5 py-0.5 rounded-md border transition-all block ${getCategoryBadgeColor(
                      ev.category
                    )} hover:brightness-125 focus:outline-none`}
                    title={ev.title}
                  >
                    <span className="truncate">{ev.title}</span>
                  </button>
                ))}

                {dayEvents.length > 2 && (
                  <span className="text-[10px] text-[#94A3B8] font-medium block pl-1">
                    +{dayEvents.length - 2} more
                  </span>
                )}
              </div>

              {/* Category Dots Bar at bottom of cell */}
              {hasEvents && (
                <div className="flex items-center gap-1 mt-1 pt-1 border-t border-[#1E293B]/40">
                  {dayEvents.map((ev) => (
                    <span
                      key={`dot-${ev.id}`}
                      className={`w-1.5 h-1.5 rounded-full ${getCategoryDotColor(
                        ev.category
                      )}`}
                      title={ev.title}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
