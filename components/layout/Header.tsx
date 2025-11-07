// components/layout/Header.tsx
'use client'; // Needed for mobile menu state

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button'; // Import our new button
import { DotIcon } from 'lucide-react';
import { NavLink } from '../types';
import DropdownMenu from '../ui/DropdownMenu';
import CustomImage from '../ui/CustomImage';

// Assuming you have these icons in /public/images/icons/
// We import them as components for easier use
const PhoneIcon = () => <Image src="/images/icons/phone.svg" alt="Phone" width={20} height={20} />;
const SearchIcon = () => <Image src="/images/icons/search.svg" alt="Search" width={20} height={20} />;
const ChevronDownIcon = () => <Image src="/images/icons/arrow.svg" alt="Dropdown" width={16} height={16} className='text-light-cream'/>;
const MenuIcon = () => <Image src="/images/icons/menu.svg" alt="Menu" width={24} height={24} />;
const CloseIcon = () => <Image src="/images/icons/close.svg" alt="Close" width={24} height={24} />;
const ArrowRightIcon = () => <Image src="/images/icons/arrow.svg" alt="" width={16} height={16} />;

const navLinks: NavLink[] = [
  { name: 'HOME', href: '/' },
  { 
    name: 'ABOUT', 
    href: '/about', // Main link now goes to the first sub-page
    hasDropdown: true,
    dropdownLinks: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Our History', href: '/our-history' },
      // 'Team Member Detail' is a dynamic page, so we don't link it here
      { name: 'FAQ', href: '/faq' },
    ]
  },
  { 
    name: 'SERVICES', 
    href: '/services',
    hasDropdown: true,
    dropdownLinks: [
      { name: 'All Services', href: '/services' },
      { name: 'Harvest Concepts', href: '/services/harvest-concepts' },
      { name: 'Farming Products', href: '/services/farming-products' },
      { name: 'Soil Fertilization', href: '/services/soil-fertilization' },
    ]
  },
  { name: 'BLOG', href: '/blog' },
  { name: 'CONTACT US', href: '/contact' },
];

const Header: React.FC = () => {const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // For desktop dropdown

  // --- NEW: State to manage the hide timer ---
  const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);
  
  const handleMouseEnter = (linkName: string) => {
    // If there's a timer to hide the menu, cancel it
    if (hideTimer) {
      clearTimeout(hideTimer);
      setHideTimer(null);
    }
    setOpenDropdown(linkName);
  };

  const handleMouseLeave = () => {
    // Start a timer to hide the dropdown
    const timer = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms delay
    setHideTimer(timer);
  };
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          
          <Link href="/" className="flex-shrink-0">
            <CustomImage src="/images/logo-white.svg" alt="Agrimo Logo" width={120} height={40} />
          </Link>

          {/* --- Desktop Navigation (Updated with new handlers) --- */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex items-center space-x-8 text-white font-medium">
              {navLinks.map((link) => (
                <li 
                  key={link.name}
                  className="relative"
                  // Use the new handlers on the list item
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                  onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
                >
                  <Link href={link.href} className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors">
                    {link.name}
                    {link.hasDropdown && <ChevronDownIcon />}
                  </Link>
                  
                  {/* --- Render the Dropdown --- */}
                  {link.hasDropdown && openDropdown === link.name && (
                    // This wrapper catches the mouse to cancel the hide timer
                    <div
                      onMouseEnter={() => {
                        if (hideTimer) clearTimeout(hideTimer);
                      }}
                      onMouseLeave={() => {
                        setOpenDropdown(null);
                      }}
                    >
                      <DropdownMenu links={link.dropdownLinks || []} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* --- Right Side (Unchanged) --- */}
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
            <Button href="/contact" variant="primary" size="sm">
              Get in Touch
            </Button>
          </div>

          {/* --- Mobile Menu Button (Unchanged) --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white z-50"
            aria-label="Toggle navigation"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* --- Mobile Menu Overlay (Unchanged) --- */}
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
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="sm" onClick={() => setIsOpen(false)}>
              Get in Touch
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;