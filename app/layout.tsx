import React, { PropsWithChildren } from 'react';
import Navbar from '@/components/ui/navbar';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Karma } from 'next/font/google';
import Footer from '@/components/ui/footer';
import ThemeProvider from '@/components/ui/theme-provider';


export const dynamic = 'force-dynamic';

 
const karma = Karma({
  weight: ['300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karma'
});

const meta = {
  title: 'Echoes Of Despair - Responsive Website Template',
  description: 'Savor our delights online.',
  robots: 'follow, index',
  favicon: '/icon.png'
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: ['Technology', 'Investment', 'Companies', 'NEWWEBORDER'],
    authors: [{ name: 'NEW WEB ORDER', url: 'https://newweborder.co/' }],
    creator: 'New Web Order',
    publisher: 'New Web Order',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      siteName: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@New_Web_Order',
      creator: '@New_Web_Order',
      title: meta.title,
      description: meta.description
    }
  };
}

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
 <html lang='en' className={`${karma.variable}`}>
      <body className=''>
      <ThemeProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
