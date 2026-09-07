export interface AlumniMember {
  id: string;
  name: string;
  role: string;
  category: 'PAST PRESIDENTS' | 'PAST SECRETARIES' | 'FORMER CREW';
  tenure: string;
  photo: string;
  currentRole: string;
  currentOrg: string;
  note: string;
  linkedin?: string;
  github?: string;
}

export const ALUMNI_DATA: AlumniMember[] = [
  // PAST PRESIDENTS
  {
    id: 'alum-01',
    name: 'Vikramaditya Sengupta',
    role: 'Founding President',
    category: 'PAST PRESIDENTS',
    tenure: '2023 - 2024',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    currentRole: 'Flight Dynamics Engineer',
    currentOrg: 'OrbitX Aerospace',
    note: 'Established the AMI ASTRO charter, secured our first campus observation deck permissions, and led the initial CanSat prototype builds.',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'alum-02',
    name: 'Priyanka Namboodiri',
    role: 'President',
    category: 'PAST PRESIDENTS',
    tenure: '2024 - 2025',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    currentRole: 'Aerospace Systems Fellow',
    currentOrg: 'ISRO Research Center',
    note: 'Expanded club membership to over 80 students across 6 departments and launched our flagship annual student astronomy summit.',
    linkedin: 'https://linkedin.com'
  },
  // PAST SECRETARIES
  {
    id: 'alum-03',
    name: 'Shaurya Mehra',
    role: 'General Secretary',
    category: 'PAST SECRETARIES',
    tenure: '2023 - 2024',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    currentRole: 'Robotics Software Engineer',
    currentOrg: 'Autonomous Terra Labs',
    note: 'Streamlined club operations, managed lab equipment inventories, and organized our first 36-hour inter-college space hackathon.',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'alum-04',
    name: 'Anoushka Roy',
    role: 'General Secretary',
    category: 'PAST SECRETARIES',
    tenure: '2024 - 2025',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    currentRole: 'Product Designer',
    currentOrg: 'Razorpay',
    note: 'Designed the original visual guidelines for AMI ASTRO, established our social media community, and initiated the Astro Talks lecture series.',
    linkedin: 'https://linkedin.com'
  },
  // FORMER CREW
  {
    id: 'alum-05',
    name: 'Tanmay Kulkarni',
    role: 'Lead Avionics Designer',
    category: 'FORMER CREW',
    tenure: 'Class of 2024',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    currentRole: 'Embedded Systems Engineer',
    currentOrg: 'Texas Instruments',
    note: 'Designed the high-altitude telemetry PCB boards that won 1st prize at the National University CubeSat Challenge.',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    id: 'alum-06',
    name: 'Diya Mathur',
    role: 'Head of Content & Astrojournal',
    category: 'FORMER CREW',
    tenure: 'Class of 2025',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    currentRole: 'Science Communicator & Writer',
    currentOrg: 'Cosmos Media Hub',
    note: 'Authored over 30 educational articles explaining orbital mechanics and astrophysics in simple, accessible language for students.',
    linkedin: 'https://linkedin.com'
  }
];
