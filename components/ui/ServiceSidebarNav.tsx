// components/ui/ServiceSidebarNav.tsx
"use client";

import React, { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Service } from '@/components/types';
import CustomImage from './CustomImage';

// --- Icon ---
const ActiveIcon = () => (
  <CustomImage 
    src="/images/icons/check-yellow-arrow.svg" // Mock-up shows a yellow check/arrow
    alt="Active"
    width={20}
    height={20}
  />
);

const ArrowIcon = () => (
  <CustomImage 
    src="/images/icons/arrow.svg" // Mock-up shows a yellow check/arrow
    alt="Inactive"
    width={20}
    height={20}
  />
);
// ---

interface ServiceSidebarNavProps {
  services: Service[];
}

const ServiceSidebarNav: React.FC<ServiceSidebarNavProps> = ({ services }) => {
  const pathname = usePathname();
  const activeItemRef = useRef<HTMLLIElement>(null);

  // This effect scrolls the active item into view when the page loads
  useEffect(() => {
    activeItemRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }, [pathname]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-dark-green mb-4">Our Service</h3>
      <div className="max-h-96 overflow-y-auto">
        <ul className="space-y-2">
          {services.map((service) => {
            const isActive = pathname === service.href;
            return (
              <li key={service.id} ref={isActive ? activeItemRef : null}>
                <Link
                  href={service.href}
                  className={`flex justify-between items-center p-4 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-brand-green text-white'
                      : 'text-dark-green hover:bg-light-cream'
                  }`}
                >
                  <span className="font-semibold">{service.title}</span>
                  {isActive ? <ActiveIcon /> : <ArrowIcon />}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServiceSidebarNav;