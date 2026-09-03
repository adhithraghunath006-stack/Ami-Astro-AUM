'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';
import { EventItem } from '@/types';
import Button from '@/components/ui/Button';
import RegistrationModal from './RegistrationModal';

interface EventCardProps {
  event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="cosmic-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group hover:border-[#6C63FF]/60 hover:shadow-[0_0_30px_rgba(108,99,255,0.2)] transition-all duration-300">
        <div className="flex items-start gap-4 sm:gap-5">
          {/* Left Date Badge Block matching reference mockup */}
          <div className="flex flex-col items-center justify-center w-16 sm:w-20 py-3 px-2 rounded-xl bg-[#0B0F19] border border-[#1E293B] shrink-0 text-center group-hover:border-[#6C63FF]/50 transition-colors">
            <span className="text-2xl sm:text-3xl font-black text-white leading-none tracking-tight">
              {event.dateBadge.day}
            </span>
            <span className="text-[11px] sm:text-xs font-extrabold text-[#A78BFA] tracking-wider uppercase mt-1">
              {event.dateBadge.month}
            </span>
            <span className="text-[10px] font-medium text-[#64748B] mt-0.5">
              {event.dateBadge.year}
            </span>
          </div>

          {/* Right Info Details */}
          <div className="flex-1 min-w-0">
            <Link
              href={`/events/${event.slug}`}
              className="block group-hover:text-[#A78BFA] transition-colors"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug truncate">
                {event.title}
              </h3>
            </Link>

            <p className="text-xs text-[#94A3B8] mt-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#6C63FF] shrink-0" />
              <span>{event.time}</span>
            </p>

            <p className="text-xs text-[#94A3B8] mt-1 flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#6C63FF] shrink-0" />
              <span className="truncate">{event.location}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-5 pt-4 border-t border-[#1E293B]/60 flex items-center gap-3">
          <Button
            onClick={() => setModalOpen(true)}
            variant="primary"
            size="sm"
            className="text-[11px] sm:text-xs font-bold tracking-wider uppercase px-4 py-2 flex-1"
          >
            REGISTER NOW
          </Button>

          <Button
            href={`/events/${event.slug}`}
            variant="secondary"
            size="sm"
            className="text-[11px] sm:text-xs tracking-wider uppercase px-3 py-2"
          >
            DETAILS
          </Button>
        </div>
      </div>

      {/* Interactive Registration Modal */}
      <RegistrationModal
        event={event}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
