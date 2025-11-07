// app/blog/[slug]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/components/data/blogPosts';
import BreadcrumbHero from '@/components/ui/BreadcrumbHero';
import BlogDetailContent from '@/components/sections/BlogDetailContent';
import PostNavigation from '@/components/ui/PostNavigation';

// --- Data Fetching Function (runs on server) ---
async function getPostData(slug: string) {
  const allPosts = blogPosts;
  
  const post = allPosts.find(p => p.slug === slug);
  
  if (!post) {
    return { post: undefined, prevPost: undefined, nextPost: undefined };
  }

  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : undefined;

  return { post, prevPost, nextPost };
}

// --- Static Generation ---
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// --- Page Component (Server Component) ---
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { post, prevPost, nextPost } = await getPostData((await params).slug);
    
  if (!post) {
    notFound();
  }

  return (
    <main className="flex-grow">
      {/* 1. Hero: Dynamic title, e.g., "Vertical Farming" */}
      <BreadcrumbHero />

      {/* 2. Main content section */}
      <section className="bg-light-cream py-20">
        <div className="container mx-auto px-4">
          
          {/* 3. The <article> holding all content */}
          <BlogDetailContent post={post} />

          {/* 4. Previous/Next Navigation */}
          <PostNavigation prevPost={prevPost} nextPost={nextPost} />

        </div>
      </section>

    </main>
  );
}