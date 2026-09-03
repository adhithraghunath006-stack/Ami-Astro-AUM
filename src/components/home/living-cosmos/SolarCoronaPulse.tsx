'use client';

import React from 'react';

/**
 * SolarCoronaPulse
 * Centered over the Sun in the panoramic artwork (~65% X, ~43% Y).
 * Renders layered glowing coronas, rotating solar flare rays,
 * and pulsating convective emission using hardware-accelerated CSS.
 */
export default function SolarCoronaPulse({
  sunX = '65.2%',
  sunY = '43.2%',
}: {
  sunX?: string;
  sunY?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none select-none z-10"
      style={{
        left: sunX,
        top: sunY,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* 1. Core Convective Flare Shimmer (Inner Intense Golden Core) */}
      <div
        className="w-36 h-36 sm:w-48 sm:h-48 rounded-full animate-pulse-slow"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(254,240,138,0.7) 25%, rgba(245,158,11,0.5) 60%, transparent 80%)',
          filter: 'blur(6px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 2. Rotating Primary Coronal Rays (Solar Flares) */}
      <div
        className="absolute inset-0 -m-16 sm:-m-24 w-68 h-68 sm:w-96 sm:h-96 rounded-full animate-spin-ultra-slow"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, rgba(251,191,36,0.35) 15deg, transparent 30deg, rgba(245,158,11,0.45) 60deg, transparent 90deg, rgba(253,224,71,0.3) 120deg, transparent 150deg, rgba(249,115,22,0.4) 180deg, transparent 210deg, rgba(251,191,36,0.35) 240deg, transparent 270deg, rgba(245,158,11,0.4) 300deg, transparent 330deg, rgba(253,224,71,0.3) 360deg)',
          filter: 'blur(8px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 3. Counter-Rotating Secondary Solar Rays */}
      <div
        className="absolute inset-0 -m-20 sm:-m-32 w-76 h-76 sm:w-[420px] sm:h-[420px] rounded-full animate-reverse-spin-slow"
        style={{
          background:
            'conic-gradient(from 45deg, transparent 0deg, rgba(234,88,12,0.25) 25deg, transparent 50deg, rgba(252,211,77,0.3) 80deg, transparent 110deg, rgba(249,115,22,0.25) 160deg, transparent 200deg, rgba(251,191,36,0.3) 250deg, transparent 290deg, rgba(234,88,12,0.25) 340deg, transparent 360deg)',
          filter: 'blur(12px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 4. Broad Volumetric Sunlight Dispersion (Warm Radiant Halo) */}
      <div
        className="absolute inset-0 -m-36 sm:-m-56 w-[430px] h-[430px] sm:w-[640px] sm:h-[640px] rounded-full animate-solar-breathing"
        style={{
          background:
            'radial-gradient(circle, rgba(245,158,11,0.35) 0%, rgba(217,119,6,0.2) 35%, rgba(147,51,234,0.1) 65%, transparent 80%)',
          filter: 'blur(24px)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
