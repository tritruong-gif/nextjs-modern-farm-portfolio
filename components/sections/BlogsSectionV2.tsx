import React from 'react';
import { blogPosts } from '@/components/data/blogPosts';
// import BlogPostCard from '@/components/ui/BlogPostCard';
import BlogPostCard from '@/components/ui/BlogPostCardV2';
// import SectionTag from '@/components/ui/SectionTag';
import SectionTag from '@/components/ui/SectionTagV2';
// import ServiceCarousel from '@/components/ui/ServiceCarousel';
import ServiceCarousel from '@/components/ui/ServiceCarouselV2';
import CustomImage from '../ui/CustomImage';

const LeafIcon = () => (
  <CustomImage src="/images/icons/leaf.svg" alt="" width={16} height={16} />
);

const BlogSection: React.FC = () => {
  return (
    <section className="bg-light-cream text-dark-green py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ServiceCarousel
          theme="light"
          tag={
            <SectionTag 
              icon={<LeafIcon />} 
              className="text-dark-green bg-white"
            >
              Latest Blog
            </SectionTag>
          }
          title="Latest posts & articles"
        >
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </ServiceCarousel>
      </div>
    </section>
  );
};

export default BlogSection;