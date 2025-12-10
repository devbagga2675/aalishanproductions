import React from 'react';

const SlideUpReveal = ({ children, className = "" }) => {
  return (
    <div 
      className={`group relative overflow-hidden cursor-pointer ${className}`}
      // "group" here ensures the hover triggers on this specific element
    >
      {/* 1. Ghost Element 
        This is invisible but sets the exact width and height of the container 
        based on the text content. 
      */}
      <span className="invisible opacity-0 select-none" aria-hidden="true">
        {children}
      </span>

      {/* 2. Sliding Layer
        Positioned absolutely to sit exactly on top of the ghost element.
        It contains both the default and hover text stacked vertically.
        -translate-y-1/2 moves the container up by 50% of its own height 
        (which is exactly one text row).
      */}
      <div className="absolute top-0 left-0 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1/2">
        
        {/* State A: Default View */}
        <span className="flex h-full items-center justify-center">
          {children}
        </span>

        {/* State B: Hover View (The replacement) */}
        <span className="flex h-full items-center justify-center text-[#4EA89A] font-medium">
          {children}
        </span>
        
      </div>
    </div>
  );
};

export default SlideUpReveal;