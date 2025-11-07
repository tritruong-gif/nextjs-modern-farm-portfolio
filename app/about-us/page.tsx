import React from 'react';

// Reused Components
import BreadcrumbHero from '@/components/ui/BreadcrumbHero';
import TextClipSection from '@/components/sections/TextClipSection';
import HistorySection from '@/components/sections/HistorySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

// New Components for this page
import AboutServicesSection from '@/components/sections/AboutServicesSection';
import AgricultureMattersSection from '@/components/sections/AgricultureMattersSection';
import LeaderCallToActionSection from '@/components/sections/LeaderCallToActionSection';
import WhoWeAreSection from '@/components/sections/WhoWeAreSectionV2';

export default function AboutPage() {
  return (
    <main className="flex-grow">
      {/* 1. Hero: "About Us" (Dynamic) */}
      <BreadcrumbHero />

      {/* 2. "Currently we are growing..." */}
      <WhoWeAreSection />

      {/* 3. Scrolling text: "* Agriculture * Farming" */}
      <TextClipSection 
        // bgClassName="bg-brand-green" 
        // itemVariant="alternate" 
      />

      {/* 4. "Best Agriculture Services" (Carousel) */}
      <AboutServicesSection />

      {/* 5. "Agriculture matters..." */}
      <AgricultureMattersSection />

      {/* 6. "Farming have been since 1866" (Timeline) */}
      <HistorySection />

      {/* 7. "We're popular leader..." */}
      <LeaderCallToActionSection />

      {/* 8. "What our customers say" (Testimonials) */}
      <TestimonialsSection />
    </main>
  );
}