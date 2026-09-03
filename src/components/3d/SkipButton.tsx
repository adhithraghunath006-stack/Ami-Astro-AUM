'use client';

import React from 'react';
import { FastForward } from 'lucide-react';

interface SkipButtonProps {
  onClick: () => void;
  className?: string;
}

export default function SkipButton({ onClick, className = '' }: SkipButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Skip Cinematic Intro (Press Escape)"
      className={`fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0F19]/80 hover:bg-[#12182B] text-white border border-[#1E293B] hover:border-[#6C63FF] backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(108,99,255,0.4)] transition-all duration-200 cursor-pointer select-none group text-xs font-semibold tracking-wider uppercase active:scale-95 ${className}`}
    >
      <FastForward className="w-3.5 h-3.5 text-[#A78BFA] group-hover:translate-x-0.5 transition-transform" />
      <span>SKIP INTRO</span>
      <span className="hidden sm:inline-block text-[10px] text-[#64748B] bg-[#1E293B] px-1.5 py-0.5 rounded ml-1 font-mono">
        ESC
      </span>
    </button>
  );
}
