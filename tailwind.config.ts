// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  // This 'content' section is critical.
  // It tells Tailwind where to look for class names.
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // This line is essential for the App Router
  ],
  theme: {
    extend: {
      colors: {
        // Use this muted yellow from the "About Us" section
        'brand-yellow': '#E9C400', 
        'brand-green': '#6B8E23',
        'dark-green': '#3A4D39',
        'light-cream': '#F9F9F7', // The new section background
        'gray-text': '#555555',
        'section-green': '#4A632D',
        
        // Note: The "Get in Touch" button in your header
        // was a brighter yellow (like #FFD700).
        // For simplicity, we're using one 'brand-yellow'.
        // You can easily change the hex code above if you prefer the brighter one.
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'], // Example
        serif: ['"Playfair Display"', 'serif'], // Example
      },
      backgroundImage: {
        // ... your other images
        'wheat-pattern': "url('/images/crop-pattern.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;