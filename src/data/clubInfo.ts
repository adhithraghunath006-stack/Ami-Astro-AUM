import { ClubStat } from '@/types';

export const CLUB_INFO = {
  name: 'AMI-ASTRO',
  fullName: 'AMI-ASTRO Astronomy Club',
  university: 'Amity University Mumbai',
  affiliation: 'Astronomy Club, Amity University Mumbai',
  heroEyebrow: 'LOOK BEYOND.',
  heroHeadline: 'Explore Further.',
  heroTagline:
    'AMI-ASTRO is the astronomy club of Amity University Mumbai, where curiosity meets the cosmos.',
  aboutEyebrow: 'OUR UNIVERSE',
  aboutTitle: 'About AMI-ASTRO',
  aboutParagraph:
    'We are a vibrant community of student stargazers, astrophysicists, and night-sky photographers at Amity University Mumbai. From hands-on Dobsonian telescope sessions on campus to dark-sky expeditions in the Sahyadris, we make the wonder of the cosmos accessible to every curious mind.',

  isDemoNotice:
    'Welcome to AMI-ASTRO, the official astronomy and astrophysics society of Amity University Mumbai.',

  contact: {
    email: 'amiastro@amity.edu',
    phone: '+91 22 7198 2100',
    address: 'Amity University Mumbai, Mumbai - Pune Expressway, Bhatan, Post – Somathne, Panvel, Maharashtra 410206, India',
    campusVenue: 'Open Sports Ground & Academic Block 2 Terrace Observatory',
    clubRoom: 'Academic Block 2, Room 412 (Physics & Astronomy Wing)',
    meetingTime: 'Every alternate Friday at 5:30 PM & Night Stargazing on Clear New-Moon Weekends',
  },

  socials: {
    instagram: 'https://www.instagram.com/ami_astro_mumbai',
    youtube: 'https://youtube.com',
    discord: 'https://discord.com',
    email: 'mailto:amiastro@amity.edu',
  },

  pillars: [
    { title: 'Learn', description: 'Interactive astro-workshops, orbital mechanics, and optics collimation labs.' },
    { title: 'Observe', description: 'Hands-on planetary, lunar, and deep-sky observation with club telescopes.' },
    { title: 'Explore', description: 'Dark-sky camping expeditions across Bortle 3 sites in the Sahyadri mountains.' },
    { title: 'Inspire', description: 'Campus celestial exhibitions, solar eclipse viewings, and guest talks by space scientists.' },
  ],

  stats: [
    { value: 'Est. 2016', label: 'Years of Stargazing', description: 'Founded by passionate physics and engineering students' },
    { value: '500+', label: 'Active Members', description: 'Across undergraduate, postgraduate, and faculty domains' },
    { value: '65+', label: 'Events Conducted', description: 'Observation nights, guest talks, workshops and astrocamps' },
    { value: '∞', label: 'Curiosity Unlimited', description: 'Endless pursuit of wonder beneath the celestial canopy' },
  ] satisfies ClubStat[],

  navLinks: [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'EVENTS', href: '/events' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'ANNOUNCEMENTS', href: '/announcements' },
    { label: 'TEAM', href: '/team' },
    { label: 'CONTACT', href: '/contact' },
  ],
};
