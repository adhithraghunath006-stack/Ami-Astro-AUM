'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import CosmicVoid from './CosmicVoid';
import SingularityCore from './SingularityCore';
import BigBangParticles from './BigBangParticles';

interface CinematicSceneProps {
  particleCount: number;
  onSequenceComplete: () => void;
  isSkipped: boolean;
}

export default function CinematicScene({
  particleCount,
  onSequenceComplete,
  isSkipped,
}: CinematicSceneProps) {
  const { camera } = useThree();

  // Sequence animatable parameters managed by GSAP
  const animState = useRef({
    singularityScale: 0.001,
    singularityOpacity: 0.0,
    flareIntensity: 0.0,
    burstProgress: 0.0,
    burstOpacity: 0.0,
    cameraZ: 45,
  });

  const [renderProps, setRenderProps] = useState({
    singularityScale: 0.001,
    singularityOpacity: 0.0,
    flareIntensity: 0.0,
    burstProgress: 0.0,
    burstOpacity: 0.0,
  });

  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (isSkipped) {
      if (timelineRef.current) timelineRef.current.kill();
      onSequenceComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        onSequenceComplete();
      },
    });
    timelineRef.current = tl;

    // Stage 1: Black Void (0.0s - 1.0s)
    // Absolute darkness, subtle ambient starfield
    tl.set(animState.current, {
      singularityScale: 0.001,
      singularityOpacity: 0.0,
      flareIntensity: 0.0,
      burstProgress: 0.0,
      burstOpacity: 0.0,
      cameraZ: 48,
    });

    // Stage 2: First Light (1.0s - 2.4s)
    // Singularity point appears and gathers intense energy
    tl.to(
      animState.current,
      {
        singularityScale: 1.2,
        singularityOpacity: 1.0,
        flareIntensity: 18.0,
        cameraZ: 38,
        duration: 1.4,
        ease: 'power2.in',
      },
      '+=0.8'
    );

    // Stage 3: Particle Burst / Big Bang (2.4s - 4.2s)
    // Shockwave particle explosion expands radially outward
    tl.to(
      animState.current,
      {
        burstProgress: 1.0,
        burstOpacity: 1.0,
        duration: 1.6,
        ease: 'power4.out',
      },
      '-=0.2'
    );

    // Fade out singularity core into the expanding cloud
    tl.to(
      animState.current,
      {
        singularityScale: 2.5,
        singularityOpacity: 0.0,
        flareIntensity: 0.0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '<'
    );

    // Stage 3 fade out / transition signal
    tl.to(
      animState.current,
      {
        burstOpacity: 0.0,
        cameraZ: 32,
        duration: 0.8,
        ease: 'power2.inOut',
      },
      '+=0.4'
    );

    return () => {
      tl.kill();
    };
  }, [isSkipped, onSequenceComplete]);

  // Sync GSAP values to React/R3F render frame
  useFrame(() => {
    camera.position.z = animState.current.cameraZ;
    camera.lookAt(0, 0, 0);

    setRenderProps({
      singularityScale: animState.current.singularityScale,
      singularityOpacity: animState.current.singularityOpacity,
      flareIntensity: animState.current.flareIntensity,
      burstProgress: animState.current.burstProgress,
      burstOpacity: animState.current.burstOpacity,
    });
  });

  return (
    <>
      {/* Background Starfield */}
      <CosmicVoid />

      {/* Ambient Void Lighting */}
      <ambientLight intensity={0.15} />

      {/* Stage 2: First Light Core */}
      <SingularityCore
        scale={renderProps.singularityScale}
        opacity={renderProps.singularityOpacity}
        flareIntensity={renderProps.flareIntensity}
      />

      {/* Stage 3: Big Bang Particle Explosion */}
      <BigBangParticles
        burstProgress={renderProps.burstProgress}
        opacity={renderProps.burstOpacity}
        count={particleCount}
      />
    </>
  );
}
