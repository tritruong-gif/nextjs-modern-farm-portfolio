// components/ui/BlogMetadata.tsx
import React from 'react';
import { BlogPost } from '@/components/types';
import Link from 'next/link';

interface MetadataRowProps {
  label: string;
  children: React.ReactNode;
}

const MetadataRow: React.FC<MetadataRowProps> = ({ label, children }) => (
  <div className="border-b border-gray-200 py-4">
    <span className="text-gray-text text-sm font-semibold uppercase">{label}</span>
    <div className="text-dark-green font-semibold mt-1">{children}</div>
  </div>
);

interface BlogMetadataProps {
  post: BlogPost;
}

const BlogMetadata: React.FC<BlogMetadataProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-bold text-dark-green mb-4">Post Info</h3>
      <div className="flex flex-col">
        <MetadataRow label="Author">{post.author}</MetadataRow>
        <MetadataRow label="Date">{post.date}</MetadataRow>
        <MetadataRow label="Category">{post.category}</MetadataRow>
        <MetadataRow label="Tags">
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags.map((tag) => (
              <Link
                key={tag.id}
                href={tag.href}
                className="text-sm bg-light-cream px-3 py-1 rounded-full text-gray-text hover:bg-brand-yellow"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </MetadataRow>
      </div>
    </div>
  );
};

export default BlogMetadata;