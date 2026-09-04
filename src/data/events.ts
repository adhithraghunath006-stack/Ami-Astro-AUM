import { EventItem } from '@/types';

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'celestial-gathering',
    slug: 'celestial-gathering',
    title: 'Celestial Gathering',
    dateBadge: {
      day: '28',
      month: 'SEP',
      year: '2025',
    },
    fullDateString: '28 September 2025',
    time: 'Sunday, 7:00 PM',
    location: 'Amity University Mumbai Open Ground',
    shortDesc:
      'An evening of telescope observations, celestial talks and cosmic conversations.',
    fullDesc:
      "Join us for an immersive evening under the stars on the open sports ground. We'll explore the crater terraces of the Moon, the golden ring systems of Saturn, and bright deep-sky nebulae through our 10\" Dobsonian and tracking refractor telescopes.",
    bannerImage: '/images/event-gathering.jpg',
    category: 'Stargazing',
    registrationOpen: true,
    highlights: [
      'Telescope Observations',
      'Saturn Rings & Jupiter Moons',
      'Astro Quiz & Prizes',
      'Green Laser Sky Tour',
    ],
    schedule: [
      { time: '06:30 PM', activity: 'Registration desk check-in at Academic Block 2 entrance' },
      { time: '07:00 PM', activity: 'Opening address: Autumn night sky orientation and star lore' },
      { time: '07:45 PM', activity: 'Telescope station walkthrough: High-magnification Saturn & Jupiter' },
      { time: '09:00 PM', activity: 'Live constellation identification with green astronomical lasers' },
      { time: '09:45 PM', activity: 'Cosmic Trivia Quiz and smartphone telescope eyepiece photography' },
      { time: '10:30 PM', activity: 'Closing observations, open Q&A, and stargazing logbook signatures' },
    ],
    prerequisites: [
      'Carry your Amity University student/faculty ID card for security check-in',
      'Wear a warm layer as evening winds cool down the open athletic ground',
      'Red flashlights or mobile phone red-screen mode are encouraged to preserve night vision',
      'Personal binoculars or DSLR cameras with tripods are welcome',
    ],
    contactPerson: {
      name: 'Rohan Kulkarni',
      role: 'Head of Telescopes & Observations',
      contact: 'rohan.kulkarni@amity.edu',
    },
  },
  {
    id: 'meteor-shower-watch',
    slug: 'meteor-shower-watch',
    title: 'Meteor Shower Watch & Dark-Sky Camp',
    dateBadge: {
      day: '12',
      month: 'OCT',
      year: '2025',
    },
    fullDateString: '12 October 2025',
    time: 'Sunday, 8:30 PM',
    location: 'Amity Hills Dark-Sky Outpost, Panvel',
    shortDesc:
      'Witness the annual meteor shower streak across the dark hills above Panvel.',
    fullDesc:
      'Experience the thrilling spectacle of bright meteor fireballs radiating across the autumn night sky. Our astronomy leads will guide you through radiant point triangulation, visual meteor rate tallying for citizen science, and wide-angle night-sky timelapses.',
    bannerImage: '/images/event-meteor.jpg',
    category: 'Expedition',
    registrationOpen: true,
    highlights: [
      'Meteor Rate Tracking',
      'Dark Hill Overlook (Bortle 4)',
      'Night-Sky Camping & Warm Tea',
      'Wide-Angle Long Exposures',
    ],
    schedule: [
      { time: '08:00 PM', activity: 'Assemble at Campus Gate 2 for transport to Hills vantage point' },
      { time: '08:45 PM', activity: 'Camp setup, seating arrangement, and 20-minute dark adaptation' },
      { time: '09:30 PM', activity: 'Visual meteor tally and citizen-science reporting workshop' },
      { time: '11:00 PM - 02:30 AM', activity: 'Peak radiant observation hours, DSLR timelapse setup, and hot beverage break' },
      { time: '03:00 AM', activity: 'Telescope sweep of early winter constellations: Orion, Taurus, and Pleiades' },
    ],
    prerequisites: [
      'Sturdy walking or sports shoes for hill terrain',
      'Warm jackets, windcheaters, and sleeping mats or portable camp chairs',
      'Personal water bottle and light snacks',
      'Camera with manual mode and wide-angle lens if attempting astrophotography',
    ],
    contactPerson: {
      name: 'Ishaan Patil',
      role: 'Dark-Sky Expeditions Lead',
      contact: 'ishaan.patil@amity.edu',
    },
  },
  {
    id: 'astrophotography-workshop',
    slug: 'astrophotography-workshop',
    title: 'Astrophotography & Image Stacking Workshop',
    dateBadge: {
      day: '26',
      month: 'OCT',
      year: '2025',
    },
    fullDateString: '26 October 2025',
    time: 'Sunday, 10:00 AM',
    location: 'Amity University Mumbai Seminar Hall 3',
    shortDesc:
      'Learn deep-sky imaging, camera sensor ISO calibration, and stacked image post-processing.',
    fullDesc:
      'A practical hands-on masterclass covering DSLR/mirrorless astro-imaging, telescope T-ring mounting, equatorial tracking mounts, calibration frames (darks, flats, biases), stacking algorithms in DeepSkyStacker and Siril, and color stretching curves for nebulae.',
    bannerImage: '/images/event-astrophoto.jpg',
    category: 'Workshop',
    registrationOpen: true,
    highlights: [
      'Sensor Optics & Signal-to-Noise',
      'HEQ5 Mount Polar Alignment',
      'Deep-Sky Stacking Demo',
      'Hands-on Siril Curves Lab',
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Introduction to Astrophotography: Equipment, optics, and exposure limits' },
      { time: '11:30 AM', activity: 'Equatorial tracking mounts, polar alignment, and autoguiding principles' },
      { time: '01:00 PM', activity: 'Lunch Break & Peer Project Networking' },
      { time: '02:00 PM', activity: 'Hands-on stacking tutorial: DeepSkyStacker and Photoshop/Siril curves' },
      { time: '04:00 PM', activity: 'Participant portfolio critique and club telescope imaging slots booking' },
    ],
    prerequisites: [
      'Laptop with mouse for post-processing exercises (Siril and DeepSkyStacker download links sent in email)',
      'DSLR or mirrorless camera (optional; raw practice datasets provided on flash drives)',
      'Notebook and curiosity for astronomical image processing',
    ],
    contactPerson: {
      name: 'Tanvi Joshi',
      role: 'Head of Astrophotography & Media',
      contact: 'tanvi.joshi@amity.edu',
    },
  },
  {
    id: 'deep-sky-messier-marathon',
    slug: 'deep-sky-messier-marathon',
    title: 'Deep Sky Messier Marathon',
    dateBadge: {
      day: '15',
      month: 'NOV',
      year: '2025',
    },
    fullDateString: '15 November 2025',
    time: 'Saturday, 6:00 PM',
    location: 'Lonavala Dark Sky Basecamp (Sahyadri Range)',
    shortDesc:
      'An all-night observation marathon to spot and sketch nebulae, galaxies, and star clusters.',
    fullDesc:
      'The ultimate observational test for amateur astronomers: hunting as many Messier deep-sky objects as possible from dusk till dawn using our 8" and 10" Dobsonian optical reflectors under pristine Bortle 3 skies.',
    bannerImage: '/images/event-marathon.jpg',
    category: 'Observation',
    registrationOpen: true,
    highlights: [
      '8" & 10" Dobsonian Telescopes',
      'Official Messier Logbooks',
      'All-Night Basecamp Observation',
      'Certificate of Observation',
    ],
    schedule: [
      { time: '06:00 PM', activity: 'Basecamp check-in and primary mirror laser collimation' },
      { time: '07:30 PM', activity: 'Dusk targets: Andromeda Galaxy (M31) & Triangulum Galaxy (M33)' },
      { time: '10:30 PM', activity: 'Winter highlights: Great Orion Nebula (M42), Crab Nebula (M1), Pleiades' },
      { time: '01:30 AM', activity: 'Midnight globular cluster sweep: M3, M53, and Coma Berenices clusters' },
      { time: '04:30 AM', activity: 'Pre-dawn planetary alignment and morning crescent Moon rise' },
    ],
    prerequisites: [
      'Prior participation in at least one campus stargazing night recommended',
      'Warm layers for mountain temperatures dropping below 12°C',
      'Red headlight or flashlight (white light strictly prohibited on observing field)',
      'Personal logbook and sketching pencil',
    ],
    contactPerson: {
      name: 'Ananya Iyer',
      role: 'Vice President & Observations Coordinator',
      contact: 'ananya.iyer@amity.edu',
    },
  },
  {
    id: 'supermoon-observation-night',
    slug: 'supermoon-observation-night',
    title: 'Supermoon & Lunar Terminator Night',
    dateBadge: {
      day: '05',
      month: 'DEC',
      year: '2025',
    },
    fullDateString: '05 December 2025',
    time: 'Friday, 6:30 PM',
    location: 'Academic Block 2 Terrace Observatory',
    shortDesc:
      'High-magnification lunar crater exploration and smartphone astrophotography session.',
    fullDesc:
      'Celebrate the brightest supermoon of the year! Through high-magnification lunar filters and Barlow lenses, we will resolve mountain peaks, crater rilles, and the Copernicus crater ray system along the lunar terminator line.',
    bannerImage: '/images/gallery-moon.jpg',
    category: 'Stargazing',
    registrationOpen: true,
    highlights: [
      'High-Power Lunar Barlow Views',
      'Phone Eyepiece Adapter Station',
      'Lunar Mineral Mapping Talk',
      'Open to All University Students',
    ],
    schedule: [
      { time: '06:30 PM', activity: 'Terrace doors open & telescope alignment' },
      { time: '07:15 PM', activity: 'Talk: Geology of the Moon and the Apollo Landing Sites' },
      { time: '08:00 PM', activity: 'Telescope queue: Copernicus crater and Montes Apenninus' },
      { time: '09:15 PM', activity: 'Smartphone photography booth with universal phone clamp mounts' },
    ],
    prerequisites: [
      'University ID card for terrace access',
      'Smartphone with fully charged battery for lunar photography',
    ],
    contactPerson: {
      name: 'Aarav Deshmukh',
      role: 'Club President',
      contact: 'aarav.deshmukh@amity.edu',
    },
  },
  {
    id: 'daytime-solar-astronomy',
    slug: 'daytime-solar-astronomy',
    title: 'Daytime Solar Spectroscopy & Sunspot Watch',
    dateBadge: {
      day: '19',
      month: 'DEC',
      year: '2025',
    },
    fullDateString: '19 December 2025',
    time: 'Friday, 1:30 PM - 4:30 PM',
    location: 'Amity Central Courtyard',
    shortDesc:
      'Safe daytime solar observations featuring white-light and hydrogen-alpha filtered telescopes.',
    fullDesc:
      'Explore our home star! Using certified Baader solar filters and specialized hydrogen-alpha Coronado scopes, students can safely observe solar prominences leaping from the solar limb, magnetic sunspot groups, and solar flare activity in real time.',
    bannerImage: '/images/about-stargazers.jpg',
    category: 'Workshop',
    registrationOpen: true,
    highlights: [
      'Certified Baader Solar Filters',
      'Coronado H-Alpha Telescope',
      'Sunspot Tracking Logbooks',
      'Solar Magnetic Cycle Lecture',
    ],
    schedule: [
      { time: '01:30 PM', activity: 'Telescope station setup in central courtyard' },
      { time: '02:00 PM', activity: 'Briefing: Solar safety rules and optical physics of solar filters' },
      { time: '02:30 PM', activity: 'Live sunspot sketching and magnetic classification' },
      { time: '03:45 PM', activity: 'Solar prominence viewing through Hydrogen-Alpha narrowband optics' },
    ],
    prerequisites: [
      'No personal optical gear permitted unless pre-approved for certified solar safety',
      'Sunglasses and hat for sunny courtyard conditions',
    ],
    contactPerson: {
      name: 'Dr. Vikram Sengupta',
      role: 'Faculty Mentor & Advisory Head',
      contact: 'vsengupta@amity.edu',
    },
  },
];
