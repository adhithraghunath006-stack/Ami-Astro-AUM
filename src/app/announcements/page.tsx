'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Tag, Search } from 'lucide-react';
import { ANNOUNCEMENTS_DATA } from '@/data/announcements';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHeroHeader from '@/components/layout/PageHeroHeader';

export default function AnnouncementsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(ANNOUNCEMENTS_DATA.flatMap((a) => a.tags))
  );

  const filteredAnnouncements = ANNOUNCEMENTS_DATA.filter((item) => {
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? item.tags.includes(selectedTag) : true;
    return matchesQuery && matchesTag;
  });

  return (
    <div className="bg-[#0B0F19] text-white min-h-screen">
      {/* Cinematic Page Hero Header */}
      <PageHeroHeader
        breadcrumbs={[
          { label: 'HOME', href: '/' },
          { label: 'ANNOUNCEMENTS', href: '/announcements' },
        ]}
        eyebrow="DISPATCHES & DISCOVERIES"
        title="Announcements & Blog"
        description="Observation bulletins, celestial event forecasts, equipment guides, and educational astrophysics dispatches from the AMI-ASTRO council."
        action={
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dispatches..."
              className="w-full pl-9 pr-4 py-2.5 bg-[#12182B] border border-[#1E293B] rounded-xl text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#6C63FF] transition-colors"
            />
          </div>
        }
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Tags Row */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          <span className="text-xs text-[#64748B] font-semibold uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" /> Topics:
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              selectedTag === null
                ? 'bg-[#6C63FF] text-white'
                : 'bg-[#12182B] text-[#94A3B8] hover:text-white border border-[#1E293B]'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedTag === tag
                  ? 'bg-[#6C63FF] text-white'
                  : 'bg-[#12182B] text-[#94A3B8] hover:text-white border border-[#1E293B]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnnouncements.map((post) => (
            <article
              key={post.id}
              className="cosmic-card rounded-2xl p-6 flex flex-col group hover:border-[#6C63FF] transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#6C63FF]/15 text-[#A78BFA] border border-[#6C63FF]/30">
                  {post.category}
                </span>
                <span className="text-[11px] text-[#64748B] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#6C63FF]" />
                  {post.readTime}
                </span>
              </div>

              <Link
                href={`/announcements/${post.slug}`}
                className="group-hover:text-[#A78BFA] transition-colors"
              >
                <h2 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {post.title}
                </h2>
              </Link>

              <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3 mb-6 flex-1">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] bg-[#0B0F19] text-[#94A3B8] px-2 py-0.5 rounded border border-[#1E293B]"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Author & Link */}
              <div className="pt-4 border-t border-[#1E293B]/60 flex items-center justify-between text-xs">
                <span className="text-[#64748B] flex items-center gap-1 text-[11px]">
                  <User className="w-3.5 h-3.5 text-[#A78BFA]" />
                  {post.author}
                </span>

                <Link
                  href={`/announcements/${post.slug}`}
                  className="font-semibold text-[#A78BFA] group-hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Post</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
