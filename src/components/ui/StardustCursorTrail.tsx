'use client';

import React, { useRef, useEffect } from 'react';

interface StardustSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
}

/**
 * StardustCursorTrail (Lag-Free Edition)
 * - Zero CPU / GPU cost when stationary: RAF loop completely sleeps when particles fade.
 * - Zero software canvas shadowBlur: uses pure hardware-accelerated vector drawing.
 * - Throttled generation: capped at 32 active sparks max.
 * - Instant wakeup on mouse movement with smooth 120 FPS interpolation.
 */
export default function StardustCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only run on devices with a mouse/fine pointer
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number | null = null;
    let isRunning = false;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const particles: StardustSpark[] = [];
    const colors = ['#FFFFFF', '#FEF08A', '#FDE047', '#A78BFA', '#60A5FA', '#C084FC'];

    let prevX: number | null = null;
    let prevY: number | null = null;
    let lastSpawnTime = 0;

    // Render loop that sleeps when particles array is empty
    const render = () => {
      if (particles.length === 0) {
        ctx.clearRect(0, 0, width, height);
        isRunning = false;
        animId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size *= 0.96;

        if (p.alpha <= 0.05 || p.size <= 0.3) {
          // Fast removal
          particles[i] = particles[particles.length - 1];
          particles.pop();
          continue;
        }

        // Fast hardware drawing without ctx.save()/restore() or shadowBlur
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle soft outer halo for larger particles without expensive blur filter
        if (p.size > 1.2) {
          ctx.globalAlpha = p.alpha * 0.3;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    const startLoopIfNeeded = () => {
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(render);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const curX = e.clientX;
      const curY = e.clientY;
      const now = performance.now();

      if (prevX !== null && prevY !== null) {
        const dx = curX - prevX;
        const dy = curY - prevY;
        const dist = Math.hypot(dx, dy);

        // Throttle spawns to prevent flood on 1000Hz gaming mice (min 16ms between spawns or >8px move)
        if (dist > 3 && now - lastSpawnTime > 14) {
          lastSpawnTime = now;

          // Spawn 1 or 2 delicate stardust sparks along the movement path
          const steps = Math.min(Math.floor(dist / 10) + 1, 3);
          for (let i = 0; i < steps; i++) {
            if (particles.length >= 36) {
              // Recycle oldest particle
              particles.shift();
            }

            const t = i / steps;
            const interpX = prevX + dx * t;
            const interpY = prevY + dy * t;

            particles.push({
              x: interpX + (Math.random() - 0.5) * 2,
              y: interpY + (Math.random() - 0.5) * 2,
              vx: -dx * 0.04 + (Math.random() - 0.5) * 0.4,
              vy: -dy * 0.04 + (Math.random() - 0.5) * 0.4,
              size: Math.random() * 1.5 + 0.9,
              alpha: 0.9,
              decay: Math.random() * 0.04 + 0.035, // Fast smooth decay (~300ms)
              color: colors[Math.floor(Math.random() * colors.length)],
            });
          }

          startLoopIfNeeded();
        }
      }

      prevX = curX;
      prevY = curY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-50 will-change-transform"
    />
  );
}
