// components/ui/BlogPostCard.tsx
// (Create this new file)

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/components/types';
import Button from '@/components/ui/Button'; // Our reusable button

// --- Define your icons ---
const DiagonalArrowIcon = () => (
  <Image 
    src="/images/icons/arrow.svg" 
    alt="" 
    width={16} 
    height={16} 
  />
);
const CalendarIcon = () => (
  <Image 
    src="/images/icons/calendar.svg" // Add this icon
    alt="" 
    width={14} 
    height={14}
    className="opacity-60"
  />
);
const UserIcon = () => (
  <Image 
    src="/images/icons/user.svg" // Add this icon
    alt="" 
    width={14} 
    height={14}
    className="opacity-60"
  />
);
// ---

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl h-full text-left shadow-md">
      {/* Image Container */}
      <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
        {/* Category Tag */}
        <div 
          className="absolute top-4 left-4 bg-white bg-opacity-90 text-[#3A4D39] 
                     text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md"
        >
          {post.category}
        </div>
        
        {/* Button */}
        <div className="absolute bottom-4 right-4">
          <Button
            href={post.href}
            variant="primary" // Yellow button
            size="icon"
            icon={<DiagonalArrowIcon />}
            aria-label={`Learn more about ${post.title}`}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-[#555555] mb-3">
          <div className="flex items-center gap-1.5">
            <CalendarIcon />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <UserIcon />
            <span>{post.author}</span>
          </div>
        </div>

        {/* Title */}
        <Link href={post.href}>
          <h3 className="text-xl font-bold text-[#3A4D39] hover:text-[#6B8E23] transition-colors">
            {post.title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;