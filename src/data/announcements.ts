import { Announcement } from '@/types';

export const ANNOUNCEMENTS_DATA: Announcement[] = [
  {
    id: 'perseids-2025-guide',
    slug: 'perseids-2025-guide',
    title: 'Perseids Meteor Shower 2025: Observation Guide for Mumbai & Western Ghats',
    category: 'Celestial Alert',
    date: 'August 10, 2025',
    readTime: '4 min read',
    author: 'Rohan Kulkarni',
    authorRole: 'Head of Telescopes & Observations',
    pinned: true,
    excerpt:
      'The annual Perseid meteor shower peaks this weekend with up to 75 meteors per hour under dark skies. Here is our optimal vantage point guide and camera exposure manual for Maharashtra observers.',
    content: [
      'The Perseids are one of the most prolific and beloved meteor showers of the calendar year, caused by Earth passing through the orbital debris trail left behind by comet 109P/Swift-Tuttle.',
      'Peak activity is anticipated between 01:00 AM and dawn. For students and observers around Amity University Mumbai, suburban light pollution can be mitigated by facing northeast towards the Sahyadri ranges away from the Mumbai-Pune highway corridor.',
      'Recommended visual setup: No telescope is needed for meteor watching! Wide-field human vision is the best instrument. Bring a reclining camp chair, let your eyes adapt to the dark for at least 25 minutes, and avoid looking at mobile screens unless in deep red-filter mode.',
      'For astrophotographers: Mount your widest prime lens (14mm to 24mm), set aperture to f/1.8–f/2.8, ISO 3200, and use an intervalometer for 15-second continuous exposures. Stack meteor frames against a clean starry background in Siril or Photoshop.',
    ],
    tags: ['Meteors', 'Observing Guide', 'Night Sky', 'Western Ghats'],
  },
  {
    id: 'new-telescope-commissioned',
    slug: 'new-telescope-commissioned',
    title: 'New 10-Inch Dobsonian Reflector Commissioned for Club Stargazing Sessions',
    category: 'Notice',
    date: 'July 28, 2025',
    readTime: '3 min read',
    author: 'Aarav Deshmukh',
    authorRole: 'Club President',
    excerpt:
      'Our optical inventory has expanded with the arrival of a high-aperture parabolic Dobsonian telescope, providing enhanced light-gathering power for planetary nebulae and galaxies.',
    content: [
      'We are thrilled to announce that AMI-ASTRO has formally integrated a 10-inch (254mm) f/4.7 Parabolic Dobsonian Reflector into our active observational inventory, funded through student council grants.',
      'With over 1,300x the light-gathering capability of the unaided human eye, this instrument unlocks resolved views of the Great Globular Cluster in Hercules (M13), the Ring Nebula (M57), and the delicate Cassini Division within Saturn’s ring plane.',
      'Training workshops for members interested in learning manual alt-azimuth star hopping and telescope mirror collimation will commence next Friday at 5:30 PM in Seminar Hall 3.',
    ],
    tags: ['Equipment', 'Telescopes', 'Club News', 'Campus Observatory'],
  },
  {
    id: 'celestial-calendar-autumn',
    slug: 'celestial-calendar-autumn',
    title: 'Autumn Celestial Highlights: Saturn at Opposition & Supermoon Alignment',
    category: 'Guide',
    date: 'September 1, 2025',
    readTime: '5 min read',
    author: 'Ananya Iyer',
    authorRole: 'Vice President & Observations Coordinator',
    excerpt:
      'Autumn brings pristine night skies over the Panvel hills. Here are the key dates for Saturn opposition, Jupiter occultation, and lunar astrophotography targets.',
    content: [
      'As monsoon cloud cover recedes across late September, amateur astronomers are greeted by some of the year’s finest seeing conditions in Maharashtra.',
      'Key upcoming celestial events include Saturn reaching opposition—when Earth lies directly between the Sun and Saturn, illuminating its ring system at maximum brightness—followed by Jupiter rising high in Taurus before midnight.',
      'Keep an eye on the club events calendar for our on-campus telescope nights scheduled across September and October on the Open Ground.',
    ],
    tags: ['Planets', 'Saturn', 'Calendar', 'Astronomy'],
  },
  {
    id: 'polar-alignment-heq5-guide',
    slug: 'polar-alignment-heq5-guide',
    title: 'Practical Guide: Precision Polar Alignment for Computerized GoTo Mounts',
    category: 'Guide',
    date: 'August 22, 2025',
    readTime: '6 min read',
    author: 'Rohan Kulkarni',
    authorRole: 'Head of Telescopes & Observations',
    excerpt:
      'Master the art of 2-star and 3-star alignment on our Sky-Watcher HEQ5 Pro mount to achieve pinpoint star tracking for long-exposure astrophotography.',
    content: [
      'Accurate polar alignment is the foundational cornerstone of successful deep-sky astrophotography. Without precise alignment parallel to Earth’s rotational axis, even a 30-second exposure will show noticeable star trailing and field rotation.',
      'At our latitude of approximately 18.9° N in Panvel, the North Star (Polaris) sits low above the northern horizon. In this guide, we walk through leveling the tripod with bubble gauges, setting altitude latitude scales, and using the Polar Scope clock reticle.',
      'For club members utilizing the HEQ5 Pro mount during astrophotography nights, we demonstrate the drift alignment method and SharpCap polar alignment routine via the guide scope camera.',
    ],
    tags: ['Astrophotography', 'Telescopes', 'Tutorial', 'Technical'],
  },
  {
    id: 'jwst-symposium-recap',
    slug: 'jwst-symposium-recap',
    title: 'Symposium Recap: James Webb Space Telescope Insights & Early Cosmic Web',
    category: 'Research',
    date: 'September 14, 2025',
    readTime: '4 min read',
    author: 'Dr. Vikram Sengupta',
    authorRole: 'Faculty Mentor & Advisory Head',
    excerpt:
      'Summary of our inter-departmental symposium analyzing the latest NIRCam deep-field spectra from the James Webb Space Telescope and its cosmological implications.',
    content: [
      'Last week, AMI-ASTRO hosted an inter-departmental seminar examining the groundbreaking infrared observations captured by NASA/ESA/CSA’s James Webb Space Telescope.',
      'Students and faculty reviewed the spectroscopic detection of carbon-bearing molecules in exoplanetary atmospheres (such as K2-18b) and the discovery of unexpectedly luminous high-redshift galaxies formed within the first 350 million years after the Big Bang.',
      'The session concluded with an open discussion on how amateur observers can access public MAST archives and contribute to citizen-science exoplanet transit verification.',
    ],
    tags: ['JWST', 'Astrophysics', 'Research', 'Symposium'],
  },
  {
    id: 'collimating-newtonian-dobsonian',
    slug: 'collimating-newtonian-dobsonian',
    title: 'Laboratory Guide: Primary Mirror Laser Collimation & Star Testing',
    category: 'Guide',
    date: 'September 20, 2025',
    readTime: '5 min read',
    author: 'Devansh Mehta',
    authorRole: 'Technical & Web Systems Lead',
    excerpt:
      'Learn how to calibrate the secondary and primary optical mirrors of our 10-inch Dobsonian telescope for razor-sharp planetary diffraction discs.',
    content: [
      'Even the finest parabolic telescope optics cannot produce crisp, aberration-free planetary images if the optical elements are out of collimation.',
      'Transporting heavy telescopes across campus or in vehicles naturally introduces slight shifts in secondary mirror tilt and primary mirror cell springs. In this visual lab walkthrough, we detail the 3-step collimation protocol.',
      'We demonstrate center-spot alignment using a 1.25" red laser collimator, followed by fine-tuning on an out-of-focus artificial star or real second-magnitude star (such as Polaris) to center the Poisson spot within concentric Airy rings.',
    ],
    tags: ['Optics', 'Maintenance', 'Collimation', 'Workshop Recap'],
  },
];
