'use client';

import React from 'react';
import { ShieldCheck, ExternalLink, Smartphone } from 'lucide-react';

export default function CalendarSourcesFooter() {
  const sources = [
    {
      name: 'NASA Goddard Space Flight Center (GSFC)',
      desc: 'Five Millennium Catalog of Solar and Lunar Eclipses, planetary data and SKYCAL celestial calculations.',
      url: 'https://eclipse.gsfc.nasa.gov/',
    },
    {
      name: 'U.S. Naval Observatory (USNO)',
      desc: 'Astronomical Applications Department: Precise moon phases, solstices, equinoxes, and transit ephemerides.',
      url: 'https://aa.usno.navy.mil/',
    },
    {
      name: 'American Meteor Society (AMS)',
      desc: 'Annual meteor shower calendars, radiant coordinates, hourly rate estimations, and fireball logs.',
      url: 'https://www.amsmeteors.org/',
    },
    {
      name: 'International Meteor Organization (IMO)',
      desc: 'Global visual and radio meteor observation data, zenithal hourly rates (ZHR), and parent comet orbital data.',
      url: 'https://www.imo.net/',
    },
    {
      name: 'NASA JPL Horizons Ephemeris',
      desc: 'Solar System dynamics, planetary oppositions, greatest elongations, and apparent visual magnitudes.',
      url: 'https://ssd.jpl.nasa.gov/horizons/',
    },
  ];

  const recommendedApps = [
    { name: 'Stellarium Mobile / Desktop', desc: 'Real-time 3D sky map with telescope reticle & field-of-view indicators.' },
    { name: 'SkySafari / Sky Walk', desc: 'Interactive celestial navigation and augmented reality constellation tracking.' },
    { name: 'Clear Outside / Astrospheric', desc: 'Hour-by-hour astronomical seeing, cloud cover, transparency, and dew forecasts.' },
    { name: 'Light Pollution Map', desc: 'Locate Bortle 2–3 dark-sky sites in Maharashtra and the Sahyadri mountains.' },
  ];

  return (
    <div className="mt-16 pt-12 border-t border-[#1E293B] space-y-10">
      {/* Recommended Stargazing Companion Apps (Inspired by Space Arcade PDF notes) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#12182B] via-[#0E1424] to-[#0B0F19] border border-[#1E293B] shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#38BDF8] uppercase block mb-1">
              OBSERVATION TOOLKIT
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Recommended Mobile Apps & Stargazing Software
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#6C63FF]/15 text-[#A78BFA] border border-[#6C63FF]/30">
            <Smartphone className="w-3.5 h-3.5" />
            Android & iOS Ready
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 max-w-3xl">
          For effortless night-sky navigation during club stargazing sessions on the Amity University Mumbai campus and Sahyadri expeditions, we recommend having these stargazing and weather forecast tools on your phone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedApps.map((app) => (
            <div
              key={app.name}
              className="p-4 rounded-2xl bg-[#0B0F19]/80 border border-[#1E293B] hover:border-[#6C63FF]/40 transition-colors"
            >
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5">
                {app.name}
              </h4>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Authoritative Ephemeris Sources & Copyright Compliance Notice */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080C16] border border-[#1E293B] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E293B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Authoritative Ephemeris Sources & Content Attribution
              </h3>
              <p className="text-xs text-[#94A3B8]">
                Verified scientific data independently authored for the AMI-ASTRO community.
              </p>
            </div>
          </div>

          <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 self-start sm:self-auto">
            Public Ephemeris Standards
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {sources.map((src) => (
            <a
              key={src.name}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0E1424] border border-[#1E293B] hover:border-[#6C63FF]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-1.5 mb-3">
                <div className="font-bold text-white group-hover:text-[#A78BFA] transition-colors flex items-center justify-between">
                  <span>{src.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-white shrink-0 ml-2" />
                </div>
                <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                  {src.desc}
                </p>
              </div>
              <span className="text-[10px] text-[#A78BFA] font-medium tracking-wide">
                View Official Ephemeris →
              </span>
            </a>
          ))}
        </div>

        {/* Legal & Educational Notice */}
        <p className="text-[11px] text-[#64748B] leading-relaxed border-t border-[#1E293B]/70 pt-4">
          <strong>Copyright & Academic Ethics Notice:</strong> All celestial descriptions, viewing tips, equipment guidelines, and interactive UI components in this almanac were independently written and developed by the AMI-ASTRO Astronomy Society at Amity University Mumbai. Astronomical coordinates, event timings, and physical parameters are derived directly from public scientific calculations published by NASA, the U.S. Naval Observatory, the American Meteor Society, and the International Meteor Organization. No proprietary third-party commercial content, paragraphs, or design templates are reproduced.
        </p>
      </div>
    </div>
  );
}
