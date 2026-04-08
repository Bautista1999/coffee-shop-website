'use client';

/**
 * Header Component
 * Responsive header with navigation menu and mobile hamburger functionality
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', description: 'Welcome to our coffee shop' },
  { name: 'About', href: '/about', description: 'Our story and mission' },
  { name: 'Menu', href: '/menu', description: 'Coffee, pastries & more' },
  { name: 'Services', href: '/services', description: 'What we offer' },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Find us and get in touch',
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-coffee-50/95 backdrop-blur-md border-b border-coffee-200/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16 lg:h-20'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Link href='/' className='flex items-center'>
                <Logo
                  variant='header'
                  className='h-10 lg:h-12 w-auto'
                  alt='Coffee Shop - Home'
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:block'>
              <ul className='flex items-center space-x-8'>
                {navigation.map(item => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`relative text-sm font-medium transition-colors duration-200 hover:text-coffee-600 ${
                        isActiveLink(item.href)
                          ? 'text-coffee-600'
                          : 'text-coffee-700'
                      }`}
                    >
                      {item.name}
                      {isActiveLink(item.href) && (
                        <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-coffee-600 rounded-full' />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button (Desktop) */}
            <div className='hidden lg:block'>
              <Link
                href='/contact'
                className='inline-flex items-center px-4 py-2 bg-coffee-600 hover:bg-coffee-700 text-coffee-50 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2'
              >
                Visit Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden'>
              <button
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-lg text-coffee-700 hover:text-coffee-600 hover:bg-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2 transition-colors duration-200'
                aria-controls='mobile-menu'
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className='sr-only'>
                  {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                </span>
                {/* Hamburger Icon */}
                <div className='relative w-6 h-6'>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-2.5 ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      isMobileMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 z-30 bg-coffee-900/50 backdrop-blur-sm lg:hidden'
          aria-hidden='true'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-80 max-w-sm bg-coffee-50 border-l border-coffee-200 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id='mobile-menu'
      >
        <div className='flex flex-col h-full'>
          {/* Mobile Menu Header */}
          <div className='flex items-center justify-between p-4 border-b border-coffee-200'>
            <Logo variant='primary' className='h-8 w-auto' alt='Coffee Shop' />
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-lg text-coffee-700 hover:text-coffee-600 hover:bg-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-500'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className='flex-1 px-4 py-6'>
            <ul className='space-y-2'>
              {navigation.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActiveLink(item.href)
                        ? 'bg-coffee-100 text-coffee-700 border-l-4 border-coffee-600'
                        : 'text-coffee-600 hover:bg-coffee-100 hover:text-coffee-700'
                    }`}
                  >
                    <div className='flex flex-col'>
                      <span>{item.name}</span>
                      {item.description && (
                        <span className='text-sm text-coffee-400 mt-1'>
                          {item.description}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div className='p-4 border-t border-coffee-200'>
            <Link
              href='/contact'
              className='block w-full text-center px-4 py-3 bg-coffee-600 hover:bg-coffee-700 text-coffee-50 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coffee-500'
            >
              Visit Our Coffee Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className='h-16 lg:h-20' />
    </>
  );
}
