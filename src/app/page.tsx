import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-coffee-50 to-coffee-100'>
        <div className='text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-serif font-bold text-coffee-900 mb-4'>
            Welcome to Our Coffee Shop
          </h1>
          <p className='text-xl text-coffee-700 mb-8 max-w-2xl mx-auto'>
            Experience the finest coffee, crafted with passion. Fresh roasted
            beans, artisanal brewing, and a cozy atmosphere.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/menu'
              className='inline-flex items-center justify-center px-6 py-3 bg-coffee-600 hover:bg-coffee-700 text-coffee-50 text-lg font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2'
            >
              Explore Our Menu
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center px-6 py-3 border-2 border-coffee-600 text-coffee-600 hover:bg-coffee-600 hover:text-coffee-50 text-lg font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2'
            >
              Find Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-coffee-100'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-6'>
            Our Story
          </h2>
          <p className='text-lg text-coffee-700 mb-8 max-w-2xl mx-auto'>
            For over a decade, we've been passionate about bringing you the
            perfect cup of coffee. From sourcing the finest beans to perfecting
            our roasting techniques, every detail matters.
          </p>
          <Link
            href='/about'
            className='inline-flex items-center text-coffee-600 hover:text-coffee-700 font-medium transition-colors duration-200'
          >
            Learn More About Us
            <svg
              className='ml-2 w-5 h-5'
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
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-coffee-50'>
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
            <div className='text-center p-6 bg-white rounded-lg shadow-sm border border-coffee-200'>
              <h3 className='text-xl font-serif font-semibold text-coffee-800 mb-3'>
                Coffee & Espresso
              </h3>
              <p className='text-coffee-600'>
                Premium single-origin coffees and expertly crafted espresso
                drinks
              </p>
            </div>
            <div className='text-center p-6 bg-white rounded-lg shadow-sm border border-coffee-200'>
              <h3 className='text-xl font-serif font-semibold text-coffee-800 mb-3'>
                Pastries & Treats
              </h3>
              <p className='text-coffee-600'>
                Fresh-baked pastries, muffins, and artisanal desserts
              </p>
            </div>
            <div className='text-center p-6 bg-white rounded-lg shadow-sm border border-coffee-200'>
              <h3 className='text-xl font-serif font-semibold text-coffee-800 mb-3'>
                Light Meals
              </h3>
              <p className='text-coffee-600'>
                Sandwiches, salads, and healthy options for any time of day
              </p>
            </div>
          </div>

          <div className='text-center'>
            <Link
              href='/menu'
              className='inline-flex items-center px-6 py-3 bg-coffee-600 hover:bg-coffee-700 text-coffee-50 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2'
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-coffee-100'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-6'>
            Visit Us Today
          </h2>
          <p className='text-lg text-coffee-700 mb-8 max-w-2xl mx-auto'>
            Come experience the warmth and aroma of freshly brewed coffee in our
            cozy atmosphere. We're open daily and always excited to serve you.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <div className='text-center'>
              <h3 className='font-semibold text-coffee-800 mb-1'>Hours</h3>
              <p className='text-coffee-600'>Mon-Fri: 6:30 AM - 8 PM</p>
              <p className='text-coffee-600'>Sat-Sun: 7 AM - 9 PM</p>
            </div>
            <div className='text-center'>
              <h3 className='font-semibold text-coffee-800 mb-1'>Location</h3>
              <p className='text-coffee-600'>123 Coffee Street</p>
              <p className='text-coffee-600'>Downtown, City 12345</p>
            </div>
          </div>
          <div className='mt-8'>
            <Link
              href='/contact'
              className='inline-flex items-center px-6 py-3 bg-coffee-600 hover:bg-coffee-700 text-coffee-50 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2'
            >
              Get Directions & Contact Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
