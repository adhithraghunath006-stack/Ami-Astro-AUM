'use client';

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import RealisticSolarSystem from '@/components/3d/RealisticSolarSystem';
import { usePrefersReducedMotion } from '@/components/3d/hooks/usePrefersReducedMotion';

export default function HeroBackground3D() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    // Graceful fallback to rich cosmic ambient background
    return (
      <div className="absolute inset-0 bg-[#0B0F19] stars-bg pointer-events-none" />
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none z-0">
      <Canvas
        camera={{
          position: [0, 9, 24],
          fov: isMobile ? 55 : 46,
        }}
        dpr={isMobile ? [1, 1.2] : [1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0B0F19', 0);
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <RealisticSolarSystem
          reducedMotion={prefersReducedMotion}
          isMobile={isMobile}
        />
      </Canvas>
    </div>
  );
}
