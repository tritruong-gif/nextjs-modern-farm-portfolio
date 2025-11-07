// components/data/faqs.ts
import { FaqItem } from '@/components/types';

const loremAnswer = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.';

export const generalFaqs: FaqItem[] = [
  {
    id: 'g1',
    question: 'What is Agricultural Biotechnology?',
    answer: loremAnswer,
  },
  {
    id: 'g2',
    question: 'Can the products be applied during rainy season?',
    answer: loremAnswer,
  },
  {
    id: 'g3',
    question: 'What vegetables can I grow in my hothouse?',
    answer: loremAnswer,
  },
];

export const otherFaqs: FaqItem[] = [
  {
    id: 'o1',
    question: 'What is modern agriculture?',
    answer: loremAnswer,
  },
  {
    id: 'o2',
    question: 'What are the 2 main types of farming?',
    answer: loremAnswer,
  },
  {
    id: 'o3',
    question: 'What are the different types of greenhouse?',
    answer: loremAnswer,
  },
];

export const happyFaqs: FaqItem[] = [
  {
    id: 'h1',
    question: 'What are the ideal temperature and humidity conditions for strawberry farming?',
    answer: loremAnswer,
  },
  {
    id: 'h2',
    question: 'What are the common diseases and pests that affect strawberry plants?',
    answer: loremAnswer,
  },
  {
    id: 'h3',
    question: 'What are the government initiatives in the agriculture sector?',
    answer: loremAnswer,
  },
  {
    id: 'h4',
    question: 'How can we adapt agriculture to the impacts of climate change?',
    answer: loremAnswer,
  },
  {
    id: 'h5',
    question: 'What can be done to reduce greenhouse gas emissions from agriculture?',
    answer: loremAnswer,
  },
];