import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { ANNOUNCEMENTS_DATA } from '@/data/announcements';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';

interface AnnouncementPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ANNOUNCEMENTS_DATA.map((post) => ({
    id: post.slug,
  }));
}

export default async function AnnouncementDetailPage({
  params,
}: AnnouncementPageProps) {
  const resolvedParams = await params;
  const post = ANNOUNCEMENTS_DATA.find(
    (p) => p.slug === resolvedParams.id || p.id === resolvedParams.id
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="py-10 lg:py-16 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Breadcrumbs
            items={[
              { label: 'HOME', href: '/' },
              { label: 'ANNOUNCEMENTS', href: '/announcements' },
              { label: post.title.slice(0, 24).toUpperCase() + '...' },
            ]}
          />

          <Link
            href="/announcements"
            className="text-xs text-[#94A3B8] hover:text-white inline-flex items-center gap-1 font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Posts</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-[#1E293B]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#6C63FF]/15 text-[#A78BFA] border border-[#6C63FF]/30">
              {post.category}
            </span>
            <span className="text-xs text-[#94A3B8] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#6C63FF]" />
              {post.readTime}
            </span>
            <span className="text-xs text-[#94A3B8]">•</span>
            <span className="text-xs text-[#94A3B8]">{post.date}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[#1E293B]/60 text-xs text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#12182B] border border-[#1E293B] flex items-center justify-center text-[#A78BFA]">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="text-white font-semibold block">{post.author}</span>
                <span className="text-[11px] text-[#64748B]">{post.authorRole}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] bg-[#12182B] text-[#94A3B8] px-2.5 py-1 rounded-lg border border-[#1E293B]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
          <p className="text-base sm:text-lg text-white font-medium leading-relaxed bg-[#12182B]/60 p-5 rounded-xl border border-[#1E293B]">
            {post.excerpt}
          </p>

          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Post Footer */}
        <div className="mt-12 pt-8 border-t border-[#1E293B] flex items-center justify-between">
          <Button
            href="/announcements"
            variant="secondary"
            size="md"
            iconLeft={<ArrowLeft className="w-4 h-4 mr-1" />}
            className="text-xs uppercase tracking-wider font-semibold"
          >
            BACK TO ANNOUNCEMENTS
          </Button>

          <Button
            href="/events"
            variant="primary"
            size="md"
            className="text-xs uppercase tracking-wider font-semibold"
          >
            VIEW UPCOMING EVENTS
          </Button>
        </div>
      </div>
    </div>
  );
}
