import React, { Suspense } from 'react'; // <-- Import Suspense
import BreadcrumbHero from '@/components/ui/BreadcrumbHero';
import ServicesGridSection from '@/components/sections/ServicesGridSection';
import { services } from '@/components/data/services';

// --- Loading Fallback ---
// A simple loading skeleton for the grid
const GridLoading = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="h-96 w-full animate-pulse bg-gray-200 rounded-lg"></div>
    <div className="h-96 w-full animate-pulse bg-gray-200 rounded-lg"></div>
    <div className="h-96 w-full animate-pulse bg-gray-200 rounded-lg"></div>
    <div className="h-96 w-full animate-pulse bg-gray-200 rounded-lg"></div>
    <div className="h-96 w-full animate-pulse bg-gray-200 rounded-lg"></div>
    <div className="h-96 w-full animate-pulse bg-gray-200 rounded-lg"></div>
  </div>
);
// ---

// --- Server-side data logic (unchanged) ---
async function getPaginatedServices(currentPage: number, itemsPerPage: number) {
  const allServices = services; 
  const totalPages = Math.ceil(allServices.length / itemsPerPage);
  const currentServices = allServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return { currentServices, totalPages };
}
// ---

// --- Page Server Component (Updated) ---
export default async function ServicesPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const ITEMS_PER_PAGE = 9;
  const currentPage = Number(searchParams.page) || 1;

  const { currentServices, totalPages } = await getPaginatedServices(
    currentPage,
    ITEMS_PER_PAGE
  );

  return (
    <main className="flex-grow">
      {/* 1. Hero: "Services" (Dynamic) */}
      <BreadcrumbHero />

      {/* 2. Grid + Pagination (Wrapped in Suspense) */}
      <Suspense fallback={<GridLoading />}>
        <ServicesGridSection
          services={currentServices}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Suspense>

    </main>
  );
}