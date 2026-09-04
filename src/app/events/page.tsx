'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Eye, X } from 'lucide-react';
import { EVENTS_DATA } from '@/data/events';
import { GALLERY_DATA } from '@/data/gallery';
import { GalleryCategory } from '@/types';
import EventCard from '@/components/events/EventCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [showPosterModal, setShowPosterModal] = useState(false);

  const categories: { label: string; value: GalleryCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Events', value: 'events' },
    { label: 'Stargazing', value: 'stargazing' },
    { label: 'Workshops', value: 'workshops' },
    { label: 'Trips', value: 'trips' },
  ];

  const filteredGallery =
    activeCategory === 'all'
      ? GALLERY_DATA.slice(0, 6)
      : GALLERY_DATA.filter((item) => item.category === activeCategory).slice(0, 6);

  return (
    <div className="py-10 lg:py-16 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: 'HOME', href: '/' },
              { label: 'EVENTS', href: '/events' },
            ]}
          />
        </div>

        {/* Header Hero Section matching Panel 2 */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 mb-16 border border-[#1E293B] shadow-[0_0_50px_rgba(108,99,255,0.15)] bg-gradient-to-r from-[#12182B] via-[#0E1424] to-[#0B0F19]">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/images/about-stargazers.jpg"
              alt="Night sky starry background"
              fill
              priority
              className="object-cover object-right"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase block mb-3">
              SEPTEMBER 2026 • CELESTIAL CALENDAR
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Astronomical Events Calendar
            </h1>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
              Plan your nights. Look up. Be amazed. Here are the key astronomical events in September 2026 — planetary conjunctions, greatest elongation, equinox alignment, and dark-sky expeditions.
            </p>
            <button
              onClick={() => setShowPosterModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#6C63FF]/20 hover:bg-[#6C63FF]/30 border border-[#6C63FF]/40 text-xs font-bold tracking-wider text-[#A78BFA] hover:text-white uppercase transition-all shadow-[0_0_20px_rgba(108,99,255,0.2)]"
            >
              <Eye className="w-4 h-4" />
              <span>View Official Poster</span>
            </button>
          </div>
        </div>

        {/* Upcoming Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {EVENTS_DATA.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Moments with the Cosmos Section matching Panel 2 */}
        <div className="pt-12 border-t border-[#1E293B]">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase block mb-2">
                ASTRO GALLERY HIGHLIGHTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Moments with the Cosmos
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#12182B] border border-[#1E293B] rounded-xl overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    activeCategory === cat.value
                      ? 'bg-[#6C63FF] text-white shadow-[0_0_12px_rgba(108,99,255,0.4)]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="cosmic-card rounded-2xl overflow-hidden group hover:border-[#6C63FF] transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#12182B]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#0B0F19]/80 backdrop-blur-md text-[#A78BFA] border border-[#1E293B]">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-white group-hover:text-[#A78BFA] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Gallery Link Button */}
          <div className="flex justify-center">
            <Button
              href="/gallery"
              variant="outline"
              size="md"
              className="uppercase tracking-widest text-xs font-bold py-3 px-8"
              iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              VIEW FULL GALLERY
            </Button>
          </div>
        </div>
      </div>

      {/* Official September 2026 Calendar Poster Modal */}
      {showPosterModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={() => setShowPosterModal(false)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />
          <div className="relative z-10 max-w-4xl w-full bg-[#0E1424] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#1E293B] mb-3">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#A78BFA] uppercase block">
                  AMI ASTRO CLUB • OFFICIAL RELEASE
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  September 2026 Astronomical Events Calendar
                </h3>
              </div>
              <button
                onClick={() => setShowPosterModal(false)}
                aria-label="Close poster preview"
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#12182B] border border-[#1E293B] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-[1024/718] w-full rounded-xl overflow-hidden border border-[#1E293B] bg-black">
              <Image
                src="/images/events/september-2026-calendar.jpg"
                alt="AMI Astro Club September 2026 Astronomical Events Calendar"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
            <div className="pt-3 text-center">
              <p className="text-xs text-[#94A3B8] italic">
                &ldquo;Stay curious. Keep looking up!&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
