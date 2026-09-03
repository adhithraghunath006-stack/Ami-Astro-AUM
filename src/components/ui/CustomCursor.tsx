'use client';

import React, { useEffect, useState } from 'react';

/**
 * CustomCursor
 * Astronomy-themed interactive cursor with a central starlight dot
 * and a trailing celestial reticle ring that reacts to clickable elements.
 * Automatically disabled on touchscreens / mobile devices.
 */
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Only enable on desktop/fine-pointer devices
    if (typeof window === 'undefined') return;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Track hovered interactive elements
    const handleElementOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');
      setIsHovered(!!interactive);
    };

    window.addEventListener('mouseover', handleElementOver, { passive: true });

    // Smooth trailing ring lerp loop
    let animId: number;
    let targetX = -100;
    let targetY = -100;

    const loop = () => {
      targetX += (position.x - targetX) * 0.22;
      targetY += (position.y - targetY) * 0.22;
      setTrailingPos({ x: targetX, y: targetY });
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleElementOver);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* 1. Precise Center Starlight Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
            isClicked ? 0.6 : isHovered ? 1.4 : 1.0
          })`,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#6C63FF,0_0_14px_#A78BFA]" />
      </div>

      {/* 2. Trailing Celestial Reticle Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background-color] duration-200 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
          width: isHovered ? '42px' : isClicked ? '22px' : '30px',
          height: isHovered ? '42px' : isClicked ? '22px' : '30px',
          marginLeft: isHovered ? '-21px' : isClicked ? '-11px' : '-15px',
          marginTop: isHovered ? '-21px' : isClicked ? '-11px' : '-15px',
        }}
      >
        <div
          className={`w-full h-full rounded-full border transition-all duration-200 relative ${
            isHovered
              ? 'border-[#38BDF8] bg-[#38BDF8]/10 shadow-[0_0_20px_rgba(56,189,248,0.4)] rotate-45'
              : 'border-[#A78BFA]/60 bg-transparent shadow-[0_0_10px_rgba(108,99,255,0.25)]'
          }`}
        >
          {/* Subtle 4 Reticle Ticks when Hovering */}
          {isHovered && (
            <>
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-[#38BDF8]" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-[#38BDF8]" />
              <span className="absolute -left-1 top-1/2 -translate-y-1/2 h-0.5 w-1.5 bg-[#38BDF8]" />
              <span className="absolute -right-1 top-1/2 -translate-y-1/2 h-0.5 w-1.5 bg-[#38BDF8]" />
            </>
          )}
        </div>
      </div>
    </>
  );
}
