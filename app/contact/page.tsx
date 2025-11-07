// app/contact/page.tsx
import React from 'react';

// Reused Components
import BreadcrumbHero from '@/components/ui/BreadcrumbHero';
import PartnerLogosSection from '@/components/sections/PartnerLogosSection';

// New Components for this page
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import MapSection from '@/components/sections/MapSection';

export default function ContactPage() {
  return (
    <main className="flex-grow">
      {/* 1. Hero: "Contact Us" (Dynamic) */}
      <BreadcrumbHero />

      {/* 2. "Mail us", "Call Us", "Our Locations" */}
      <ContactInfoSection />

      {/* 3. "Have any Questions?" Form Section */}
      <ContactFormSection />

      {/* 4. Scrolling Logos */}
      <PartnerLogosSection />

      {/* 5. Google Map */}
      <MapSection />

    </main>
  );
}