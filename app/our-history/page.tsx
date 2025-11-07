import React from 'react';
import BreadcrumbHero from '@/components/ui/BreadcrumbHero';
import HistoryAboutSection from '@/components/sections/AboutHistorySection';
import TextClipSection from '@/components/sections/TextClipSectionV2';
import HistorySection from '@/components/sections/HistorySection';

export default function HistoryPage() {
  return (
    <main className="flex-grow">
      {/* The BreadcrumbHero is a client component that reads the URL.
        It will automatically display "Our History".
      */}
      <BreadcrumbHero />

      {/* "We're Best Agriculture & Organic Farms" section */}
      <HistoryAboutSection />

      {/* Scrolling text: "* Agriculture * Farming" */}
      <TextClipSection 
        bgClassName="bg-brand-green" 
        itemVariant="alternate" 
      />

      {/* "Farming have been since 1866" timeline section */}
      <HistorySection />

    </main>
  );
}