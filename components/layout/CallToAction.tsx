// components/layout/CallToAction.tsx
import React from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-primary text-white py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background pattern if visible in image */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('/images/dots-pattern.svg')" }}></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10 relative">
        <div className="text-center lg:text-left mb-8 lg:mb-0 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Get the Best Organic Products Right to Your Doorstep
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Sign up for our newsletter to receive updates, special offers, and fresh recipes.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/contact" variant="secondary" size="lg" className="text-dark-green">
            Shop Now
          </Button>
          <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;