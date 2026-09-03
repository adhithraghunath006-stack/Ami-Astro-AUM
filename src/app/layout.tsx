import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DemoDisclaimer from '@/components/ui/DemoDisclaimer';
import StardustCursorTrail from '@/components/ui/StardustCursorTrail';

export const metadata: Metadata = {
  metadataBase: new URL('https://ami-astro.amity.edu'),
  title: 'AMI-ASTRO | Astronomy Club, Amity University Mumbai',
  description:
    'Look beyond and explore further with AMI-ASTRO, the official astronomy club of Amity University Mumbai. Stargazing, telescope observations, astrophotography, and cosmic expeditions.',
  keywords: [
    'AMI-ASTRO',
    'Astronomy Club',
    'Amity University Mumbai',
    'Stargazing',
    'Telescope Observation',
    'Astrophotography',
    'Space Science',
  ],
  authors: [{ name: 'AMI-ASTRO Club' }],
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'AMI-ASTRO | Astronomy Club, Amity University Mumbai',
    description:
      'Where curiosity meets the cosmos. Explore upcoming stargazing events, astrophotography gallery, and astronomical workshops.',
    url: 'https://ami-astro.amity.edu',
    siteName: 'AMI-ASTRO',
    images: [
      {
        url: '/logo.jpg',
        width: 600,
        height: 600,
        alt: 'AMI-ASTRO Official Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth h-full">
      <body className="min-h-screen bg-[#0B0F19] text-white flex flex-col antialiased selection:bg-[#6C63FF]/30 selection:text-[#A78BFA]">
        <StardustCursorTrail />
        <DemoDisclaimer />
        <Navbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
