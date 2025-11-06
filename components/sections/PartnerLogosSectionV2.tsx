import React from 'react';
import { partnerLogos } from '@/components/data/partner-logos';
import CustomImage from '../ui/CustomImage';

const PartnerLogosSection: React.FC = () => {
  return (
    <section className="bg-light-cream py-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative flex">
          <div className="flex animate-marquee" style={{ animationDuration: '50s' }}>
            {partnerLogos.map((logo) => (
              <div 
                key={logo.id} 
                className="flex-shrink-0 w-64 flex justify-center items-center mx-10"
              >
                <CustomImage
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={50}
                  className="object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-marquee" style={{ animationDuration: '50s' }} aria-hidden="true">
            {partnerLogos.map((logo) => (
              <div 
                key={logo.id} 
                className="flex-shrink-0 w-64 flex justify-center items-center mx-10"
              >
                <CustomImage
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={50}
                  className="object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;