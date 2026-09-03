'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Camera, User, Calendar } from 'lucide-react';
import { GalleryItem } from '@/types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function LightboxModal({
  item,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Dark overlay backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
      />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#12182B] text-white hover:bg-[#6C63FF] transition-colors border border-[#1E293B]"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#12182B]/80 text-white hover:bg-[#6C63FF] transition-colors border border-[#1E293B] hidden sm:flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#12182B]/80 text-white hover:bg-[#6C63FF] transition-colors border border-[#1E293B] hidden sm:flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Lightbox Container */}
      <div className="relative max-w-4xl w-full bg-[#0E1424] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col">
        {/* Main image */}
        <div className="relative aspect-[16/10] w-full bg-[#080C16]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>

        {/* Metadata Details bar */}
        <div className="p-6 bg-[#12182B] border-t border-[#1E293B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#6C63FF]/20 text-[#A78BFA] border border-[#6C63FF]/30">
                {item.categoryLabel}
              </span>
              <span className="text-xs text-[#64748B]">{item.date}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">{item.title}</h2>
            <p className="text-xs text-[#94A3B8] mt-1 max-w-xl">{item.caption}</p>
          </div>

          <div className="flex flex-col gap-1 text-xs text-[#94A3B8] bg-[#0B0F19] p-3 rounded-xl border border-[#1E293B] shrink-0">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#6C63FF]" />
              <span>{item.photographer}</span>
            </div>
            {item.telescopeEquipment && (
              <div className="flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span className="text-[11px] text-[#CBD5E1]">
                  {item.telescopeEquipment}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
