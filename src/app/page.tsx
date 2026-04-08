export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-coffee-50 to-coffee-100'>
        <div className='text-center section-padding'>
          <h1 className='text-4xl md:text-6xl font-serif font-bold text-coffee-900 mb-4'>
            Welcome to Our Coffee Shop
          </h1>
          <p className='text-xl text-coffee-700 mb-8 max-w-2xl mx-auto'>
            Experience the finest coffee, crafted with passion. Fresh roasted
            beans, artisanal brewing, and a cozy atmosphere.
          </p>
          <div className='space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center'>
            <button className='btn-primary'>Explore Our Menu</button>
            <button className='btn-secondary'>Find Us</button>
          </div>
        </div>
      </div>
    </main>
  );
}
