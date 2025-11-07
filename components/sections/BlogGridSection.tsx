// components/sections/BlogGridSection.tsx
import React from 'react';
import { BlogPost } from '@/components/types';
import BlogPostCard from '../ui/BlogPostCardV2'; // Reusing homepage card
import Pagination from '../ui/Pagination'; // Reusing services page pagination

interface BlogGridSectionProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
}

const BlogGridSection: React.FC<BlogGridSectionProps> = ({
  posts,
  currentPage,
  totalPages,
}) => {
  return (
    <>
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </>
  );
};

export default BlogGridSection;