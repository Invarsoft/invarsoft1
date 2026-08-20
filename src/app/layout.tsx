import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'InvarSoft — Premium Digital Solutions',
  description:
    'InvarSoft builds premium websites, custom software, e-commerce experiences, AI solutions and digital products for modern businesses.',
  keywords: [
    'InvarSoft',
    'Premium Digital Solutions',
    'Website Design & Development',
    'Custom Software Development',
    'UI/UX Design',
    'E-Commerce Development',
    'SaaS Development',
    'AI Solutions',
    'Business Automation',
    'Digital Transformation',
    'Web Applications',
    '3D Interactive Web Experiences'
  ],
  authors: [{ name: 'InvarSoft' }],
  openGraph: {
    title: 'InvarSoft — Premium Digital Solutions',
    description:
      'InvarSoft builds premium websites, custom software, e-commerce experiences, AI solutions and digital products for modern businesses.',
    url: 'https://invarsoft.com',
    siteName: 'InvarSoft',
    images: [
      {
        url: 'https://invarsoft.com/invarsoft-full-logo.png',
        width: 1200,
        height: 630,
        alt: 'InvarSoft — Premium Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InvarSoft — Premium Digital Solutions',
    description: 'InvarSoft builds premium websites, custom software, e-commerce experiences, AI solutions and digital products for modern businesses.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} scroll-smooth`}>
      <body className="bg-[#050A0F] text-slate-100 min-h-screen antialiased selection:bg-cyan-500 selection:text-black font-sans">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
