import React from 'react';
import Link from 'next/link';
import { Clock, User, ArrowRight } from 'lucide-react';
import { ANNOUNCEMENTS_DATA } from '@/data/announcements';

export default function HomeDispatchesSection() {
  const latestPosts = ANNOUNCEMENTS_DATA.slice(0, 3);

  return (
    <section
      aria-label="Latest Astronomy Dispatches"
      className="py-20 lg:py-28 relative overflow-hidden border-t border-[#1E293B]/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#6C63FF]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase">
                DISPATCHES & RESEARCH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Observatory News & Guides
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2 max-w-xl">
              Celestial forecasts, telescope maintenance guides, and research symposium summaries from our student leads.
            </p>
          </div>

          <Link
            href="/announcements"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#A78BFA] hover:text-white uppercase transition-colors shrink-0"
          >
            <span>VIEW ALL DISPATCHES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="cosmic-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#6C63FF] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded bg-[#6C63FF]/15 text-[#A78BFA] border border-[#6C63FF]/30">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#64748B] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#6C63FF]" />
                    {post.readTime}
                  </span>
                </div>

                <Link
                  href={`/announcements/${post.slug}`}
                  className="text-base sm:text-lg font-bold text-white group-hover:text-[#A78BFA] transition-colors leading-snug line-clamp-2 mb-3 block"
                >
                  {post.title}
                </Link>

                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E293B]/60 flex items-center justify-between text-xs">
                <span className="text-[#64748B] flex items-center gap-1 text-[11px]">
                  <User className="w-3.5 h-3.5 text-[#A78BFA]" />
                  {post.author}
                </span>

                <Link
                  href={`/announcements/${post.slug}`}
                  className="font-semibold text-[#A78BFA] group-hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
