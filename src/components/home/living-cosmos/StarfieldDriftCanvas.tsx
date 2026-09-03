'use client';

import React, { useRef, useEffect } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  color: string;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  vx: number;
  vy: number;
}

export default function StarfieldDriftCanvas({
  reducedMotion = false,
}: {
  reducedMotion?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Generate stars
    const starColors = ['#FFFFFF', '#E0F2FE', '#BAE6FD', '#FEF08A', '#DDD6FE'];
    const starCount = Math.min(Math.floor((width * height) / 7500), 220);
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        baseAlpha: Math.random() * 0.6 + 0.25,
        twinkleSpeed: Math.random() * 2.5 + 1.2,
        phase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.05,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!reducedMotion) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;
        }

        const twinkle = Math.sin(time * s.twinkleSpeed + s.phase);
        const alpha = Math.max(0.1, Math.min(1.0, s.baseAlpha + twinkle * 0.35));

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.color;
        ctx.shadowBlur = s.r > 1.2 ? 6 : 0;
        ctx.shadowColor = s.color;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
    />
  );
}
