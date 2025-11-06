// components/ui/Button.tsx

import Link from 'next/link';
import React from 'react';

// Define the component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode; // <-- Made children optional
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text'; // <-- Added 'text'
  size?: 'sm' | 'md' | 'lg' | 'icon'; // <-- Added 'icon'
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  ...props
}) => {
  // Base styles for all buttons
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ease-in-out group';

  // Styles for different variants
  const variantStyles = {
    primary: 'bg-[#E9C400] text-[#3A4D39] hover:bg-yellow-400',
    secondary: 'bg-white text-[#3A4D39] hover:bg-gray-100',
    outline: 'border border-white text-white hover:bg-white hover:text-[#3A4D39]',
    text: 'text-gray-400 hover:text-[#3A4D39]', // <-- New variant for the icon
  };

  // Styles for different sizes
  const sizeStyles = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    icon: 'p-2', // <-- New size for icon-only
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // The content of the button, including the icon
  const content = (
    <>
      {children}
      {icon && (
        <span className={
          // <-- Logic: Only add margin if children exist
          children ? 'ml-2 transform transition-transform duration-300 group-hover:translate-x-1' : ''
        }>
          {icon}
        </span>
      )}
    </>
  );

  // Render as a Next.js Link if href is provided
  if (href) {
    return (
      <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    );
  }

  // Render as a standard button
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;