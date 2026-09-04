'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import SolarCoronaPulse from './SolarCoronaPulse';
import StarfieldDriftCanvas from './StarfieldDriftCanvas';
import OrbitLightTraces from './OrbitLightTraces';
import ShootingStars from './ShootingStars';
import { usePrefersReducedMotion } from '@/components/3d/hooks/usePrefersReducedMotion';

/**
 * LivingCosmos (Lag-Free Edition)
 * - Zero React re-renders: Parallax mutates GPU layer transforms directly on DOM nodes.
 * - Convergence sleep: RAF loop stops entirely when the mouse stops moving.
 * - IntersectionObserver: Pauses all parallax calculation when scrolled out of view.
 * - Hardware compositing: All layers have will-change: transform and translateZ(0).
 */
export default function LivingCosmos({
  imageSrc = '/images/temp/hero-solar-system-panoramic.jpg',
}: {
  imageSrc?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Direct DOM layer refs (eliminates 60-120 React re-renders per second)
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const coronaLayerRef = useRef<HTMLDivElement>(null);
  const orbitLayerRef = useRef<HTMLDivElement>(null);
  const starfieldLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let animId: number | null = null;
    let isLooping = false;
    let isVisible = true;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const applyTransforms = (x: number, y: number) => {
      if (bgLayerRef.current) {
        bgLayerRef.current.style.transform = `translate3d(${x * -10}px, ${y * -7}px, 0) scale(1.04)`;
      }
      if (coronaLayerRef.current) {
        coronaLayerRef.current.style.transform = `translate3d(${x * -16}px, ${y * -12}px, 0)`;
      }
      if (orbitLayerRef.current) {
        orbitLayerRef.current.style.transform = `translate3d(${x * -13}px, ${y * -9}px, 0)`;
      }
      if (starfieldLayerRef.current) {
        starfieldLayerRef.current.style.transform = `translate3d(${x * -20}px, ${y * -15}px, 0)`;
      }
    };

    const updateLoop = () => {
      if (!isVisible) {
        isLooping = false;
        animId = null;
        return;
      }

      // Smooth exponential damping (lerp)
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      applyTransforms(currentX, currentY);

      // Check convergence: if difference is negligible, sleep to save 100% CPU/GPU
      const diffX = Math.abs(targetX - currentX);
      const diffY = Math.abs(targetY - currentY);

      if (diffX < 0.0008 && diffY < 0.0008) {
        applyTransforms(targetX, targetY);
        currentX = targetX;
        currentY = targetY;
        isLooping = false;
        animId = null;
        return;
      }

      animId = requestAnimationFrame(updateLoop);
    };

    const startLoopIfNeeded = () => {
      if (!isLooping && isVisible) {
        isLooping = true;
        animId = requestAnimationFrame(updateLoop);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      startLoopIfNeeded();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Viewport IntersectionObserver to pause entirely when scrolled away
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startLoopIfNeeded();
        } else {
          if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
          }
          isLooping = false;
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full overflow-hidden select-none bg-[#080B14]"
    >
      {/* 1. Deep Space Base Background Layer with Hardware Acceleration */}
      <div
        ref={bgLayerRef}
        className={`absolute -inset-6 sm:-inset-10 will-change-transform ${
          prefersReducedMotion ? '' : 'animate-cosmic-breathing'
        }`}
        style={{ transform: 'translate3d(0, 0, 0) scale(1.04)' }}
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

      {/* 2. Living Solar Corona & Coronal Flare Layer */}
      <div
        ref={coronaLayerRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <SolarCoronaPulse sunX="65.2%" sunY="43.2%" />
      </div>

      {/* 3. Flowing Orbital Light Pulses */}
      <div
        ref={orbitLayerRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <OrbitLightTraces reducedMotion={prefersReducedMotion} />
      </div>

      {/* 4. Twinkling Starfield & Cosmic Dust Layer */}
      <div
        ref={starfieldLayerRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <StarfieldDriftCanvas reducedMotion={prefersReducedMotion} />
      </div>

      {/* 5. Shooting Stars / Meteor Streaks */}
      <ShootingStars reducedMotion={prefersReducedMotion} />

      {/* 6. Atmospheric Nebula Bloom (Soft Violet & Cyan Light Spill) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35 mix-blend-screen will-change-transform"
        style={{
          background:
            'radial-gradient(ellipse at 65% 43%, rgba(245,158,11,0.2) 0%, rgba(99,102,241,0.1) 45%, transparent 70%)',
        }}
      />
    </div>
  );
}

