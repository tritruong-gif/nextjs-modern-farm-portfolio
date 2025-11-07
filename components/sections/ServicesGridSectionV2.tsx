import React from 'react';
import { Service } from '@/components/types';
import ServiceCard from '../ui/ServiceCardV2'; // Reusing the homepage ServiceCard
import Pagination from '../ui/Pagination'; // Reusing services page pagination

interface ServicesGridSectionProps {
  services: Service[];
  currentPage: number;
  totalPages: number;
}

const ServicesGridSection: React.FC<ServicesGridSectionProps> = ({
  services,
  currentPage,
  totalPages,
}) => {
  return (
    <section>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          // We must use the ServiceCard from the homepage prompt (ari-section.jpg)
          // which has the image, category, title, and yellow button
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </section>
  );
};

export default ServicesGridSection;