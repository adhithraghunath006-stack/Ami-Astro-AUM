export interface UniverseOrbit {
  id: string;
  orbitNumber: string;
  title: string;
  subtitle: string;
  description: string;
  systemCode: string;
  metric: string;
  metricLabel: string;
  targetSectionId: string;
  highlights: string[];
  color: string;
  radiusFactor: number; // For visualization concentric distance
  speed: number;
}

export const UNIVERSE_ORBITS: UniverseOrbit[] = [
  {
    id: 'orbit-01',
    orbitNumber: 'ORBIT 01',
    title: 'THE CREW',
    subtitle: 'People who make AMI ASTRO happen.',
    description: 'A multidisciplinary collective of student engineers, astrophysics researchers, designers, and organizers driving every initiative.',
    systemCode: 'SYS-CREW • CLUSTER-ALPHA',
    metric: '80+',
    metricLabel: 'Active Members',
    targetSectionId: 'crew',
    highlights: ['Core Committee', 'Technical & Avionics', 'Creative & Design', 'Editorial & Outreach'],
    color: '#00f0ff',
    radiusFactor: 1.0,
    speed: 35
  },
  {
    id: 'orbit-02',
    orbitNumber: 'ORBIT 02',
    title: 'EVENTS',
    subtitle: 'Workshops, observation nights, competitions and talks.',
    description: 'Engaging student experiences: from CanSat atmospheric sensor builds and rooftop stargazing to robotics hackathons.',
    systemCode: 'SYS-EVENTS • VECTOR-BETA',
    metric: '15+',
    metricLabel: 'Conducted Events',
    targetSectionId: 'missions',
    highlights: ['Innovation Summit', 'Rover Challenge', 'CanSat & Avionics Lab', 'Stargazing Nights'],
    color: '#38bdf8',
    radiusFactor: 1.35,
    speed: 48
  },
  {
    id: 'orbit-03',
    orbitNumber: 'ORBIT 03',
    title: 'TRANSMISSIONS',
    subtitle: 'Announcements, news and updates.',
    description: 'Club announcements broadcasting crew onboarding drives, workshop debriefs, and science storytelling articles.',
    systemCode: 'SYS-XMIT • FREQ-GAMMA',
    metric: '20+',
    metricLabel: 'Articles & Updates',
    targetSectionId: 'transmissions',
    highlights: ['Crew Recruitment Drives', 'Hands-on Lab Reports', 'Student Project Reflections', 'Astronomy Guides'],
    color: '#818cf8',
    radiusFactor: 1.7,
    speed: 62
  },
  {
    id: 'orbit-04',
    orbitNumber: 'ORBIT 04',
    title: 'ARCHIVE',
    subtitle: 'Photos, memories and achievements.',
    description: 'The photo memory bank documenting midnight telescope calibrations, workshop demos, and community camaraderie.',
    systemCode: 'SYS-ARCH • STORE-DELTA',
    metric: '300+',
    metricLabel: 'Captured Moments',
    targetSectionId: 'archive',
    highlights: ['Astrophotography', 'Summit Behind-the-Scenes', 'Hardware Prototyping', 'Field Trip Galleries'],
    color: '#a855f7',
    radiusFactor: 2.05,
    speed: 75
  },
  {
    id: 'orbit-05',
    orbitNumber: 'ORBIT 05',
    title: 'CONTACT',
    subtitle: 'Connect with AMI ASTRO.',
    description: 'Open communication channels connecting prospective members, mentors, sponsors, and curious students with the club.',
    systemCode: 'SYS-COMM • UPLINK-EPSILON',
    metric: '< 24h',
    metricLabel: 'Response Time',
    targetSectionId: 'contact',
    highlights: ['Official Club Email', 'Innovation Center Desk', 'Online Contact Form', 'Campus Social Channels'],
    color: '#22d3ee',
    radiusFactor: 2.4,
    speed: 90
  }
];
