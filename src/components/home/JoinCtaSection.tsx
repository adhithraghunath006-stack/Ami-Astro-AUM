import React from 'react';
import { Sparkles, ArrowRight, Compass, Users } from 'lucide-react';
import Button from '@/components/ui/Button';
import { DiscordIcon } from '@/components/ui/SocialIcons';
import { CLUB_INFO } from '@/data/clubInfo';

export default function JoinCtaSection() {
  return (
    <section
      aria-label="Join AMI-ASTRO Club Call to Action"
      className="py-20 lg:py-28 relative overflow-hidden border-t border-[#1E293B]/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="cosmic-card rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center max-w-4xl mx-auto border border-[#6C63FF]/30 shadow-[0_0_50px_rgba(108,99,255,0.15)]">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#6C63FF]/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 right-10 w-64 h-64 bg-[#38BDF8]/15 blur-3xl rounded-full pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6C63FF]/15 border border-[#6C63FF]/30 text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BECOME A PART OF OUR UNIVERSE</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
            Ready to Explore Further?
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you want to peer into Saturn&apos;s rings through a 10&quot; Dobsonian, learn deep-sky astrophotography stacking, or join our Sahyadri dark-sky astrocamps — there is a place for you at AMI-ASTRO.
          </p>

          {/* Meeting Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 text-xs text-[#CBD5E1] bg-[#0B0F19]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#1E293B] mb-10 max-w-lg mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#6C63FF] animate-ping" />
            <span className="font-semibold text-white">Observatory Sessions:</span>
            <span>{CLUB_INFO.contact.meetingTime}</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/events"
              variant="primary"
              size="lg"
              className="text-xs uppercase tracking-wider font-bold py-3.5 px-8 shadow-[0_0_25px_rgba(108,99,255,0.35)] w-full sm:w-auto"
              iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              UPCOMING SESSIONS
            </Button>

            <a
              href={CLUB_INFO.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#12182B] border border-[#1E293B] hover:border-[#6C63FF] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#1E1B4B] transition-all"
            >
              <DiscordIcon size={16} />
              <span>JOIN DISCORD SERVER</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
