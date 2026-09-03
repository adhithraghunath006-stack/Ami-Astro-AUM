import React from 'react';
import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, DiscordIcon } from '@/components/ui/SocialIcons';
import { CLUB_INFO } from '@/data/clubInfo';
import Button from '@/components/ui/Button';
import HeroVisual from './HeroVisual';

export default function HeroSection() {
  return (
    <section
      aria-label="Hero Introduction"
      className="relative min-h-[calc(92vh-5rem)] flex items-center justify-center overflow-hidden stars-bg bg-[#0B0F19]"
    >
      {/* Ambient background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#6C63FF]/10 via-[#1E1B4B]/20 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B0F19] to-transparent" />
      </div>

      {/* Main Content Container with 2-Column Desktop Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Text & CTA Hierarchy (5 cols on lg, 5 on xl) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left">
            {/* Tracked Eyebrow matching reference */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-5 sm:w-6 h-px bg-[#6C63FF]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#A78BFA] uppercase">
                {CLUB_INFO.heroEyebrow}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-5 sm:mb-6 leading-[1.08]">
              Explore{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#6C63FF] drop-shadow-[0_0_30px_rgba(108,99,255,0.45)]">
                Further.
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-sm sm:text-base lg:text-lg text-[#94A3B8] leading-relaxed mb-8 sm:mb-10 max-w-xl font-normal">
              {CLUB_INFO.heroTagline}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
              <Button
                href="/about"
                variant="primary"
                size="lg"
                className="text-xs sm:text-sm tracking-wider uppercase font-bold py-3.5 px-7"
                iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                EXPLORE THE CLUB
              </Button>

              <Button
                href="/events"
                variant="secondary"
                size="lg"
                className="text-xs sm:text-sm tracking-wider uppercase font-bold py-3.5 px-7"
              >
                UPCOMING EVENTS
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Visual Focal Point - Phase 2 R3F Mount (7 cols on lg/xl) */}
          <div className="lg:col-span-6 xl:col-span-7 flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator (Bottom Left) */}
      <div className="absolute bottom-6 left-6 sm:left-12 z-10 hidden sm:flex items-center gap-2.5 text-[11px] font-semibold tracking-widest uppercase text-[#94A3B8]/80 hover:text-white transition-colors select-none">
        <span className="w-2 h-2 rounded-full bg-[#6C63FF] animate-ping" />
        <span className="w-2 h-2 rounded-full bg-[#6C63FF] -ml-4.5" />
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#A78BFA]" />
      </div>

      {/* Floating Right Social Links (Vertical rail, matching reference) */}
      <div className="hidden xl:flex flex-col items-center gap-4 absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#1E293B]" />
        <a
          href={CLUB_INFO.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-9 h-9 rounded-full bg-[#12182B]/80 border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all hover:scale-110"
        >
          <InstagramIcon size={16} />
        </a>
        <a
          href={CLUB_INFO.socials.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="w-9 h-9 rounded-full bg-[#12182B]/80 border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all hover:scale-110"
        >
          <YoutubeIcon size={16} />
        </a>
        <a
          href={CLUB_INFO.socials.discord}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          className="w-9 h-9 rounded-full bg-[#12182B]/80 border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all hover:scale-110"
        >
          <DiscordIcon size={16} />
        </a>
        <a
          href={CLUB_INFO.socials.email}
          aria-label="Email"
          className="w-9 h-9 rounded-full bg-[#12182B]/80 border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all hover:scale-110"
        >
          <Mail className="w-4 h-4" />
        </a>
        <div className="w-px h-12 bg-gradient-to-b from-[#1E293B] to-transparent" />
      </div>
    </section>
  );
}
