'use client';

import React from 'react';

/**
 * ShootingStars
 * Renders occasional luminous meteors streaking across the deep cosmic void.
 */
export default function ShootingStars({
  reducedMotion = false,
}: {
  reducedMotion?: boolean;
}) {
  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-10 overflow-hidden"
    >
      {/* Meteor 1 (Upper Left towards Center) */}
      <span
        className="shooting-star-streak absolute"
        style={{
          top: '12%',
          left: '22%',
          animationDelay: '1.2s',
          animationDuration: '6.5s',
        }}
      />

      {/* Meteor 2 (Upper Right towards Center-Left) */}
      <span
        className="shooting-star-streak absolute"
        style={{
          top: '8%',
          left: '75%',
          animationDelay: '4.8s',
          animationDuration: '8.2s',
        }}
      />

      {/* Meteor 3 (Mid Left) */}
      <span
        className="shooting-star-streak absolute"
        style={{
          top: '32%',
          left: '10%',
          animationDelay: '7.5s',
          animationDuration: '7.0s',
        }}
      />
    </div>
  );
}
