'use client';

import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface BigBangParticlesProps {
  burstProgress: number; // 0 (start of burst) to 1 (full expansion)
  opacity: number;
  count: number;
}

export default function BigBangParticles({
  burstProgress,
  opacity,
  count,
}: BigBangParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Pre-generate particle directions, base speeds, and cosmic color gradients
  const { baseDirections, baseColors, speeds } = useMemo(() => {
    const directions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speedArr = new Float32Array(count);

    const colorA = new THREE.Color('#FFFFFF'); // Hot white center
    const colorB = new THREE.Color('#FDE047'); // Golden energy
    const colorC = new THREE.Color('#A78BFA'); // Lavender cosmic gas
    const colorD = new THREE.Color('#6C63FF'); // Deep space purple

    for (let i = 0; i < count; i++) {
      // Uniform spherical direction
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const sinPhi = Math.sin(phi);

      const dx = sinPhi * Math.cos(theta);
      const dy = sinPhi * Math.sin(theta);
      const dz = Math.cos(phi);

      directions[i * 3] = dx;
      directions[i * 3 + 1] = dy;
      directions[i * 3 + 2] = dz;

      // Speed distribution with exponential variation
      const speed = 15 + Math.pow(Math.random(), 2) * 45;
      speedArr[i] = speed;

      // Color based on velocity / distance
      const normSpeed = speed / 60;
      const tempColor = new THREE.Color();
      if (normSpeed < 0.35) {
        tempColor.lerpColors(colorA, colorB, normSpeed / 0.35);
      } else if (normSpeed < 0.7) {
        tempColor.lerpColors(colorB, colorC, (normSpeed - 0.35) / 0.35);
      } else {
        tempColor.lerpColors(colorC, colorD, (normSpeed - 0.7) / 0.3);
      }

      colors[i * 3] = tempColor.r;
      colors[i * 3 + 1] = tempColor.g;
      colors[i * 3 + 2] = tempColor.b;
    }

    return { baseDirections: directions, baseColors: colors, speeds: speedArr };
  }, [count]);

  // Dynamic positions buffer based on current burst progress
  const dynamicPositions = useMemo(() => {
    return new Float32Array(count * 3);
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current || opacity <= 0.001) return;

    const positionsAttr = pointsRef.current.geometry.attributes.position;
    if (!positionsAttr) return;

    // Artistic expansion ease: fast initial burst, smooth deceleration
    const distFactor = Math.sin((burstProgress * Math.PI) / 2);

    for (let i = 0; i < count; i++) {
      const spd = speeds[i];
      const dist = spd * distFactor;

      const idx = i * 3;
      const dx = baseDirections[idx];
      const dy = baseDirections[idx + 1];
      const dz = baseDirections[idx + 2];

      // Subtle vortex swirl around Z axis as particles expand
      const angle = burstProgress * 0.8 * (spd / 40);
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      const rotX = dx * cosA - dy * sinA;
      const rotY = dx * sinA + dy * cosA;

      positionsAttr.setXYZ(i, rotX * dist, rotY * dist, dz * dist);
    }

    positionsAttr.needsUpdate = true;
  });

  if (opacity <= 0.01) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[dynamicPositions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[baseColors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.2}
        vertexColors
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
