// components/sections/BlogSection.tsx
// (Create this new file)

import React from 'react';
import { blogPosts } from '@/components/data/blogPosts';
import BlogPostCard from '@/components/ui/BlogPostCard';
import SectionTag from '@/components/ui/SectionTag';
import ServiceCarousel from '@/components/ui/ServiceCarousel'; // Reusing this!
import Image from 'next/image';

// --- Define your icon ---
const LeafIcon = () => (
  <Image src="/images/icons/leaf.svg" alt="" width={16} height={16} />
);

const BlogSection: React.FC = () => {
  return (
    // This section uses the light-cream background
    <section className="bg-[#F9F9F7] text-[#3A4D39] py-20 overflow-hidden">
      <div className="container mx-auto relative z-10 px-2 md:px-20">
        
        <ServiceCarousel
          theme="light" // Using the light theme
          tag={
            <SectionTag 
              icon={<LeafIcon />} 
              className="text-[#3A4D39] bg-white"
            >
              Latest Blog
            </SectionTag>
          }
          title="Latest posts & articles"
        >
          {/* These BlogPostCard components are rendered ON THE SERVER */}
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </ServiceCarousel>

      </div>
    </section>
  );
};

export default BlogSection;