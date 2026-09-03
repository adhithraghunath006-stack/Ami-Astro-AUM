import React from 'react';

export default function HeroLandscapeSilhouette() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none select-none flex flex-col justify-end">
      {/* Soft atmospheric gradient blending into #0B0F19 */}
      <div className="w-full h-32 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />

      {/* Mountain Ridge and Stargazer Silhouette Vector */}
      <div className="w-full relative -mt-16 sm:-mt-24">
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-[#080B14] preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Distant Mountain Range */}
          <path
            d="M0 160 Q 220 120 440 145 T 880 130 T 1240 140 T 1440 150 L 1440 220 L 0 220 Z"
            fill="#0A0E1A"
            opacity="0.75"
          />

          {/* Near Mountain Ridge */}
          <path
            d="M0 185 Q 280 155 580 175 T 980 165 T 1440 180 L 1440 220 L 0 220 Z"
            fill="#060911"
          />

          {/* Lone Stargazer Silhouette standing on the hill at center */}
          <g transform="translate(710, 126) scale(0.9)" fill="#04060B">
            {/* Head */}
            <circle cx="10" cy="5" r="4.5" />
            {/* Neck & Torso */}
            <path d="M5.5 10 C 6 8.5, 14 8.5, 14.5 10 L 16 28 L 4 28 Z" />
            {/* Left Arm */}
            <path d="M5 11 L 2 24 L 4.5 24.5 L 7 13 Z" />
            {/* Right Arm */}
            <path d="M15 11 L 18 24 L 15.5 24.5 L 13 13 Z" />
            {/* Left Leg */}
            <path d="M5 28 L 3.5 46 L 7.5 46.5 L 9.5 28 Z" />
            {/* Right Leg */}
            <path d="M15 28 L 16.5 46 L 12.5 46.5 L 10.5 28 Z" />
          </g>
        </svg>
      </div>

      {/* Solid Bottom Baseline Blending to #0B0F19 */}
      <div className="w-full h-4 bg-[#0B0F19]" />
    </div>
  );
}
