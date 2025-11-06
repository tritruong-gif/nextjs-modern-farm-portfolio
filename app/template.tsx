import React from 'react';
import Header from '@/components/layout/Header';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}