// components/ui/BlogFilterNav.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BlogCategory } from '@/components/types';

interface BlogFilterNavProps {
  categories: BlogCategory[];
}

const BlogFilterNav: React.FC<BlogFilterNavProps> = ({ categories }) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {categories.map((category) => {
        const isActive = category.slug === currentCategory;
        const href = category.slug === 'all' 
          ? '/blog' 
          : `/blog?category=${category.slug}`;
        
        return (
          <Link
            key={category.id}
            href={href}
            className={`px-5 py-2 rounded-lg font-semibold transition-colors
              ${isActive
                ? 'bg-dark-green text-white'
                : 'bg-white text-gray-text hover:bg-gray-100 hover:text-dark-green'
              }
            `}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
};

export default BlogFilterNav;