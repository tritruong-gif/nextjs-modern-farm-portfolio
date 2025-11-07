"use client";

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';


interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pages = [];
    // Simple logic: show first, current, and last pages
    // You can expand this logic for more complex scenarios
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 2) pages.push(0); // 0 will be rendered as '...'
      if (currentPage > 1 && currentPage < totalPages) pages.push(currentPage);
      if (currentPage < totalPages - 1) pages.push(0); // 0 will be rendered as '...'
      pages.push(totalPages);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex justify-center items-center gap-2 mt-12">
      {/* Prev Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-dark-green disabled:opacity-50 disabled:cursor-not-allowed hover:bg-light-cream"
      >
        <ChevronLeftIcon className="hover:text-amber-300 size-6" />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) =>
        page === 0 ? (
          <span key={`ellipsis-${index}`} className="px-4 py-2 text-gray-text">...</span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg shadow-sm border border-gray-200
              ${currentPage === page
                ? 'bg-brand-yellow text-dark-green font-bold'
                : 'bg-white text-dark-green hover:bg-light-cream'
              }
            `}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-dark-green disabled:opacity-50 disabled:cursor-not-allowed hover:bg-light-cream"
      >
        <ChevronRightIcon className="hover:text-amber-300 size-6" />
      </button>
    </nav>
  );
};

export default Pagination;