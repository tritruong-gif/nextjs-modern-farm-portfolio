// components/sections/LeaderCallToActionSection.tsx
import React from 'react';
import Button from '../ui/Button';

const LeaderCallToActionSection: React.FC = () => {
  return (
    <section 
      className="bg-section-dark py-20 px-4 text-center text-white"
      style={{
        backgroundImage: "var(--image-field-watermark)", // Using CSS var
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8 max-w-3xl mx-auto">
          We&apos;re popular leader in agriculture market globally
        </h2>
        <Button href="/about" variant="primary" size="lg">
          Discover More
        </Button>
      </div>
    </section>
  );
};

export default LeaderCallToActionSection;