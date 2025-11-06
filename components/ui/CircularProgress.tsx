// components/ui/CircularProgress.tsx
// (Create this new file)

import React from 'react';

interface CircularProgressProps {
  percentage: number;
  label: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, label }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center">
      {/* SVG Circle */}
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          {/* Background Circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-white opacity-30" // Faded white track
          />
          {/* Progress Circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-white" // Solid white progress
            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
          />
        </svg>
        {/* Percentage Text */}
        <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-dark-green">
          {percentage}%
        </span>
      </div>
      {/* Label */}
      <p className="text-dark-green font-semibold mt-3 max-w-[100px] leading-tight">
        {label}
      </p>
    </div>
  );
};

export default CircularProgress;