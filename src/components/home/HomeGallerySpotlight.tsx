import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, ArrowRight, Eye } from 'lucide-react';
import { GALLERY_DATA } from '@/data/gallery';

export default function HomeGallerySpotlight() {
  const spotlightPhotos = GALLERY_DATA.slice(0, 4);

  return (
    <section
      aria-label="Gallery Spotlight"
      className="py-20 lg:py-28 relative overflow-hidden border-t border-[#1E293B]/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#6C63FF]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase">
                COMMUNITY ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Member Astrophotography
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2 max-w-xl">
              Photographs captured by Amity students through club telescopes, long-exposure tracking mounts, and mountain astrocamps.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#A78BFA] hover:text-white uppercase transition-colors shrink-0"
          >
            <span>VIEW ALL 12 CAPTURES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {spotlightPhotos.map((photo) => (
            <Link
              key={photo.id}
              href="/gallery"
              className="cosmic-card rounded-2xl overflow-hidden group hover:border-[#6C63FF] transition-all duration-300 flex flex-col"
            >
              {/* Image with subtle zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#12182B]">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />

                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#0B0F19]/80 backdrop-blur-md text-[#A78BFA] border border-[#1E293B]">
                  {photo.categoryLabel}
                </span>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-[#0B0F19]/80 backdrop-blur-md text-white border border-[#1E293B]">
                  <Eye className="w-3.5 h-3.5 text-[#38BDF8]" />
                </div>
              </div>

              {/* Caption & Gear Info */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#A78BFA] transition-colors leading-snug line-clamp-1 mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] text-[#94A3B8] line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#1E293B]/60 flex items-center justify-between text-[10px] text-[#64748B]">
                  <span className="font-semibold text-[#CBD5E1] truncate mr-2">
                    {photo.photographer}
                  </span>
                  <span className="shrink-0">{photo.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
