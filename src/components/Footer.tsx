import React from 'react';
import { AmiAstroLogo } from './AmiAstroLogo';
import { soundFx } from '../utils/audio';
import { 
  ArrowUp, Mail, ShieldCheck, Heart 
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';

interface FooterProps {
  onOpenJoinModal: () => void;
  onOpenGuideModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJoinModal, onOpenGuideModal }) => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    soundFx.playClick();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#02050c] border-t border-cyan-500/20 pt-20 pb-12 overflow-hidden">
      {/* Subtle Orbital Background Rings */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] border border-cyan-500/10 rounded-[100%] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[260px] border border-cyan-500/15 rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top: Monumental AMI ASTRO Brand Presentation */}
        <div className="pb-16 border-b border-cyan-500/15 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <AmiAstroLogo size="xl" withStatus />
            <p className="font-heading font-bold text-sm sm:text-base uppercase tracking-[0.25em] text-cyan-300 mt-4">
              EXPLORE. CREATE. CONNECT.
            </p>
            <p className="text-slate-300 text-sm max-w-md mt-2 font-light leading-relaxed">
              “Building a community of curious minds, one experience at a time.”
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenJoinModal();
              }}
              className="px-6 py-3 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/60 text-cyan-200 hover:text-white font-mono text-xs font-bold tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] cursor-pointer"
            >
              JOIN AMI ASTRO →
            </button>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-lg bg-black/60 hover:bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 hover:text-white transition-colors cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 border-b border-cyan-500/10 font-mono text-xs">
          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-widest block mb-4">
              COMMUNITY
            </span>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors cursor-pointer">
                  HOME
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer">
                  ABOUT
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('happening')} className="hover:text-white transition-colors cursor-pointer">
                  WHAT'S HAPPENING
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('crew')} className="hover:text-white transition-colors cursor-pointer">
                  THE CREW
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-widest block mb-4">
              EVENTS & ARCHIVE
            </span>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button onClick={() => scrollToSection('missions')} className="hover:text-white transition-colors cursor-pointer">
                  EVENTS
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('talks')} className="hover:text-white transition-colors cursor-pointer">
                  ASTRO TALKS
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('alumni')} className="hover:text-white transition-colors cursor-pointer">
                  AMI ASTRO ALUMNI
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('archive')} className="hover:text-white transition-colors cursor-pointer">
                  ARCHIVE
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-widest block mb-4">
              DOCUMENTATION
            </span>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button onClick={() => scrollToSection('transmissions')} className="hover:text-white transition-colors cursor-pointer">
                  STORIES & UPDATES
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors cursor-pointer">
                  LET'S CONNECT
                </button>
              </li>
              <li>
                <button onClick={onOpenGuideModal} className="text-cyan-300 hover:text-white font-semibold flex items-center gap-1.5 transition-colors cursor-pointer">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  MANAGEMENT GUIDE
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-widest block mb-4">
              CONNECT WITH US
            </span>
            <div className="flex flex-wrap gap-2 text-slate-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-black/60 border border-cyan-500/20 hover:text-cyan-300 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-black/60 border border-cyan-500/20 hover:text-cyan-300 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-black/60 border border-cyan-500/20 hover:text-cyan-300 transition-colors"
                title="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@amiastro.edu"
                className="p-2 rounded bg-black/60 border border-cyan-500/20 hover:text-cyan-300 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-3 text-[11px] text-slate-400 flex items-center gap-1">
              <Heart className="w-3 h-3 text-cyan-400" />
              <span>Made with love by students</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Orbital Animation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-300 font-semibold">AMI ASTRO • EST. 2023</span>
          </div>

          <div className="text-center sm:text-right text-slate-400">
            © 2026 <strong className="text-slate-200">AMI ASTRO</strong>. All rights reserved.
          </div>

          {/* Subtle Planetary Orbital Animation Indicator */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-spin-slow" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            <div className="w-3 h-3 rounded-full bg-cyan-950 border border-cyan-400/50" />
          </div>
        </div>

      </div>
    </footer>
  );
};
