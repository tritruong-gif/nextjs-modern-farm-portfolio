// components/layout/Header.tsx
'use client'; // Needed for mobile menu state

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button'; // Import our new button

// Assuming you have these icons in /public/images/icons/
// We import them as components for easier use
const PhoneIcon = () => <Image src="/images/icons/phone.svg" alt="Phone" width={20} height={20} />;
const SearchIcon = () => <Image src="/images/icons/search.svg" alt="Search" width={20} height={20} />;
const ChevronDownIcon = () => <Image src="/images/icons/arrow.svg" alt="Dropdown" width={16} height={16} />;
const MenuIcon = () => <Image src="/images/icons/menu.svg" alt="Menu" width={24} height={24} />;
const CloseIcon = () => <Image src="/images/icons/close.svg" alt="Close" width={24} height={24} />;
const ArrowRightIcon = () => <Image src="/images/icons/arrow.svg" alt="" width={16} height={16} />;

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about-us' },
  { name: 'SERVICES', href: '/services', hasDropdown: true },
  { name: 'PRODUCTS', href: '/services/products', hasDropdown: true },
  { name: 'BLOG', href: '/blog' },
  { name: 'CONTACT US', href: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* Use a white/light version of your logo */}
            <Image src="/images/logo-white.svg" alt="Agrimo Logo" width={120} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex items-center space-x-8 text-white font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors">
                    {link.name}
                    {link.hasDropdown && <ChevronDownIcon />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side: CTA, Search, and Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center gap-2 text-white">
              <PhoneIcon />
              <div className="flex flex-col text-sm leading-tight">
                <span className="opacity-80">Call Us Now</span>
                <span className="font-semibold">+1 (232) 255-5511</span>
              </div>
            </div>
            <button className="text-white hover:text-brand-yellow transition-colors" aria-label="Search">
              <SearchIcon />
            </button>
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowRightIcon />}>
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white z-50"
            aria-label="Toggle navigation"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-dark-green z-40 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <nav className="container mx-auto h-full flex flex-col items-center justify-center pt-20">
          <ul className="flex flex-col items-center space-y-6 text-white text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDownIcon />}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowRightIcon />} onClick={() => setIsOpen(false)} >
              Get in Touch
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;