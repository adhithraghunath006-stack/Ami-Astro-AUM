import React from 'react';
import Image from 'next/image';
import { BookOpen, Eye, Compass, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { CLUB_INFO } from '@/data/clubInfo';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'About AMI-ASTRO | Astronomy Club, Amity University Mumbai',
  description:
    'Learn about our journey, observational pillars, student community, and telescope inventory at Amity University Mumbai.',
};

export default function AboutPage() {
  const pillars = [
    {
      title: 'Learn',
      desc: 'Workshops covering celestial mechanics, optical collimation, and astrophysics fundamentals.',
      icon: BookOpen,
    },
    {
      title: 'Observe',
      desc: 'Regular telescope observation nights exploring planets, the Moon, and deep-sky Messier targets.',
      icon: Eye,
    },
    {
      title: 'Explore',
      desc: 'Dark-sky expeditions away from metropolitan light pollution into the Sahyadri mountains.',
      icon: Compass,
    },
    {
      title: 'Inspire',
      desc: 'Campus exhibitions, solar viewings, and guest talks by leading astrophysicists and ISRO scientists.',
      icon: Sparkles,
    },
  ];

  const telescopes = [
    {
      name: 'Sky-Watcher 10" Collapsible Dobsonian',
      type: 'Newtonian Reflector',
      aperture: '254mm (10")',
      focalLength: '1200mm (f/4.7)',
      purpose: 'Deep sky exploration, planetary nebulae, and high-contrast galaxy observing.',
    },
    {
      name: 'Celestron Omni XLT 120',
      type: 'Achromatic Refractor',
      aperture: '120mm (4.7")',
      focalLength: '1000mm (f/8.3)',
      purpose: 'Crisp lunar terminator views, double star splitting, and planetary ring details.',
    },
    {
      name: 'Sky-Watcher HEQ5 Pro SynScan',
      type: 'Equatorial GoTo Mount',
      aperture: 'Heavy Duty 14kg Payload',
      focalLength: 'Computerized GoTo Tracking',
      purpose: 'Long-exposure astrophotography autoguiding and deep-sky imaging runs.',
    },
    {
      name: 'Baader Solar Filter & Coronado H-Alpha',
      type: 'Solar Optical Filter',
      aperture: 'Full Spectrum Attenuation',
      focalLength: 'Sub-Angstrom Bandpass',
      purpose: 'Safe daytime solar observations, sunspot tracking, and chromosphere prominences.',
    },
  ];

  return (
    <div className="py-10 lg:py-16 bg-[#0B0F19]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb matching mockup Panel 3 */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: 'HOME', href: '/' },
              { label: 'ABOUT', href: '/about' },
            ]}
          />
        </div>

        {/* Hero Section matching Panel 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 lg:mb-24">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              About AMI-ASTRO
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8">
              We are a community of dreamers, observers and explorers who look up at the night sky and wonder about the universe. Through events, observations and discussions, we make astronomy accessible to everyone.
            </p>

            {/* 4 Pillars with Icons */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12182B]/60 border border-[#1E293B]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#6C63FF]/20 border border-[#6C63FF]/40 flex items-center justify-center text-[#A78BFA] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white tracking-wide">
                        {item.title}
                      </h2>
                      <p className="text-xs text-[#94A3B8] leading-snug mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <Button
                href="/contact#join"
                variant="primary"
                size="md"
                className="text-xs font-semibold uppercase tracking-wider px-6 py-3"
              >
                JOIN THE COMMUNITY
              </Button>
            </div>
          </div>

          {/* Right Image Feature (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#1E293B] shadow-[0_0_35px_rgba(108,99,255,0.2)]">
              <Image
                src="/images/temp/about-silhouette.svg"
                alt="Observing the night sky with telescope"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Stats Row matching mockup */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {CLUB_INFO.stats.map((stat, index) => (
            <div
              key={index}
              className="cosmic-card rounded-xl p-6 sm:p-8 flex flex-col items-center text-center"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#94A3B8] tracking-wider uppercase">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#64748B] mt-1 hidden sm:block">
                {stat.description}
              </span>
            </div>
          ))}
        </div>

        {/* Equipment & Telescopes Inventory Section */}
        <div id="equipment" className="pt-10 border-t border-[#1E293B]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase block mb-2">
              OUR OPTICAL INVENTORY
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Club Telescopes & Imaging Instruments
            </h2>
            <p className="text-sm text-[#94A3B8]">
              AMI-ASTRO maintains scientific optical instruments accessible to all club members for campus stargazing and deep-sky research projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {telescopes.map((item, idx) => (
              <div
                key={idx}
                className="cosmic-card rounded-xl p-6 border border-[#1E293B] hover:border-[#6C63FF]/50 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#A78BFA] tracking-wider uppercase bg-[#6C63FF]/15 px-2.5 py-1 rounded-full border border-[#6C63FF]/30">
                    {item.type}
                  </span>
                  <span className="text-xs text-[#94A3B8]">{item.aperture}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 flex-1">
                  {item.purpose}
                </p>
                <div className="text-[11px] text-[#64748B] pt-3 border-t border-[#1E293B]/60 flex items-center justify-between">
                  <span>Focal Length: {item.focalLength}</span>
                  <span className="text-emerald-400 font-medium">Available for Members</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
