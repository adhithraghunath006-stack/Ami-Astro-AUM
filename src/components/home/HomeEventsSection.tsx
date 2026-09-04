'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { EVENTS_DATA } from '@/data/events';
import Button from '@/components/ui/Button';
import RegistrationModal from '@/components/events/RegistrationModal';
import { EventItem } from '@/types';

export default function HomeEventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const upcomingEvents = EVENTS_DATA.slice(0, 3);

  return (
    <section
      aria-label="Upcoming Stargazing Events"
      className="py-20 lg:py-28 relative overflow-hidden border-t border-[#1E293B]/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#6C63FF]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase">
                CELESTIAL CALENDAR
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Upcoming Observations & Sessions
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2 max-w-xl">
              Reserve your spot at our club telescope stations on the Amity sports ground and mountain dark-sky outposts.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#A78BFA] hover:text-white uppercase transition-colors shrink-0"
          >
            <span>VIEW FULL CALENDAR</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="cosmic-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#6C63FF] transition-all duration-300 relative overflow-hidden"
            >
              {/* Category & Status */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#6C63FF]/15 text-[#A78BFA] border border-[#6C63FF]/30">
                    {event.category}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    RSVP Open
                  </span>
                </div>

                {/* Date & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#0B0F19] border border-[#1E293B] flex flex-col items-center justify-center text-center shrink-0 group-hover:border-[#6C63FF]/50 transition-colors">
                    <span className="text-lg font-black text-white leading-none">
                      {event.dateBadge.day}
                    </span>
                    <span className="text-[10px] font-bold text-[#A78BFA] tracking-wider uppercase mt-0.5">
                      {event.dateBadge.month}
                    </span>
                  </div>

                  <div>
                    <Link
                      href={`/events/${event.slug}`}
                      className="text-lg font-bold text-white group-hover:text-[#A78BFA] transition-colors leading-snug line-clamp-2"
                    >
                      {event.title}
                    </Link>
                    <span className="text-xs text-[#94A3B8] flex items-center gap-1 mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#6C63FF]" />
                      {event.time}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3 mb-6">
                  {event.shortDesc}
                </p>

                <div className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
                  <MapPin className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1E293B]/60 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className="px-4 py-2 rounded-lg bg-[#6C63FF] hover:bg-[#5B52E0] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-[0_0_15px_rgba(108,99,255,0.3)]"
                >
                  REGISTER
                </button>

                <Link
                  href={`/events/${event.slug}`}
                  className="text-xs font-semibold text-[#94A3B8] hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      {selectedEvent && (
        <RegistrationModal
          event={selectedEvent}
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
}
