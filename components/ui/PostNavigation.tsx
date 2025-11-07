// components/ui/PostNavigation.tsx
import React from 'react';
import { BlogPost } from '@/components/types';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';


interface PostNavigationProps {
  prevPost?: BlogPost;
  nextPost?: BlogPost;
}

const PostNavigation: React.FC<PostNavigationProps> = ({ prevPost, nextPost }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 mt-16 border-t border-gray-200 pt-8">
      {/* Previous Post */}
      {prevPost ? (
        <Link 
          href={prevPost.href} 
          className="flex items-center gap-4 group p-4 rounded-lg hover:bg-white w-full md:w-1/2"
        >
          <ArrowLeftIcon className="hover:text-amber-300 size-10" />
          <div className="text-left">
            <span className="text-sm text-gray-text">PREVIOUS POST</span>
            <h4 className="text-lg font-bold text-dark-green group-hover:text-brand-green transition-colors">
              {prevPost.title}
            </h4>
          </div>
        </Link>
      ) : (
        <div></div> // Empty div for flex alignment
      )}

      {/* Next Post */}
      {nextPost ? (
        <Link 
          href={nextPost.href} 
          className="flex items-center gap-4 group p-4 rounded-lg hover:bg-white w-full md:w-1/2 justify-end"
        >
          <div className="text-right">
            <span className="text-sm text-gray-text">NEXT POST</span>
            <h4 className="text-lg font-bold text-dark-green group-hover:text-brand-green transition-colors">
              {nextPost.title}
            </h4>
          </div>
          <ArrowRightIcon className="hover:text-amber-300 size-10" />
        </Link>
      ) : (
        <div></div> // Empty div for flex alignment
      )}
    </div>
  );
};

export default PostNavigation;