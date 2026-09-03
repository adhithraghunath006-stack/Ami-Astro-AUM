import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ActivitiesSection from '@/components/home/ActivitiesSection';
import HomeEventsSection from '@/components/home/HomeEventsSection';
import HomeGallerySpotlight from '@/components/home/HomeGallerySpotlight';
import HomeDispatchesSection from '@/components/home/HomeDispatchesSection';
import JoinCtaSection from '@/components/home/JoinCtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <HomeEventsSection />
      <HomeGallerySpotlight />
      <HomeDispatchesSection />
      <JoinCtaSection />
    </>
  );
}
