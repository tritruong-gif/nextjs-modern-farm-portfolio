// components/data/blogPosts.ts
// (Create this new file)

import { BlogPost } from '@/components/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    category: 'Food Crisis',
    date: 'March 28, 2024',
    author: 'Admin',
    title: 'What technology is used in vertical farming?',
    imageUrl: '/images/blog/blog-1.jpg', // Add this image
    href: '/blog/vertical-farming',
  },
  {
    id: '2',
    category: 'Organic Farm',
    date: 'March 28, 2024',
    author: 'Admin',
    title: 'Which type of farming is more prevalent today?',
    imageUrl: '/images/blog/blog-2.jpg', // Add this image
    href: '/blog/farming-types',
  },
  {
    id: '3',
    category: 'Farming Tips',
    date: 'March 28, 2024',
    author: 'Admin',
    title: 'The Farmers Sentiment Darkens Hopes Fade',
    imageUrl: '/images/blog/blog-3.jpg', // Add this image
    href: '/blog/farmers-sentiment',
  },
  {
    id: '4',
    category: 'Technology',
    date: 'March 27, 2024',
    author: 'Admin',
    title: 'The Future of Sustainable Agriculture',
    imageUrl: '/images/blog/blog-4.jpg', // Add this image
    href: '/blog/sustainable-agriculture',
  },
];