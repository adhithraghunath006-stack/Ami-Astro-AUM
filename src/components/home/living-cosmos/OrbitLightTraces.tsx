'use client';

import React from 'react';

/**
 * OrbitLightTraces (Lag-Free Edition)
 * Overlays illuminated starlight energy pulses that flow continuously
 * along the elliptical planetary orbital planes centered over the Sun.
 * Uses 100% GPU hardware vector strokes without CPU SVG filter degradation.
 */
export default function OrbitLightTraces({
  reducedMotion = false,
}: {
  reducedMotion?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-10 overflow-hidden will-change-transform"
    >
      <svg
        viewBox="0 0 1400 800"
        className="w-full h-full preserve-3d"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Glowing starlight pulse gradients */}
          <linearGradient id="orbit-glow-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FDE047" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="orbit-glow-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#818CF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Tilted Elliptical Orbits Group centered around the Sun (cx=912, cy=345) */}
        <g
          transform="rotate(-21 912 345)"
          className={reducedMotion ? '' : 'animate-subtle-orbit-float will-change-transform'}
          style={{ transformOrigin: '912px 345px' }}
        >
          {/* 1. Subtle Static Reference Tracks (faint astronomical orbital traces) */}
          <ellipse cx="912" cy="345" rx="180" ry="96" fill="none" stroke="#F59E0B" strokeWidth="0.6" strokeOpacity="0.12" />
          <ellipse cx="912" cy="345" rx="270" ry="142" fill="none" stroke="#F59E0B" strokeWidth="0.6" strokeOpacity="0.12" />
          <ellipse cx="912" cy="345" rx="380" ry="198" fill="none" stroke="#60A5FA" strokeWidth="0.6" strokeOpacity="0.12" />
          <ellipse cx="912" cy="345" rx="500" ry="260" fill="none" stroke="#F59E0B" strokeWidth="0.7" strokeOpacity="0.12" />
          <ellipse cx="912" cy="345" rx="660" ry="345" fill="none" stroke="#F59E0B" strokeWidth="0.8" strokeOpacity="0.12" />
          <ellipse cx="912" cy="345" rx="820" ry="430" fill="none" stroke="#60A5FA" strokeWidth="0.9" strokeOpacity="0.12" />

          {/* 2. Flowing Starlight Energy Pulses (Hardware Animated Stroke Dash) */}
          {/* Inner Orbit 1 */}
          <ellipse
            cx="912"
            cy="345"
            rx="180"
            ry="96"
            fill="none"
            stroke="url(#orbit-glow-gold)"
            strokeWidth="1.4"
            strokeDasharray="18 180"
            strokeLinecap="round"
            className={reducedMotion ? '' : 'animate-orbit-pulse-fast'}
          />

          {/* Orbit 2 */}
          <ellipse
            cx="912"
            cy="345"
            rx="270"
            ry="142"
            fill="none"
            stroke="url(#orbit-glow-gold)"
            strokeWidth="1.6"
            strokeDasharray="26 260"
            strokeLinecap="round"
            className={reducedMotion ? '' : 'animate-orbit-pulse-medium'}
          />

          {/* Earth Orbit 3 */}
          <ellipse
            cx="912"
            cy="345"
            rx="380"
            ry="198"
            fill="none"
            stroke="url(#orbit-glow-blue)"
            strokeWidth="1.8"
            strokeDasharray="34 350"
            strokeLinecap="round"
            className={reducedMotion ? '' : 'animate-orbit-pulse-slow'}
          />

          {/* Mars Orbit 4 */}
          <ellipse
            cx="912"
            cy="345"
            rx="500"
            ry="260"
            fill="none"
            stroke="url(#orbit-glow-gold)"
            strokeWidth="1.8"
            strokeDasharray="44 460"
            strokeLinecap="round"
            className={reducedMotion ? '' : 'animate-orbit-pulse-medium'}
          />

          {/* Jupiter Orbit 5 */}
          <ellipse
            cx="912"
            cy="345"
            rx="660"
            ry="345"
            fill="none"
            stroke="url(#orbit-glow-gold)"
            strokeWidth="2.0"
            strokeDasharray="54 620"
            strokeLinecap="round"
            className={reducedMotion ? '' : 'animate-orbit-pulse-slow'}
          />

          {/* Saturn Orbit 6 */}
          <ellipse
            cx="912"
            cy="345"
            rx="820"
            ry="430"
            fill="none"
            stroke="url(#orbit-glow-blue)"
            strokeWidth="2.2"
            strokeDasharray="64 780"
            strokeLinecap="round"
            className={reducedMotion ? '' : 'animate-orbit-pulse-ultra-slow'}
          />
        </g>
      </svg>
    </div>
  );
}

