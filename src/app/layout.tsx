import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${playfair.variable}`}>
      <body className='font-sans'>{children}</body>
    </html>
  );
}
