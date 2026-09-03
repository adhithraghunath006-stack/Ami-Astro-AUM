'use client';

import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

export default function DemoDisclaimer() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Prototype Notice"
      className="bg-[#12182B]/90 border-b border-[#1E293B] text-xs text-[#94A3B8] px-4 py-1.5 backdrop-blur-md relative z-50 flex items-center justify-between"
    >
      <div className="container mx-auto flex items-center gap-2 justify-center text-center">
        <Info className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
        <span>
          <strong className="text-white font-semibold">Phase 1 Frontend Prototype:</strong>{' '}
          Club contact details, event dates, and profiles are simulated demo data. All form actions operate locally without backend persistence.
        </span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss prototype notice"
        className="text-[#64748B] hover:text-white transition-colors p-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
