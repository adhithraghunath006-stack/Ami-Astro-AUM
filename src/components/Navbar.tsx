import React, { useState, useEffect } from 'react';
import { AmiAstroLogo } from './AmiAstroLogo';
import { soundFx } from '../utils/audio';
import { Volume2, VolumeX, Menu, X, Terminal, ArrowUpRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
  onOpenGuideModal: () => void;
}

const PRIMARY_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Happening', href: '#happening', id: 'happening' },
  { label: 'Events', href: '#missions', id: 'missions' },
  { label: 'Crew', href: '#crew', id: 'crew' },
  { label: 'Talks', href: '#talks', id: 'talks' },
  { label: 'Alumni', href: '#alumni', id: 'alumni' },
];

const SECONDARY_LINKS = [
  { label: 'Archive', href: '#archive', id: 'archive' },
  { label: 'Updates', href: '#transmissions', id: 'transmissions' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal, onOpenGuideModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const allLinks = [...PRIMARY_LINKS, ...SECONDARY_LINKS];
      const sections = allLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(allLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundFx.playSuccess();
    }
  };

  const handleNavClick = (href: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,240,255,0.08)]'
          : 'bg-transparent border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Left Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <AmiAstroLogo
              size="md"
              withStatus
              onClick={() => handleNavClick('#home')}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {PRIMARY_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative py-1 text-sm font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                  )}
                </a>
              );
            })}

            {/* MORE DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white py-1 transition-all"
              >
                More <ChevronDown className="w-4 h-4 text-cyan-400" />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-40 bg-[#070d19] border border-cyan-500/30 rounded-xl shadow-2xl py-2 flex flex-col gap-1 z-50">
                  {SECONDARY_LINKS.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      onMouseEnter={() => soundFx.playHover()}
                      className="text-left px-4 py-2 text-sm text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 font-medium transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Utilities & CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={isMuted ? 'Telemetry Audio: Muted' : 'Telemetry Audio: Active'}
              className="p-2 text-slate-300 hover:text-cyan-300 bg-black/40 hover:bg-cyan-950/40 border border-cyan-500/20 rounded-lg transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
              )}
            </button>

            {/* Management Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenGuideModal();
              }}
              onMouseEnter={() => soundFx.playHover()}
              title="AMI ASTRO System & Web Operations Guide"
              className="px-3.5 py-2 text-xs font-mono tracking-wider text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 rounded-lg transition-all flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>MANAGEMENT</span>
            </button>

            {/* Primary CTA: JOIN AMI ASTRO → */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenJoinModal();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="relative group overflow-hidden px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500/30 to-blue-600/30 hover:from-cyan-500/40 hover:to-blue-600/50 border border-cyan-400/60 text-xs font-mono font-bold tracking-wider text-cyan-200 hover:text-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                JOIN AMI ASTRO
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cyan-300" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 text-slate-400 border border-cyan-500/20 rounded-md bg-black/40"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-md border border-cyan-500/30 text-cyan-400 bg-cyan-950/40 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#030712]/95 backdrop-blur-2xl border-b border-cyan-500/30 shadow-2xl p-6 transition-all">
          <div className="space-y-3">
            <div className="text-[10px] font-mono tracking-[0.25em] text-cyan-400/80 mb-2 border-b border-cyan-500/20 pb-1">
              AMI ASTRO NAVIGATION
            </div>
            {[...PRIMARY_LINKS, ...SECONDARY_LINKS].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-mono tracking-widest transition-colors ${
                    isActive
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-4 border-t border-cyan-500/20 space-y-2">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 rounded-lg bg-cyan-500/20 border border-cyan-400 text-cyan-200 text-xs font-mono font-bold tracking-widest flex items-center justify-center gap-2"
              >
                JOIN AMI ASTRO →
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(false);
                  onOpenGuideModal();
                }}
                className="w-full py-2.5 rounded-lg bg-black/50 border border-cyan-500/20 text-slate-400 text-xs font-mono tracking-wider flex items-center justify-center gap-2"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                MANAGEMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};