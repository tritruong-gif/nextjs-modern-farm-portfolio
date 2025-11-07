"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ServiceTypeToggle: React.FC = () => {
  const pathname = usePathname();

  // Check which route is active
  const isServicesActive = pathname === '/services';
  const isProductsActive = pathname === '/products';

  const getLinkClass = (isActive: boolean) => {
    return isActive
      ? 'bg-brand-green text-white shadow-lg'
      : 'bg-white text-dark-green shadow-sm hover:bg-gray-100';
  };

  return (
    <div className="flex justify-center gap-4">
      <Link
        href="/services"
        scroll={false} // Prevents page from jumping to top
        className={`px-8 py-4 rounded-full text-lg font-semibold transition-all ${getLinkClass(isServicesActive)}`}
      >
        Our Services
      </Link>
      <Link
        href="/products"
        scroll={false}
        className={`px-8 py-4 rounded-full text-lg font-semibold transition-all ${getLinkClass(isProductsActive)}`}
      >
        Our Products
      </Link>
    </div>
  );
};

export default ServiceTypeToggle;