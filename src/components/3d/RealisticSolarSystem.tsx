'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import {
  getSunTexture,
  getJupiterTexture,
  getSaturnTexture,
  getSaturnRingTexture,
  getEarthTexture,
  getMarsTexture,
} from './materials/proceduralTextures';

interface PlanetData {
  name: string;
  orbitX: number;
  orbitZ: number;
  radius: number;
  speed: number;
  initialAngle: number;
  textureType: 'sun' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'rocky' | 'ice';
  color?: string;
  hasRings?: boolean;
  hasAtmosphere?: boolean;
  atmosphereColor?: string;
  tilt?: [number, number, number];
}

const PLANETS_CONFIG: PlanetData[] = [
  {
    name: 'Mercury',
    orbitX: 5.5,
    orbitZ: 4.8,
    radius: 0.35,
    speed: 0.65,
    initialAngle: 0.6,
    textureType: 'rocky',
    color: '#D97706',
  },
  {
    name: 'Venus',
    orbitX: 7.8,
    orbitZ: 7.0,
    radius: 0.52,
    speed: 0.48,
    initialAngle: 1.9,
    textureType: 'rocky',
    color: '#F59E0B',
  },
  {
    name: 'Earth',
    orbitX: 10.5,
    orbitZ: 9.4,
    radius: 0.62,
    speed: 0.38,
    initialAngle: 3.1,
    textureType: 'earth',
    hasAtmosphere: true,
    atmosphereColor: '#60A5FA',
    tilt: [0.1, 0, 0.4],
  },
  {
    name: 'Mars',
    orbitX: 13.5,
    orbitZ: 12.0,
    radius: 0.45,
    speed: 0.28,
    initialAngle: 4.6,
    textureType: 'mars',
  },
  {
    name: 'Jupiter',
    orbitX: 18.0,
    orbitZ: 15.8,
    radius: 1.45,
    speed: 0.18,
    initialAngle: 1.2,
    textureType: 'jupiter',
    tilt: [0.05, 0, 0.05],
  },
  {
    name: 'Saturn',
    orbitX: 23.5,
    orbitZ: 20.5,
    radius: 1.15,
    speed: 0.12,
    initialAngle: 5.2,
    textureType: 'saturn',
    hasRings: true,
    tilt: [-0.45, 0.2, 0.3],
  },
  {
    name: 'Neptune',
    orbitX: 28.5,
    orbitZ: 25.0,
    radius: 0.8,
    speed: 0.08,
    initialAngle: 2.8,
    textureType: 'ice',
    color: '#6366F1',
    hasAtmosphere: true,
    atmosphereColor: '#818CF8',
  },
];

// Single Realistic Planet
function RealisticPlanetItem({
  config,
  reducedMotion,
}: {
  config: PlanetData;
  reducedMotion: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const angleRef = useRef(config.initialAngle);

  // Retrieve procedural texture
  const texture = useMemo(() => {
    switch (config.textureType) {
      case 'earth':
        return getEarthTexture();
      case 'mars':
        return getMarsTexture();
      case 'jupiter':
        return getJupiterTexture();
      case 'saturn':
        return getSaturnTexture();
      default:
        return null;
    }
  }, [config.textureType]);

  const ringTexture = useMemo(() => {
    if (config.hasRings) return getSaturnRingTexture();
    return null;
  }, [config.hasRings]);

  useFrame((_, delta) => {
    if (!reducedMotion) {
      angleRef.current += delta * config.speed * 0.35;
      if (groupRef.current) {
        groupRef.current.position.x =
          Math.cos(angleRef.current) * config.orbitX;
        groupRef.current.position.z =
          Math.sin(angleRef.current) * config.orbitZ;
      }
    } else if (groupRef.current) {
      groupRef.current.position.x =
        Math.cos(config.initialAngle) * config.orbitX;
      groupRef.current.position.z =
        Math.sin(config.initialAngle) * config.orbitZ;
    }

    if (meshRef.current && !reducedMotion) {
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <group ref={groupRef} rotation={config.tilt || [0, 0, 0]}>
      {/* Planet Sphere */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[config.radius, 32, 32]} />
        {texture ? (
          <meshStandardMaterial
            map={texture}
            roughness={0.7}
            metalness={0.1}
          />
        ) : (
          <meshStandardMaterial
            color={config.color || '#CBD5E1'}
            roughness={0.8}
            metalness={0.15}
          />
        )}
      </mesh>

      {/* Atmospheric Rayleigh Halo */}
      {config.hasAtmosphere && (
        <mesh>
          <sphereGeometry args={[config.radius * 1.14, 24, 24]} />
          <meshBasicMaterial
            color={config.atmosphereColor || '#60A5FA'}
            transparent
            opacity={0.32}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Realistic Saturn Ring Plane */}
      {config.hasRings && (
        <mesh rotation={[-Math.PI / 2.2, 0.1, 0.2]}>
          <ringGeometry
            args={[config.radius * 1.45, config.radius * 2.85, 72]}
          />
          {ringTexture ? (
            <meshStandardMaterial
              map={ringTexture}
              transparent
              opacity={0.92}
              roughness={0.5}
              metalness={0.05}
              side={THREE.DoubleSide}
            />
          ) : (
            <meshStandardMaterial
              color="#FDE68A"
              transparent
              opacity={0.85}
              side={THREE.DoubleSide}
            />
          )}
        </mesh>
      )}
    </group>
  );
}

// Delicate Glowing Orbital Filaments
function GlowingOrbits() {
  const orbits = useMemo(() => {
    return PLANETS_CONFIG.map((planet) => {
      const points: THREE.Vector3[] = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const x = Math.cos(theta) * planet.orbitX;
        const z = Math.sin(theta) * planet.orbitZ;
        points.push(new THREE.Vector3(x, 0, z));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return { name: planet.name, geometry };
    });
  }, []);

  return (
    <group>
      {orbits.map((orb) => (
        <primitive key={orb.name} object={new THREE.Line(
          orb.geometry,
          new THREE.LineBasicMaterial({
            color: '#F59E0B',
            transparent: true,
            opacity: 0.28,
            blending: THREE.AdditiveBlending,
          })
        )} />
      ))}
    </group>
  );
}

// Photorealistic Radiant Sun
function PhotorealisticSun({ reducedMotion }: { reducedMotion: boolean }) {
  const sunTexture = useMemo(() => getSunTexture(), []);
  const coronaRef = useRef<THREE.Mesh>(null);
  const outerFlareRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!reducedMotion) {
      if (coronaRef.current) {
        coronaRef.current.rotation.y += delta * 0.1;
        const pulse = 1 + Math.sin(state.clock.getElapsedTime() * 1.8) * 0.04;
        coronaRef.current.scale.setScalar(pulse);
      }
      if (outerFlareRef.current) {
        outerFlareRef.current.rotation.z -= delta * 0.08;
      }
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Blazing Solar Sphere */}
      <mesh>
        <sphereGeometry args={[2.2, 36, 36]} />
        <meshBasicMaterial map={sunTexture} />
      </mesh>

      {/* Internal Golden Corona Shell */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[2.55, 32, 32]} />
        <meshBasicMaterial
          color="#FDE047"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Outer Volumetric Solar Glow */}
      <mesh ref={outerFlareRef}>
        <sphereGeometry args={[3.2, 28, 28]} />
        <meshBasicMaterial
          color="#EA580C"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Ambient Diffuse Radiance */}
      <mesh>
        <sphereGeometry args={[4.2, 24, 24]} />
        <meshBasicMaterial
          color="#9333EA"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Intense Point Light Illuminating Planets */}
      <pointLight
        color="#FFFBEB"
        intensity={48}
        distance={90}
        decay={1.1}
      />
    </group>
  );
}

// Cosmic Dust Nebula
function CosmicNebulaDust() {
  const particles = useMemo(() => {
    const count = 350;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const c1 = new THREE.Color('#3B82F6'); // Cosmic blue
    const c2 = new THREE.Color('#8B5CF6'); // Purple
    const c3 = new THREE.Color('#F59E0B'); // Warm amber

    for (let i = 0; i < count; i++) {
      // Clustered in a sweeping galactic arc
      const angle = Math.random() * Math.PI * 2;
      const radius = 15 + Math.random() * 35;
      const spreadY = (Math.random() - 0.5) * 12;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = spreadY;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      const pick = Math.random();
      const col = pick < 0.4 ? c1 : pick < 0.75 ? c2 : c3;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    return { positions, colors };
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.6}
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// The Assembled Solar System Scene
export default function RealisticSolarSystem({
  reducedMotion,
  isMobile,
}: {
  reducedMotion: boolean;
  isMobile: boolean;
}) {
  const rootGroupRef = useRef<THREE.Group>(null);
  const targetTilt = useRef({ x: 0, y: 0 });

  // Subtle natural mouse parallax across the entire hero
  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetTilt.current = {
        x: normY * 0.05,
        y: normX * 0.08,
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion, isMobile]);

  useFrame((_, delta) => {
    if (rootGroupRef.current && !reducedMotion && !isMobile) {
      rootGroupRef.current.rotation.x = THREE.MathUtils.damp(
        rootGroupRef.current.rotation.x,
        targetTilt.current.x,
        2.5,
        delta
      );
      rootGroupRef.current.rotation.y = THREE.MathUtils.damp(
        rootGroupRef.current.rotation.y,
        targetTilt.current.y,
        2.5,
        delta
      );
    }
  });

  // Position offset: On desktop, position the solar system slightly to the right
  // so the central star and planets occupy the right-center space matching Panel 1
  const systemPosition: [number, number, number] = isMobile
    ? [0, 2, 0]
    : [4.5, 0, -2];

  return (
    <group ref={rootGroupRef}>
      {/* Background Starfield */}
      <Stars
        radius={60}
        depth={50}
        count={isMobile ? 800 : 2000}
        factor={3.8}
        saturation={0.4}
        fade
        speed={reducedMotion ? 0 : 0.6}
      />

      {/* Cosmic Nebula Cloud */}
      <CosmicNebulaDust />

      {/* Deep Space Ambient Fill */}
      <ambientLight intensity={0.18} color="#312E81" />

      {/* Main Solar System Cluster */}
      <group
        position={systemPosition}
        rotation={[-0.45, 0.25, -0.1]}
      >
        {/* Photorealistic Sun */}
        <PhotorealisticSun reducedMotion={reducedMotion} />

        {/* Concentric Elliptical Orbit Traces */}
        <GlowingOrbits />

        {/* Orbiting Planets */}
        {PLANETS_CONFIG.map((planet) => (
          <RealisticPlanetItem
            key={planet.name}
            config={planet}
            reducedMotion={reducedMotion}
          />
        ))}
      </group>

      {/* Smooth OrbitControls for mouse drag rotation and scroll zoom */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={14}
        maxDistance={36}
        minPolarAngle={Math.PI / 4.5}
        maxPolarAngle={Math.PI / 1.7}
        rotateSpeed={0.5}
        zoomSpeed={0.4}
        dampingFactor={0.05}
      />
    </group>
  );
}
