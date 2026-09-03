'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import the interactive 3D Solar System canvas with SSR disabled
const SolarSystemCanvas = dynamic(
  () => import('@/components/3d/SolarSystemCanvas'),
  {
    ssr: false,
    loading: () => <StaticFallback />,
  }
);

interface HeroVisualProps {
  className?: string;
}

// Reliable static fallback component
function StaticFallback() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/temp/hero-solar-system.jpg"
        alt="Solar system with radiant star and planetary orbits"
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 55vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/80 via-transparent to-[#0B0F19]/60" />
    </div>
  );
}

export default function HeroVisual({ className = '' }: HeroVisualProps) {
  const [mounted, setMounted] = useState(false);
  const [hasWebGLError, setHasWebGLError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      data-testid="hero-visual-container"
      className={`relative w-full max-w-[580px] lg:max-w-[700px] xl:max-w-[760px] aspect-square flex items-center justify-center ${className}`}
    >
      {/* Outer Atmospheric Cosmic Glows */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6C63FF]/20 via-[#A78BFA]/15 to-[#F59E0B]/15 blur-3xl opacity-70 pointer-events-none transform scale-95" />
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-[#F59E0B]/25 blur-2xl opacity-60 pointer-events-none" />

      {/* Main 3D Canvas / Fallback Container */}
      <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1E293B] shadow-[0_0_60px_rgba(108,99,255,0.2)] bg-[#0B0F19]">
        {mounted && !hasWebGLError ? (
          <div className="w-full h-full">
            <SolarSystemCanvas />
          </div>
        ) : (
          <StaticFallback />
        )}

        {/* Soft Vignette Mask to blend seamlessly with #0B0F19 background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/60 via-transparent to-[#0B0F19]/40 pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl sm:rounded-3xl pointer-events-none" />
      </div>
    </div>
  );
}
