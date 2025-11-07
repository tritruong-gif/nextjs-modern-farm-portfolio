import React from 'react';
import { mockServices } from '@/components/data/services';
// import ServiceCard from '@/components/ui/ServiceCard';
import ServiceCard from '@/components/ui/ServiceCardV2';
// import SectionTag from '@/components/ui/SectionTag';
import SectionTag from '@/components/ui/SectionTagV2';
// import ServiceCarousel from '@/components/ui/ServiceCarousel';
import ServiceCarousel from '@/components/ui/ServiceCarouselV2';
import CustomImage from '../ui/CustomImage';

const LeafIcon = () => (
  <CustomImage src="/images/icons/leaf.svg" alt="" width={16} height={16} />
);

const ServicesSection: React.FC = () => {
  return (
    <section 
      className="bg-section-green text-white py-20 relative overflow-hidden"
      style={{
        backgroundImage: "var(--image-wheat-pattern)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: '100% auto'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <ServiceCarousel
          tag={<SectionTag icon={<LeafIcon />}>Our Services</SectionTag>}
          title="Best Agriculture Services"
          theme="dark"
        >
          {mockServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ServiceCarousel>
      </div>
    </section>
  );
};

export default ServicesSection;