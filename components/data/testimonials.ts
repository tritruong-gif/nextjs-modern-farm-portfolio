// components/data/testimonials.ts
// (Add a 'rating' value to each object)

import { Testimonial } from '@/components/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Robert C.',
    role: 'New York, USA',
    avatarSrc: '/images/avatars/avatar-1.jpg',
    quote: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    rating: 5, // <-- ADDED
  },
  {
    id: '2',
    name: 'Emily R.',
    role: 'California, USA',
    avatarSrc: '/images/avatars/avatar-2.jpg',
    quote: 'The majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even.',
    rating: 4, // <-- ADDED
  },
  {
    id: '3',
    name: 'Michael B.',
    role: 'Texas, USA',
    avatarSrc: '/images/avatars/avatar-3.jpg',
    quote: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices. By injected humour, or randomised words.',
    rating: 5, // <-- ADDED
  },
  {
    id: '4',
    name: 'Sarah K.',
    role: 'Florida, USA',
    avatarSrc: '/images/avatars/avatar-4.jpg',
    quote: 'Randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum.',
    rating: 4, // <-- ADDED
  },
];