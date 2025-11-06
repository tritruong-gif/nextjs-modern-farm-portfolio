// components/layout/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-green text-white py-16 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          <Image src="/images/logo.svg" alt="FarmFresh Logo" width={150} height={50} className="mb-6" />
          <p className="text-gray-300 mb-6">
            We are dedicated to providing the freshest organic produce from our farm directly to your home.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons (placeholders) */}
            <Link href="#" aria-label="Facebook"><Image src="/images/icons/facebook.svg" alt="Facebook" width={24} height={24} /></Link>
            <Link href="#" aria-label="Twitter"><Image src="/images/icons/twitter.svg" alt="Twitter" width={24} height={24} /></Link>
            <Link href="#" aria-label="Instagram"><Image src="/images/icons/instagram.svg" alt="Instagram" width={24} height={24} /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">Our Services</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-secondary transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-6">Services</h3>
          <ul className="space-y-3">
            <li><Link href="/services/organic-farming" className="text-gray-300 hover:text-secondary transition-colors">Organic Farming</Link></li>
            <li><Link href="/services/fresh-produce" className="text-gray-300 hover:text-secondary transition-colors">Fresh Produce</Link></li>
            <li><Link href="/services/home-delivery" className="text-gray-300 hover:text-secondary transition-colors">Home Delivery</Link></li>
            <li><Link href="/services/seasonal-crops" className="text-gray-300 hover:text-secondary transition-colors">Seasonal Crops</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6">Contact Info</h3>
          <ul className="space-y-3 text-gray-300">
            <li><span className="font-semibold">Address:</span> 123 Farm Lane, Rural Town, Country</li>
            <li><span className="font-semibold">Phone:</span> +1 (555) 123-4567</li>
            <li><span className="font-semibold">Email:</span> info@farmfresh.com</li>
            <li><span className="font-semibold">Hours:</span> Mon-Sat: 9AM - 6PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} FarmFresh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;