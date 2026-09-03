import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { CLUB_INFO } from '@/data/clubInfo';
import Button from '@/components/ui/Button';

export default function AboutSection() {
  return (
    <section
      aria-label="About AMI-ASTRO Preview"
      className="py-20 lg:py-28 bg-[#0B0F19] relative overflow-hidden border-t border-[#1E293B]/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#6C63FF]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase">
                {CLUB_INFO.aboutEyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              {CLUB_INFO.aboutTitle}
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
              {CLUB_INFO.aboutParagraph}
            </p>

            <div>
              <Button
                href="/about"
                variant="primary"
                size="md"
                className="text-xs sm:text-sm tracking-wider uppercase font-bold py-3 px-6 rounded-lg"
                iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                KNOW MORE ABOUT US
              </Button>
            </div>
          </div>

          {/* Right Image Feature Column (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#1E293B] shadow-[0_0_40px_rgba(108,99,255,0.15)] group">
              <Image
                src="/images/temp/about-silhouette.svg"
                alt="Stargazers with telescope observing starry night sky"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#94A3B8] bg-[#12182B]/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#1E293B]">
                <span className="text-white font-medium">Amity Hills Stargazing Night</span>
                <span className="text-[#A78BFA] text-[11px] font-semibold tracking-wider uppercase">
                  Community Session
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards Row (matching reference) */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CLUB_INFO.stats.map((stat, index) => (
            <div
              key={index}
              className="cosmic-card rounded-xl p-6 sm:p-8 flex flex-col items-center text-center group hover:border-[#6C63FF]/50 transition-all duration-300"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-[#A78BFA] transition-colors">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#94A3B8] tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
