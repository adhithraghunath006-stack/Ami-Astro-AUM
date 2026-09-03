'use client';

import React from 'react';

/**
 * OrbitLightTraces
 * Overlays subtle illuminated starlight energy pulses that flow continuously
 * along the elliptical planetary orbital planes centered over the Sun.
 */
export default function OrbitLightTraces({
  reducedMotion = false,
}: {
  reducedMotion?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-10 overflow-hidden"
    >
      <svg
        viewBox="0 0 1400 800"
        className="w-full h-full preserve-3d"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Glowing starlight pulse gradients */}
          <linearGradient id="orbit-glow-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FDE047" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="orbit-glow-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#818CF8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
          </linearGradient>

          <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Tilted Elliptical Orbits Group centered around the Sun (cx=912, cy=345) */}
        <g
          transform="rotate(-21 912 345)"
          className={reducedMotion ? '' : 'animate-subtle-orbit-float'}
          style={{ transformOrigin: '912px 345px' }}
        >
          {/* Inner Terrestrial Orbit 1 */}
          <ellipse
            cx="912"
            cy="345"
            rx="180"
            ry="96"
            fill="none"
            stroke="url(#orbit-glow-gold)"
            strokeWidth="1.2"
            strokeDasharray="14 180"
            className={reducedMotion ? '' : 'animate-orbit-pulse-fast'}
            filter="url(#glow-filter)"
          />

          {/* Orbit 2 */}
          <ellipse
            cx="912"
            cy="345"
            rx="270"
            ry="142"
            fill="none"
            stroke="url(#orbit-glow-gold)"
            strokeWidth="1.4"
            strokeDasharray="24 260"
            className={reducedMotion ? '' : 'animate-orbit-pulse-medium'}
            filter="url(#glow-filter)"
          />

          {/* Earth Orbit 3 */}
          <ellipse
            cx="912"
            cy="345"
            rx="380"
            ry="198"
            fill="none"
            stroke="url(#orbit-glow-blue)"
            strokeWidth="1.5"
            strokeDasharray="30 350"
            className={reducedMotion ? '' : 'animate-orbit-pulse-slow'}
            filter="url(#glow-filter)"
          />

          {/* Mars Orbit 4 */}
          <ellipse
            cx="912"
            cy="345"
            rx="500"
            ry="260"
            fill="none"
            stroke="url(#orbit-glow-gold)"
            strokeWidth="1.5"
            strokeDasharray="40 460"
            className={reducedMotion ? '' : 'animate-orbit-pulse-medium'}
            filter="url(#glow-filter)"
          />

          {/* Jupiter Orbit 5 */}
          <ellipse
            cx="912"
            cy="345"
            rx="660"
            ry="345"
            fill="none"
            stroke="url(#orbit-glow-gold)"
            strokeWidth="1.8"
            strokeDasharray="50 620"
            className={reducedMotion ? '' : 'animate-orbit-pulse-slow'}
            filter="url(#glow-filter)"
          />

          {/* Saturn Orbit 6 */}
          <ellipse
            cx="912"
            cy="345"
            rx="820"
            ry="430"
            fill="none"
            stroke="url(#orbit-glow-blue)"
            strokeWidth="2"
            strokeDasharray="60 780"
            className={reducedMotion ? '' : 'animate-orbit-pulse-ultra-slow'}
            filter="url(#glow-filter)"
          />
        </g>
      </svg>
    </div>
  );
}
