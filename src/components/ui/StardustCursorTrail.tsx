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
 * StardustCursorTrail
 * When the cursor is stationary: completely invisible/idle.
 * When the cursor moves: spawns a delicate, glowing stardust comet trail
 * that flows behind the cursor's movement path and evaporates smoothly.
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

    let animId: number;
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
    let isMoving = false;
    let idleTimer: NodeJS.Timeout | null = null;

    const onMouseMove = (e: MouseEvent) => {
      const curX = e.clientX;
      const curY = e.clientY;

      if (prevX !== null && prevY !== null) {
        const dx = curX - prevX;
        const dy = curY - prevY;
        const dist = Math.hypot(dx, dy);

        // Only spawn particles if cursor actually moved
        if (dist > 1.5) {
          isMoving = true;
          if (idleTimer) clearTimeout(idleTimer);
          idleTimer = setTimeout(() => {
            isMoving = false;
          }, 60);

          // Interpolate steps along movement vector to guarantee smooth unbroken trail during quick moves
          const steps = Math.min(Math.floor(dist / 6) + 1, 6);
          for (let i = 0; i < steps; i++) {
            const t = i / steps;
            const interpX = prevX + dx * t;
            const interpY = prevY + dy * t;

            // Spawn 1-2 sparks per step
            const sparkCount = Math.random() > 0.4 ? 2 : 1;
            for (let j = 0; j < sparkCount; j++) {
              if (particles.length > 120) particles.shift();

              particles.push({
                x: interpX + (Math.random() - 0.5) * 3,
                y: interpY + (Math.random() - 0.5) * 3,
                // Gentle momentum trailing the movement vector
                vx: -dx * 0.05 + (Math.random() - 0.5) * 0.6,
                vy: -dy * 0.05 + (Math.random() - 0.5) * 0.6,
                size: Math.random() * 1.8 + 1.0,
                alpha: 0.95,
                decay: Math.random() * 0.035 + 0.03, // ~300ms to 450ms lifespan
                color: colors[Math.floor(Math.random() * colors.length)],
              });
            }
          }
        }
      }

      prevX = curX;
      prevY = curY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Render loop
    const render = () => {
      // If no particles and not moving, pause heavy clearing
      if (particles.length === 0 && !isMoving) {
        ctx.clearRect(0, 0, width, height);
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size *= 0.97; // Gently shrink as it fades

        if (p.alpha <= 0.05 || p.size <= 0.3) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.size > 1.4 ? 5 : 2;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      if (idleTimer) clearTimeout(idleTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-[9999]"
    />
  );
}
