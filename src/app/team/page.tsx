import React from 'react';
import Image from 'next/image';
import { Mail, ShieldAlert, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from '@/components/ui/SocialIcons';
import { TEAM_MEMBERS_DATA } from '@/data/team';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHeroHeader from '@/components/layout/PageHeroHeader';

export const metadata = {
  title: 'Team & Committee | AMI-ASTRO Astronomy Club',
  description:
    'Meet the student council, observation leads, and faculty mentor driving astronomy at Amity University Mumbai.',
};

export default function TeamPage() {
  const committeeGroups = [
    {
      title: 'Faculty Mentor & Advisory',
      members: TEAM_MEMBERS_DATA.filter((m) => m.committeeRole === 'Faculty Mentor'),
    },
    {
      title: 'Core Student Council',
      members: TEAM_MEMBERS_DATA.filter((m) => m.committeeRole === 'Core Council'),
    },
    {
      title: 'Domain & Observation Leads',
      members: TEAM_MEMBERS_DATA.filter((m) => m.committeeRole === 'Domain Lead'),
    },
  ];

  return (
    <div className="bg-transparent text-white min-h-screen relative">
      {/* Cinematic Page Hero Header */}
      <PageHeroHeader
        breadcrumbs={[
          { label: 'HOME', href: '/' },
          { label: 'TEAM', href: '/team' },
        ]}
        eyebrow="LEADERSHIP & COMMITTEE"
        title="Team & Committee"
        description="The passionate students and faculty mentors organizing telescope sessions, astro-workshops, and stargazing expeditions at Amity University Mumbai."
        badge="Council Term 2025–2026"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">

        {/* Committee Groups */}
        <div className="space-y-16">
          {committeeGroups.map((group, gIdx) => (
            <div key={gIdx}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-4 h-0.5 bg-[#6C63FF]" />
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {group.title}
                </h2>
                <div className="flex-1 h-px bg-[#1E293B]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.members.map((member) => (
                  <div
                    key={member.id}
                    className="cosmic-card rounded-2xl p-6 flex flex-col group hover:border-[#6C63FF] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      {/* Avatar */}
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#1E293B] group-hover:border-[#6C63FF] transition-colors shrink-0">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#6C63FF]/15 text-[#A78BFA] border border-[#6C63FF]/30 inline-block mb-1">
                          {member.role}
                        </span>
                        <h3 className="text-base font-bold text-white group-hover:text-[#A78BFA] transition-colors truncate">
                          {member.name}
                        </h3>
                        <p className="text-xs text-[#94A3B8] truncate mt-0.5">
                          {member.department}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 flex-1">
                      {member.bio}
                    </p>

                    {member.specialization && (
                      <div className="text-[11px] text-[#CBD5E1] bg-[#0B0F19] px-3 py-1.5 rounded-lg border border-[#1E293B] mb-4">
                        <span className="text-[#64748B]">Focus: </span>
                        {member.specialization}
                      </div>
                    )}

                    {/* Socials */}
                    <div className="pt-3 border-t border-[#1E293B]/60 flex items-center gap-2.5">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          className="w-8 h-8 rounded-lg bg-[#0B0F19] border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors"
                        >
                          <LinkedinIcon size={14} />
                        </a>
                      )}
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} GitHub`}
                          className="w-8 h-8 rounded-lg bg-[#0B0F19] border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors"
                        >
                          <GithubIcon size={14} />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Instagram`}
                          className="w-8 h-8 rounded-lg bg-[#0B0F19] border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors"
                        >
                          <InstagramIcon size={14} />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={member.socials.email}
                          aria-label={`Email ${member.name}`}
                          className="w-8 h-8 rounded-lg bg-[#0B0F19] border border-[#1E293B] hover:border-[#6C63FF] text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
