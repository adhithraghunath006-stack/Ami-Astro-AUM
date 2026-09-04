import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, DiscordIcon } from '@/components/ui/SocialIcons';
import { CLUB_INFO } from '@/data/clubInfo';

export default function Footer() {
  return (
    <footer className="w-full bg-[#080C16] border-t border-[#1E293B] mt-auto relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3.5 group w-fit">
              {/* Official logo strictly preserved */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(108,99,255,0.3)] shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Official AMI-ASTRO Logo"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-wider">
                  {CLUB_INFO.name}
                </span>
                <span className="text-xs text-[#94A3B8] tracking-wider">
                  Astronomy Club, Amity University Mumbai
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm mt-1">
              Where curiosity meets the cosmos. Dedicated to observational astronomy, space science education, and stargazing across Amity University Mumbai.
            </p>

            {/* Social Icons matching mockup */}
            <div className="flex items-center gap-3 mt-3">
              <a
                href={CLUB_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#12182B] border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={CLUB_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-[#12182B] border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors"
              >
                <YoutubeIcon size={16} />
              </a>
              <a
                href={CLUB_INFO.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="w-9 h-9 rounded-lg bg-[#12182B] border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors"
              >
                <DiscordIcon size={16} />
              </a>
              <a
                href={CLUB_INFO.socials.email}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-[#12182B] border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: NAVIGATION (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h2 className="text-xs font-bold tracking-widest uppercase text-white mb-2">
              NAVIGATION
            </h2>
            <ul className="flex flex-col gap-2.5 text-xs text-[#94A3B8]">
              {CLUB_INFO.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#A78BFA] transition-colors"
                  >
                    {link.label === 'HOME' ? 'Home' :
                     link.label === 'ABOUT' ? 'About' :
                     link.label === 'EVENTS' ? 'Events' :
                     link.label === 'GALLERY' ? 'Gallery' :
                     link.label === 'ANNOUNCEMENTS' ? 'Announcements' :
                     link.label === 'TEAM' ? 'Team' : 'Contact'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: CONNECT (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h2 className="text-xs font-bold tracking-widest uppercase text-white mb-2">
              CONNECT
            </h2>
            <ul className="flex flex-col gap-2.5 text-xs text-[#94A3B8]">
              <li>
                <Link href="/contact#join" className="hover:text-[#A78BFA] transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/contact#member" className="hover:text-[#A78BFA] transition-colors">
                  Become a Member
                </Link>
              </li>
              <li>
                <Link href="/contact#volunteer" className="hover:text-[#A78BFA] transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/about#equipment" className="hover:text-[#A78BFA] transition-colors">
                  Club Telescopes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: CONTACT (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h2 className="text-xs font-bold tracking-widest uppercase text-white mb-2">
              CONTACT
            </h2>
            <ul className="flex flex-col gap-3 text-xs text-[#94A3B8]">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#6C63FF] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CLUB_INFO.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CLUB_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>{CLUB_INFO.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6C63FF] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Amity University Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2025 AMI-ASTRO Astronomy Club. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact#privacy" className="hover:text-[#94A3B8] transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/contact#terms" className="hover:text-[#94A3B8] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
