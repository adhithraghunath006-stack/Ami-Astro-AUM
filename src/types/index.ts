export interface EventItem {
  id: string;
  slug: string;
  title: string;
  dateBadge: {
    day: string;
    month: string;
    year: string;
  };
  fullDateString: string;
  time: string;
  location: string;
  shortDesc: string;
  fullDesc: string;
  bannerImage: string;
  highlights: string[];
  schedule: {
    time: string;
    activity: string;
  }[];
  category: 'Stargazing' | 'Workshop' | 'Expedition' | 'Observation' | 'Seminar';
  registrationOpen: boolean;
  prerequisites?: string[];
  contactPerson?: {
    name: string;
    role: string;
    contact: string;
  };
}

export type GalleryCategory = 'all' | 'events' | 'stargazing' | 'workshops' | 'trips';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  caption: string;
  photographer: string;
  date: string;
  telescopeEquipment?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  committeeRole: 'Faculty Mentor' | 'Core Council' | 'Domain Lead' | 'Advisory';
  department: string;
  avatar: string;
  bio: string;
  specialization?: string;
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    email?: string;
  };
}

export interface Announcement {
  id: string;
  slug: string;
  title: string;
  category: 'Notice' | 'Celestial Alert' | 'Research' | 'Workshop Recap' | 'Guide';
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string[];
  tags: string[];
  pinned?: boolean;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Telescope' | 'Camera' | 'BookOpen' | 'Compass';
  image: string;
}

export interface ClubStat {
  value: string;
  label: string;
  description: string;
}
