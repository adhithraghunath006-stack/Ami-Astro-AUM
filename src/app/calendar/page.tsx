'use client';

import React, { useState, useMemo } from 'react';
import CalendarHeader from '@/components/calendar/CalendarHeader';
import CalendarControls from '@/components/calendar/CalendarControls';
import CalendarGrid from '@/components/calendar/CalendarGrid';
import EventCard from '@/components/calendar/EventCard';
import EventDetailModal from '@/components/calendar/EventDetailModal';
import CalendarSourcesFooter from '@/components/calendar/CalendarSourcesFooter';
import { ASTRONOMY_CALENDAR_2026 } from '@/data/astronomyCalendar2026';
import {
  CelestialCategory,
  CelestialEvent,
  TimeZoneMode,
  EventStatusFilter,
} from '@/types/calendar';
import { getEventStatus, MONTH_NAMES } from '@/utils/calendarUtils';
import { AlertCircle, RotateCcw } from 'lucide-react';

export default function AstronomyCalendarPage() {
  // Current month default: October (index 9) for 2026
  const [currentMonth, setCurrentMonth] = useState<number>(9);
  const currentYear = 2026;

  // State
  const [timeZoneMode, setTimeZoneMode] = useState<TimeZoneMode>('IST');
  const [viewMode, setViewMode] = useState<'grid' | 'cards'>('grid');
  const [activeCategory, setActiveCategory] = useState<CelestialCategory | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<EventStatusFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedModalEvent, setSelectedModalEvent] = useState<CelestialEvent | null>(null);

  // Compute total counts
  const totalEvents = ASTRONOMY_CALENDAR_2026.length;

  const upcomingCount = useMemo(() => {
    return ASTRONOMY_CALENDAR_2026.filter((ev) => {
      const status = getEventStatus(ev);
      return status === 'upcoming' || status === 'today';
    }).length;
  }, []);

  // Compute events count per month across entire year
  const eventsCountPerMonth = useMemo(() => {
    const counts = Array(12).fill(0);
    ASTRONOMY_CALENDAR_2026.forEach((ev) => {
      const m = parseInt(ev.startDate.split('-')[1], 10) - 1;
      if (m >= 0 && m < 12) counts[m]++;
    });
    return counts;
  }, []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { total: totalEvents };
    ASTRONOMY_CALENDAR_2026.forEach((ev) => {
      counts[ev.category] = (counts[ev.category] || 0) + 1;
    });
    return counts;
  }, [totalEvents]);

  // Filtered events
  const filteredEvents = useMemo(() => {
    return ASTRONOMY_CALENDAR_2026.filter((ev) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          ev.title.toLowerCase().includes(q) ||
          ev.shortDescription.toLowerCase().includes(q) ||
          ev.categoryLabel.toLowerCase().includes(q) ||
          (ev.radiantConstellation && ev.radiantConstellation.toLowerCase().includes(q)) ||
          (ev.parentBody && ev.parentBody.toLowerCase().includes(q)) ||
          ev.equipment.toLowerCase().includes(q);

        if (!matches) return false;
      }

      // 2. Category Filter
      if (activeCategory !== 'all' && ev.category !== activeCategory) {
        return false;
      }

      // 3. Status Filter (Upcoming / Past)
      if (statusFilter !== 'all') {
        const status = getEventStatus(ev);
        if (statusFilter === 'upcoming' && status === 'past') return false;
        if (statusFilter === 'past' && status !== 'past') return false;
      }

      // 4. Selected Date Filter (if user clicked on a specific grid day)
      if (selectedDate) {
        const isStart = ev.startDate === selectedDate;
        const isEnd = ev.endDate === selectedDate;
        if (!isStart && !isEnd) return false;
      }

      // 5. Month Filter (if in Grid view or if user hasn't selected a broad search)
      if (!searchQuery.trim() && !selectedDate && statusFilter === 'all') {
        const startM = parseInt(ev.startDate.split('-')[1], 10) - 1;
        const endM = ev.endDate ? parseInt(ev.endDate.split('-')[1], 10) - 1 : startM;
        if (startM !== currentMonth && endM !== currentMonth) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, activeCategory, statusFilter, selectedDate, currentMonth]);

  // Grid events specifically for the active month
  const gridEventsForMonth = useMemo(() => {
    return ASTRONOMY_CALENDAR_2026.filter((ev) => {
      const startM = parseInt(ev.startDate.split('-')[1], 10) - 1;
      const endM = ev.endDate ? parseInt(ev.endDate.split('-')[1], 10) - 1 : startM;
      if (startM !== currentMonth && endM !== currentMonth) return false;

      if (activeCategory !== 'all' && ev.category !== activeCategory) return false;
      return true;
    });
  }, [currentMonth, activeCategory]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setStatusFilter('all');
    setSearchQuery('');
    setSelectedDate(null);
  };

  const handleTodayClick = () => {
    setCurrentMonth(9); // October
    setSelectedDate(null);
  };

  return (
    <div className="py-8 sm:py-12 bg-transparent min-h-screen relative text-white">
      {/* Top Header */}
      <CalendarHeader
        totalEvents={totalEvents}
        upcomingCount={upcomingCount}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls Bar */}
        <CalendarControls
          currentMonth={currentMonth}
          currentYear={currentYear}
          onMonthChange={(m) => {
            setCurrentMonth(m);
            setSelectedDate(null);
          }}
          onTodayClick={handleTodayClick}
          activeCategory={activeCategory}
          onCategoryChange={(c) => {
            setActiveCategory(c);
            setSelectedDate(null);
          }}
          statusFilter={statusFilter}
          onStatusFilterChange={(s) => {
            setStatusFilter(s);
            setSelectedDate(null);
          }}
          timeZoneMode={timeZoneMode}
          onTimeZoneChange={setTimeZoneMode}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onResetFilters={handleResetFilters}
          eventsCountPerMonth={eventsCountPerMonth}
          categoryCounts={categoryCounts}
          totalFilteredCount={filteredEvents.length}
        />

        {/* Selected Date Notice */}
        {selectedDate && (
          <div className="mb-6 p-4 rounded-2xl bg-[#12182B] border border-[#6C63FF]/40 flex items-center justify-between gap-3 shadow-[0_0_20px_rgba(108,99,255,0.15)]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6C63FF] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-white">
                Showing events for selected date:{' '}
                <strong className="text-[#A78BFA]">{selectedDate}</strong>
              </span>
            </div>
            <button
              onClick={() => setSelectedDate(null)}
              className="text-xs text-[#94A3B8] hover:text-white underline font-medium"
            >
              Clear date filter
            </button>
          </div>
        )}

        {/* View Mode: Calendar Grid (with event cards below) */}
        {viewMode === 'grid' && (
          <div className="space-y-8">
            <CalendarGrid
              currentMonth={currentMonth}
              currentYear={currentYear}
              events={gridEventsForMonth}
              onEventClick={setSelectedModalEvent}
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />

            {/* Event Cards Section for Selected Month / Filters */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>Events in {MONTH_NAMES[currentMonth]}</span>
                    <span className="text-sm font-normal text-[#94A3B8]">
                      ({filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'})
                    </span>
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Click any card for full observing instructions, celestial mechanics, and calendar sync.
                  </p>
                </div>
              </div>

              {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      timeZoneMode={timeZoneMode}
                      onOpenDetails={setSelectedModalEvent}
                    />
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center rounded-3xl bg-[#0E1424]/60 border border-[#1E293B] space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 text-[#94A3B8] flex items-center justify-center mx-auto">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    No celestial events match your current filter
                  </h4>
                  <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
                    Try clearing your search query or switching to another category or month.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6C63FF]/20 hover:bg-[#6C63FF]/30 border border-[#6C63FF]/40 text-xs font-bold text-[#A78BFA] hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Filters</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* View Mode: Cards Only View */}
        {viewMode === 'cards' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Celestial Events</span>
                  <span className="text-sm font-normal text-[#94A3B8]">
                    ({filteredEvents.length} total)
                  </span>
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  Displaying celestial events formatted for {timeZoneMode === 'IST' ? 'Indian Standard Time (IST)' : timeZoneMode}.
                </p>
              </div>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    timeZoneMode={timeZoneMode}
                    onOpenDetails={setSelectedModalEvent}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center rounded-3xl bg-[#0E1424]/60 border border-[#1E293B] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-[#94A3B8] flex items-center justify-center mx-auto">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">
                  No celestial events found
                </h4>
                <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
                  No astronomical events matched your active criteria. Reset filters to see all events.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6C63FF]/20 hover:bg-[#6C63FF]/30 border border-[#6C63FF]/40 text-xs font-bold text-[#A78BFA] hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Stargazing Apps & Sources & Ephemeris Credits Footer */}
        <CalendarSourcesFooter />
      </div>

      {/* Event Details Accessible Modal */}
      <EventDetailModal
        event={selectedModalEvent}
        onClose={() => setSelectedModalEvent(null)}
      />
    </div>
  );
}
