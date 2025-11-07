import React, { Suspense } from 'react';
import BreadcrumbHero from '@/components/ui/BreadcrumbHero';
import ServiceTypeToggle from '@/components/ui/ServiceTypeToggle';
import ServicesGridSection from '@/components/sections/ServicesGridSection';
import { servicesAndProducts } from '@/components/data/services'; // Import the combined list

// --- Loading Fallback Components ---
const ToggleLoading = () => (
  <div className="flex justify-center gap-4">
    <div className="w-36 h-14 bg-gray-200 rounded-full animate-pulse"></div>
    <div className="w-36 h-14 bg-gray-200 rounded-full animate-pulse"></div>
  </div>
);

const GridLoading = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
    {[...Array(9)].map((_, i) => (
      <div key={i} className="h-96 w-full animate-pulse bg-gray-200 rounded-lg"></div>
    ))}
  </div>
);
// ---

interface ProductServicePageLayoutProps {
  dataType: 'service' | 'product';
  searchParams: { page?: string };
}

export const ProductServicePageLayout: React.FC<ProductServicePageLayoutProps> = ({
  dataType,
  searchParams,
}) => {
  const ITEMS_PER_PAGE = 9;
  
  // 1. Get current filters
  const currentPage = Number(searchParams.page) || 1;

  // 2. Filter by Type
  const filteredByType = servicesAndProducts.filter(
    item => item.type === dataType
  );

  // 3. Calculate pagination
  const totalPages = Math.ceil(filteredByType.length / ITEMS_PER_PAGE);

  // 4. Calculate the items for the current page
  const currentItems = filteredByType.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="flex-grow">
      {/* 1. Hero: Dynamic title */}
      <BreadcrumbHero />

      {/* 2. Main content section */}
      <section className="bg-light-cream py-20">
        <div className="container mx-auto px-4">
          
          {/* 3. Filter Toggle (Wrapped in Suspense) */}
          <Suspense fallback={<ToggleLoading />}>
            <ServiceTypeToggle />
          </Suspense>

          {/* 4. Grid + Pagination (Wrapped in Suspense) */}
          <div className="mt-12">
            <Suspense fallback={<GridLoading />}>
              <ServicesGridSection
                services={currentItems}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
};