import { ActivityItem } from '@/types';

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: 'stargazing',
    title: 'Stargazing Nights',
    description: 'Bi-weekly observation sessions on the open sports ground and terrace observatory charting seasonal constellations, planetary alignments, and meteor showers.',
    iconName: 'Sparkles',
    image: '/images/temp/activity-stargazing.svg',
  },
  {
    id: 'telescope-observations',
    title: 'Telescope Observations',
    description: 'Hands-on training with 10" Dobsonian reflectors, high-magnification Barlows, and solar filters to resolve lunar craters, Saturnian rings, and deep-sky nebulae.',
    iconName: 'Telescope',
    image: '/images/temp/activity-telescope.svg',
  },
  {
    id: 'astrophotography',
    title: 'Astrophotography Labs',
    description: 'Mastering long-exposure deep-sky capture, tracking mount polar alignment, and multi-frame stacking workflows using DeepSkyStacker, Siril, and Photoshop.',
    iconName: 'Camera',
    image: '/images/temp/activity-astrophoto.svg',
  },
  {
    id: 'workshops',
    title: 'Workshops & Seminars',
    description: 'Interactive masterclasses covering primary mirror laser collimation, stellar spectroscopy, celestial navigation mechanics, and talks by guest astrophysicists.',
    iconName: 'BookOpen',
    image: '/images/temp/activity-workshop.svg',
  },
  {
    id: 'night-expeditions',
    title: 'Dark-Sky Expeditions',
    description: 'Overnight field camping trips to Bortle 3 dark-sky locations across the Sahyadri mountains (Lonavala & Bhandardara) for all-night Messier marathons.',
    iconName: 'Compass',
    image: '/images/temp/activity-expedition.svg',
  },
];
