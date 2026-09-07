export interface ArchiveItem {
  id: string;
  archiveCode: string;
  title: string;
  category: 'EVENTS' | 'WORKSHOPS' | 'COMPETITIONS' | 'TEAM MOMENTS' | 'BEHIND THE SCENES' | 'COMMUNITY';
  date: string;
  image: string;
  caption: string;
  metadata: {
    lens?: string;
    exposure?: string;
    missionTag?: string;
    location: string;
  };
}

export const ARCHIVE_DATA: ArchiveItem[] = [
  {
    id: 'arch-01',
    archiveCode: 'OCT 2026',
    title: 'Student Lunar Rover Test Sprint',
    category: 'COMPETITIONS',
    date: 'OCT 2026',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    caption: 'Student engineering team calibrating the optical lidar sensor on simulated regolith terrain.',
    metadata: {
      lens: '35mm f/1.8',
      missionTag: 'ROVER TEST SPRINT',
      location: 'Robotics Prototyping Bay'
    }
  },
  {
    id: 'arch-02',
    archiveCode: 'SEP 2026',
    title: 'Midnight Deep-Sky Stargazing Night',
    category: 'COMMUNITY',
    date: 'SEP 2026',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    caption: 'Members gathered on the campus observatory roof tracking the Pleiades star cluster.',
    metadata: {
      lens: '24mm f/1.4',
      exposure: '25s at ISO 3200',
      missionTag: 'NIGHT OBSERVATION',
      location: 'Campus Observatory Deck'
    }
  },
  {
    id: 'arch-03',
    archiveCode: 'AUG 2026',
    title: 'CanSat Sensor Assembly Session',
    category: 'WORKSHOPS',
    date: 'AUG 2026',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    caption: 'Soldering high-precision barometric pressure sensors into student satellite chassis.',
    metadata: {
      lens: '50mm f/2.0',
      missionTag: 'AVIONICS WORKSHOP',
      location: 'Hardware Prototyping Lab 4'
    }
  },
  {
    id: 'arch-04',
    archiveCode: 'JUL 2026',
    title: 'Committee Planning & Semester Kickoff',
    category: 'TEAM MOMENTS',
    date: 'JUL 2026',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    caption: 'The incoming leadership team brainstorming ideas and dates for the upcoming year events.',
    metadata: {
      missionTag: 'COMMITTEE SYNC',
      location: 'Innovation Hub Lounge'
    }
  },
  {
    id: 'arch-05',
    archiveCode: 'JUN 2026',
    title: 'Ground Antenna Calibration',
    category: 'BEHIND THE SCENES',
    date: 'JUN 2026',
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Setting up the dual-axis antenna to test weather satellite signal reception on the rooftop.',
    metadata: {
      lens: '85mm f/1.8',
      missionTag: 'ANTENNA TESTING',
      location: 'Observation Tower'
    }
  },
  {
    id: 'arch-06',
    archiveCode: 'MAY 2026',
    title: 'AMI ASTRO Annual Exhibition',
    category: 'EVENTS',
    date: 'MAY 2026',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    caption: 'Displaying telescope captures, student rover prototypes, and avionics kits in the college atrium.',
    metadata: {
      missionTag: 'ANNUAL SHOWCASE',
      location: 'Grand College Atrium'
    }
  },
  {
    id: 'arch-07',
    archiveCode: 'APR 2026',
    title: 'Orbital Simulation Python Lab',
    category: 'WORKSHOPS',
    date: 'APR 2026',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    caption: 'Writing numerical physics simulations to model multi-body gravitational motion.',
    metadata: {
      missionTag: 'PYTHON WORKSHOP',
      location: 'Computing Cluster C'
    }
  },
  {
    id: 'arch-08',
    archiveCode: 'MAR 2026',
    title: 'Space Hackathon Awards',
    category: 'COMPETITIONS',
    date: 'MAR 2026',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    caption: 'Celebrating team wins and project demos after our 24-hour collegiate space hackathon.',
    metadata: {
      missionTag: 'HACKATHON FINALE',
      location: 'Innovation Atrium'
    }
  }
];
