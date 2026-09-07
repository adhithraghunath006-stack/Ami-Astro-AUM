export interface Transmission {
  id: string;
  transmissionCode: string;
  category: 'RECRUITMENT' | 'WORKSHOP REPORT' | 'CREW UPDATE' | 'STUDENT PROJECT' | 'ANNOUNCEMENT';
  title: string;
  date: string;
  summary: string;
  readTime: string;
  priority: 'IMPORTANT' | 'UPDATE';
  content: string[];
  author: {
    name: string;
    role: string;
  };
}

export const TRANSMISSIONS_DATA: Transmission[] = [
  {
    id: 'tx-001',
    transmissionCode: 'UPDATE 01',
    category: 'RECRUITMENT',
    title: 'Applications for the AMI ASTRO crew are now open.',
    date: '01 SEP 2026',
    summary: 'Our annual onboarding drive for 2026-2027 is live. We are welcoming curious students across coding, electronics, design, storytelling, and event planning.',
    readTime: '2 min read',
    priority: 'IMPORTANT',
    content: [
      'We are officially opening applications for the new academic year. Whether you want to build sensor payloads, design event visuals, organize telescope observation nights, or write for our student journal, there is a place for you in AMI ASTRO.',
      'You do not need to be an aerospace expert or have prior robotics experience. What matters most to us is curiosity, enthusiasm to learn, and a willingness to collaborate with fellow students.',
      'Applications close on 15 September 2026. Hit the "Apply to Join" button on the website to submit your details!'
    ],
    author: {
      name: 'Devansh Verma',
      role: 'President'
    }
  },
  {
    id: 'tx-002',
    transmissionCode: 'UPDATE 02',
    category: 'WORKSHOP REPORT',
    title: 'Inside our latest student workshop: Hands-on sensor payloads.',
    date: '24 AUG 2026',
    summary: 'Over 40 students built and programmed miniature sensor modules receiving real-time altitude, pressure, and temperature data.',
    readTime: '3 min read',
    priority: 'UPDATE',
    content: [
      'Last weekend, we hosted our introductory CanSat & Avionics workshop in Lab 402. First-year and second-year students teamed up to assemble sensor breadboards using ESP32 chips and pressure sensors.',
      'By the afternoon, teams were graphing real-time altitude curves using simple web dashboards. Seeing attendees light up when their radio packets were received across the hall was the best part of the day.',
      'A huge shoutout to our hardware team and student mentors who spent their Saturday guiding everyone through debugging circuits!'
    ],
    author: {
      name: 'Kavya Subramaniam',
      role: 'Avionics & Hardware Lead'
    }
  },
  {
    id: 'tx-003',
    transmissionCode: 'UPDATE 03',
    category: 'CREW UPDATE',
    title: 'Welcoming the new student committee for 2026-2027.',
    date: '10 AUG 2026',
    summary: 'Meet the team of students coordinating upcoming workshops, stargazing nights, hackathons, and community sessions this year.',
    readTime: '2 min read',
    priority: 'UPDATE',
    content: [
      'We are excited to introduce this year’s committee. Our team brings together students from Mechanical, Computer Science, Electronics, Physics, and Media departments.',
      'Our goals this year are simple: more hands-on weekend builds, beginner-friendly workshops, regular rooftop stargazing, and an engaging Astro Talks series with alumni.',
      'Feel free to reach out to any of us around campus or via email if you have ideas for projects or events you’d love to see happen.'
    ],
    author: {
      name: 'Meera Nambiar',
      role: 'Chief Editor'
    }
  },
  {
    id: 'tx-004',
    transmissionCode: 'UPDATE 04',
    category: 'STUDENT PROJECT',
    title: 'Building our student lunar rover: What we learned on the test track.',
    date: '18 JUL 2026',
    summary: 'Reflections from our robotics team on testing wheel grip, lidar obstacle sensing, and steering on simulated terrain.',
    readTime: '4 min read',
    priority: 'UPDATE',
    content: [
      'Testing small wheeled rovers on gravel and rough surfaces taught us why simulations never tell the full story. Slippage, motor torque drops, and sensor vibrations kept us on our toes.',
      'By combining optical wheel sensors with an accelerometer filter, the software team improved straight-line path tracking significantly.',
      'All code and circuit diagrams are shared open-source in our club repository for anyone curious to tinker with.'
    ],
    author: {
      name: 'Aarav Nair',
      role: 'Technical Lead'
    }
  }
];
