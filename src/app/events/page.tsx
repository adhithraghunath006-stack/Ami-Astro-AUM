'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { EVENTS_DATA } from '@/data/events';
import { GALLERY_DATA } from '@/data/gallery';
import { GalleryCategory } from '@/types';
import EventCard from '@/components/events/EventCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

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
              EXPLORE THE CALENDAR
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Upcoming Events
            </h1>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Join us for exciting events and explore the cosmos together. Hands-on observations, guest scientific talks, and mountain astrocamps.
            </p>
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
    </div>
  );
}
