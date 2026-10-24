'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';
import { CLUB_INFO } from '@/data/clubInfo';
import Button from '@/components/ui/Button';
import MobileNav from './MobileNav';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'nav-glass shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-b border-[#1E293B]'
            : 'bg-[#0B0F19]/80 backdrop-blur-md border-b border-[#1E293B]/60'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] rounded-lg p-1"
          >
            {/* Official AMI-ASTRO circular logo strictly preserved */}
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(108,99,255,0.35)] shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.jpg"
                alt="Official AMI-ASTRO Logo"
                fill
                priority
                className="object-cover"
                sizes="44px"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-[#A78BFA] transition-colors leading-tight">
                {CLUB_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-[#94A3B8] tracking-wider uppercase">
                Astronomy Club • Amity University
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-0.5 lg:gap-1 xl:gap-2.5"
          >
            {CLUB_INFO.navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] lg:text-xs xl:text-sm font-semibold tracking-wider px-2 xl:px-3 py-1.5 xl:py-2 rounded-md transition-all duration-200 uppercase relative ${
                    isActive
                      ? 'text-white'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#6C63FF] shadow-[0_0_8px_#6C63FF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contact#join"
              variant="primary"
              size="md"
              className="font-semibold text-xs tracking-wider uppercase px-4 xl:px-5 py-2.5 rounded-lg"
            >
              JOIN US
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="md:hidden p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#12182B] transition-colors border border-[#1E293B]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={CLUB_INFO.navLinks}
        currentPath={pathname}
      />
    </>
  );
}
