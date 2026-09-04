'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, DiscordIcon } from '@/components/ui/SocialIcons';
import { CLUB_INFO } from '@/data/clubInfo';
import Button from '@/components/ui/Button';
import LivingCosmos from './living-cosmos/LivingCosmos';

export default function HeroSection() {
  return (
    <section
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden bg-[#080B14]"
    >
      {/* 1. Living Cosmos Layer (Stable Photorealistic Artwork + Continuous Motion) */}
      <LivingCosmos imageSrc="/images/temp/hero-solar-system-panoramic.jpg" />

      {/* 2. Soft Vignette on Left: Guarantees 100% text readability without hiding stars */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#080B14]/90 via-[#080B14]/50 to-transparent pointer-events-none z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080B14]/80 to-transparent pointer-events-none z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent pointer-events-none z-10"
      />

      {/* 3. Hero Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-16 sm:py-24 lg:py-28 pointer-events-none">
        <div className="max-w-2xl text-left pointer-events-auto">
          {/* Tracked Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-5 sm:w-6 h-px bg-[#6C63FF]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#A78BFA] uppercase">
              {CLUB_INFO.heroEyebrow}
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-5 sm:mb-6 leading-[1.06]">
            Explore{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#6C63FF] drop-shadow-[0_0_35px_rgba(108,99,255,0.45)]">
              Further.
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-sm sm:text-base lg:text-lg text-[#E2E8F0] leading-relaxed mb-8 sm:mb-10 max-w-xl font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {CLUB_INFO.heroTagline}
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
            <Button
              href="/about"
              variant="primary"
              size="lg"
              className="text-xs sm:text-sm tracking-wider uppercase font-bold py-3.5 px-7 shadow-[0_0_25px_rgba(108,99,255,0.4)]"
              iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              EXPLORE THE CLUB
            </Button>

            <Button
              href="/events"
              variant="secondary"
              size="lg"
              className="text-xs sm:text-sm tracking-wider uppercase font-bold py-3.5 px-7 bg-[#0B0F19]/80 backdrop-blur-md hover:bg-[#12182B]"
            >
              UPCOMING EVENTS
            </Button>
          </div>
        </div>
      </div>

      {/* 4. Floating Scroll Indicator (Bottom Left) */}
      <div className="absolute bottom-6 left-6 sm:left-12 z-20 hidden sm:flex items-center gap-2.5 text-[11px] font-semibold tracking-widest uppercase text-[#94A3B8] hover:text-white transition-colors select-none">
        <span className="w-2 h-2 rounded-full bg-[#6C63FF] animate-ping" />
        <span className="w-2 h-2 rounded-full bg-[#6C63FF] -ml-4.5" />
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#A78BFA]" />
      </div>

      {/* 5. Floating Right Social Rail (Matching reference) */}
      <div className="hidden xl:flex flex-col items-center gap-4 absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#1E293B]" />
        <a
          href={CLUB_INFO.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-9 h-9 rounded-full bg-[#12182B]/80 backdrop-blur-md border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
        >
          <InstagramIcon size={16} />
        </a>
        <a
          href={CLUB_INFO.socials.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="w-9 h-9 rounded-full bg-[#12182B]/80 backdrop-blur-md border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
        >
          <YoutubeIcon size={16} />
        </a>
        <a
          href={CLUB_INFO.socials.discord}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          className="w-9 h-9 rounded-full bg-[#12182B]/80 backdrop-blur-md border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
        >
          <DiscordIcon size={16} />
        </a>
        <a
          href={CLUB_INFO.socials.email}
          aria-label="Email"
          className="w-9 h-9 rounded-full bg-[#12182B]/80 backdrop-blur-md border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
        >
          <Mail className="w-4 h-4" />
        </a>
        <div className="w-px h-12 bg-gradient-to-b from-[#1E293B] to-transparent" />
      </div>
    </section>
  );
}
