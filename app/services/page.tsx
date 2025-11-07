import React from 'react';
import BreadcrumbHero from '@/components/ui/BreadcrumbHero';
import ServicesGridSection from '@/components/sections/ServicesGridSection';
import { services } from '@/components/data/services'; // Assuming this has all services

// Define a separate function to get data - good practice for server components
async function getPaginatedServices(currentPage: number, itemsPerPage: number) {
  const allServices = services; // In a real app, this would be a database call
  
  const totalPages = Math.ceil(allServices.length / itemsPerPage);
  
  const currentServices = allServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return { currentServices, totalPages };
}

// Page Server Component
export default async function ServicesPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const ITEMS_PER_PAGE = 9; // 3x3 grid as shown in the mock-up
  const currentPage = Number(searchParams.page) || 1;

  const { currentServices, totalPages } = await getPaginatedServices(
    currentPage,
    ITEMS_PER_PAGE
  );

  return (
    <main className="flex-grow">
      {/* 1. Hero: "Services" (Dynamic) */}
      <BreadcrumbHero />

      {/* 2. Grid of 9 services + Pagination controls */}
      <ServicesGridSection
        services={currentServices}
        currentPage={currentPage}
        totalPages={totalPages}
      />

    </main>
  );
}