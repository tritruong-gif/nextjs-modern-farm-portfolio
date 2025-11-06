import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/components/types';
import Button from '@/components/ui/Button';
import CustomImage from './CustomImage';

const DiagonalArrowIcon = () => (
  <CustomImage 
    src="/images/icons/arrow.svg" 
    alt="" 
    width={16} 
    height={16} 
  />
);
const CalendarIcon = () => (
  <CustomImage 
    src="/images/icons/calendar.svg"
    alt="" 
    width={14} 
    height={14}
    className="opacity-60"
  />
);
const UserIcon = () => (
  <CustomImage 
    src="/images/icons/user.svg"
    alt="" 
    width={14} 
    height={14}
    className="opacity-60"
  />
);

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl h-full text-left shadow-md">
      <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
        <CustomImage
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
        <div 
          className="absolute top-4 left-4 bg-white bg-opacity-90 text-dark-green 
                     text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md"
        >
          {post.category}
        </div>
        <div className="absolute bottom-4 right-4">
          <Button
            href={post.href}
            variant="primary"
            size="icon"
            icon={<DiagonalArrowIcon />}
            aria-label={`Learn more about ${post.title}`}
          />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-text mb-3">
          <div className="flex items-center gap-1.5">
            <CalendarIcon />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <UserIcon />
            <span>{post.author}</span>
          </div>
        </div>
        <Link href={post.href}>
          <h3 className="text-xl font-bold text-dark-green hover:text-brand-green transition-colors">
            {post.title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;