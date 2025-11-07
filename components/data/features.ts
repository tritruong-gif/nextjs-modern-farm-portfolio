// components/data/features.ts
// (Create this new file)

import { Feature } from '@/components/types';

// NOTE: You will need to find/create these SVGs
// and place them in /public/images/icons/
export const features: Feature[] = [
  {
    id: '1',
    title: 'Professional Farmers',
    description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
    iconSrc: '/images/icons/tractor.svg', // Placeholder
    href: '/services'
  },
  {
    id: '2',
    title: 'Fresh Vegetables',
    description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
    iconSrc: '/images/icons/hand-with-plant.svg', // Placeholder
    href: '/services/products'
  },
  {
    id: '3',
    title: 'Agriculture Products',
    description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
    iconSrc: '/images/icons/plant-bed.svg', // Placeholder
    href: '/services/products'
  },
  {
    id: '4',
    title: '100% Guaranteed',
    description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
    iconSrc: '/images/icons/plant.svg', // Placeholder
    href: '/about-us'
  }
];