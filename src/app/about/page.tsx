import React from 'react';
import Image from 'next/image';
import {
  BookOpen,
  Eye,
  Compass,
  Sparkles,
  Telescope,
  Calendar,
  Award,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import PageHeroHeader from '@/components/layout/PageHeroHeader';
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
      desc: 'Regular telescope observation nights exploring planets, lunar craters, and deep-sky Messier targets.',
      icon: Eye,
    },
    {
      title: 'Explore',
      desc: 'Dark-sky expeditions away from metropolitan light pollution into the Sahyadri mountain ranges.',
      icon: Compass,
    },
    {
      title: 'Inspire',
      desc: 'Campus exhibitions, safe solar viewings, and guest talks by leading astrophysicists and ISRO scientists.',
      icon: Sparkles,
    },
  ];

  const milestones = [
    {
      year: '2016',
      title: 'Club Genesis',
      description: 'Founded by undergraduate physics and aerospace engineering students at Amity University Mumbai with a portable 70mm refractor.',
    },
    {
      year: '2018',
      title: 'First Campus Observatory Night',
      description: 'Hosted over 250 students for a public Lunar Eclipse viewing, establishing bi-weekly Friday observation traditions.',
    },
    {
      year: '2021',
      title: 'Flagship Dobsonian Acquisition',
      description: 'Commissioned our scientific Sky-Watcher 10" Collapsible Dobsonian and computerized HEQ5 SynScan tracking mount.',
    },
    {
      year: '2024',
      title: 'Sahyadri Dark-Sky Expeditions',
      description: 'Launched all-night Messier Marathon camps in Bortle 3 dark sky sites with over 500 active student stargazers.',
    },
  ];

  const telescopes = [
    {
      name: 'Sky-Watcher 10" Collapsible Dobsonian',
      type: 'Newtonian Reflector',
      aperture: '254mm (10")',
      focalLength: '1200mm (f/4.7)',
      purpose: 'Deep sky exploration, planetary nebulae, and high-contrast galaxy observing.',
      badge: 'Primary Flagship',
    },
    {
      name: 'Celestron Omni XLT 120',
      type: 'Achromatic Refractor',
      aperture: '120mm (4.7")',
      focalLength: '1000mm (f/8.3)',
      purpose: 'Crisp lunar terminator views, double star splitting, and planetary ring details.',
      badge: 'Planetary Specialist',
    },
    {
      name: 'Sky-Watcher HEQ5 Pro SynScan',
      type: 'Equatorial GoTo Mount',
      aperture: 'Heavy Duty 14kg Payload',
      focalLength: 'Computerized GoTo Tracking',
      purpose: 'Long-exposure astrophotography autoguiding and deep-sky imaging runs.',
      badge: 'Tracking Mount',
    },
    {
      name: 'Baader Solar Safety Filter & Coronado',
      type: 'Solar Optical Filter',
      aperture: 'Full Spectrum Attenuation',
      focalLength: 'Sub-Angstrom Bandpass',
      purpose: 'Safe daytime solar observations, sunspot tracking, and chromosphere prominences.',
      badge: 'Solar Safety',
    },
  ];

  return (
    <div className="bg-transparent text-white min-h-screen relative">
      {/* Cinematic Page Hero Header */}
      <PageHeroHeader
        breadcrumbs={[
          { label: 'HOME', href: '/' },
          { label: 'ABOUT', href: '/about' },
        ]}
        eyebrow="OUR UNIVERSE"
        title="About AMI-ASTRO"
        description="We are a community of dreamers, observers and explorers who look up at the night sky and wonder about the universe. Through events, observations and discussions, we make astronomy accessible to everyone."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        {/* Main Introduction Grid (Matching Reference Panel 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 lg:mb-24">
          {/* Left Text & 4 Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              Where Curiosity Meets the Cosmos
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
              Based at Amity University Mumbai, AMI-ASTRO bridges theoretical physics and practical night-sky observations. Whether resolving the rings of Saturn from our campus grounds or journeying into the dark Sahyadri mountains, we empower students to discover the wonders of the cosmos firsthand.
            </p>

            {/* 4 Pillars with Icons (Matching mockup Panel 3) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-xl cosmic-card border border-[#1E293B]/70 hover:border-[#6C63FF]/50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#6C63FF]/15 border border-[#6C63FF]/30 flex items-center justify-center text-[#A78BFA] group-hover:text-white group-hover:bg-[#6C63FF] transition-all shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#94A3B8] leading-snug mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <Button
                href="/contact#join"
                variant="primary"
                size="md"
                className="text-xs font-semibold uppercase tracking-wider px-6 py-3 shadow-[0_0_20px_rgba(108,99,255,0.35)]"
                iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                JOIN THE COMMUNITY
              </Button>
              <Button
                href="/events"
                variant="secondary"
                size="md"
                className="text-xs font-semibold uppercase tracking-wider px-6 py-3"
              >
                EXPLORE EVENTS
              </Button>
            </div>
          </div>

          {/* Right Image Feature (5 cols - High Res Artwork) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#1E293B] shadow-[0_0_40px_rgba(108,99,255,0.2)] group">
              <Image
                src="/images/about-stargazers.jpg"
                alt="Observing the night sky with telescope at Amity University"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#94A3B8] bg-[#12182B]/85 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#1E293B]">
                <span className="text-white font-medium">Sahyadri Stargazing Night</span>
                <span className="text-[#A78BFA] text-[11px] font-semibold tracking-wider uppercase">
                  Community Expedition
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row (Matching mockup Panel 3) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20 lg:mb-28">
          {CLUB_INFO.stats.map((stat, index) => (
            <div
              key={index}
              className="cosmic-card rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center group hover:border-[#6C63FF] transition-all"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-[#A78BFA] transition-colors">
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

        {/* Club Journey Timeline */}
        <div className="mb-20 lg:mb-28">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase block mb-2">
              OUR CHRONICLE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
              The Journey So Far
            </h2>
            <p className="text-sm text-[#94A3B8]">
              From a single tabletop refractor to a full astronomical society hosting overnight expeditions for hundreds of stargazers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="cosmic-card rounded-2xl p-6 flex flex-col relative overflow-hidden"
              >
                <div className="text-3xl font-black text-[#6C63FF] mb-3">
                  {m.year}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {m.description}
                </p>
                <div className="w-10 h-0.5 bg-[#6C63FF]/40 mt-4" />
              </div>
            ))}
          </div>
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
              AMI-ASTRO maintains scientific optical instruments accessible to all active club members for campus stargazing and deep-sky research projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {telescopes.map((item, idx) => (
              <div
                key={idx}
                className="cosmic-card rounded-2xl p-6 border border-[#1E293B] hover:border-[#6C63FF] transition-all flex flex-col group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#A78BFA] tracking-wider uppercase bg-[#6C63FF]/15 px-3 py-1 rounded-full border border-[#6C63FF]/30">
                    {item.badge}
                  </span>
                  <span className="text-xs text-[#94A3B8] font-mono">{item.aperture}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#A78BFA] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 flex-1">
                  {item.purpose}
                </p>
                <div className="text-[11px] text-[#64748B] pt-3 border-t border-[#1E293B]/60 flex items-center justify-between">
                  <span>Focal Length: {item.focalLength}</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Available for Members
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
