'use client';

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Share2, Users } from 'lucide-react';
import { EventItem } from '@/types';
import Button from '@/components/ui/Button';
import RegistrationModal from '@/components/events/RegistrationModal';

interface EventDetailsClientProps {
  event: EventItem;
}

export default function EventDetailsClient({ event }: EventDetailsClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <div className="sticky top-28 cosmic-card rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#A78BFA] uppercase block mb-1">
            SESSION DETAILS
          </span>
          <h2 className="text-xl font-bold text-white leading-snug">
            Reserve Your Telescope Station
          </h2>
        </div>

        {/* Info Rows matching reference mockup */}
        <div className="space-y-4 pt-2 pb-2 border-y border-[#1E293B]">
          <div className="flex items-start gap-3 text-xs sm:text-sm">
            <div className="w-8 h-8 rounded-lg bg-[#12182B] border border-[#1E293B] flex items-center justify-center text-[#6C63FF] shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[#64748B] text-[11px] block">Date</span>
              <span className="text-white font-semibold">{event.fullDateString}</span>
            </div>
          </div>

          <div className="flex items-start gap-3 text-xs sm:text-sm">
            <div className="w-8 h-8 rounded-lg bg-[#12182B] border border-[#1E293B] flex items-center justify-center text-[#6C63FF] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[#64748B] text-[11px] block">Timing</span>
              <span className="text-white font-semibold">{event.time}</span>
            </div>
          </div>

          <div className="flex items-start gap-3 text-xs sm:text-sm">
            <div className="w-8 h-8 rounded-lg bg-[#12182B] border border-[#1E293B] flex items-center justify-center text-[#6C63FF] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[#64748B] text-[11px] block">Venue</span>
              <span className="text-white font-semibold">{event.location}</span>
            </div>
          </div>

          {event.contactPerson && (
            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <div className="w-8 h-8 rounded-lg bg-[#12182B] border border-[#1E293B] flex items-center justify-center text-[#6C63FF] shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#64748B] text-[11px] block">Event Lead</span>
                <span className="text-white font-semibold">{event.contactPerson.name}</span>
                <span className="text-[11px] text-[#A78BFA] block">{event.contactPerson.role}</span>
              </div>
            </div>
          )}
        </div>

        {/* Snippet from reference */}
        <p className="text-xs text-[#94A3B8] leading-relaxed italic">
          &ldquo;{event.shortDesc}&rdquo;
        </p>

        {/* Register CTA Button matching reference */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={() => setModalOpen(true)}
            variant="primary"
            size="lg"
            fullWidth
            className="text-xs font-bold uppercase tracking-wider py-3.5"
            iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            REGISTER NOW
          </Button>

          <button
            onClick={handleShare}
            type="button"
            className="w-full py-2.5 px-4 rounded-lg bg-[#12182B] border border-[#1E293B] hover:border-[#6C63FF] text-xs font-semibold text-[#94A3B8] hover:text-white flex items-center justify-center gap-2 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>{copied ? 'Link Copied to Clipboard!' : 'Share Event with Peers'}</span>
          </button>
        </div>

        {/* Demo Notice */}
        <div className="text-[11px] text-[#64748B] text-center pt-2">
          Phase 1 Prototype: Registrations operate locally in simulated mode.
        </div>
      </div>

      <RegistrationModal
        event={event}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
