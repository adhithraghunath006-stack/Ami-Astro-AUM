export interface AstroTalk {
  id: string;
  title: string;
  speaker: string;
  speakerFormerRole: string;
  currentRole: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  keyTakeaways: string[];
  status: 'OPEN FOR REGISTRATION' | 'UPCOMING' | 'ARCHIVED';
  avatar: string;
}

export const ASTRO_TALKS_DATA: AstroTalk[] = [
  {
    id: 'talk-01',
    title: 'FROM CAMPUS TO CAREER',
    speaker: 'Vikramaditya Sengupta',
    speakerFormerRole: 'Founding President (2023 - 2024)',
    currentRole: 'Flight Dynamics Engineer at OrbitX Aerospace',
    date: '20 SEP 2026',
    time: '17:30 - 19:00 IST',
    venue: 'Seminar Hall 3 & Google Meet',
    description: 'An honest conversation about transitioning from collegiate engineering projects to landing full-time aerospace roles, building personal portfolios, and standing out in technical interviews.',
    keyTakeaways: [
      'How hands-on club projects count as real engineering experience',
      'Translating student research into portfolio case studies',
      'Networking with aerospace mentors and industry fellows',
      'Open Q&A on internships and graduate school applications'
    ],
    status: 'OPEN FOR REGISTRATION',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'talk-02',
    title: 'LEADING A STUDENT COMMUNITY',
    speaker: 'Priyanka Namboodiri',
    speakerFormerRole: 'Former President (2024 - 2025)',
    currentRole: 'Aerospace Systems Fellow at ISRO Research Center',
    date: '04 OCT 2026',
    time: '18:00 - 19:30 IST',
    venue: 'Innovation Hub Lounge',
    description: 'Practical lessons on leadership, delegating technical sprints, managing cross-departmental teams, resolving creative disagreements, and keeping members inspired throughout high-pressure semesters.',
    keyTakeaways: [
      'Building a culture where juniors feel confident pitching ideas',
      'Balancing club commitments with heavy academic workloads',
      'Pitching for college event budgets and external sponsorships',
      'Handling handovers and sustaining institutional memory'
    ],
    status: 'OPEN FOR REGISTRATION',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'talk-03',
    title: 'WHAT I WISH I KNEW',
    speaker: 'Anoushka Roy & Tanmay Kulkarni',
    speakerFormerRole: 'Secretary & Lead Avionics (Class of 2024)',
    currentRole: 'Product Designer at Razorpay & Embedded Engineer at TI',
    date: '18 OCT 2026',
    time: '17:00 - 18:30 IST',
    venue: 'Avionics Lab Open Bay',
    description: 'An informal, no-filter fireside chat reflecting on mistakes made, risks worth taking, finding your niche between software and hardware, and making college years genuinely memorable.',
    keyTakeaways: [
      'Why you do not need to be an astrophysics genius to join AMI ASTRO',
      'The power of cross-disciplinary teamwork between designers and coders',
      'Navigating career uncertainty and shifting interests in college',
      'Open mic session for first-year and second-year students'
    ],
    status: 'UPCOMING',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  }
];
