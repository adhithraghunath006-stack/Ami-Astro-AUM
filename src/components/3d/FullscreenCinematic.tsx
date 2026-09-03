'use client';

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useDeviceTier } from './hooks/useDeviceTier';
import SkipButton from './SkipButton';
import CinematicScene from './scene/CinematicScene';

interface FullscreenCinematicProps {
  onComplete: () => void;
  onFallback: () => void;
}

export default function FullscreenCinematic({
  onComplete,
  onFallback,
}: FullscreenCinematicProps) {
  const { particleCount, dpr, fov } = useDeviceTier();
  const [isSkipped, setIsSkipped] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleSkip = () => {
    setIsSkipped(true);
    triggerCompletion();
  };

  const triggerCompletion = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  // Keyboard shortcut: Escape skips intro
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      role="region"
      aria-label="Cosmic Opening Cinematic"
      className={`fixed inset-0 z-50 bg-[#0B0F19] transition-opacity duration-700 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Accessible Skip Button */}
      <SkipButton onClick={handleSkip} />

      {/* R3F WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 0, 48], fov }}
        dpr={dpr}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0B0F19');
        }}
        onError={() => {
          onFallback();
        }}
        className="w-full h-full"
      >
        <CinematicScene
          particleCount={particleCount}
          onSequenceComplete={triggerCompletion}
          isSkipped={isSkipped}
        />
      </Canvas>
    </div>
  );
}
