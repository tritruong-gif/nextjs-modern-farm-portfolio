// app/faq/page.tsx
import React from 'react';

// Reused Components
import BreadcrumbHero from '@/components/ui/BreadcrumbHero';

// New Component for this page
import FaqSection from '@/components/sections/FaqSection';

export default function FaqPage() {
  return (
    <main className="flex-grow">
      {/* The BreadcrumbHero is a client component that reads the URL.
        It will automatically display "Faq".
      */}
      <BreadcrumbHero />

      {/* "General Questions", "Other Questions", etc. */}
      <FaqSection />

    </main>
  );
}