'use client';

import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface SingularityCoreProps {
  scale: number;
  opacity: number;
  flareIntensity: number;
}

export default function SingularityCore({
  scale,
  opacity,
  flareIntensity,
}: SingularityCoreProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 1.5;
      meshRef.current.rotation.z = t * 0.8;
    }
    if (glowRef.current) {
      // Subtle organic breathing pulse
      const pulse = 1 + Math.sin(t * 12) * 0.08;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  if (opacity <= 0.01) return null;

  return (
    <group scale={scale}>
      {/* Intense White Core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial
          color="#FFFFFF"
          transparent
          opacity={opacity}
        />
      </mesh>

      {/* Golden Coronal Energy Halo */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial
          color="#FDE047"
          transparent
          opacity={opacity * 0.7}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Outer Purple/Violet Expansion Wave */}
      <mesh>
        <sphereGeometry args={[2.8, 24, 24]} />
        <meshBasicMaterial
          color="#A78BFA"
          transparent
          opacity={opacity * 0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Radiant Point Light */}
      <pointLight
        color="#FFFBEB"
        intensity={flareIntensity}
        distance={100}
        decay={1.8}
      />
    </group>
  );
}
