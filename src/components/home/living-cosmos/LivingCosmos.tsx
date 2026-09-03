'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import SolarCoronaPulse from './SolarCoronaPulse';
import StarfieldDriftCanvas from './StarfieldDriftCanvas';
import OrbitLightTraces from './OrbitLightTraces';
import ShootingStars from './ShootingStars';
import { usePrefersReducedMotion } from '@/components/3d/hooks/usePrefersReducedMotion';

/**
 * LivingCosmos
 * Master component that renders the stable high-fidelity solar system artwork
 * enriched with continuous living motion:
 * - Dynamic rotating & pulsing solar corona over the Sun
 * - Flowing starlight pulses along orbital rings
 * - Twinkling starfield & floating cosmic dust canvas
 * - Occasional shooting stars
 * - Multi-layer interactive 2.5D depth parallax
 * - Continuous slow cosmic breathing
 */
export default function LivingCosmos({
  imageSrc = '/images/temp/hero-solar-system-panoramic.jpg',
}: {
  imageSrc?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax offsets (interpolated smoothly)
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const targetOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const normY = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
      targetOffset.current = { x: normX, y: normY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animId: number;
    let currentX = 0;
    let currentY = 0;

    const loop = () => {
      // Smooth exponential damping (lerp)
      currentX += (targetOffset.current.x - currentX) * 0.04;
      currentY += (targetOffset.current.y - currentY) * 0.04;

      setOffset({ x: currentX, y: currentY });
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full overflow-hidden select-none bg-[#080B14]"
    >
      {/* 1. Deep Space Base Background Layer with Parallax & Cosmic Breathing */}
      <div
        className={`absolute -inset-6 sm:-inset-10 transition-transform ease-out will-change-transform ${
          prefersReducedMotion ? '' : 'animate-cosmic-breathing'
        }`}
        style={{
          transform: prefersReducedMotion
            ? 'none'
            : `translate3d(${offset.x * -12}px, ${offset.y * -8}px, 0) scale(1.04)`,
        }}
      >
        <Image
          src={imageSrc}
          alt="Photorealistic Living Solar System"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* 2. Living Solar Corona & Coronal Flare Layer (Parallax layer 2) */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          transform: prefersReducedMotion
            ? 'none'
            : `translate3d(${offset.x * -18}px, ${offset.y * -14}px, 0)`,
        }}
      >
        <SolarCoronaPulse sunX="65.2%" sunY="43.2%" />
      </div>

      {/* 3. Flowing Orbital Light Pulses */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          transform: prefersReducedMotion
            ? 'none'
            : `translate3d(${offset.x * -14}px, ${offset.y * -10}px, 0)`,
        }}
      >
        <OrbitLightTraces reducedMotion={prefersReducedMotion} />
      </div>

      {/* 4. Twinkling Starfield & Cosmic Dust Layer (Parallax layer 3) */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          transform: prefersReducedMotion
            ? 'none'
            : `translate3d(${offset.x * -24}px, ${offset.y * -18}px, 0)`,
        }}
      >
        <StarfieldDriftCanvas reducedMotion={prefersReducedMotion} />
      </div>

      {/* 5. Shooting Stars / Meteor Streaks */}
      <ShootingStars reducedMotion={prefersReducedMotion} />

      {/* 6. Atmospheric Nebula Bloom (Soft Violet & Cyan Light Spill) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background:
            'radial-gradient(ellipse at 65% 43%, rgba(245,158,11,0.22) 0%, rgba(99,102,241,0.12) 45%, transparent 70%)',
        }}
      />
    </div>
  );
}
