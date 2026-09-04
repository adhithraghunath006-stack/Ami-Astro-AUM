'use client';

import React, { useEffect, useRef } from 'react';

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

export default function CosmicSpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
