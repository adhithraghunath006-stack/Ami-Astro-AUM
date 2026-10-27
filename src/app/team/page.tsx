'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Mail, Users, Award, Telescope, Compass } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from '@/components/ui/SocialIcons';
import { TEAM_MEMBERS_DATA } from '@/data/team';
import PageHeroHeader from '@/components/layout/PageHeroHeader';
import { TeamMember } from '@/types';

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Members', count: TEAM_MEMBERS_DATA.length },
    {
      id: 'leadership',
      label: 'Leadership & Mentor',
      count: TEAM_MEMBERS_DATA.filter(
        (m) => m.committeeRole === 'Faculty Mentor' || m.committeeRole === 'Core Council'
      ).length,
    },
    {
      id: 'heads',
      label: 'Domain Leads',
      count: TEAM_MEMBERS_DATA.filter((m) => m.committeeRole === 'Domain Lead').length,
    },
    {
      id: 'website',
      label: 'Website Management',
      count: TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Website Management').length,
    },
    {
      id: 'digital-media',
      label: 'Digital Media',
      count: TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Digital Media').length,
    },
    {
      id: 'editorial',
      label: 'Editorial Board',
      count: TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Editorial Board').length,
    },
    {
      id: 'events-ops',
      label: 'Events & Operations',
      count: TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Events & Operations').length,
    },
    {
      id: 'marketing-pr',
      label: 'Marketing & PR',
      count: TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Marketing & PR').length,
    },
    {
      id: 'community',
      label: 'Community Relations',
      count: TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Community Relations').length,
    },
  ];

  const filteredMembers = useMemo(() => {
    if (activeFilter === 'all') return TEAM_MEMBERS_DATA;
    if (activeFilter === 'leadership') {
      return TEAM_MEMBERS_DATA.filter(
        (m) => m.committeeRole === 'Faculty Mentor' || m.committeeRole === 'Core Council'
      );
    }
    if (activeFilter === 'heads') {
      return TEAM_MEMBERS_DATA.filter((m) => m.committeeRole === 'Domain Lead');
    }
    if (activeFilter === 'website') {
      return TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Website Management');
    }
    if (activeFilter === 'digital-media') {
      return TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Digital Media');
    }
    if (activeFilter === 'editorial') {
      return TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Editorial Board');
    }
    if (activeFilter === 'events-ops') {
      return TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Events & Operations');
    }
    if (activeFilter === 'marketing-pr') {
      return TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Marketing & PR');
    }
    if (activeFilter === 'community') {
      return TEAM_MEMBERS_DATA.filter((m) => m.domain === 'Community Relations');
    }
    return TEAM_MEMBERS_DATA;
  }, [activeFilter]);

  // Section Groupings for the default 'all' view
  const sections = [
    {
      title: 'Faculty Mentorship & Advisory',
      subtitle: 'Guiding academic research, research protocols, and institutional astronomy initiatives.',
      badge: 'Academic Mentor',
      members: TEAM_MEMBERS_DATA.filter((m) => m.committeeRole === 'Faculty Mentor'),
    },
    {
      title: 'Core Student Council',
      subtitle: 'Steering overall club vision, executive decisions, and celestial observation summits.',
      badge: 'Core Leadership',
      members: TEAM_MEMBERS_DATA.filter((m) => m.committeeRole === 'Core Council'),
    },
    {
      title: 'Domain & Department Heads',
      subtitle: 'Spearheading individual specialized domains across technology, media, editorial, and operations.',
      badge: 'Department Leads',
      members: TEAM_MEMBERS_DATA.filter((m) => m.committeeRole === 'Domain Lead'),
    },
    {
      title: 'Executive Domain Members',
      subtitle: 'The dedicated student astronomers, developers, designers, and organizers powering every mission.',
      badge: 'Executive Team',
      members: TEAM_MEMBERS_DATA.filter(
        (m) => m.committeeRole === 'Domain Member' || m.committeeRole === 'Executive Member'
      ),
    },
  ];

  const getRoleBadgeStyle = (member: TeamMember) => {
    if (member.committeeRole === 'Faculty Mentor') {
      return 'bg-amber-500/15 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]';
    }
    if (member.committeeRole === 'Core Council') {
      return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-[0_0_12px_rgba(56,189,248,0.2)]';
    }
    if (member.committeeRole === 'Domain Lead') {
      return 'bg-[#6C63FF]/20 text-[#A78BFA] border-[#6C63FF]/40 shadow-[0_0_12px_rgba(108,99,255,0.25)]';
    }
    return 'bg-slate-800/80 text-slate-300 border-slate-700/80';
  };

  const renderMemberCard = (member: TeamMember) => {
    return (
      <div
        key={member.id}
        className="cosmic-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between group hover:border-[#6C63FF]/60 transition-all duration-300 shadow-xl overflow-hidden relative"
      >
        {/* Top Accent Gradient Border */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#6C63FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          {/* Member Portrait Photograph */}
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0B0F19] border border-[#1E293B] group-hover:border-[#6C63FF]/40 transition-colors mb-5 shadow-inner">
            <Image
              src={member.avatar}
              alt={`${member.name} - ${member.role}`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={member.committeeRole === 'Faculty Mentor' || member.committeeRole === 'Core Council'}
            />
            {/* Subtle Gradient Overlay at the base */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E1424] via-[#0E1424]/40 to-transparent pointer-events-none" />

            {/* Floating Domain Pill */}
            {member.domain && (
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#0B0F19]/85 backdrop-blur-md text-[#CBD5E1] border border-white/10 shadow-lg">
                  {member.domain}
                </span>
              </div>
            )}
          </div>

          {/* Member Name and Official Role */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border inline-block ${getRoleBadgeStyle(
                  member
                )}`}
              >
                {member.role}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#A78BFA] transition-colors leading-snug">
              {member.name}
            </h3>
            <p className="text-xs text-[#94A3B8] mt-0.5 font-medium">
              {member.department}
            </p>
          </div>

          {/* Member Bio */}
          <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
            {member.bio}
          </p>

          {/* Specialization / Key Domain Focus */}
          {member.specialization && (
            <div className="text-[11px] text-[#CBD5E1] bg-[#0B0F19]/90 px-3 py-2 rounded-xl border border-[#1E293B] mb-4">
              <span className="text-[#64748B] font-semibold">Specialization: </span>
              <span>{member.specialization}</span>
            </div>
          )}
        </div>

        {/* Social / Contact Links Footer */}
        <div className="pt-3 border-t border-[#1E293B]/70 flex items-center justify-between">
          <span className="text-[10px] text-[#64748B] uppercase tracking-wider font-semibold">
            Connect
          </span>
          <div className="flex items-center gap-2">
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn Profile`}
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
                aria-label={`${member.name} GitHub Profile`}
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
                aria-label={`${member.name} Official Instagram`}
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
      </div>
    );
  };

  return (
    <div className="bg-transparent text-white min-h-screen relative">
      {/* Cinematic Subpage Hero Header */}
      <PageHeroHeader
        breadcrumbs={[
          { label: 'HOME', href: '/' },
          { label: 'TEAM', href: '/team' },
        ]}
        eyebrow="COUNCIL & COMMITTEE"
        title="Team & Committee"
        description="Meet the passionate student council, domain leads, and faculty mentor driving observational astronomy, aerospace workshops, and dark-sky expeditions at Amity University Mumbai."
        badge="Council Term 2025–2026 • 24 Members"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        {/* Council Summary Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-5 sm:p-6 rounded-3xl bg-[#0E1424]/90 border border-[#1E293B] shadow-2xl">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#6C63FF]/15 border border-[#6C63FF]/30 flex items-center justify-center text-[#A78BFA] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider block font-medium">
                Active Council
              </span>
              <span className="text-xl font-bold text-white leading-tight">
                24 Members
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider block font-medium">
                Domains
              </span>
              <span className="text-xl font-bold text-white leading-tight">
                6 Departments
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider block font-medium">
                Affiliation
              </span>
              <span className="text-base sm:text-lg font-bold text-white leading-tight truncate">
                Amity Mumbai
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Telescope className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider block font-medium">
                Focus
              </span>
              <span className="text-base sm:text-lg font-bold text-emerald-300 leading-tight">
                Stargazing & Space
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Department Filter Tabs Carousel */}
        <div className="mb-12 overflow-x-auto pb-2 scrollbar-thin">
          <div className="flex items-center gap-2 min-w-max p-1.5 bg-[#0B0F19]/80 border border-[#1E293B] rounded-2xl">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-[#6C63FF] text-white border-[#6C63FF] shadow-[0_0_15px_rgba(108,99,255,0.4)]'
                      : 'bg-transparent text-[#94A3B8] border-transparent hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-[#64748B]'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Display Members */}
        {activeFilter === 'all' ? (
          /* Structured Group View when 'All' is active */
          <div className="space-y-16 sm:space-y-20">
            {sections.map((section, sIdx) => {
              if (section.members.length === 0) return null;
              return (
                <div key={sIdx}>
                  {/* Group Section Header */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8 pb-4 border-b border-[#1E293B]">
                    <div>
                      <div className="inline-flex items-center gap-2 mb-2">
                        <span className="w-3 h-3 rounded-full bg-[#6C63FF]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[#A78BFA]">
                          {section.badge}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {section.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-2xl">
                        {section.subtitle}
                      </p>
                    </div>

                    <span className="text-xs font-bold text-[#64748B] tracking-wider uppercase self-start sm:self-auto">
                      {section.members.length} {section.members.length === 1 ? 'Person' : 'Members'}
                    </span>
                  </div>

                  {/* Grid of Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {section.members.map((member) => renderMemberCard(member))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Filtered View */
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1E293B]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {filterTabs.find((t) => t.id === activeFilter)?.label}
                </h2>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                  Displaying {filteredMembers.length} team members.
                </p>
              </div>
              <button
                onClick={() => setActiveFilter('all')}
                className="text-xs font-semibold text-[#A78BFA] hover:text-white underline"
              >
                Show All 24 Members
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member) => renderMemberCard(member))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
