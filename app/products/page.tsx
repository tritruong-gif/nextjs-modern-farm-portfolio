// app/products/page.tsx
import React from 'react';
import { ProductServicePageLayout } from '@/components/layout/ProductServicePageLayout';

// Page Server Component
export default function ProductsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  return (
    <ProductServicePageLayout 
      dataType="product" 
      searchParams={searchParams} 
    />
  );
}