// components/sections/HistorySection.tsx
// (MODIFIED)

import React from 'react';
import SectionTag from '@/components/ui/SectionTag';
import Image from 'next/image';
import { historyEvents } from '@/components/data/history';
import HistoryEventCard from '@/components/ui/HistoryEventCard';

// --- Icon ---
const LeafIcon = () => (
  <Image 
    src="/images/icons/leaf.svg"
    alt="" 
    width={16} 
    height={16} 
  />
);

// --- Reusable Year Component (Internal to this section) ---
const TimelineYear: React.FC<{ year: string }> = ({ year }) => (
  <h3 
    className="text-transparent text-5xl lg:text-6xl font-extrabold text-left px-4" // <-- CHANGED to text-left px-4
    style={{ 
      WebkitTextStroke: '1.5px #cccccc',
    }}
  >
    {year}
  </h3>
);

// --- Reusable Dot Component (Internal to this section) ---
const TimelineDot: React.FC = () => (
  // The container now has px-4 to match the other elements
  <div className="relative h-full px-4"> 
    {/* The dot is positioned at left-4, which is 1rem (matching px-4) */}
    <div className="absolute -top-1.5 left-4 w-3 h-3 bg-[#6B8E23] rounded-full"></div> 
  </div>
);
// ---

const HistorySection: React.FC = () => {
  return (
    <section className="bg-light-cream py-20 px-4">
      <div className="container mx-auto">
        
        {/* Section Header (Unchanged) */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <SectionTag 
              icon={<LeafIcon />} 
              className="mb-4 bg-white text-[#3A4D39]"
            >
              Our History
            </SectionTag>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3A4D39]">
              Farming have been since <br /> 1866
            </h2>
          </div>
          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            <p className="text-[#555555]">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form.
            </p>
          </div>
        </div>

        {/* --- MODIFIED Timeline --- */}
        <div className="relative">
          
          {/* Row 1: Years */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
            {historyEvents.map((event) => (
              <TimelineYear key={event.id} year={event.year} />
            ))}
          </div>
          
          {/* Row 2: The horizontal line + dots */}
          <div className="relative w-full h-0.5 bg-gray-300">
            {/* The gap-8 here is important to keep columns aligned */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full gap-8">
              {historyEvents.map((event) => (
                <TimelineDot key={event.id} />
              ))}
            </div>
          </div>

          {/* Row 3: Event Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {historyEvents.map((event) => (
              <HistoryEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HistorySection;