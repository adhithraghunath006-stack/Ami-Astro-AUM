'use client';

import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Clock,
  LayoutGrid,
  List,
  Search,
  Calendar as CalendarIcon,
} from 'lucide-react';
import { CelestialCategory, TimeZoneMode, EventStatusFilter } from '@/types/calendar';
import { MONTH_NAMES } from '@/utils/calendarUtils';

interface CalendarControlsProps {
  currentMonth: number; // 0-11
  currentYear: number;
  onMonthChange: (month: number) => void;
  onTodayClick: () => void;
  activeCategory: CelestialCategory | 'all';
  onCategoryChange: (category: CelestialCategory | 'all') => void;
  statusFilter: EventStatusFilter;
  onStatusFilterChange: (status: EventStatusFilter) => void;
  timeZoneMode: TimeZoneMode;
  onTimeZoneChange: (mode: TimeZoneMode) => void;
  viewMode: 'grid' | 'cards';
  onViewModeChange: (mode: 'grid' | 'cards') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onResetFilters: () => void;
  eventsCountPerMonth: number[];
  categoryCounts: Record<string, number>;
  totalFilteredCount: number;
}

export default function CalendarControls({
  currentMonth,
  currentYear,
  onMonthChange,
  onTodayClick,
  activeCategory,
  onCategoryChange,
  statusFilter,
  onStatusFilterChange,
  timeZoneMode,
  onTimeZoneChange,
  viewMode,
  onViewModeChange,
  searchQuery,
  onSearchChange,
  onResetFilters,
  eventsCountPerMonth,
  categoryCounts,
  totalFilteredCount,
}: CalendarControlsProps) {
  const isOctoberCurrent = currentMonth === 9 && currentYear === 2026;

  const categories: { label: string; value: CelestialCategory | 'all' }[] = [
    { label: 'All Events', value: 'all' },
    { label: 'Moon Phases', value: 'moon-phase' },
    { label: 'Meteor Showers', value: 'meteor-shower' },
    { label: 'Eclipses', value: 'eclipse' },
    { label: 'Planetary', value: 'planetary' },
    { label: 'Solstices & Equinoxes', value: 'solstice-equinox' },
  ];

  const handlePrevMonth = () => {
    onMonthChange(currentMonth === 0 ? 11 : currentMonth - 1);
  };

  const handleNextMonth = () => {
    onMonthChange(currentMonth === 11 ? 0 : currentMonth + 1);
  };

  const hasActiveFilters =
    activeCategory !== 'all' ||
    statusFilter !== 'all' ||
    searchQuery.trim().length > 0;

  return (
    <div className="space-y-6 mb-8">
      {/* Top Bar: Month Heading, Prev/Next, Today, Timezone Switcher, View Mode */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#0E1424]/90 border border-[#1E293B] shadow-xl">
        {/* Month Navigation & Today */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#12182B] border border-[#1E293B] rounded-xl p-1">
            <button
              onClick={handlePrevMonth}
              aria-label="Previous month"
              className="p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#6C63FF]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNextMonth}
              aria-label="Next month"
              className="p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#6C63FF]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={onTodayClick}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 border ${
              isOctoberCurrent
                ? 'bg-[#6C63FF]/20 text-[#A78BFA] border-[#6C63FF]/40 shadow-[0_0_15px_rgba(108,99,255,0.25)]'
                : 'bg-[#12182B] text-[#94A3B8] border-[#1E293B] hover:text-white hover:border-[#6C63FF]/40'
            }`}
          >
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Today (Oct 24)</span>
          </button>

          {/* Month Heading */}
          <div className="ml-1 sm:ml-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span>{MONTH_NAMES[currentMonth]}</span>
              <span className="text-[#A78BFA]">{currentYear}</span>
            </h2>
            <span className="text-[11px] text-[#94A3B8] font-medium tracking-wide">
              {eventsCountPerMonth[currentMonth]} Celestial Events this month • {totalFilteredCount} matching
            </span>
          </div>
        </div>

        {/* Right Controls: Timezone Toggle & View Toggle */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Time Zone Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-[#12182B] border border-[#1E293B] rounded-xl text-xs">
            <div className="px-2 py-1 text-[#94A3B8] flex items-center gap-1.5 font-medium border-r border-[#1E293B]">
              <Clock className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span className="hidden sm:inline">Time:</span>
            </div>

            <button
              onClick={() => onTimeZoneChange('IST')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                timeZoneMode === 'IST'
                  ? 'bg-[#6C63FF] text-white shadow-[0_0_10px_rgba(108,99,255,0.4)]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
              title="Indian Standard Time (UTC+5:30) - Default for AMI ASTRO"
            >
              IST
            </button>

            <button
              onClick={() => onTimeZoneChange('UTC')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                timeZoneMode === 'UTC'
                  ? 'bg-[#6C63FF] text-white shadow-[0_0_10px_rgba(108,99,255,0.4)]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
              title="Coordinated Universal Time"
            >
              UTC
            </button>

            <button
              onClick={() => onTimeZoneChange('LOCAL')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                timeZoneMode === 'LOCAL'
                  ? 'bg-[#6C63FF] text-white shadow-[0_0_10px_rgba(108,99,255,0.4)]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
              title="Your Device's Local Browser Timezone"
            >
              Device
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-[#12182B] border border-[#1E293B] rounded-xl">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#1E293B] text-white border border-white/10 shadow-sm'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
              title="Monthly Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span className="hidden sm:inline">Grid View</span>
            </button>

            <button
              onClick={() => onViewModeChange('cards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'cards'
                  ? 'bg-[#1E293B] text-white border border-white/10 shadow-sm'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
              title="Detailed Event Cards View"
            >
              <List className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span className="hidden sm:inline">Cards View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Month Quick Picker Carousel Bar */}
      <div className="overflow-x-auto pb-1 scrollbar-thin">
        <div className="flex items-center gap-1.5 min-w-max p-1.5 bg-[#0B0F19]/80 border border-[#1E293B]/70 rounded-2xl">
          {MONTH_NAMES.map((name, idx) => {
            const isSelected = currentMonth === idx;
            const isCurrentMonth = idx === 9; // October 2026
            const count = eventsCountPerMonth[idx] || 0;

            return (
              <button
                key={name}
                onClick={() => onMonthChange(idx)}
                className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#6C63FF] text-white shadow-[0_0_15px_rgba(108,99,255,0.45)]'
                    : isCurrentMonth
                    ? 'bg-[#12182B] text-cyan-300 border border-cyan-500/30 hover:bg-[#182038]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{name.slice(0, 3)}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-[#94A3B8]'
                  }`}
                >
                  {count}
                </span>
                {isCurrentMonth && !isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute top-1.5 right-1.5 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0E1424]/70 border border-[#1E293B]">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search celestial events, meteors, planets, eclipses..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#12182B] border border-[#1E293B] text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Status Filter (All / Upcoming / Past) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#12182B] border border-[#1E293B] rounded-xl text-xs self-start lg:self-auto">
          <button
            onClick={() => onStatusFilterChange('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              statusFilter === 'all'
                ? 'bg-[#1E293B] text-white shadow-sm'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            All Year
          </button>
          <button
            onClick={() => onStatusFilterChange('upcoming')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              statusFilter === 'upcoming'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Upcoming
          </button>
          <button
            onClick={() => onStatusFilterChange('past')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              statusFilter === 'past'
                ? 'bg-slate-800 text-slate-200 border border-slate-700'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Reset button if filter active */}
        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#A78BFA] hover:text-white bg-[#6C63FF]/10 hover:bg-[#6C63FF]/20 border border-[#6C63FF]/30 transition-colors self-start lg:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.value;
          const count =
            cat.value === 'all'
              ? categoryCounts.total
              : categoryCounts[cat.value] || 0;

          return (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide shrink-0 transition-all flex items-center gap-2 border ${
                isSelected
                  ? 'bg-[#6C63FF]/20 text-[#A78BFA] border-[#6C63FF] shadow-[0_0_12px_rgba(108,99,255,0.25)]'
                  : 'bg-[#0E1424] text-[#94A3B8] border-[#1E293B] hover:text-white hover:border-[#1E293B]/90'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected
                    ? 'bg-[#6C63FF]/40 text-white'
                    : 'bg-white/5 text-[#64748B]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
