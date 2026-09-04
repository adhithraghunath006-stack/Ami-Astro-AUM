'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Camera, Maximize2 } from 'lucide-react';
import { GALLERY_DATA } from '@/data/gallery';
import { GalleryCategory, GalleryItem } from '@/types';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import LightboxModal from '@/components/gallery/LightboxModal';
import PageHeroHeader from '@/components/layout/PageHeroHeader';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories: { label: string; value: GalleryCategory }[] = [
    { label: 'All Photos', value: 'all' },
    { label: 'Stargazing', value: 'stargazing' },
    { label: 'Events', value: 'events' },
    { label: 'Workshops', value: 'workshops' },
    { label: 'Trips', value: 'trips' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const currentIndex = selectedItem
    ? filteredItems.findIndex((it) => it.id === selectedItem.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    } else if (filteredItems.length > 0) {
      setSelectedItem(filteredItems[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    } else if (filteredItems.length > 0) {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  };

  return (
    <div className="bg-[#0B0F19] text-white min-h-screen">
      {/* Cinematic Page Hero Header */}
      <PageHeroHeader
        breadcrumbs={[
          { label: 'HOME', href: '/' },
          { label: 'GALLERY', href: '/gallery' },
        ]}
        eyebrow="COSMIC VISUAL ARCHIVE"
        title="Gallery & Media"
        description="Photographs captured by AMI-ASTRO members through club telescopes, long-exposure tracking mounts, and mountain observation expeditions across Maharashtra."
        action={
          <div className="flex items-center gap-1.5 p-1.5 bg-[#12182B] border border-[#1E293B] rounded-2xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-[#6C63FF] text-white shadow-[0_0_15px_rgba(108,99,255,0.4)]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        }
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="cosmic-card rounded-2xl overflow-hidden group cursor-pointer hover:border-[#6C63FF] transition-all flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#12182B]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-[#0B0F19]/80 backdrop-blur-md text-[#A78BFA] border border-[#1E293B]">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-[#0B0F19]/80 backdrop-blur-md text-white border border-[#1E293B]">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white group-hover:text-[#A78BFA] transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2 mb-4 flex-1">
                  {item.caption}
                </p>

                <div className="pt-3 border-t border-[#1E293B]/60 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>{item.photographer}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Viewer */}
        <LightboxModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </div>
  );
}
