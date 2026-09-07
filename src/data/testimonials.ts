export interface CommunityVoice {
  id: string;
  quote: string;
  author: string;
  role: string;
  batch: string;
  avatar: string;
}

export const COMMUNITY_VOICES: CommunityVoice[] = [
  {
    id: 'comm-01',
    quote: 'AMI ASTRO gave me the opportunity to work with people I would never have met otherwise. Staying up till 3 AM on the observatory roof tracking Saturn rings with an eight-inch Dobsonian is still my favorite college memory.',
    author: 'Vikramaditya Sengupta',
    role: 'Alumnus & Founding President',
    batch: 'Batch of 2024',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'comm-02',
    quote: 'I joined in my first semester without knowing how to solder a single wire. Within six months, my team had built a working CanSat sensor array that transmitted telemetry from 100 meters up. The mentorship here is unmatched.',
    author: 'Kavya Subramaniam',
    role: 'Lead Hardware & Avionics',
    batch: 'Class of 2027',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'comm-03',
    quote: 'As a design student, I never expected to find a home in a space technology club. But at AMI ASTRO, design is treated as a core pillar. Designing our visual identity and event interfaces taught me more than any textbook.',
    author: 'Tanya Joshi',
    role: 'Creative Director',
    batch: 'Class of 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'comm-04',
    quote: 'What makes this club special isn’t just the telescopes or the rovers. It is the culture of genuine curiosity. Everyone is eager to help, explain, debug code, and celebrate small wins together.',
    author: 'Aarav Nair',
    role: 'Technical Lead',
    batch: 'Class of 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];
