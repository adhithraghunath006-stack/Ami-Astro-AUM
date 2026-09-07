export interface HappeningItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  dateOrDeadline: string;
  actionText: string;
  actionTarget: string;
  image?: string;
  isPrimary?: boolean;
}

export const WHATS_HAPPENING: HappeningItem[] = [
  {
    id: 'h-01',
    tag: 'RECRUITMENT 2026',
    title: 'CREW ONBOARDING 2026',
    subtitle: 'Applications are now open for all departments.',
    description:
      'We are looking for students across engineering, design, writing, marketing, and operations who love learning and building cool things.',
    badge: 'APPLICATIONS OPEN',
    dateOrDeadline: 'Deadline: 15 September 2026',
    actionText: 'APPLY TO JOIN',
    actionTarget: 'join',
    image: '/veil-of-the-dying-sun.jpg',
    isPrimary: true,
  },
  {
    id: 'h-02',
    tag: 'ALUMNI SESSION',
    title: 'ASTRO TALKS: CAMPUS TO CAREER',
    subtitle:
      'A conversation with an AMI ASTRO alumnus about life after college.',
    description:
      'An informal conversation about college, careers, leadership, opportunities, and the journey beyond AMI ASTRO.',
    badge: '20 SEP 2026',
    dateOrDeadline: '17:30 IST • Seminar Hall 3',
    actionText: 'VIEW SESSION',
    actionTarget: 'talks',
  },
  {
    id: 'h-03',
    tag: 'OBSERVATORY NIGHT',
    title: 'DEEP SKY STARGAZING',
    subtitle:
      'An evening under the night sky with the AMI ASTRO community.',
    description:
      'Join us for an evening of stargazing, astronomy conversations, and night-sky photography.',
    badge: 'COMING SOON',
    dateOrDeadline: 'Late September • Weather Permitting',
    actionText: 'SEE EVENT DETAILS',
    actionTarget: 'events',
  },
];