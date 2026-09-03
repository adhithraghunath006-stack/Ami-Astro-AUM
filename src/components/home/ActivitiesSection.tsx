import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Telescope, Camera, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { ACTIVITIES_DATA } from '@/data/activities';

const iconMap = {
  Sparkles: Sparkles,
  Telescope: Telescope,
  Camera: Camera,
  BookOpen: BookOpen,
  Compass: Compass,
};

export default function ActivitiesSection() {
  return (
    <section
      aria-label="What We Do - Activities"
      className="py-20 lg:py-28 bg-[#080C16] relative border-t border-[#1E293B]/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#6C63FF]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase">
              WHAT WE DO
            </span>
            <span className="w-5 h-px bg-[#6C63FF]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Our Activities
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl">
            From hands-on telescope collimation to all-night dark sky expeditions across the Western Ghats.
          </p>
        </div>

        {/* 5 Activities Grid (1 col on mobile, 2 on tablet, 5 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {ACTIVITIES_DATA.map((activity) => {
            const IconComponent = iconMap[activity.iconName] || Sparkles;

            return (
              <div
                key={activity.id}
                className="cosmic-card rounded-2xl overflow-hidden flex flex-col group hover:border-[#6C63FF] hover:shadow-[0_0_25px_rgba(108,99,255,0.25)] transition-all duration-300"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#12182B]">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12182B] via-transparent to-transparent" />
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#6C63FF]/15 border border-[#6C63FF]/30 flex items-center justify-center text-[#A78BFA] shrink-0 group-hover:bg-[#6C63FF] group-hover:text-white transition-colors">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#A78BFA] transition-colors leading-snug">
                      {activity.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 flex-1">
                    {activity.description}
                  </p>

                  <div className="pt-2 border-t border-[#1E293B]/60 flex items-center justify-between">
                    <Link
                      href="/events"
                      className="text-xs font-semibold text-[#A78BFA] group-hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
