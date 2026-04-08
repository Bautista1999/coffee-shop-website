import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/layout';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Coffee Shop - Premium Coffee Experience',
  description:
    'Experience the finest coffee, crafted with passion. Fresh roasted beans, artisanal brewing, and a cozy atmosphere.',
  keywords: [
    'coffee',
    'cafe',
    'espresso',
    'latte',
    'coffee shop',
    'fresh roasted',
  ],
  icons: {
    icon: [
      { url: '/images/logo-icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo-icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#8b6f47',
  openGraph: {
    title: 'Coffee Shop - Premium Coffee Experience',
    description:
      'Your local coffee shop serving premium coffee, pastries, and creating a warm community atmosphere.',
    images: ['/images/logo-social.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coffee Shop - Premium Coffee Experience',
    description:
      'Your local coffee shop serving premium coffee, pastries, and creating a warm community atmosphere.',
    images: ['/images/logo-social.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <meta name='application-name' content='Coffee Shop' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Coffee Shop' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#8b6f47' />
      </head>
      <body className='font-sans bg-coffee-50 text-coffee-800'>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
