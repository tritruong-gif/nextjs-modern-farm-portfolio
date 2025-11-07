// components/ui/DropdownMenu.tsx
import React from 'react';
import Link from 'next/link';
import { NavLinkItem } from '@/components/types'; // Import the base item type

interface DropdownMenuProps {
  links: NavLinkItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ links }) => {
  return (
    <div 
      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg 
                 border-t-4 border-brand-yellow overflow-hidden z-50"
    >
      <ul>
        {links.map((link, index) => (
          <li key={link.name}>
            <Link 
              href={link.href}
              className={`block py-3 px-5 text-sm font-medium
                ${index === 0 
                  ? 'text-brand-green' // First item is green, as in your image
                  : 'text-dark-green'}
                hover:bg-light-cream transition-colors`}
            >
              {link.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;