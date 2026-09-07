export interface CrewMember {
  id: string;
  name: string;
  position: string;
  department: 'CORE COMMITTEE' | 'TECHNICAL' | 'DESIGN' | 'MARKETING' | 'EDITORIAL' | 'OPERATIONS';
  specialty: string;
  yearAndMajor: string;
  photo: string;
  bio: string;
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export const CREW_DATA: CrewMember[] = [
  // CORE COMMITTEE
  {
    id: 'crew-01',
    name: 'Devansh Verma',
    position: 'President',
    department: 'CORE COMMITTEE',
    specialty: 'Leadership & Student Projects',
    yearAndMajor: '4th Year, Mechanical Engineering',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Passionate about student rocketry and open-source robotics. Leads overall club initiatives, mentorship sessions, and partnerships with college departments.',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'president@amiastro.edu'
    }
  },
  {
    id: 'crew-02',
    name: 'Ananya Singhania',
    position: 'Vice President',
    department: 'CORE COMMITTEE',
    specialty: 'Community & Event Planning',
    yearAndMajor: '3rd Year, Computer Science',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Oversees day-to-day club operations, event scheduling, and collaboration between technical and creative teams.',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'vp@amiastro.edu'
    }
  },
  // TECHNICAL
  {
    id: 'crew-03',
    name: 'Aarav Nair',
    position: 'Technical Lead (Software)',
    department: 'TECHNICAL',
    specialty: 'Full-Stack & Telemetry',
    yearAndMajor: '3rd Year, Information Technology',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Builds real-time data streaming tools and web visualizers for sensor kits. Loves teaching juniors how to write clean TypeScript and Python.',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'tech@amiastro.edu'
    }
  },
  {
    id: 'crew-04',
    name: 'Kavya Subramaniam',
    position: 'Avionics & Hardware Lead',
    department: 'TECHNICAL',
    specialty: 'Microcontrollers & Sensors',
    yearAndMajor: '3rd Year, Electronics & Comm.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Enthusiastic about breadboards, soldering, and miniature satellite payloads. Conducts hands-on Arduino and CanSat hardware workshops.',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'hardware@amiastro.edu'
    }
  },
  // DESIGN
  {
    id: 'crew-05',
    name: 'Tanya Joshi',
    position: 'Creative & Design Lead',
    department: 'DESIGN',
    specialty: 'UI/UX & Brand Design',
    yearAndMajor: '3rd Year, Visual Communication',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Directs the aesthetic direction of AMI ASTRO. Creates posters, event graphics, digital interfaces, and club merchandise.',
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'design@amiastro.edu'
    }
  },
  {
    id: 'crew-06',
    name: 'Kabir Mehta',
    position: '3D & Motion Designer',
    department: 'DESIGN',
    specialty: 'Blender & Spatial Visuals',
    yearAndMajor: '2nd Year, Computer Engineering',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Models 3D spacecraft, rovers, and planetary orbits. Loves experimenting with three.js, Blender animation, and motion graphics.',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: '3d@amiastro.edu'
    }
  },
  // MARKETING
  {
    id: 'crew-07',
    name: 'Siddharth Rao',
    position: 'Head of Outreach & Sponsorships',
    department: 'MARKETING',
    specialty: 'Sponsorships & Campus Relations',
    yearAndMajor: '3rd Year, Business Administration',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    bio: 'Connects the club with aerospace mentors, industry speakers, and university sponsors while managing campus publicity.',
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'outreach@amiastro.edu'
    }
  },
  // EDITORIAL
  {
    id: 'crew-08',
    name: 'Meera Nambiar',
    position: 'Chief Editor',
    department: 'EDITORIAL',
    specialty: 'Writing & Astrojournal',
    yearAndMajor: '3rd Year, Physics & Media',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bio: 'Writes and edits club newsletters, event debriefs, and explains complex astronomy concepts in engaging, easy-to-digest formats.',
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'editorial@amiastro.edu'
    }
  },
  // OPERATIONS
  {
    id: 'crew-09',
    name: 'Rishi Sen',
    position: 'Head of Logistics & Equipment',
    department: 'OPERATIONS',
    specialty: 'Telescope Setup & Event Operations',
    yearAndMajor: '2nd Year, Mechanical Engineering',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: 'Manages telescope deployments, workshop venue setups, night observation equipment, and field trip permissions.',
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'ops@amiastro.edu'
    }
  }
];
