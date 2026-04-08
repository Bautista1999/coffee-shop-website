'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroImages = [
  {
    src: '/images/hero-coffee-background.jpg',
    alt: 'Steaming coffee cup on rustic wooden table',
  },
  {
    src: '/images/hero-latte-art.jpg',
    alt: 'Barista creating beautiful latte art',
  },
  {
    src: '/images/hero-coffee-beans.jpg',
    alt: 'Premium freshly roasted coffee beans',
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Images with Slideshow */}
      <div className='absolute inset-0 z-0'>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className='object-cover'
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className='absolute inset-0 bg-black/50' />
      </div>

      {/* Content */}
      <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto'>
        <div className='space-y-6'>
          {/* Main Headline */}
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight'>
            Wake Up to
            <span className='block text-amber-300'>Perfect Coffee</span>
          </h1>

          {/* Subheadline */}
          <p className='text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto font-light'>
            Artisanal coffee crafted with passion. From bean to cup, we deliver
            an extraordinary experience that awakens your senses.
          </p>

          {/* Call-to-Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='/menu'
              className='group inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-gray-900 text-lg font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-300/50 transform hover:scale-105 min-w-[200px]'
            >
              <span>Explore Our Menu</span>
              <svg
                className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </Link>

            <Link
              href='/contact'
              className='group inline-flex items-center justify-center px-8 py-4 border-2 border-white/70 text-white hover:bg-white hover:text-gray-900 text-lg font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 backdrop-blur-sm min-w-[200px]'
            >
              <svg
                className='mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z'
                />
              </svg>
              <span>Visit Our Café</span>
            </Link>
          </div>

          {/* Supporting Features */}
          <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90'>
            <div className='backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20'>
              <div className='w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-6 h-6 text-gray-900'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold mb-2'>Fresh Daily</h3>
              <p className='text-sm text-gray-200'>
                Beans roasted every morning for peak flavor and aroma
              </p>
            </div>

            <div className='backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20'>
              <div className='w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-6 h-6 text-gray-900'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold mb-2'>Made with Love</h3>
              <p className='text-sm text-gray-200'>
                Every cup crafted with passion and attention to detail
              </p>
            </div>

            <div className='backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20'>
              <div className='w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-6 h-6 text-gray-900'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold mb-2'>Cozy Atmosphere</h3>
              <p className='text-sm text-gray-200'>
                A warm, welcoming space to relax and enjoy your coffee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10'>
        <div className='flex flex-col items-center text-white/70 animate-bounce'>
          <span className='text-sm mb-2'>Discover More</span>
          <svg
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
