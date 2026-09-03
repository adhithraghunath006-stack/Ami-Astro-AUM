'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Sparkles, Mail } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { CLUB_INFO } from '@/data/clubInfo';
import Button from '@/components/ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  currentPath: string;
}

export default function MobileNav({
  isOpen,
  onClose,
  navLinks,
  currentPath,
}: MobileNavProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 md:hidden flex"
    >
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Drawer content */}
      <div className="relative ml-auto w-full max-w-xs sm:max-w-sm h-full bg-[#0B0F19] border-l border-[#1E293B] shadow-2xl flex flex-col p-6 overflow-y-auto">
        {/* Top bar in drawer */}
        <div className="flex items-center justify-between pb-6 border-b border-[#1E293B]">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/logo.jpg"
                alt="Official AMI-ASTRO Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div>
              <span className="font-bold text-white tracking-wider text-sm block">
                {CLUB_INFO.name}
              </span>
              <span className="text-[10px] text-[#94A3B8] tracking-wider uppercase block">
                Amity University
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close navigation"
            className="p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#12182B] transition-colors border border-[#1E293B]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-1.5 py-6">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? currentPath === '/'
                : currentPath.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold tracking-wider transition-colors ${
                  isActive
                    ? 'bg-[#12182B] text-white border-l-4 border-[#6C63FF]'
                    : 'text-[#94A3B8] hover:bg-[#12182B] hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#6C63FF] shadow-[0_0_8px_#6C63FF]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="pt-2 pb-6 border-b border-[#1E293B]">
          <Button
            href="/contact#join"
            onClick={onClose}
            variant="primary"
            size="lg"
            fullWidth
            className="uppercase tracking-widest text-xs py-3"
          >
            JOIN US
          </Button>
        </div>

        {/* Social Links & Info in Drawer */}
        <div className="mt-auto pt-6 flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4 text-[#94A3B8]">
            <a
              href={CLUB_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-lg hover:text-white hover:bg-[#12182B] transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={CLUB_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2 rounded-lg hover:text-white hover:bg-[#12182B] transition-colors"
            >
              <YoutubeIcon size={18} />
            </a>
            <a
              href={CLUB_INFO.socials.email}
              aria-label="Email"
              className="p-2 rounded-lg hover:text-white hover:bg-[#12182B] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-[11px] text-center text-[#64748B]">
            Phase 1 Frontend Prototype Preview
          </p>
        </div>
      </div>
    </div>
  );
}
