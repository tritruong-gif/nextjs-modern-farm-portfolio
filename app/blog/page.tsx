// app/blog/page.tsx
import React, { Suspense } from 'react'; // <-- Import Suspense
import BreadcrumbHero from '@/components/ui/BreadcrumbHero';
import BlogFilterNav from '@/components/ui/BlogFilterNav';
import BlogGridSection from '@/components/sections/BlogGridSection';
import { blogPosts } from '@/components/data/blogPosts';
import { categories } from '@/components/data/categories';

// --- Loading Fallback Components ---
// You can make these as simple or as complex as you want
const FilterLoading = () => (
  <div className="h-12 w-full animate-pulse bg-gray-200 rounded-lg"></div>
);
const GridLoading = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="h-96 w-full animate-pulse bg-gray-200 rounded-lg"></div>
    <div className="h-96 w-full animate-pulse bg-gray-200 rounded-lg"></div>
    <div className="h-96 w-full animate-pulse bg-gray-200 rounded-lg"></div>
  </div>
);
// ---

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string };
}) {
  // --- All this server-side logic is correct and stays the same ---
  const ITEMS_PER_PAGE = 9;
  const currentPage = Number(searchParams.page) || 1;
  const currentCategory = searchParams.category || 'all';

  const filteredPosts =
    currentCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.categorySlug === currentCategory);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  // --- End of server-side logic ---

  return (
    <main className="flex-grow">
      {/* 1. Hero: "Blog" (Dynamic) */}
      <BreadcrumbHero />

      {/* 2. Main content section */}
      <section className="bg-light-cream py-20">
        <div className="container mx-auto px-4">
          
          {/* 3. Filter Navigation (Wrapped in Suspense) */}
          <Suspense fallback={<FilterLoading />}>
            <BlogFilterNav categories={categories} />
          </Suspense>

          {/* 4. Grid + Pagination (Wrapped in Suspense) */}
          <div className="mt-12">
            <Suspense fallback={<GridLoading />}>
              <BlogGridSection
                posts={currentPosts}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </Suspense>
          </div>
        </div>
      </section>

    </main>
  );
}