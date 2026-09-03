'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';

// Dynamic client import of FullscreenCinematic with ssr: false
const FullscreenCinematic = dynamic(
  () => import('./FullscreenCinematic'),
  { ssr: false }
);

interface CinematicExperienceProps {
  children: React.ReactNode;
}

export default function CinematicExperience({
  children,
}: CinematicExperienceProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isPlayingIntro, setIsPlayingIntro] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    // If reduced motion is requested, do not run fullscreen animation
    if (prefersReducedMotion) {
      setIsPlayingIntro(false);
      return;
    }

    // Check if user has already seen the intro during this browser session
    const hasSeen = sessionStorage.getItem('ami_astro_seen_intro_v1');
    if (!hasSeen) {
      setIsPlayingIntro(true);
    }
  }, [prefersReducedMotion]);

  const handleComplete = () => {
    sessionStorage.setItem('ami_astro_seen_intro_v1', 'true');
    setIsPlayingIntro(false);
  };

  const handleFallback = () => {
    // Silent fallback to standard DOM on any WebGL error
    setIsPlayingIntro(false);
  };

  return (
    <>
      {/* Milestone 1: Fullscreen Canvas Cinematic Layer */}
      {hasMounted && isPlayingIntro && (
        <FullscreenCinematic
          onComplete={handleComplete}
          onFallback={handleFallback}
        />
      )}

      {/* Website DOM Structure (Always interactive & preserved) */}
      {children}
    </>
  );
}
