import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  MapPin,
  Telescope,
  MessageCircle,
  HelpCircle,
  Users,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';
import { EVENTS_DATA } from '@/data/events';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EventDetailsClient from './EventDetailsClient';

interface EventPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return EVENTS_DATA.map((event) => ({
    id: event.slug,
  }));
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const resolvedParams = await params;
  const event = EVENTS_DATA.find(
    (e) => e.slug === resolvedParams.id || e.id === resolvedParams.id
  );

  if (!event) {
    notFound();
  }

  const highlightIcons = [Telescope, MessageCircle, HelpCircle, Users];

  return (
    <div className="py-10 lg:py-16 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb matching mockup Panel 4 */}
        <div className="mb-6 flex items-center justify-between">
          <Breadcrumbs
            items={[
              { label: 'HOME', href: '/' },
              { label: 'EVENTS', href: '/events' },
              { label: event.title.toUpperCase() },
            ]}
          />
          <Link
            href="/events"
            className="text-xs text-[#94A3B8] hover:text-white inline-flex items-center gap-1 font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Events</span>
          </Link>
        </div>

        {/* Hero Visual Banner matching Panel 4 */}
        <div className="relative aspect-[21/9] min-h-[260px] sm:min-h-[380px] w-full rounded-3xl overflow-hidden border border-[#1E293B] shadow-[0_0_50px_rgba(108,99,255,0.2)] mb-10">
          <Image
            src={event.bannerImage}
            alt={event.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 sm:left-10 z-10 max-w-xl">
            <span className="text-xs font-bold tracking-widest text-[#A78BFA] uppercase bg-[#0B0F19]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#1E293B] inline-block mb-3">
              {event.category}
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {event.title}
            </h1>
          </div>
        </div>

        {/* 2-Column Content Grid: Main Body + Floating Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: About & Schedule (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* About the Event matching Panel 4 */}
            <div className="cosmic-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                About the Event
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                {event.fullDesc}
              </p>

              {/* Event Highlights with 4 icons */}
              <h3 className="text-xs font-bold tracking-widest text-[#A78BFA] uppercase mb-4">
                EVENT HIGHLIGHTS
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {event.highlights.map((highlight, idx) => {
                  const Icon = highlightIcons[idx % highlightIcons.length];
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center p-3.5 rounded-xl bg-[#0B0F19] border border-[#1E293B]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#6C63FF]/20 border border-[#6C63FF]/40 flex items-center justify-center text-[#A78BFA] mb-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white leading-snug">
                        {highlight}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Schedule Timeline */}
            <div className="cosmic-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Event Schedule & Timeline
              </h2>
              <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1E293B]">
                {event.schedule.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 relative pl-8">
                    <span className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#6C63FF] ring-4 ring-[#0B0F19]" />
                    <div>
                      <span className="text-xs font-bold text-[#A78BFA] tracking-wider block">
                        {item.time}
                      </span>
                      <p className="text-xs sm:text-sm text-[#E2E8F0] mt-0.5">
                        {item.activity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            {event.prerequisites && (
              <div className="cosmic-card rounded-2xl p-6 sm:p-8">
                <h2 className="text-lg font-bold text-white mb-4">
                  Prerequisites & What to Bring
                </h2>
                <ul className="space-y-2.5">
                  {event.prerequisites.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                      <CheckCircle2 className="w-4 h-4 text-[#6C63FF] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Floating Info Box matching Panel 4 (5 cols) */}
          <div className="lg:col-span-5">
            <EventDetailsClient event={event} />
          </div>
        </div>
      </div>
    </div>
  );
}
