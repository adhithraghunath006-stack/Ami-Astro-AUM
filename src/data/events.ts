import { EventItem } from '@/types';

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'moon-near-mars-jupiter',
    slug: 'moon-near-mars-jupiter',
    title: 'Moon Near Mars & Jupiter',
    dateBadge: {
      day: '06-08',
      month: 'SEP',
      year: '2026',
    },
    fullDateString: '06 - 08 September 2026',
    time: 'Early Morning (Before sunrise), 4:15 AM - 5:45 AM',
    location: 'Amity University Mumbai Observation Deck & Sports Ground',
    shortDesc:
      'The Moon appears close to Mars and Jupiter in the early morning predawn hours.',
    fullDesc:
      "Witness a spectacular predawn celestial conjunction as the waning crescent Moon appears in close visual proximity to the red planet Mars and giant Jupiter in the eastern sky. Using our high-magnification Dobsonian telescopes and tracking mounts, club members and visitors will resolve Jupiter's Galilean moons, cloud belts, and the distinct reddish hue of Mars before the morning dawn breaks.",
    bannerImage: '/images/events/banner-moon-mars-jupiter.jpg',
    category: 'Observation',
    registrationOpen: true,
    highlights: [
      'Predawn Planetary Alignment',
      'Galilean Moons (Io, Europa, Ganymede, Callisto)',
      'Mars Atmospheric Surface Hue',
      'High-Magnification Barlow Eyepieces',
    ],
    schedule: [
      { time: '04:00 AM', activity: 'Terrace and observation deck gates open; optical telescope polar check' },
      { time: '04:20 AM', activity: 'First naked-eye orientation of the Moon, Mars, and Jupiter triangle in the east' },
      { time: '04:45 AM', activity: 'High-power 10" Dobsonian queue: Jupiter atmospheric bands and Galilean satellites' },
      { time: '05:15 AM', activity: 'Eyepiece telephoto astrophotography session with smartphone clamp mounts' },
      { time: '05:45 AM', activity: 'Dawn glare safety transition and stargazing logbook signatures' },
    ],
    prerequisites: [
      'Carry your Amity University student/faculty ID card for campus entry',
      'Warm layers recommended for cool early morning breezes on open grounds',
      'Red flashlights or phone red-screen mode strictly required to preserve dark-adapted vision',
      'Personal binoculars or DSLR tripods welcome',
    ],
    contactPerson: {
      name: 'Rohan Kulkarni',
      role: 'Head of Telescopes & Observations',
      contact: 'rohan.kulkarni@amity.edu',
    },
  },
  {
    id: 'venus-at-peak-evening-brilliance',
    slug: 'venus-at-peak-evening-brilliance',
    title: 'Venus at Peak Evening Brilliance',
    dateBadge: {
      day: '14-18',
      month: 'SEP',
      year: '2026',
    },
    fullDateString: '14 - 18 September 2026',
    time: 'Evening (After sunset), 6:45 PM - 8:30 PM',
    location: 'Academic Block 2 Terrace Observatory',
    shortDesc:
      'Venus reaches its peak brilliance for this evening appearance, shining brightly in the southwest.',
    fullDesc:
      'Experience the "Evening Star" at its dazzling summit! In mid-September 2026, Venus attains its maximum visual brilliance of magnitude -4.8, casting a striking beacon across the southwestern twilight horizon. High-grade optical polarizing filters will be deployed to cut through glare and reveal Venus’s delicate crescent phase and dense reflective sulfuric cloud tops.',
    bannerImage: '/images/events/banner-venus-brilliance.jpg',
    category: 'Observation',
    registrationOpen: true,
    highlights: [
      'Peak Brilliance (Magnitude -4.8)',
      'Telescopic Venus Crescent Phase',
      'Polarizing Eyepiece Glare Filters',
      'Sunset Horizon Astrophotography',
    ],
    schedule: [
      { time: '06:30 PM', activity: 'Terrace observatory check-in and sunset optical alignment' },
      { time: '06:50 PM', activity: 'Sunset transition and first naked-eye spotting of brilliant Venus in southwest' },
      { time: '07:15 PM', activity: 'High-magnification eyepiece queue: Venus crescent phase resolution' },
      { time: '07:50 PM', activity: 'Interactive talk: Planetary atmospheres, runaway greenhouse effect, and albedo' },
      { time: '08:20 PM', activity: 'Venus horizon descent and session wrap-up' },
    ],
    prerequisites: [
      'Amity student/faculty ID card for terrace observatory access',
      'Smartphone with manual camera exposure control for eyepiece projection',
      'Arrive by 06:45 PM to catch the optimal twilight contrast window',
    ],
    contactPerson: {
      name: 'Ananya Iyer',
      role: 'Vice President & Observations Coordinator',
      contact: 'ananya.iyer@amity.edu',
    },
  },
  {
    id: 'crescent-moon-near-antares',
    slug: 'crescent-moon-near-antares',
    title: 'Crescent Moon near Antares',
    dateBadge: {
      day: '17',
      month: 'SEP',
      year: '2026',
    },
    fullDateString: '17 September 2026',
    time: 'Thursday Evening (After sunset), 7:00 PM - 9:30 PM',
    location: 'Amity University Mumbai Open Sports Ground',
    shortDesc:
      'A crescent Moon passes near the red star Antares.',
    fullDesc:
      'A breathtaking visual juxtaposition! On September 17, a slender waxing crescent Moon glides within close celestial quarters of Antares (Alpha Scorpii), the colossal red supergiant star marking the beating heart of Scorpius. Under our telescopes, witness the vivid color contrast between the silvery, cratered lunar terminator bathed in Earthshine and the ruby-tinted brilliance of a dying supergiant 550 light-years away.',
    bannerImage: '/images/events/banner-crescent-antares.jpg',
    category: 'Stargazing',
    registrationOpen: true,
    highlights: [
      'Crescent Moon & Red Antares Pairing',
      'Lunar Earthshine & Terminator Views',
      'Green Laser Constellation Tour',
      'Scorpius & Galactic Core Astronomy',
    ],
    schedule: [
      { time: '06:45 PM', activity: 'Registration desk open at central sports ground perimeter' },
      { time: '07:15 PM', activity: 'Green laser constellation tour: Tracing the Scorpion, Sagittarius, and the summer triangle' },
      { time: '07:45 PM', activity: 'Telescope stations: Antares spectroscopic tint vs. lunar Maria craters' },
      { time: '08:45 PM', activity: 'Mini-lecture: The fate of Betelgeuse and Antares as impending supernovae' },
      { time: '09:15 PM', activity: 'Open eyepiece queue and participant night-sky photography' },
    ],
    prerequisites: [
      'Carry student/faculty ID card for lawn entry',
      'Camp mat or folding chair for comfortable ground seating',
      'Binoculars (7x50 or 10x50) strongly encouraged for wide-field binocular views',
    ],
    contactPerson: {
      name: 'Aarav Deshmukh',
      role: 'Club President',
      contact: 'aarav.deshmukh@amity.edu',
    },
  },
  {
    id: 'september-equinox',
    slug: 'september-equinox',
    title: 'September Equinox',
    dateBadge: {
      day: '23',
      month: 'SEP',
      year: '2026',
    },
    fullDateString: '23 September 2026',
    time: 'All Day (Key Sessions: 05:35 AM IST Dawn & 12:15 PM Solar Noon)',
    location: 'Campus Central Courtyard Sundial & Seminar Hall 1',
    shortDesc:
      'The September Equinox arrives, marking the start of autumn in the Northern Hemisphere and spring in the Southern Hemisphere.',
    fullDesc:
      "Celebrate celestial symmetry! The September Equinox officially occurs at precisely 05:35 AM IST on September 23, 2026, when the Sun crosses the celestial equator from north to south, granting equal 12-hour day and night across the globe. Join the Ami Astro Club for a full day of orbital mechanics workshops, solar noon gnomon shadow tracking, and an evening celestial orientation welcoming the autumn sky.",
    bannerImage: '/images/events/banner-september-equinox.jpg',
    category: 'Seminar',
    registrationOpen: true,
    highlights: [
      'Exact Equinox Moment (05:35 AM IST)',
      'Solar Noon Gnomon Shadow Calibration',
      'Earth Axial Tilt & Precession Workshop',
      'Autumn Constellations Orientation',
    ],
    schedule: [
      { time: '05:25 AM', activity: 'Equinox dawn gathering: Sunrise due-east horizon alignment at 05:35 AM IST' },
      { time: '11:45 AM', activity: 'Central Courtyard: Gnomon shadow calibration and local solar noon measurement' },
      { time: '12:15 PM', activity: 'Live mathematical latitude and solar declination calculation' },
      { time: '03:30 PM', activity: 'Seminar Hall 1: Lecture on Milankovitch cycles, Earth axial precession, and seasons' },
      { time: '05:00 PM', activity: 'Equinox astro-quiz, certificate distribution, and evening sky preview' },
    ],
    prerequisites: [
      'Sun protection (hat, sunglasses) for the midday courtyard shadow tracking',
      'Notebook or laptop for solar geometry and trigonometry exercises',
      'Open to all students, faculties, and astrophysics enthusiasts',
    ],
    contactPerson: {
      name: 'Dr. Vikram Sengupta',
      role: 'Faculty Mentor & Advisory Head',
      contact: 'vsengupta@amity.edu',
    },
  },
  {
    id: 'full-harvest-moon-near-saturn',
    slug: 'full-harvest-moon-near-saturn',
    title: 'Full Harvest Moon near Saturn',
    dateBadge: {
      day: '26',
      month: 'SEP',
      year: '2026',
    },
    fullDateString: '26 September 2026',
    time: 'Saturday Night (Moonrise), 6:30 PM - 11:00 PM',
    location: 'Amity University Mumbai Open Ground & Terrace Vantage Point',
    shortDesc:
      'The full Harvest Moon rises near Saturn and Neptune.',
    fullDesc:
      'The signature stargazing gathering of the autumn semester! On September 26, the majestic Full Harvest Moon rises low and golden on the horizon in close proximity to the ringed marvel Saturn and elusive ice giant Neptune. Our multi-telescope array—ranging from 8" and 10" Dobsonians to tracking refractors—will be deployed across the lawn for an unforgettable night of high-magnification planetary exploration and public photography.',
    bannerImage: '/images/events/banner-harvest-moon-saturn.jpg',
    category: 'Stargazing',
    registrationOpen: true,
    highlights: [
      'Golden Harvest Moonrise Spectacle',
      'Saturn Ring System, Cassini Division & Titan',
      'Telescope Hunt for Ice Giant Neptune',
      'Live Eyepiece Smartphone Photography Booth',
    ],
    schedule: [
      { time: '06:30 PM', activity: 'Ground check-in opens; telescope mirror alignment and tracking check' },
      { time: '07:00 PM', activity: 'Golden Harvest Moonrise observation and atmospheric scattering photography' },
      { time: '08:00 PM', activity: '10" Dobsonian queue opens: Saturn ring tilt and Cassini division resolution' },
      { time: '09:30 PM', activity: 'Deep-sky hunting station: Star-hopping to distant ice giant Neptune in Aquarius' },
      { time: '10:30 PM', activity: 'Astro trivia, prize announcements, and night sky wrap-up' },
    ],
    prerequisites: [
      'Amity University student or faculty ID card for campus entry',
      'Smartphone or DSLR with camera adapter for planetary and lunar captures',
      'Light jacket or windcheater for open lawn breezes',
    ],
    contactPerson: {
      name: 'Tanvi Joshi',
      role: 'Head of Astrophotography & Media',
      contact: 'tanvi.joshi@amity.edu',
    },
  },
  {
    id: 'zodiacal-light-expedition',
    slug: 'zodiacal-light-expedition',
    title: 'Zodiacal Light Expedition',
    dateBadge: {
      day: 'ALL',
      month: 'SEP',
      year: '2026',
    },
    fullDateString: 'Throughout September 2026 (Dark-Sky Weekend Outpost)',
    time: 'Predawn (Before sunrise), 3:30 AM - 5:30 AM',
    location: 'Amity Hills Dark-Sky Outpost, Panvel (Bortle 3)',
    shortDesc:
      'The elusive cone-shaped Zodiacal Light is visible in the east during dark pre-dawn hours.',
    fullDesc:
      'Embark on a dark-sky pilgrimage into the tranquil hills above Panvel to glimpse one of the most subtle, awe-inspiring phenomena in astronomy: the Zodiacal Light (the "False Dawn"). Caused by sunlight reflecting off trillions of microscopic interplanetary dust grains circulating in the inner Solar System plane, this faint, ghostlike pyramid of light arches gracefully into the eastern sky before dawn breaks.',
    bannerImage: '/images/events/banner-zodiacal-light.jpg',
    category: 'Expedition',
    registrationOpen: true,
    highlights: [
      'Interplanetary Dust Cone (Zodiacal Light)',
      'Pristine Bortle 3 Dark-Sky Vantage Point',
      'Winter Hexagon Constellations (Orion, Pleiades)',
      'Wide-Angle DSLR Astrophotography Timelapses',
    ],
    schedule: [
      { time: '02:30 AM', activity: 'Assemble at Campus Gate 2 for transport to Panvel hill outpost' },
      { time: '03:15 AM', activity: 'Camp arrival, equipment check, and 20-minute dark adaptation protocol' },
      { time: '03:45 AM', activity: 'Zodiacal Light visual identification and wide-angle camera intervalometers start' },
      { time: '04:30 AM', activity: 'Telescope sweep of rising winter deep sky: Great Orion Nebula (M42) & Pleiades (M45)' },
      { time: '05:30 AM', activity: 'First light of astronomical dawn, group debrief, and return bus departure' },
    ],
    prerequisites: [
      'Sturdy hiking or sports shoes suitable for outdoor hill terrain',
      'Warm winter-grade fleece or jacket, camp mat, and thermal flask',
      'Strict zero-white-light policy: only dim red-filtered headlamps permitted',
      'DSLR or mirrorless camera with fast wide lens (f/2.8 or faster) and sturdy tripod for astro-timelapses',
    ],
    contactPerson: {
      name: 'Ishaan Patil',
      role: 'Dark-Sky Expeditions Lead',
      contact: 'ishaan.patil@amity.edu',
    },
  },
];
