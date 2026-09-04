'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface Star {
  x: number;
  y: number;
  depth: number; // 0 (far) to 1 (near)
  radius: number;
  baseAlpha: number;
  phase1: number;
  phase2: number;
  speed1: number;
  speed2: number;
  colorRgb: string;
  isSparkler: boolean;
  spikeLength: number;
}

interface Asteroid {
  x: number;
  y: number;
  depth: number;
  size: number;
  vx: number;
  vy: number;
  angle: number;
  angularVelocity: number;
  vertices: number[];
  shadingTone: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  fadeSpeed: number;
  color: string;
}

interface ConstellationStar {
  x: number;
  y: number;
  radius: number;
  colorRgb: string;
  isAnchor?: boolean;
}

interface ConstellationDef {
  name: string;
  latinName: string;
  relX: number;
  relY: number;
  depth: number;
  scale: number;
  stars: ConstellationStar[];
  lines: [number, number][];
}

const CONSTELLATIONS: ConstellationDef[] = [
  {
    name: 'ORION',
    latinName: 'The Hunter',
    relX: 0.82,
    relY: 0.28,
    depth: 0.45,
    scale: 1,
    stars: [
      { x: -38, y: -50, radius: 2.6, colorRgb: '251, 146, 60', isAnchor: true }, // Betelgeuse (Orange Supergiant)
      { x: 38, y: -44, radius: 2.1, colorRgb: '224, 231, 255', isAnchor: true },  // Bellatrix
      { x: 0, y: -66, radius: 1.5, colorRgb: '255, 255, 255' },                   // Meissa
      { x: -18, y: 0, radius: 1.9, colorRgb: '167, 139, 250' },                   // Alnitak (Belt)
      { x: 0, y: 2, radius: 2.0, colorRgb: '255, 255, 255', isAnchor: true },     // Alnilam (Belt)
      { x: 18, y: 4, radius: 1.9, colorRgb: '56, 189, 248' },                     // Mintaka (Belt)
      { x: -30, y: 56, radius: 2.0, colorRgb: '224, 231, 255' },                  // Saiph
      { x: 34, y: 60, radius: 2.7, colorRgb: '56, 189, 248', isAnchor: true },    // Rigel (Blue Supergiant)
    ],
    lines: [
      [2, 0], [2, 1], // Head to shoulders
      [0, 1],         // Shoulder cross
      [0, 3], [1, 5], // Shoulders to belt
      [3, 4], [4, 5], // Orion's Belt
      [3, 6], [5, 7], // Belt to feet
      [6, 7],         // Lower boundary
    ],
  },
  {
    name: 'CASSIOPEIA',
    latinName: 'The Queen (W)',
    relX: 0.16,
    relY: 0.22,
    depth: 0.35,
    scale: 0.95,
    stars: [
      { x: -54, y: 14, radius: 1.8, colorRgb: '224, 231, 255' },
      { x: -26, y: -18, radius: 2.1, colorRgb: '255, 255, 255', isAnchor: true },
      { x: 2, y: 16, radius: 2.3, colorRgb: '167, 139, 250', isAnchor: true },
      { x: 30, y: -22, radius: 2.4, colorRgb: '251, 191, 36', isAnchor: true },
      { x: 58, y: 10, radius: 2.0, colorRgb: '224, 231, 255' },
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 4],
    ],
  },
  {
    name: 'URSA MAJOR',
    latinName: 'The Big Dipper / Saptarishi',
    relX: 0.18,
    relY: 0.74,
    depth: 0.5,
    scale: 0.95,
    stars: [
      { x: -72, y: 32, radius: 2.1, colorRgb: '56, 189, 248' },
      { x: -46, y: 20, radius: 2.2, colorRgb: '255, 255, 255' },
      { x: -22, y: 14, radius: 2.3, colorRgb: '224, 231, 255', isAnchor: true },
      { x: 0, y: 10, radius: 1.7, colorRgb: '167, 139, 250' },
      { x: -2, y: 38, radius: 2.0, colorRgb: '224, 231, 255' },
      { x: 34, y: 36, radius: 2.2, colorRgb: '255, 255, 255', isAnchor: true },
      { x: 36, y: 6, radius: 2.4, colorRgb: '251, 191, 36', isAnchor: true },
    ],
    lines: [
      [0, 1], [1, 2], [2, 3],
      [3, 4], [4, 5], [5, 6], [6, 3],
    ],
  },
  {
    name: 'CYGNUS',
    latinName: 'The Northern Cross',
    relX: 0.82,
    relY: 0.76,
    depth: 0.4,
    scale: 0.95,
    stars: [
      { x: 0, y: -52, radius: 2.6, colorRgb: '224, 231, 255', isAnchor: true },
      { x: 0, y: 0, radius: 2.2, colorRgb: '255, 255, 255', isAnchor: true },
      { x: 0, y: 52, radius: 2.0, colorRgb: '251, 191, 36' },
      { x: -48, y: -6, radius: 2.0, colorRgb: '167, 139, 250' },
      { x: 48, y: -6, radius: 2.0, colorRgb: '56, 189, 248' },
    ],
    lines: [
      [0, 1], [1, 2],
      [3, 1], [1, 4],
    ],
  },
];

export default function CosmicSpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pathname = usePathname();
  const isGallery = pathname?.startsWith('/gallery') ?? false;
  const isGalleryRef = useRef(isGallery);
  const isAbout = pathname?.startsWith('/about') ?? false;
  const isAboutRef = useRef(isAbout);

  useEffect(() => {
    isGalleryRef.current = isGallery;
    isAboutRef.current = isAbout;
  }, [isGallery, isAbout]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let scrollY = window.scrollY || 0;
    let lastScrollY = scrollY;
    let scrollVelocity = 0;
    let isVisible = !document.hidden;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // DPR Cap for butter-smooth 60fps performance on 4K/retina displays
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      initEntities();
    }

    // Palette for stars
    const starColors = [
      '255, 255, 255', // Pure Starlight White
      '224, 231, 255', // Indigo-Tinted White
      '167, 139, 250', // Celestial Violet
      '56, 189, 248',  // Cosmic Cyan
      '253, 224, 71',  // Stellar Gold
    ];

    let stars: Star[] = [];
    let asteroids: Asteroid[] = [];
    let meteors: Meteor[] = [];
    let nextMeteorTime = Date.now() + 4000;

    function initEntities() {
      // Density-based star count (120 to 220 depending on screen size)
      const starCount = Math.floor(Math.min(220, Math.max(100, (width * height) / 8000)));
      stars = [];

      for (let i = 0; i < starCount; i++) {
        const depth = Math.random();
        // ~15% of brightest, near stars are prominent scintillators
        const isSparkler = depth > 0.78 && Math.random() < 0.45;
        const radius = isSparkler
          ? (1.3 + Math.random() * 0.8)
          : (0.35 + depth * 1.3) * (Math.random() * 0.5 + 0.75);

        // Harmonic frequencies: base atmospheric pulse + high-frequency scintillation
        const baseSpeed = 0.007 + Math.random() * 0.02;
        const speed1 = baseSpeed;
        const speed2 = baseSpeed * (1.73 + Math.random() * 0.85);

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          depth,
          radius,
          baseAlpha: isSparkler ? (0.75 + Math.random() * 0.25) : (0.2 + depth * 0.65),
          phase1: Math.random() * Math.PI * 2,
          phase2: Math.random() * Math.PI * 2,
          speed1,
          speed2,
          colorRgb: starColors[Math.floor(Math.random() * starColors.length)],
          isSparkler,
          spikeLength: (5 + Math.random() * 7) * (radius / 1.5),
        });
      }

      // Micro-asteroids (14 to 22 rock fragments drifting in space)
      const asteroidCount = Math.floor(Math.min(22, Math.max(12, width / 70)));
      asteroids = [];

      for (let i = 0; i < asteroidCount; i++) {
        const depth = 0.15 + Math.random() * 0.85;
        const vertexCount = 6 + Math.floor(Math.random() * 3);
        const vertices: number[] = [];
        for (let v = 0; v < vertexCount; v++) {
          vertices.push(0.7 + Math.random() * 0.6);
        }

        const size = (3 + depth * 8.5) * (Math.random() * 0.5 + 0.75);
        asteroids.push({
          x: Math.random() * width,
          y: Math.random() * height,
          depth,
          size,
          vx: (Math.random() - 0.48) * 0.25 * (0.3 + depth * 0.7),
          vy: (0.05 + Math.random() * 0.2) * (0.4 + depth * 0.6),
          angle: Math.random() * Math.PI * 2,
          angularVelocity: (Math.random() - 0.5) * 0.008,
          vertices,
          shadingTone: Math.random(),
        });
      }
    }

    function spawnMeteor(forcedSpeedMultiplier = 1) {
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3; // ~45 deg downward streak
      const length = (90 + Math.random() * 110) * forcedSpeedMultiplier;
      const speed = (14 + Math.random() * 12) * forcedSpeedMultiplier;

      meteors.push({
        x: Math.random() * (width * 0.9),
        y: Math.random() * (height * 0.35),
        length,
        speed,
        angle,
        alpha: 1,
        fadeSpeed: 0.025 + Math.random() * 0.02,
        color: Math.random() > 0.4 ? '#38BDF8' : '#A78BFA',
      });
    }

    // Scroll listener with velocity detection
    function onScroll() {
      const currentScroll = window.scrollY || 0;
      scrollVelocity = Math.abs(currentScroll - lastScrollY);
      scrollY = currentScroll;
      lastScrollY = currentScroll;

      // When user rapidly scrolls, trigger an energetic shooting star
      if (scrollVelocity > 45 && meteors.length < 2 && Math.random() > 0.6) {
        spawnMeteor(1.4);
      }
    }

    function onVisibilityChange() {
      isVisible = !document.hidden;
      if (isVisible) {
        lastScrollY = window.scrollY || 0;
      }
    }

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    resize();

    let time = 0;
    let galleryTransition = isGalleryRef.current ? 1 : 0;
    let aboutTransition = isAboutRef.current ? 1 : 0;

    function render() {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.016;

      // 1. Draw Deep Space Gradient Background
      const baseGrad = ctx!.createLinearGradient(0, 0, 0, height);
      baseGrad.addColorStop(0, '#060811');
      baseGrad.addColorStop(0.5, '#080C17');
      baseGrad.addColorStop(1, '#0B0F1F');
      ctx!.fillStyle = baseGrad;
      ctx!.fillRect(0, 0, width, height);

      // 2. Ambient Nebulae Glow Pockets (Breathing slow oscillation)
      const nebulaPulse = Math.sin(time * 0.6) * 0.03;

      // Nebula 1: Deep Violet in top right
      const neb1 = ctx!.createRadialGradient(
        width * 0.8,
        height * 0.25,
        20,
        width * 0.8,
        height * 0.25,
        width * 0.45
      );
      neb1.addColorStop(0, `rgba(108, 99, 255, ${0.14 + nebulaPulse})`);
      neb1.addColorStop(0.6, 'rgba(46, 16, 101, 0.06)');
      neb1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx!.fillStyle = neb1;
      ctx!.fillRect(0, 0, width, height);

      // Nebula 2: Deep Cyan in middle left
      const neb2 = ctx!.createRadialGradient(
        width * 0.15,
        height * 0.65,
        30,
        width * 0.15,
        height * 0.65,
        width * 0.5
      );
      neb2.addColorStop(0, `rgba(56, 189, 248, ${0.11 - nebulaPulse})`);
      neb2.addColorStop(0.6, 'rgba(15, 43, 60, 0.05)');
      neb2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx!.fillStyle = neb2;
      ctx!.fillRect(0, 0, width, height);

      // Smooth crossfade tracking for Gallery page
      const targetGallery = isGalleryRef.current ? 1 : 0;
      galleryTransition += (targetGallery - galleryTransition) * 0.05;

      // 2b. Gallery-Exclusive Celestial Signature: Milky Way Galactic Core & Carina Emission Nebula
      if (galleryTransition > 0.005) {
        ctx!.save();

        // 1. Diagonal Milky Way Galactic Arch (Crossing from bottom-left to top-right)
        const mwGrad = ctx!.createLinearGradient(0, height, width, 0);
        mwGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
        mwGrad.addColorStop(0.25, `rgba(139, 92, 246, ${0.08 * galleryTransition})`); // Deep violet ionized envelope
        mwGrad.addColorStop(0.42, `rgba(244, 114, 182, ${0.13 * galleryTransition})`); // Hydrogen-alpha magenta fringe
        mwGrad.addColorStop(0.50, `rgba(254, 240, 138, ${0.19 * galleryTransition})`); // Bright stellar dust core
        mwGrad.addColorStop(0.58, `rgba(251, 191, 36, ${0.13 * galleryTransition})`);  // Warm golden starlight
        mwGrad.addColorStop(0.75, `rgba(56, 189, 248, ${0.08 * galleryTransition})`);  // Cyan ionized edge
        mwGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx!.fillStyle = mwGrad;
        ctx!.fillRect(0, 0, width, height);

        // 2. Galactic Bulge (Luminous elliptical core of our Galaxy in upper quadrant)
        const coreX = width * 0.68;
        const coreY = height * 0.36;
        const coreRadius = Math.min(width, height) * 0.38;
        const corePulse = Math.sin(time * 0.45) * 0.02;

        const bulgeGrad = ctx!.createRadialGradient(
          coreX,
          coreY,
          10,
          coreX,
          coreY,
          coreRadius
        );
        bulgeGrad.addColorStop(0, `rgba(254, 243, 199, ${(0.22 + corePulse) * galleryTransition})`); // Bright galactic nucleus
        bulgeGrad.addColorStop(0.25, `rgba(251, 146, 60, ${(0.16 + corePulse) * galleryTransition})`); // Warm bulge stellar halo
        bulgeGrad.addColorStop(0.55, `rgba(217, 70, 239, ${(0.10 + corePulse) * galleryTransition})`); // Emission perimeter
        bulgeGrad.addColorStop(0.85, `rgba(79, 70, 229, ${(0.05 + corePulse) * galleryTransition})`);  // Outer violet halo
        bulgeGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx!.fillStyle = bulgeGrad;
        ctx!.fillRect(0, 0, width, height);

        // 3. Deep-Sky Emission Nebula (Carina / Orion complex in lower-left)
        const nebX = width * 0.24;
        const nebY = height * 0.68;
        const nebRadius = Math.min(width, height) * 0.34;

        const carinaGrad = ctx!.createRadialGradient(
          nebX,
          nebY,
          15,
          nebX,
          nebY,
          nebRadius
        );
        carinaGrad.addColorStop(0, `rgba(6, 182, 212, ${(0.16 - corePulse) * galleryTransition})`);  // O-III Cyan ionized core
        carinaGrad.addColorStop(0.35, `rgba(168, 85, 247, ${(0.13 - corePulse) * galleryTransition})`); // H-alpha purple
        carinaGrad.addColorStop(0.70, `rgba(244, 63, 94, ${(0.08 - corePulse) * galleryTransition})`);  // Hydrogen rose
        carinaGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx!.fillStyle = carinaGrad;
        ctx!.fillRect(0, 0, width, height);

        // 4. Interstellar Dark Dust Rift (Great Rift absorption silhouetting the core)
        const riftGrad = ctx!.createRadialGradient(
          coreX - 25,
          coreY + 20,
          8,
          coreX - 25,
          coreY + 20,
          coreRadius * 0.55
        );
        riftGrad.addColorStop(0, `rgba(6, 8, 16, ${(0.28 + corePulse) * galleryTransition})`);
        riftGrad.addColorStop(0.6, `rgba(6, 8, 16, ${(0.12 + corePulse) * galleryTransition})`);
        riftGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx!.fillStyle = riftGrad;
        ctx!.fillRect(0, 0, width, height);

        ctx!.restore();
      }

      // Smooth crossfade tracking for About page
      const targetAbout = isAboutRef.current ? 1 : 0;
      aboutTransition += (targetAbout - aboutTransition) * 0.05;

      // 2d. About-Exclusive Celestial Signature: Andromeda Spiral Galaxy (M31) & Equatorial Coordinate Grid
      if (aboutTransition > 0.005) {
        ctx!.save();

        // A. Equatorial Celestial Coordinate Grid Lines (Star Atlas / Planetarium)
        ctx!.lineWidth = 0.7;
        ctx!.setLineDash([3, 6]);
        ctx!.strokeStyle = `rgba(167, 139, 250, ${0.11 * aboutTransition})`;

        const gridCenterX = width * 0.45;
        const gridCenterY = height * 0.40 - (scrollY * 0.06 % height);

        // Declination concentric arcs
        const radii = [140, 280, 440, 620];
        for (let rIdx = 0; rIdx < radii.length; rIdx++) {
          const r = radii[rIdx];
          ctx!.beginPath();
          ctx!.arc(gridCenterX, gridCenterY, r, -Math.PI * 0.9, Math.PI * 0.1);
          ctx!.stroke();
        }

        // Right ascension radial meridian lines
        for (let a = -4; a <= 4; a++) {
          const rad = (a * 0.28) - Math.PI * 0.4;
          ctx!.beginPath();
          ctx!.moveTo(gridCenterX + Math.cos(rad) * 110, gridCenterY + Math.sin(rad) * 110);
          ctx!.lineTo(gridCenterX + Math.cos(rad) * 650, gridCenterY + Math.sin(rad) * 650);
          ctx!.stroke();
        }
        ctx!.setLineDash([]);

        // Coordinate Labels
        ctx!.font = '500 8.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        if ('letterSpacing' in ctx!) {
          (ctx as unknown as { letterSpacing: string }).letterSpacing = '1.5px';
        }
        ctx!.fillStyle = `rgba(167, 139, 250, ${0.18 * aboutTransition})`;
        ctx!.fillText('RA 00h 42m 44s  •  DEC +41° 16\' 09"', width * 0.12, 120);

        ctx!.fillStyle = `rgba(148, 163, 184, ${0.14 * aboutTransition})`;
        ctx!.fillText('EQUATORIAL CELESTIAL GRID  [M31 SECTOR]', width * 0.12, 134);

        // B. Andromeda (M31) Spiral Galaxy (Tilted Elliptical Disk)
        const galX = width * 0.32;
        const galY = height * 0.32 - (scrollY * 0.08 % height);
        const galScale = Math.min(1.2, Math.max(0.75, width / 1100));
        const galSize = 180 * galScale;
        const galPulse = Math.sin(time * 0.5) * 0.02;

        ctx!.translate(galX, galY);
        ctx!.rotate(-0.54); // ~ -31 degrees galactic tilt

        // Extended Outer Galactic Disk (Cyan/Violet Starlight)
        ctx!.scale(1, 0.44); // 3D foreshortened inclined view

        const diskGrad = ctx!.createRadialGradient(0, 0, 15, 0, 0, galSize);
        diskGrad.addColorStop(0, `rgba(254, 240, 138, ${(0.26 + galPulse) * aboutTransition})`); // Dense golden nucleus
        diskGrad.addColorStop(0.2, `rgba(251, 146, 60, ${(0.18 + galPulse) * aboutTransition})`); // Core bulge
        diskGrad.addColorStop(0.48, `rgba(167, 139, 250, ${(0.13 + galPulse) * aboutTransition})`); // Spiral arms violet
        diskGrad.addColorStop(0.75, `rgba(56, 189, 248, ${(0.07 + galPulse) * aboutTransition})`);  // Outer arm cyan
        diskGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx!.fillStyle = diskGrad;
        ctx!.beginPath();
        ctx!.arc(0, 0, galSize, 0, Math.PI * 2);
        ctx!.fill();

        // Spiral arm dust lanes (subtle dark ellipse ring)
        ctx!.beginPath();
        ctx!.arc(0, 0, galSize * 0.52, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(6, 8, 16, ${(0.22 + galPulse) * aboutTransition})`;
        ctx!.lineWidth = 8;
        ctx!.stroke();

        // Satellite Dwarf Galaxy M32 (Compact bright cluster nearby)
        ctx!.beginPath();
        ctx!.arc(galSize * 0.45, -galSize * 0.35, 3.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(254, 243, 199, ${(0.45 + galPulse) * aboutTransition})`;
        ctx!.fill();

        // Satellite Dwarf Galaxy M110 (Diffuse oval)
        ctx!.beginPath();
        ctx!.arc(-galSize * 0.55, galSize * 0.45, 6, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(167, 139, 250, ${(0.20 + galPulse) * aboutTransition})`;
        ctx!.fill();

        ctx!.restore();
      }

      // 2c. Render Famous Celestial Constellations
      const responsiveScale = Math.min(1.15, Math.max(0.7, width / 1200));

      for (let c = 0; c < CONSTELLATIONS.length; c++) {
        const constel = CONSTELLATIONS[c];

        // Parallax vertical movement with scroll
        const parallaxOffset = scrollY * (0.04 + constel.depth * 0.22);
        const originY = ((constel.relY * height) - (parallaxOffset % height) + height) % height;
        const originX = constel.relX * width;

        if (originY < -150 || originY > height + 150) continue;

        const cScale = constel.scale * responsiveScale;
        const linePulse = 0.16 + Math.sin(time * 0.7 + c * 1.5) * 0.05;

        ctx!.save();
        ctx!.translate(originX, originY);

        // Faint connecting celestial lines
        ctx!.lineWidth = 0.9;
        ctx!.setLineDash([3, 4]);
        ctx!.strokeStyle = `rgba(167, 139, 250, ${linePulse})`;

        for (let l = 0; l < constel.lines.length; l++) {
          const [i1, i2] = constel.lines[l];
          const s1 = constel.stars[i1];
          const s2 = constel.stars[i2];

          ctx!.beginPath();
          ctx!.moveTo(s1.x * cScale, s1.y * cScale);
          ctx!.lineTo(s2.x * cScale, s2.y * cScale);
          ctx!.stroke();
        }
        ctx!.setLineDash([]);

        // Draw Constellation Stars
        for (let s = 0; s < constel.stars.length; s++) {
          const cStar = constel.stars[s];
          const px = cStar.x * cScale;
          const py = cStar.y * cScale;
          const starTwinkle = 0.7 + Math.sin(time * 1.6 + s * 1.2 + c * 2) * 0.3;
          const r = cStar.radius * (0.9 + starTwinkle * 0.25);

          // Star Halo
          ctx!.beginPath();
          ctx!.arc(px, py, r * 2.4, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${cStar.colorRgb}, ${0.12 * starTwinkle})`;
          ctx!.fill();

          // Star Core
          ctx!.beginPath();
          ctx!.arc(px, py, r, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${cStar.colorRgb}, ${Math.min(1, 0.65 + starTwinkle * 0.35)})`;
          ctx!.fill();

          // Anchor star target ring
          if (cStar.isAnchor) {
            ctx!.beginPath();
            ctx!.arc(px, py, r + 2.5, 0, Math.PI * 2);
            ctx!.strokeStyle = `rgba(167, 139, 250, ${0.18 + starTwinkle * 0.12})`;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }

        // Draw Constellation Name Label
        ctx!.font = '600 9px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        if ('letterSpacing' in ctx!) {
          (ctx as unknown as { letterSpacing: string }).letterSpacing = '2px';
        }
        ctx!.fillStyle = `rgba(167, 139, 250, ${linePulse * 1.5})`;
        ctx!.textAlign = 'center';
        ctx!.fillText(constel.name, 0, 75 * cScale);

        ctx!.font = '400 8px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        if ('letterSpacing' in ctx!) {
          (ctx as unknown as { letterSpacing: string }).letterSpacing = '1px';
        }
        ctx!.fillStyle = `rgba(148, 163, 184, ${linePulse * 1.1})`;
        ctx!.fillText(constel.latinName, 0, 87 * cScale);

        ctx!.restore();
      }

      // 3. Render Multi-Layered Stars with Natural Atmospheric Scintillation
      const starLen = stars.length;
      for (let i = 0; i < starLen; i++) {
        const star = stars[i];

        // Parallax vertical displacement based on scroll and depth
        const parallaxOffset = scrollY * (0.05 + star.depth * 0.35);
        let currentY = (star.y - (parallaxOffset % height) + height) % height;

        // Natural multi-harmonic scintillation (interfering non-integer frequencies)
        star.phase1 += star.speed1;
        star.phase2 += star.speed2;

        const wave1 = Math.sin(star.phase1);
        const wave2 = Math.sin(star.phase2);
        const harmonic = wave1 * 0.68 + wave2 * 0.32;
        // Non-linear power mimics real optical scintillation peaks and calm intervals
        const scintillation = Math.pow((harmonic + 1) * 0.5, 1.8);

        // Distant stars have gentle calm twinkling; near sparklers have dynamic flashes
        const shimmerDepth = star.isSparkler ? 0.75 : (0.2 + star.depth * 0.35);
        const alpha = Math.min(
          1,
          Math.max(0.08, star.baseAlpha * (1 - shimmerDepth + scintillation * shimmerDepth * 1.5))
        );

        // Dynamic apparent radius expansion during peak scintillation
        const currentRadius = star.radius * (0.88 + scintillation * 0.25);

        // Main star core
        ctx!.beginPath();
        ctx!.arc(star.x, currentY, currentRadius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${star.colorRgb}, ${alpha})`;
        ctx!.fill();

        // Soft starlight halo bloom
        if (star.isSparkler || (star.depth > 0.75 && star.radius > 1.2)) {
          const haloRadius = currentRadius * (2.0 + scintillation * 1.4);
          ctx!.beginPath();
          ctx!.arc(star.x, currentY, haloRadius, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${star.colorRgb}, ${alpha * (0.12 + scintillation * 0.16)})`;
          ctx!.fill();

          // Subtle 4-point optical diffraction spike during peak sparkle
          if (star.isSparkler && scintillation > 0.72) {
            const spikeAlpha = ((scintillation - 0.72) / 0.28) * alpha * 0.55;
            const sLen = star.spikeLength * scintillation;

            ctx!.strokeStyle = `rgba(${star.colorRgb}, ${spikeAlpha})`;
            ctx!.lineWidth = 0.8;
            ctx!.beginPath();
            ctx!.moveTo(star.x - sLen, currentY);
            ctx!.lineTo(star.x + sLen, currentY);
            ctx!.moveTo(star.x, currentY - sLen);
            ctx!.lineTo(star.x, currentY + sLen);
            ctx!.stroke();
          }
        }
      }

      // 4. Render Floating 3D Micro-Asteroids
      const astLen = asteroids.length;
      for (let i = 0; i < astLen; i++) {
        const ast = asteroids[i];

        // Motion update
        if (!prefersReducedMotion) {
          ast.x += ast.vx;
          ast.y += ast.vy;
          ast.angle += ast.angularVelocity;
        }

        // Parallax vertical displacement
        const parallaxOffset = scrollY * (0.12 + ast.depth * 0.45);
        let currentY = (ast.y - (parallaxOffset % height) + height) % height;
        let currentX = (ast.x + width) % width;

        ast.x = currentX;

        ctx!.save();
        ctx!.translate(currentX, currentY);
        ctx!.rotate(ast.angle);

        // Draw irregular polygonal rock silhouette
        const vCount = ast.vertices.length;
        ctx!.beginPath();
        for (let v = 0; v < vCount; v++) {
          const theta = (v / vCount) * Math.PI * 2;
          const r = ast.size * ast.vertices[v];
          const px = Math.cos(theta) * r;
          const py = Math.sin(theta) * r;
          if (v === 0) ctx!.moveTo(px, py);
          else ctx!.lineTo(px, py);
        }
        ctx!.closePath();

        // 3D Rim lighting gradient across asteroid
        const astGrad = ctx!.createLinearGradient(
          -ast.size,
          -ast.size,
          ast.size,
          ast.size
        );
        // Highlight side (catching distant starlight)
        astGrad.addColorStop(
          0,
          ast.depth > 0.5
            ? 'rgba(148, 163, 184, 0.75)'
            : 'rgba(100, 116, 139, 0.55)'
        );
        // Mid-tone rock body
        astGrad.addColorStop(
          0.45,
          ast.depth > 0.5
            ? 'rgba(30, 41, 59, 0.85)'
            : 'rgba(18, 24, 38, 0.7)'
        );
        // Deep shadow side
        astGrad.addColorStop(1, 'rgba(8, 12, 20, 0.9)');

        ctx!.fillStyle = astGrad;
        ctx!.fill();

        // Subtle specular edge rim for depth
        ctx!.strokeStyle = `rgba(167, 139, 250, ${0.15 + ast.depth * 0.25})`;
        ctx!.lineWidth = 0.8;
        ctx!.stroke();

        ctx!.restore();
      }

      // 5. Periodic Shooting Stars / Meteors
      const now = Date.now();
      if (now > nextMeteorTime && meteors.length < 2 && !prefersReducedMotion) {
        spawnMeteor();
        nextMeteorTime = now + 6000 + Math.random() * 7000;
      }

      // Render Meteors
      for (let m = meteors.length - 1; m >= 0; m--) {
        const met = meteors[m];

        met.x += Math.cos(met.angle) * met.speed;
        met.y += Math.sin(met.angle) * met.speed;
        met.alpha -= met.fadeSpeed;

        if (met.alpha <= 0 || met.x > width + 100 || met.y > height + 100) {
          meteors.splice(m, 1);
          continue;
        }

        const tailX = met.x - Math.cos(met.angle) * met.length;
        const tailY = met.y - Math.sin(met.angle) * met.length;

        const metGrad = ctx!.createLinearGradient(tailX, tailY, met.x, met.y);
        metGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        metGrad.addColorStop(0.7, met.color === '#38BDF8' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(167, 139, 250, 0.4)');
        metGrad.addColorStop(1, `rgba(255, 255, 255, ${met.alpha})`);

        ctx!.beginPath();
        ctx!.moveTo(tailX, tailY);
        ctx!.lineTo(met.x, met.y);
        ctx!.strokeStyle = metGrad;
        ctx!.lineWidth = 1.8;
        ctx!.lineCap = 'round';
        ctx!.stroke();

        // Meteor Head Spark
        ctx!.beginPath();
        ctx!.arc(met.x, met.y, 1.8, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${met.alpha})`;
        ctx!.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
