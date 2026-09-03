'use client';

import React from 'react';

interface CinematicBoundaryProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Phase 2 Architectural Stub:
 * Boundary component reserved for future React Three Fiber + GSAP cinematic sequence.
 * Currently renders standard children / fallback without loading heavy WebGL dependencies.
 */
export default function CinematicBoundary({
  children,
  fallback = null,
}: CinematicBoundaryProps) {
  const is3DEnabled = process.env.NEXT_PUBLIC_ENABLE_3D_CINEMATIC === 'true';

  if (!is3DEnabled) {
    return <>{children || fallback}</>;
  }

  // Future Phase 2: Dynamic import of Canvas, Drei, GSAP Timeline
  return (
    <div
      data-testid="3d-cinematic-boundary"
      className="relative w-full h-full overflow-hidden"
    >
      {/* 3D WebGL Canvas will mount here in Phase 2 */}
      {children}
    </div>
  );
}
