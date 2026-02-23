import React from 'react';

const Loader = ({ loadingText = 'Loading...' }) => {
  return (
    // Overlay: Solid dark background with a very subtle blur for a polished feel
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-dark-bg-primary)]/95 backdrop-blur-sm transition-opacity duration-300">
      
      <div className="flex flex-col items-center space-y-5">
        
        {/* Elegant SVG Spinner */}
        <svg 
          className="w-10 h-10 animate-spin" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          {/* Subtle Background Track */}
          <circle 
            className="stroke-[var(--color-dark-border)]" 
            cx="12" 
            cy="12" 
            r="10" 
            strokeWidth="3"
          ></circle>
          
          {/* Active Spinning Indicator */}
          <path 
            className="fill-[var(--color-dark-accent-primary)]" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>

        {/* Clean Typography */}
        <p className="text-[var(--color-dark-text-primary)] montserrat-regular font-medium text-md text-nowrap tracking-wide animate-pulse">
          {loadingText}
        </p>
        
      </div>
      
    </div>
  );
};

export default Loader;