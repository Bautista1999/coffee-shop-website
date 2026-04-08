import Link from 'next/link';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-coffee-50'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-6'>
            Our Story
          </h2>
          <p className='text-lg text-coffee-700 mb-8 max-w-2xl mx-auto leading-relaxed'>
            For over a decade, we&apos;ve been passionate about bringing you the
            perfect cup of coffee. From sourcing the finest beans to perfecting
            our roasting techniques, every detail matters in creating an
            extraordinary coffee experience.
          </p>
          <Link
            href='/about'
            className='inline-flex items-center text-coffee-600 hover:text-coffee-700 font-medium transition-colors duration-200 group'
          >
            Learn More About Us
            <svg
              className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-6'>
              Our Menu
            </h2>
            <p className='text-lg text-coffee-700 max-w-2xl mx-auto'>
              From classic espresso drinks to seasonal specialties, discover the
              perfect blend for your taste.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <div className='text-center p-8 bg-coffee-50 rounded-2xl shadow-sm border border-coffee-100 hover:shadow-md transition-shadow duration-300'>
              <div className='w-16 h-16 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-coffee-50'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-serif font-semibold text-coffee-800 mb-3'>
                Coffee & Espresso
              </h3>
              <p className='text-coffee-600'>
                Premium single-origin coffees and expertly crafted espresso
                drinks made with precision and care.
              </p>
            </div>

            <div className='text-center p-8 bg-coffee-50 rounded-2xl shadow-sm border border-coffee-100 hover:shadow-md transition-shadow duration-300'>
              <div className='w-16 h-16 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-coffee-50'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.124 1.124 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-serif font-semibold text-coffee-800 mb-3'>
                Pastries & Treats
              </h3>
              <p className='text-coffee-600'>
                Fresh-baked pastries, muffins, and artisanal desserts made daily
                with the finest ingredients.
              </p>
            </div>

            <div className='text-center p-8 bg-coffee-50 rounded-2xl shadow-sm border border-coffee-100 hover:shadow-md transition-shadow duration-300'>
              <div className='w-16 h-16 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-coffee-50'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-serif font-semibold text-coffee-800 mb-3'>
                Light Meals
              </h3>
              <p className='text-coffee-600'>
                Sandwiches, salads, and healthy options perfect for any time of
                day, made fresh to order.
              </p>
            </div>
          </div>

          <div className='text-center'>
            <Link
              href='/menu'
              className='inline-flex items-center px-8 py-4 bg-coffee-600 hover:bg-coffee-700 text-coffee-50 font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2'
            >
              View Full Menu
              <svg
                className='ml-2 w-5 h-5'
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
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coffee-100 to-coffee-200'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-6'>
            Visit Us Today
          </h2>
          <p className='text-lg text-coffee-700 mb-12 max-w-2xl mx-auto'>
            Come experience the warmth and aroma of freshly brewed coffee in our
            cozy atmosphere. We&apos;re open daily and always excited to serve
            you.
          </p>

          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            <div className='bg-white p-8 rounded-2xl shadow-sm'>
              <div className='w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-6 h-6 text-coffee-50'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='font-semibold text-coffee-800 mb-3 text-lg'>
                Our Hours
              </h3>
              <div className='space-y-1 text-coffee-600'>
                <p>Monday - Friday: 6:30 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className='bg-white p-8 rounded-2xl shadow-sm'>
              <div className='w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-6 h-6 text-coffee-50'
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
              </div>
              <h3 className='font-semibold text-coffee-800 mb-3 text-lg'>
                Find Us
              </h3>
              <div className='space-y-1 text-coffee-600'>
                <p>123 Coffee Street</p>
                <p>Downtown, City 12345</p>
              </div>
            </div>
          </div>

          <Link
            href='/contact'
            className='inline-flex items-center px-8 py-4 bg-coffee-600 hover:bg-coffee-700 text-coffee-50 font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2'
          >
            <svg
              className='mr-2 w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
              />
            </svg>
            Get Directions & Contact Info
          </Link>
        </div>
      </section>
    </>
  );
}
