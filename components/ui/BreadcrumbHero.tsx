"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CustomImage from './CustomImage'; // Assuming you have this from the homepage prompt

// Helper function to format the path
function formatPath(path: string): string {
  // 1. Get the last segment: "/our-history" -> "our-history"
  const segment = path.split('/').pop() || '';
  
  // 2. Replace hyphens: "our-history" -> "our history"
  const spaced = segment.replace(/-/g, ' ');

  // 3. Capitalize words: "our history" -> "Our History"
  return spaced
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const BreadcrumbHero: React.FC = () => {
  const pathname = usePathname();
  const pageTitle = formatPath(pathname);

  return (
    <section className="relative h-64 md:h-80 flex items-center">
      {/* Background Image */}
      <CustomImage
        src="/images/breadcrumb-bg.jpg" // A generic background for all pages
        alt="Farm"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority // Load this image quickly as it's LCP for subpages
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-green opacity-70 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-white">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-3">
          {pageTitle}
        </h1>
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
          <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
            AGRIMO
          </Link>
          <span className="opacity-80">/</span>
          <span className="opacity-100">{pageTitle}</span>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbHero;