export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  speakerOrLead?: string;
}

export interface ObjectiveItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SpeakerItem {
  name: string;
  role: string;
  affiliation: string;
  avatar: string;
  topic?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Mission {
  id: string;
  missionNumber: string;
  title: string;
  category: 'WORKSHOPS' | 'COMPETITIONS' | 'HACKATHONS' | 'TALKS' | 'COMMUNITY';
  date: string;
  time: string;
  venue: string;
  status: 'REGISTRATION OPEN' | 'LIMITED SLOTS' | 'UPCOMING' | 'COMPLETED';
  description: string;
  registrationUrl: string;
  image: string;
  isFeatured?: boolean;
  maxCapacity: number;
  registeredCount: number;
  brief?: string;
  objectives?: ObjectiveItem[];
  timeline?: TimelineItem[];
  speakers?: SpeakerItem[];
  venueDetails?: {
    building: string;
    coordinates: string;
    gate: string;
    accessibility: string;
  };
  faqs?: FaqItem[];
}

export const MISSIONS_DATA: Mission[] = [
  {
    id: 'mission-08',
    missionNumber: 'EVENT 08',
    title: 'AMI ASTRO INNOVATION SUMMIT 2026',
    category: 'HACKATHONS',
    date: '14 DEC 2026',
    time: '10:00 AM - 18:00 PM IST',
    venue: 'Main Auditorium, Level 3',
    status: 'REGISTRATION OPEN',
    description: 'A day of ideas, conversations, workshops and people coming together to explore what is next.',
    registrationUrl: '#register-mission-08',
    image: 'https://images.unsplash.com/photo-1517976487541-11d23485c276?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    maxCapacity: 150,
    registeredCount: 88,
    brief: 'AMI ASTRO Innovation Summit 2026 brings together curious minds, student builders, and guest speakers across college. Over 8 engaging hours, participants take part in hands-on workshops, hear from people working in aerospace and tech, and collaborate on exciting student project showcases.',
    objectives: [
      {
        id: 'obj-1',
        title: 'Real-world Learning',
        description: 'Hands-on exposure to sensor hardware, microcontroller programming, and telemetry visualization.',
        iconName: 'Radio'
      },
      {
        id: 'obj-2',
        title: 'Collaborative Problem Solving',
        description: 'Work in small multidisciplinary teams to design creative prototypes and engineering solutions.',
        iconName: 'Cpu'
      },
      {
        id: 'obj-3',
        title: 'Project Showcases',
        description: 'Present team ideas before a friendly panel of faculty mentors and industry alumni.',
        iconName: 'Trophy'
      },
      {
        id: 'obj-4',
        title: 'Community & Connections',
        description: 'Meet fellow students from Computer Science, Mechanical, Electronics, and Design departments.',
        iconName: 'Compass'
      }
    ],
    timeline: [
      {
        time: '10:00 AM',
        title: 'Check-in & Welcome Kit',
        description: 'Badge pickup, team matching for solo participants, and morning refreshments.'
      },
      {
        time: '10:30 AM',
        title: 'Welcome & Summit Kickoff',
        description: 'Brief opening remarks from the current committee and introduction of workshop tracks.'
      },
      {
        time: '11:00 AM',
        title: 'Guest Keynote: Building Things in College',
        description: 'An informal session with an aerospace industry mentor on turning curiosity into projects.',
        speakerOrLead: 'Dr. Elena Vance, Senior Aerospace Consultant'
      },
      {
        time: '12:30 PM',
        title: 'Breakout Workshops',
        description: 'Interactive tracks: Microcontroller Sensor Basics vs. Planetary Trajectory Simulation in Python.'
      },
      {
        time: '14:00 PM',
        title: 'Rapid Prototyping Challenge',
        description: 'Teams spend the afternoon building, testing, and preparing project demonstrations.'
      },
      {
        time: '17:00 PM',
        title: 'Project Demos & Wrap-up',
        description: 'Informal demos, feedback from judges, awards, and networking.'
      }
    ],
    speakers: [
      {
        name: 'Dr. Elena Vance',
        role: 'Aerospace Systems Consultant',
        affiliation: 'Former Orbital Dynamics Researcher',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
        topic: 'Student projects to industry careers'
      },
      {
        name: 'Aarav Nair',
        role: 'Technical Lead',
        affiliation: 'AMI ASTRO Committee',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        topic: 'Telemetry data streaming with ESP32'
      },
      {
        name: 'Vikramaditya Sengupta',
        role: 'Flight Dynamics Engineer',
        affiliation: 'Alumnus & Founding President',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
        topic: 'Lessons from the first years of AMI ASTRO'
      }
    ],
    venueDetails: {
      building: 'Aero-Mechanical Science & Innovation Block, Level 3',
      coordinates: '28.5450° N, 77.1926° E',
      gate: 'North Gate Access • Terminal 2 Entrance',
      accessibility: 'High-speed campus Wi-Fi, power ports at every table, wheelchair accessible.'
    },
    faqs: [
      {
        question: 'Who can participate in this event?',
        answer: 'Any enrolled student regardless of year or department. You do not need prior aerospace or robotics experience — curiosity and enthusiasm are all that count.'
      },
      {
        question: 'Can I join individually or do I need a team?',
        answer: 'You are welcome to register individually and join a team during the morning team-matching session, or sign up with friends (teams of 2 to 4).'
      },
      {
        question: 'What do I need to bring?',
        answer: 'Just bring your laptop and charger. All microcontrollers, sensors, breadboards, and workshop components will be provided at the tables.'
      },
      {
        question: 'Will participants receive a certificate of participation?',
        answer: 'Yes, all attendees receive an official certificate from AMI ASTRO recognizing their participation and project demo.'
      }
    ]
  },
  {
    id: 'mission-07',
    missionNumber: 'EVENT 07',
    title: 'CANSAT & SENSOR WORKSHOP',
    category: 'WORKSHOPS',
    date: '28 OCT 2026',
    time: '14:00 PM - 18:00 PM IST',
    venue: 'Avionics Lab 402',
    status: 'LIMITED SLOTS',
    description: 'Learn to assemble miniature sensor packages with barometric altitude monitors, temperature sensors, and radio transmitters.',
    registrationUrl: '#register-mission-07',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    maxCapacity: 40,
    registeredCount: 32
  },
  {
    id: 'mission-06',
    missionNumber: 'EVENT 06',
    title: 'DEEP SKY OBSERVATION & STARGAZING NIGHT',
    category: 'COMMUNITY',
    date: '15 NOV 2026',
    time: '20:00 PM - 02:00 AM IST',
    venue: 'Campus Observatory & Roof Deck',
    status: 'REGISTRATION OPEN',
    description: 'An all-night stargazing session tracking Saturn rings, Jupiter moons, and learning night sky astrophotography with manual telescopes.',
    registrationUrl: '#register-mission-06',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    maxCapacity: 60,
    registeredCount: 48
  },
  {
    id: 'mission-05',
    missionNumber: 'EVENT 05',
    title: 'STUDENT ROVER CODING CHALLENGE',
    category: 'COMPETITIONS',
    date: '05 DEC 2026',
    time: '09:00 AM - 18:00 PM IST',
    venue: 'Robotics Prototyping Bay',
    status: 'UPCOMING',
    description: 'Program autonomous obstacle avoidance and pathfinding algorithms on scaled rover terrain beds.',
    registrationUrl: '#register-mission-05',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    maxCapacity: 50,
    registeredCount: 22
  },
  {
    id: 'mission-04',
    missionNumber: 'EVENT 04',
    title: 'EXOPLANETS & SPACE TELESCOPES TALK',
    category: 'TALKS',
    date: '19 JAN 2027',
    time: '16:30 PM - 18:00 PM IST',
    venue: 'Seminar Hall B',
    status: 'UPCOMING',
    description: 'An accessible discussion on how astronomers detect transit dips and analyze atmospheric signatures on distant exoplanets.',
    registrationUrl: '#register-mission-04',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
    maxCapacity: 90,
    registeredCount: 28
  }
];
