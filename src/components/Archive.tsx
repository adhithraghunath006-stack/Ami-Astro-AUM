import React, { useState, useEffect } from 'react';
import { ARCHIVE_DATA } from '../data/archive';
import { soundFx } from '../utils/audio';
import { 
  Camera, X, ChevronLeft, ChevronRight, Maximize2, 
  MapPin, Tag 
} from 'lucide-react';

const CATEGORIES = [
  'ALL',
  'EVENTS',
  'WORKSHOPS',
  'COMPETITIONS',
  'TEAM MOMENTS',
  'BEHIND THE SCENES',
  'COMMUNITY'
] as const;

export const Archive: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'ALL'
    ? ARCHIVE_DATA
    : ARCHIVE_DATA.filter(item => item.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    soundFx.playClick();
    setActiveCategory(cat);
  };

  const openLightbox = (index: number) => {
    soundFx.playClick();
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    soundFx.playClick();
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    soundFx.playClick();
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    soundFx.playClick();
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="archive" className="relative py-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 font-mono text-[11px] tracking-[0.25em] text-cyan-400 uppercase mb-4">
              <Camera className="w-3.5 h-3.5 text-cyan-400" />
              AMI ASTRO ARCHIVE
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase">
              THE AMI ASTRO ARCHIVE
            </h2>
            <p className="text-slate-300 text-lg font-light mt-3 max-w-xl">
              Photographs and visual records documenting workshops, telescope observation nights, summits, and student milestones.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 border-l border-cyan-500/30 pl-4 py-1">
            <span className="text-cyan-400 font-bold block text-sm">MEMORIES & MILESTONES</span>
            <span>PHOTO RECORDS</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-cyan-500/15">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-bold shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'bg-black/40 text-slate-400 hover:text-white border border-cyan-500/20 hover:bg-cyan-950/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            // Give 1st and 5th items an asymmetric span for cinematic layout
            const isLarge = index === 0 || index === 4;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                onMouseEnter={() => soundFx.playHover()}
                className={`group relative rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 bg-[#050b1d] cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,240,255,0.2)] ${
                  isLarge ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Photo with hover zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Corner Code Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-cyan-500/30 font-mono text-[9px] text-cyan-300 font-bold">
                    {item.archiveCode}
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 p-1.5 rounded bg-black/80 backdrop-blur-md border border-cyan-500/30 text-slate-300 group-hover:text-cyan-400 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Hover Overlay Caption & Info */}
                  <div className="absolute bottom-0 inset-x-0 p-5 transform transition-transform duration-300">
                    <span className="font-mono text-[10px] tracking-widest text-cyan-400 font-semibold uppercase block mb-1">
                      {item.category} • {item.date}
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-cyan-200 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs line-clamp-2 font-light">
                      {item.caption}
                    </p>
                    {item.metadata.missionTag && (
                      <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                        <Tag className="w-3 h-3 text-cyan-400" />
                        <span>{item.metadata.missionTag}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-in fade-in">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-2 transition-colors z-20"
            >
              <span>CLOSE [ESC]</span>
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-950/60 transition-colors z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-950/60 transition-colors z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Main Container */}
            <div className="max-w-5xl w-full flex flex-col items-center">
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-cyan-400/50 shadow-[0_0_60px_rgba(0,240,255,0.3)] max-h-[70vh] bg-black flex items-center justify-center mb-6">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              {/* Metadata Details Deck */}
              <div className="w-full bg-[#050b1d]/90 backdrop-blur-md rounded-xl p-6 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-xs text-cyan-400 font-bold">
                      {filteredItems[lightboxIndex].archiveCode}
                    </span>
                    <span className="font-mono text-xs text-slate-400">|</span>
                    <span className="font-mono text-xs text-slate-300">
                      {filteredItems[lightboxIndex].category}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                    {filteredItems[lightboxIndex].caption}
                  </p>
                </div>

                <div className="font-mono text-xs text-slate-400 space-y-1 text-right shrink-0">
                  <div className="flex items-center gap-1.5 justify-end">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{filteredItems[lightboxIndex].metadata.location}</span>
                  </div>
                  {filteredItems[lightboxIndex].metadata.lens && (
                    <div>OPTICS: {filteredItems[lightboxIndex].metadata.lens}</div>
                  )}
                  <div className="text-cyan-400 font-semibold">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
