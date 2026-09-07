import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Astronaut3DProps {
  className?: string;
  interactive?: boolean;
}

export const Astronaut3D: React.FC<Astronaut3DProps> = ({
  className = '',
  interactive = true
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 320;
    const height = currentMount.clientHeight || 360;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Main Galaxy Group
    const galaxyGroup = new THREE.Group();
    scene.add(galaxyGroup);

    // 2. Milky Way Particle Spiral Generator
    const parameters = {
      count: 9000,
      size: 0.025,
      radius: 4.2,
      branches: 4,
      spin: 1.2,
      randomness: 0.5,
      power: 3,
      insideColor: '#00f0ff',
      outsideColor: '#7000ff'
    };

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      // Position
      const i3 = i * 3;
      const radius = Math.random() * parameters.radius;
      const spinAngle = radius * parameters.spin;
      const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), parameters.power) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.power) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomZ = Math.pow(Math.random(), parameters.power) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY * 0.4; // Slightly flattened disk
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color Mixing (Core to Outer Edges)
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / parameters.radius);

      // Add white star highlights near core
      if (radius < 0.8 && Math.random() > 0.6) {
        mixedColor.setHex(0xffffff);
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const galaxyParticles = new THREE.Points(geometry, material);
    galaxyGroup.add(galaxyParticles);

    // 3. Central Supermassive Core Mesh (Glowing Core)
    const coreGeo = new THREE.SphereGeometry(0.45, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.95
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    galaxyGroup.add(coreMesh);

    // Glowing Halo Ring around core
    const ringGeo = new THREE.RingGeometry(0.5, 0.9, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const coreRing = new THREE.Mesh(ringGeo, ringMat);
    coreRing.rotation.x = Math.PI / 2;
    galaxyGroup.add(coreRing);

    // Initial slight tilt for 3D perspective
    galaxyGroup.rotation.x = 0.5;
    galaxyGroup.rotation.z = -0.2;

    // 4. Mouse Drag & Interaction Handling
    let targetRotationX = 0.5;
    let targetRotationY = 0;
    let currentRotationX = 0.5;
    let currentRotationY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      } else if (interactive) {
        const rect = currentMount.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        targetRotationY = nx * 0.4;
        targetRotationX = 0.5 + ny * 0.3;
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    if (interactive) {
      currentMount.addEventListener('pointermove', handlePointerMove);
      currentMount.addEventListener('pointerdown', handlePointerDown);
      window.addEventListener('pointerup', handlePointerUp);
    }

    // 5. Window Resize
    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous rotation of the Milky Way galaxy
      galaxyParticles.rotation.y = elapsedTime * 0.12;
      coreRing.rotation.z = -elapsedTime * 0.2;

      // Core pulsating effect
      const coreScale = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
      coreMesh.scale.set(coreScale, coreScale, coreScale);

      // Smooth mouse rotation interpolation
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      galaxyGroup.rotation.x = currentRotationX;
      galaxyGroup.rotation.y = currentRotationY;

      // Slight floating effect
      galaxyGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up Three.js resources on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        currentMount.removeEventListener('pointermove', handlePointerMove);
        currentMount.removeEventListener('pointerdown', handlePointerDown);
        window.removeEventListener('pointerup', handlePointerUp);
      }
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, [interactive]);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        className="w-full h-full min-h-[320px] cursor-grab active:cursor-grabbing"
      />

      {/* Futuristic helper tag */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 border border-cyan-500/30 text-[10px] font-mono tracking-widest text-cyan-300 uppercase pointer-events-none backdrop-blur-sm flex items-center gap-1.5 whitespace-nowrap shadow-[0_0_15px_rgba(0,240,255,0.15)]">
        <span className={`w-1.5 h-1.5 rounded-full ${isInteracting ? 'bg-emerald-400 animate-ping' : 'bg-cyan-400'}`} />
        <span>MILKY WAY 3D • DRAG TO ROTATE</span>
      </div>
    </div>
  );
};