import React from 'react';
import Image from 'next/image';

interface FallbackVisualProps {
  className?: string;
}

export default function FallbackVisual({ className = '' }: FallbackVisualProps) {
  return (
    <div
      data-testid="hero-fallback-visual"
      className={`relative w-full max-w-[580px] lg:max-w-[700px] xl:max-w-[760px] aspect-square flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6C63FF]/20 via-[#A78BFA]/15 to-[#F59E0B]/15 blur-3xl opacity-70 pointer-events-none transform scale-95" />
      
      <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(108,99,255,0.2)]">
        <Image
          src="/images/temp/hero-solar-system.jpg"
          alt="Cinematic solar system with radiant star and planetary orbits"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 55vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/80 via-transparent to-[#0B0F19]/60" />
      </div>
    </div>
  );
}
