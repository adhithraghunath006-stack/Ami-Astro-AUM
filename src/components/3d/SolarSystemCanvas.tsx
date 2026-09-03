'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';

interface PlanetConfig {
  name: string;
  orbitRadius: number;
  radius: number;
  color: string;
  speed: number;
  initialAngle: number;
  hasRings?: boolean;
  hasAtmosphere?: boolean;
  atmosphereColor?: string;
  roughness?: number;
}

const PLANETS: PlanetConfig[] = [
  {
    name: 'Mercury',
    orbitRadius: 4.2,
    radius: 0.32,
    color: '#D97706',
    speed: 0.7,
    initialAngle: 0.5,
    roughness: 0.9,
  },
  {
    name: 'Earth',
    orbitRadius: 6.8,
    radius: 0.55,
    color: '#38BDF8',
    speed: 0.45,
    initialAngle: 2.2,
    hasAtmosphere: true,
    atmosphereColor: '#60A5FA',
    roughness: 0.4,
  },
  {
    name: 'Mars',
    orbitRadius: 9.4,
    radius: 0.42,
    color: '#EF4444',
    speed: 0.35,
    initialAngle: 4.1,
    roughness: 0.8,
  },
  {
    name: 'Jupiter',
    orbitRadius: 13.0,
    radius: 1.15,
    color: '#FBBF24',
    speed: 0.22,
    initialAngle: 1.1,
    roughness: 0.5,
  },
  {
    name: 'Saturn',
    orbitRadius: 17.5,
    radius: 0.95,
    color: '#FDE68A',
    speed: 0.15,
    initialAngle: 3.4,
    hasRings: true,
    roughness: 0.6,
  },
  {
    name: 'Neptune',
    orbitRadius: 21.8,
    radius: 0.7,
    color: '#818CF8',
    speed: 0.09,
    initialAngle: 5.6,
    hasAtmosphere: true,
    atmosphereColor: '#A78BFA',
    roughness: 0.5,
  },
];

// Single Planet Component
function Planet({
  config,
  reducedMotion,
}: {
  config: PlanetConfig;
  reducedMotion: boolean;
}) {
  const planetGroupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const angleRef = useRef(config.initialAngle);

  useFrame((_, delta) => {
    if (!reducedMotion) {
      // Orbit revolution
      angleRef.current += delta * config.speed * 0.4;
      if (planetGroupRef.current) {
        planetGroupRef.current.position.x =
          Math.cos(angleRef.current) * config.orbitRadius;
        planetGroupRef.current.position.z =
          Math.sin(angleRef.current) * config.orbitRadius;
      }
    } else if (planetGroupRef.current) {
      planetGroupRef.current.position.x =
        Math.cos(config.initialAngle) * config.orbitRadius;
      planetGroupRef.current.position.z =
        Math.sin(config.initialAngle) * config.orbitRadius;
    }

    // Axis rotation
    if (meshRef.current && !reducedMotion) {
      meshRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group ref={planetGroupRef}>
      {/* Planet Body */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[config.radius, 28, 28]} />
        <meshStandardMaterial
          color={config.color}
          roughness={config.roughness ?? 0.6}
          metalness={0.15}
        />
      </mesh>

      {/* Atmospheric Haze Layer */}
      {config.hasAtmosphere && (
        <mesh>
          <sphereGeometry args={[config.radius * 1.15, 20, 20]} />
          <meshBasicMaterial
            color={config.atmosphereColor || '#60A5FA'}
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Saturn's Planetary Ring System */}
      {config.hasRings && (
        <mesh rotation={[-Math.PI / 3, 0.2, 0.3]}>
          <ringGeometry args={[config.radius * 1.45, config.radius * 2.7, 64]} />
          <meshStandardMaterial
            color="#FBBF24"
            roughness={0.7}
            metalness={0.1}
            transparent
            opacity={0.82}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
}

// Concentric Orbit Lines
function OrbitLines() {
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      {PLANETS.map((planet) => (
        <mesh key={planet.name}>
          <ringGeometry
            args={[
              planet.orbitRadius - 0.04,
              planet.orbitRadius + 0.04,
              72,
            ]}
          />
          <meshBasicMaterial
            color="#6C63FF"
            transparent
            opacity={0.22}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

// Central Radiant Sun
function CentralSun({ reducedMotion }: { reducedMotion: boolean }) {
  const coronaRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!reducedMotion && coronaRef.current) {
      coronaRef.current.rotation.z += delta * 0.15;
      const pulse = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.03;
      coronaRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Brilliant White-Gold Sun Core */}
      <mesh>
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshBasicMaterial color="#FFFBEB" />
      </mesh>

      {/* Golden Inner Flare Corona */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[2.25, 32, 32]} />
        <meshBasicMaterial
          color="#FDE047"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Deep Amber Warm Halo */}
      <mesh>
        <sphereGeometry args={[2.7, 28, 28]} />
        <meshBasicMaterial
          color="#F97316"
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Radiant Central Sunlight */}
      <pointLight
        color="#FFFBEB"
        intensity={32}
        distance={70}
        decay={1.2}
      />
    </group>
  );
}

// Main Interactive Scene
function SolarScene({
  reducedMotion,
  isMobile,
}: {
  reducedMotion: boolean;
  isMobile: boolean;
}) {
  const rootGroupRef = useRef<THREE.Group>(null);
  const targetTilt = useRef({ x: 0, y: 0 });

  // Subtle cursor parallax on hover/move
  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetTilt.current = {
        x: normY * 0.08,
        y: normX * 0.12,
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion, isMobile]);

  useFrame((_, delta) => {
    if (rootGroupRef.current && !reducedMotion && !isMobile) {
      // Smooth lerp to mouse tilt
      rootGroupRef.current.rotation.x = THREE.MathUtils.damp(
        rootGroupRef.current.rotation.x,
        targetTilt.current.x,
        3,
        delta
      );
      rootGroupRef.current.rotation.y = THREE.MathUtils.damp(
        rootGroupRef.current.rotation.y,
        targetTilt.current.y,
        3,
        delta
      );
    }
  });

  return (
    <group ref={rootGroupRef}>
      {/* Deep Cosmic Background Stars */}
      <Stars
        radius={45}
        depth={40}
        count={isMobile ? 500 : 1000}
        factor={3.5}
        saturation={0.3}
        fade
        speed={reducedMotion ? 0 : 0.8}
      />

      {/* Ambient Void Fill Light */}
      <ambientLight intensity={0.22} color="#4338CA" />

      {/* Central Sun */}
      <CentralSun reducedMotion={reducedMotion} />

      {/* Concentric Orbits */}
      <OrbitLines />

      {/* Orbiting Planets */}
      {PLANETS.map((planet) => (
        <Planet
          key={planet.name}
          config={planet}
          reducedMotion={reducedMotion}
        />
      ))}

      {/* Smooth Orbit & Drag Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={15}
        maxDistance={35}
        minPolarAngle={Math.PI / 4.5}
        maxPolarAngle={Math.PI / 1.75}
        rotateSpeed={0.55}
        zoomSpeed={0.45}
        dampingFactor={0.06}
      />
    </group>
  );
}

export default function SolarSystemCanvas() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    // Verify WebGL availability
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
    return null; // Triggers parent fallback image
  }

  return (
    <div className="w-full h-full relative select-none">
      <Canvas
        camera={{
          position: [0, 16, 26],
          fov: isMobile ? 55 : 45,
        }}
        dpr={isMobile ? [1, 1.2] : [1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0B0F19', 0); // Transparent to blend with hero background
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <SolarScene
          reducedMotion={prefersReducedMotion}
          isMobile={isMobile}
        />
      </Canvas>

      {/* Interaction Cue Badge */}
      <div className="absolute bottom-3 left-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19]/80 backdrop-blur-md border border-[#1E293B] shadow-md text-[10px] text-[#94A3B8] pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-ping" />
        <span className="text-white font-semibold">3D Solar System</span>
        <span className="text-[#64748B]">•</span>
        <span>Drag to rotate / Scroll to zoom</span>
      </div>
    </div>
  );
}
