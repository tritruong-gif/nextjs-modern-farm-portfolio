// components/sections/BlogDetailContent.tsx
import React from 'react';
import { BlogPost } from '@/components/types';
import CustomImage from '../ui/CustomImage';
import BlogMetadata from '../ui/BlogMetadata';
import Blockquote from '../ui/Blockquote';
import NumberedInfoBlock from '../ui/NumberedInfoBlock'; // Reusing from service detail

// --- Icon ---
const CheckIcon = () => (
  <CustomImage 
    src="/images/icons/check-yellow.svg" // Using yellow check
    alt="Check"
    width={20}
    height={20}
    className="flex-shrink-0"
  />
);
// ---

interface BlogDetailContentProps {
  post: BlogPost;
}

const BlogDetailContent: React.FC<BlogDetailContentProps> = ({ post }) => {
  return (
    <article>
      {/* 1. Main Image */}
      <CustomImage
        src={post.mainImageUrl}
        alt={post.title}
        width={1200}
        height={600}
        className="rounded-xl w-full h-auto object-cover"
        priority
      />

      {/* 2. Metadata + Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Left Column: Metadata */}
        <aside className="lg:col-span-1">
          <BlogMetadata post={post} />
        </aside>

        {/* Right Column: Content */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-dark-green mb-4">
            {post.contentTitle}
          </h2>
          <p className="text-gray-text leading-relaxed mb-4">{post.contentP1}</p>
          <p className="text-gray-text leading-relaxed">{post.contentP2}</p>
        </div>
      </div>

      {/* 3. Two-column Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <CustomImage
          src={post.twoColImg1}
          alt="Blog detail image 1"
          width={600}
          height={400}
          className="rounded-xl w-full h-auto object-cover"
        />
        <CustomImage
          src={post.twoColImg2}
          alt="Blog detail image 2"
          width={600}
          height={400}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      {/* 4. List Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-dark-green mb-6">{post.listTitle}</h3>
        <ul className="space-y-4">
          {post.listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-gray-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 5. Numbered Blocks Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {post.numberedBlocks.map((block, index) => (
          <NumberedInfoBlock
            key={block.id}
            number={(index + 1).toString().padStart(2, '0')}
            title={block.title}
            description={block.description}
          />
        ))}
      </div>

      {/* 6. Creative Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-dark-green mb-4">
          {post.creativeTitle}
        </h3>
        <p className="text-gray-text leading-relaxed">{post.creativeContent}</p>
      </div>

      {/* 7. Blockquote */}
      <Blockquote text={post.quote.text} author={post.quote.author} />
    </article>
  );
};

export default BlogDetailContent;