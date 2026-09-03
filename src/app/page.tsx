import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ActivitiesSection from '@/components/home/ActivitiesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
    </>
  );
}
