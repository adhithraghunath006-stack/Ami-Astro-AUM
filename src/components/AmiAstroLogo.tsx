import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withTagline?: boolean;
  withStatus?: boolean;
  className?: string;
  onClick?: () => void;
}

export const AmiAstroLogo: React.FC<LogoProps> = ({
  size = 'md',
  withTagline = false,
  withStatus = false,
  className = '',
  onClick
}) => {
  const emblemSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16 md:w-20 md:h-20'
  };

  const textSizes = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-xl tracking-[0.22em]',
    lg: 'text-2xl tracking-[0.24em]',
    xl: 'text-4xl md:text-5xl tracking-[0.25em]'
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none group ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Official AMI ASTRO Emblem with Holographic Orbital Halo */}
      <div className={`relative flex items-center justify-center ${emblemSizes[size]} transition-transform duration-500 group-hover:scale-105 shrink-0`}>
        {/* Subtle Outer Orbital Dashed Ring */}
        <div className="absolute inset-0 -m-1.5 rounded-full border border-cyan-400/50 border-dashed animate-spin-slow pointer-events-none" />
        
        {/* Glowing Aura */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-sm pointer-events-none group-hover:bg-cyan-400/40 transition-colors" />

        {/* Circular Official Logo Emblem */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)] bg-white flex items-center justify-center">
          <img
            src="/ami-astro-logo.png"
            alt="AMI ASTRO Official Crest"
            className="w-full h-full object-cover rounded-full"
            loading="eager"
          />
        </div>
      </div>

      {/* Typographic Identity: Strictly "AMI ASTRO" */}
      <div className="flex flex-col justify-center">
        <div className={`font-heading font-extrabold flex items-center leading-none text-white ${textSizes[size]}`}>
          <span className="text-slate-100 font-black">AMI</span>
          <span className="mx-1.5"></span>
          <span className="relative flex items-center bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
            ASTR
            {/* Custom Orbital 'O' in ASTRO */}
            <span className="inline-flex items-center justify-center relative ml-[1px] w-[0.85em] h-[0.85em] text-cyan-400">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <circle cx="12" cy="12" r="9" stroke="#00f0ff" strokeWidth="2.2" />
                <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(-30 12 12)" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="2 1.5" />
                <circle cx="12" cy="12" r="2.8" fill="#00f0ff" />
              </svg>
            </span>
          </span>
        </div>

        {withTagline && (
          <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-cyan-400/80 mt-1">
            EXPLORE. CREATE. CONNECT.
          </span>
        )}

        {withStatus && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/90 font-medium">
              ACTIVE
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
