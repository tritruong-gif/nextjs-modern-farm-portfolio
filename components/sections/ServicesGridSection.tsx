import React from 'react';
import { Service } from '@/components/types';
import ServiceCard from '../ui/ServiceCardV2'; // Reusing the homepage ServiceCard
import Pagination from '../ui/Pagination';

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
    <section className="bg-light-cream py-20">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
    </section>
  );
};

export default ServicesGridSection;