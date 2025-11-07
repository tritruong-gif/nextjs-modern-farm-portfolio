// components/ui/SidebarCtaCard.tsx
import React from 'react';
import CustomImage from './CustomImage';
import Button from './Button';

const SidebarCtaCard: React.FC = () => {
  return (
    <div className="relative rounded-xl overflow-hidden text-center mt-8">
      {/* Background Image */}
      <CustomImage
        src="/images/sidebar-cta-bg.jpg"
        alt="Innovative Solutions"
        width={300}
        height={350}
        className="object-cover w-full"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-green opacity-70 z-10"></div>
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-white">
        <h4 className="text-2xl font-bold leading-tight mb-6">
          Innovative Solutions for agriculture
        </h4>
        <Button href="/contact" variant="secondary">
          Contact Me Now
        </Button>
      </div>
    </div>
  );
};

export default SidebarCtaCard;