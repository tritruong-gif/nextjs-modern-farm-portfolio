// app/blog/page.tsx
import React from 'react';
import BreadcrumbHero from '@/components/ui/BreadcrumbHero';
import BlogFilterNav from '@/components/ui/BlogFilterNav';
import BlogGridSection from '@/components/sections/BlogGridSection';
import { blogPosts } from '@/components/data/blogPosts';
import { categories } from '@/components/data/categories';

// --- Page Server Component ---
export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string };
}) {
  // 1. Define constants
  const ITEMS_PER_PAGE = 9; // 3x3 grid as shown

  // 2. Get current filters from URL
  const currentPage = Number(searchParams.page) || 1;
  const currentCategory = searchParams.category || 'all';

  // 3. Filter the posts
  const filteredPosts =
    currentCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.categorySlug === currentCategory);

  // 4. Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  
  // 5. Slice the posts for the current page
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="flex-grow">
      {/* 1. Hero: "Blog" (Dynamic) */}
      <BreadcrumbHero />

      {/* 2. Main content section */}
      <section className="bg-light-cream py-20">
        <div className="container mx-auto px-4">
          
          {/* 3. Filter Navigation */}
          <BlogFilterNav categories={categories} />

          {/* 4. Grid + Pagination */}
          <div className="mt-12">
            <BlogGridSection
              posts={currentPosts}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </section>

    </main>
  );
}