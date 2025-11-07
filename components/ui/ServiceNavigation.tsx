// components/ui/ServiceNavigation.tsx
import React from 'react';
import { Service } from '@/components/types'; // Use the Service type
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';


interface ServiceNavigationProps {
  prevService?: Service;
  nextService?: Service;
}

const ServiceNavigation: React.FC<ServiceNavigationProps> = ({ prevService, nextService }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 mt-16 border-t border-gray-200 pt-8">
      {/* Previous Service */}
      {prevService ? (
        <Link 
          href={prevService.href} 
          className="flex items-center gap-4 group p-4 rounded-lg hover:bg-white w-full md:w-1/2"
        >
          <ArrowLeftIcon className="hover:text-amber-300 size-10" />
          <div className="text-left">
            <span className="text-sm text-gray-text">PREVIOUS</span>
            <h4 className="text-lg font-bold text-dark-green group-hover:text-brand-green transition-colors">
              {prevService.title}
            </h4>
          </div>
        </Link>
      ) : (
        <div></div> // Empty div for flex alignment
      )}

      {/* Next Service */}
      {nextService ? (
        <Link 
          href={nextService.href} 
          className="flex items-center gap-4 group p-4 rounded-lg hover:bg-white w-full md:w-1/2 justify-end"
        >
          <div className="text-right">
            <span className="text-sm text-gray-text">NEXT</span>
            <h4 className="text-lg font-bold text-dark-green group-hover:text-brand-green transition-colors">
              {nextService.title}
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

export default ServiceNavigation;