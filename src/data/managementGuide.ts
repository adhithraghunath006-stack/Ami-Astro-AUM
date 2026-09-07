export interface GuideSection {
  step: number;
  title: string;
  category: string;
  summary: string;
  filePath: string;
  instructions: string[];
  codeSnippet?: string;
  auditFrequency: string;
}

export const MANAGEMENT_GUIDE: GuideSection[] = [
  {
    step: 1,
    title: 'Event Information & Mission Control Updates',
    category: 'MISSIONS DATA',
    summary: 'Update existing missions or publish new workshops, hackathons, and symposiums without modifying frontend layouts.',
    filePath: 'src/data/missions.ts',
    auditFrequency: 'Before every event launch (Bi-weekly)',
    instructions: [
      'Open src/data/missions.ts to add new event objects to the MISSIONS_DATA array.',
      'Specify unique id, missionNumber, title, category, date, time, venue, status, and maxCapacity.',
      'Set isFeatured: true on the primary upcoming flagship mission (e.g. Innovation Summit) to automatically promote it to the large Hero & Featured cards.',
      'Provide detailed brief, objectives, timeline, speakers, and venue details to populate the interactive sample mission detail modal automatically.'
    ],
    codeSnippet: `{
  id: 'mission-09',
  missionNumber: 'MISSION 09',
  title: 'SPACE AI & ORBITAL ROBOTICS SYMPOSIUM',
  category: 'HACKATHONS',
  date: '22 JAN 2027',
  time: '10:00 AM - 17:00 PM IST',
  venue: 'INNOVATION HUB AUDITORIUM',
  status: 'REGISTRATION OPEN',
  description: 'Prototyping computer vision for deep space satellite docking.',
  registrationUrl: 'https://forms.gle/amiastro-mission-09',
  image: 'https://images.unsplash.com/...',
  maxCapacity: 200,
  registeredCount: 45
}`
  },
  {
    step: 2,
    title: 'Dynamic Registration URLs & Form Redirection',
    category: 'REGISTRATION WORKFLOW',
    summary: 'Redirect attendee buttons to Google Forms, Unstop, Devpost, or internal ticket forms with zero UI rework.',
    filePath: 'src/data/missions.ts',
    auditFrequency: 'Whenever ticket tiers or external form links change',
    instructions: [
      'Every mission entry contains a dedicated registrationUrl property.',
      'Assign an external URL (e.g., https://unstop.com/o/ami-astro-summit) or internal anchor (#register-mission-08).',
      'The UI automatically binds this URL to all "JOIN THE MISSION", "REGISTER NOW", and modal action buttons.'
    ],
    codeSnippet: `// Simple direct URL replacement in src/data/missions.ts:
registrationUrl: 'https://portal.amiastro.edu/register/mission-08'`
  },
  {
    step: 3,
    title: 'Publishing Official Announcements & Transmissions',
    category: 'DISPATCHES & BLOG',
    summary: 'Broadcast new bulletins, recruitment calls, press briefings, or workshop debriefs to the student body.',
    filePath: 'src/data/transmissions.ts',
    auditFrequency: 'Weekly / As announcements occur',
    instructions: [
      'Append a new transmission item to the TRANSMISSIONS_DATA array.',
      'Select appropriate category: RECRUITMENT, MISSION REPORT, CREW UPDATE, TECHNICAL DIGEST, or ANNOUNCEMENT.',
      'Include reading time estimate, date, brief summary for card view, and multiple paragraphs in content array for the interactive modal reader.'
    ],
    codeSnippet: `{
  id: 'tx-005',
  transmissionCode: 'TRANSMISSION 005',
  category: 'ANNOUNCEMENT',
  title: 'AMI ASTRO Signs MoU with National Space Observatory',
  date: '15 OCT 2026',
  summary: 'Students gain direct remote telemetry access to 2.4-meter optical telescopes.',
  readTime: '3 MIN READ',
  priority: 'CRITICAL',
  content: ['Paragraph 1...', 'Paragraph 2...'],
  author: { name: 'Devansh Verma', role: 'President', callsign: 'COMMANDER-01' }
}`
  },
  {
    step: 4,
    title: 'Adding Event Photographs to the Visual Archive',
    category: 'MEDIA ARCHIVE',
    summary: 'Preserve club heritage and showcase high-resolution event, workshop, and stargazing imagery.',
    filePath: 'src/data/archive.ts',
    auditFrequency: 'Within 48 hours post-event',
    instructions: [
      'Upload curated event photography to CDN or public asset storage.',
      'Append new items into ARCHIVE_DATA in src/data/archive.ts.',
      'Tag with appropriate category: EVENTS, WORKSHOPS, COMPETITIONS, TEAM MOMENTS, BEHIND THE SCENES, or COMMUNITY.',
      'Supply camera lens and exposure metadata to reinforce the high-tech command center aesthetic.'
    ],
    codeSnippet: `{
  id: 'arch-09',
  archiveCode: 'ARCH-2026-09',
  title: 'Robotics Team at Inter-College Rover Finals',
  category: 'COMPETITIONS',
  date: 'NOV 2026',
  image: 'https://images.unsplash.com/...',
  caption: 'Squad Alpha securing 1st place in the autonomous traverse run.',
  metadata: { lens: '70-200mm f/2.8', location: 'Desert Field Arena' }
}`
  },
  {
    step: 5,
    title: 'Committee Roster & Department Management',
    category: 'CREW ROSTER',
    summary: 'Seamlessly onboard new student leads, rotate core committee roles, or archive graduating members.',
    filePath: 'src/data/crew.ts',
    auditFrequency: 'At each annual committee handover (August/September)',
    instructions: [
      'Edit CREW_DATA in src/data/crew.ts.',
      'Assign correct department: CORE COMMITTEE, TECHNICAL, DESIGN, MARKETING, EDITORIAL, or OPERATIONS.',
      'Department filter tabs dynamically re-index all cards on the frontend.',
      'Provide member callsigns, portraits, bios, and active social telemetry links (GitHub, LinkedIn, Email).'
    ]
  },
  {
    step: 6,
    title: 'Broken Link & Transmission Health Audits',
    category: 'QUALITY ASSURANCE',
    summary: 'Ensure zero 404 errors, active registration channels, and validated contact endpoints.',
    filePath: 'Automated CI / Manual Check',
    auditFrequency: 'Bi-weekly verification cycle',
    instructions: [
      'Test all outbound links (LinkedIn, GitHub, YouTube, external registration forms).',
      'Verify that contact transmission signals log properly and forms prevent spam.',
      'Check that image CDN URLs are active and load within 1.5 seconds.'
    ]
  },
  {
    step: 7,
    title: 'Monthly Content & Responsive Device Audits',
    category: 'SYSTEM AUDIT',
    summary: 'Maintain high contrast, responsive fluidity, and current club metrics.',
    filePath: 'Telemetry & UI Pass',
    auditFrequency: 'First Monday of every month',
    instructions: [
      'Update the Live Status metrics (Crew count, completed missions, active projects) in src/components/LiveStatus.tsx.',
      'Test UI across Mobile (iPhone/Android, 375px–430px), Tablet (iPad 768px–1024px), and 4K Ultra-wide displays.',
      'Verify that touch targets are at least 44x44px and navigation menus close on selection.'
    ]
  },
  {
    step: 8,
    title: 'Component Reusability & Zero Redesign Overhead',
    category: 'ARCHITECTURE',
    summary: 'Frontend components are purely data-driven. Visual redesigns are never needed for routine updates.',
    filePath: 'src/components/*',
    auditFrequency: 'Permanent architectural standard',
    instructions: [
      'Components (Missions, Crew, Transmissions, Archive) strictly consume typed TypeScript data arrays.',
      'Modals, filters, animations, and responsive grids automatically adapt to any number of items.',
      'The Web Management Team never needs to modify JSX/CSS layouts to keep the website 100% up-to-date.'
    ]
  }
];
