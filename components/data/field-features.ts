// components/data/field-features.ts
// (Create this new file)

import { FieldFeature } from '@/components/types';

export const fieldFeatures: FieldFeature[] = [
  {
    id: '1',
    iconSrc: '/images/icons/hand-with-plant.svg', // Reuse existing icon or new
    title: 'Agriculture Products',
    description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
  },
  {
    id: '2',
    iconSrc: '/images/icons/carrot.svg', // Reuse existing icon or new
    title: 'Fresh Vegetables',
    description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
  },
  {
    id: '3',
    iconSrc: '/images/icons/plant-bed.svg', // New icon needed
    title: 'Quality Products',
    description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
  },
  {
    id: '4',
    iconSrc: '/images/icons/crop.svg', // New icon needed
    title: 'Pure & Organic',
    description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
  },
];