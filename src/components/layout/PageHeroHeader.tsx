'use client';

import React from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface PageHeroHeaderProps {
  breadcrumbs: { label: string; href?: string }[];
  eyebrow?: string;
  title: string;
  description: string;
  badge?: string;
  action?: React.ReactNode;
}

/**
 * PageHeroHeader
 * Reusable, cinematic cosmic header for all subpages.
 * Provides unified visual continuity with the landing page.
 */
export default function PageHeroHeader({
  breadcrumbs,
  eyebrow,
  title,
  description,
  badge,
  action,
}: PageHeroHeaderProps) {
  return (
    <div className="relative pt-6 pb-12 sm:pb-16 border-b border-[#1E293B]/60 overflow-hidden mb-12 lg:mb-16">
      {/* Background Cosmic Atmosphere & Subtle Nebula Lighting */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none -z-10 select-none overflow-hidden"
      >
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[340px] opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(108,99,255,0.3) 0%, rgba(56,189,248,0.12) 40%, transparent 70%)',
          }}
        />
        <div className="absolute inset-0 stars-bg opacity-30" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            {/* Eyebrow or Category Badge */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-5 h-px bg-[#6C63FF]" />
              {badge ? (
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase px-2.5 py-0.5 rounded bg-[#6C63FF]/15 text-[#A78BFA] border border-[#6C63FF]/30">
                  {badge}
                </span>
              ) : eyebrow ? (
                <span className="text-xs font-bold tracking-[0.25em] text-[#A78BFA] uppercase">
                  {eyebrow}
                </span>
              ) : null}
            </div>

            {/* Display Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              {title}
            </h1>

            {/* Subtitle / Tagline */}
            <p className="text-sm sm:text-base lg:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              {description}
            </p>
          </div>

          {/* Optional Action / Search / Filters */}
          {action && <div className="shrink-0">{action}</div>}
        </div>
      </div>
    </div>
  );
}
