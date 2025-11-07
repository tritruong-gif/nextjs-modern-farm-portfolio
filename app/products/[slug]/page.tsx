// app/products/[slug]/page.tsx

// This is a Server Component by default.
// We do not add "use client".
import React from 'react';
import { notFound } from 'next/navigation';
import { mockProducts } from '@/components/data/services'; // Import all services
import BreadcrumbHero from '@/components/ui/BreadcrumbHero';
import ServiceSidebarNav from '@/components/ui/ServiceSidebarNav';
import SidebarCtaCard from '@/components/ui/SidebarCtaCard';
import DownloadCard from '@/components/ui/DownloadCard';
import ProductDetailContent from '@/components/sections/ProductDetailContent';
import ServiceNavigation from '@/components/ui/ServiceNavigation';

// --- Data Fetching Function (runs on server) ---
async function getProductData(slug: string) {
  const allItems = mockProducts; 
  const service = allItems.find(s => s.slug === slug);

  if (!service) {
    return { service: undefined, allServices: allItems, prevService: undefined, nextService: undefined };
  }

  // Filter for *only* items of the same type (services or products)
  const relevantItems = allItems.filter(item => item.type === service.type);
  
  // Find index within the filtered list
  const currentIndex = relevantItems.findIndex(item => item.slug === slug);

  const prevService = currentIndex > 0 ? relevantItems[currentIndex - 1] : undefined;
  const nextService = currentIndex < relevantItems.length - 1 ? relevantItems[currentIndex + 1] : undefined;

  return { service, allServices: allItems, prevService, nextService };
}

// --- Static Generation (Optional but recommended) ---
// This function tells Next.js to pre-render all service pages
// at build time for a super-fast static site.
export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    slug: product.slug,
  }));
}

// --- Page Component (Server Component) ---
export default async function ProductDetailPage({
  params,
}: {
  // The 'params' prop is automatically passed to the page
  // and contains the URL slug.
  params: Promise<{ slug: string }>;
}) {
  // We get the service data on the server using the slug from the URL.
  const { service, allServices, prevService, nextService } = await getProductData((await params).slug);

  // If no service matches, we call notFound()
  if (!service) {
    notFound();
  }
  
  // The rest of the page is rendered on the server.
  return (
    <main className="flex-grow">
      {/* 1. Hero: Dynamic title, e.g., "Harvest Concepts" */}
      <BreadcrumbHero />

      {/* 2. Main content section */}
      <section className="bg-light-cream py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column (Sidebar) */}
            <aside className="lg:col-span-1 space-y-8">
              {/* This client component receives all services as a prop */}
              <ServiceSidebarNav services={allServices} />
              <SidebarCtaCard />
              <DownloadCard />
            </aside>
            
            {/* Right Column (Main Content) */}
            <div className="lg:col-span-2">
              {/* This server component receives the specific service data */}
              <ProductDetailContent product={service} />
              <ServiceNavigation prevService={prevService} nextService={nextService} />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}