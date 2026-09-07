import React, { useState } from 'react';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveStatus } from './components/LiveStatus';
import { About } from './components/About';
import { WhatsHappening } from './components/WhatsHappening';
import { Missions } from './components/Missions';
import { Crew } from './components/Crew';
import { AstroTalks } from './components/AstroTalks';
import { Alumni } from './components/Alumni';
import { CommunityVoices } from './components/CommunityVoices';
import { UniverseOrbits } from './components/UniverseOrbits';
import { Archive } from './components/Archive';
import { Transmissions } from './components/Transmissions';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MissionDetailModal } from './components/MissionDetailModal';
import { JoinModal } from './components/JoinModal';
import { ManagementGuideModal } from './components/ManagementGuideModal';
import type { Mission } from './data/missions';

export const App: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCrewClick = () => {
    const el = document.getElementById('crew');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      {/* Dynamic Starfield Canvas Background */}
      <StarfieldCanvas />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Glassmorphic Navbar */}
        <Navbar
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
          onOpenGuideModal={() => setIsGuideModalOpen(true)}
        />

        <main className="flex-grow">
          {/* 1. Welcome Hero with 3D Explorer / Orbital Switcher */}
          <Hero
            onExploreClick={handleExploreClick}
            onCrewClick={handleCrewClick}
          />

          {/* 2. Community Status Bar */}
          <LiveStatus />

          {/* 3. What is AMI ASTRO? (The Mission & Four Pillars) */}
          <About />

          {/* 4. What's Happening (Current updates & recruitment countdown) */}
          <WhatsHappening
            onOpenJoinModal={() => setIsJoinModalOpen(true)}
            onNavigateToSection={handleNavigateToSection}
          />

          {/* 5. AMI ASTRO Events (Featured Crew Onboarding 2026 + Event Cards) */}
          <Missions
            onSelectMission={(mission) => setSelectedMission(mission)}
            onOpenJoinModal={() => setIsJoinModalOpen(true)}
            onCrewClick={handleCrewClick}
          />

          {/* 6. Meet The Crew (Current student committee) */}
          <Crew />

          {/* 7. Astro Talks (Alumni guest sessions & registration) */}
          <AstroTalks />

          {/* 8. The People Who Came Before Us (AMI ASTRO Alumni) */}
          <Alumni />

          {/* 9. From The AMI ASTRO Community (Warm testimonials) */}
          <CommunityVoices />

          {/* 10. The AMI ASTRO Universe (Signature orbital architecture) */}
          <UniverseOrbits />

          {/* 11. Visual Archive (Photo gallery & lightbox) */}
          <Archive />

          {/* 12. Stories & Updates (Transmissions / blog) */}
          <Transmissions />

          {/* 13. Let's Connect (Contact terminal) */}
          <Contact />
        </main>

        {/* 14. Humanized Monumental Footer */}
        <Footer
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
          onOpenGuideModal={() => setIsGuideModalOpen(true)}
        />
      </div>

      {/* Interactive Sample Event Detail Page / Modal */}
      <MissionDetailModal
        mission={selectedMission}
        onClose={() => setSelectedMission(null)}
      />

      {/* Recruitment Modal: Join AMI ASTRO */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      {/* Website Management Team Manual Guide */}
      <ManagementGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />
    </div>
  );
};

export default App;
