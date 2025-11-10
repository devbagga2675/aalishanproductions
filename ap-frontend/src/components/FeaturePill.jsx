import React from 'react';

const FeaturePill = ({ icon: IconComponent, text }) => {
  return (
    <div
      className="
        group                
        inline-flex
        items-center
        justify-start         
        ps-4 py-4 pe-8         
        rounded-full          
        bg-[var(--color-dark-bg-secondary)]
        border                
        border-[var(--color-dark-border)]
        
        text-[var(--color-dark-text-primary)] 
        montserrat-medium
        text-lg               
        whitespace-nowrap     
        shadow-md             
        transition-all duration-300 ease-in-out
        
        hover:border-[var(--color-dark-accent-primary)]
        hover:shadow-lg
        hover:scale-[1.02]
      "
    >
      {IconComponent && (
        <span
          className="
            flex items-center justify-center
            w-14 h-14             
            rounded-full   
            bg-[var(--color-dark-accent-primary)] 
            mr-3                 
            flex-shrink-0        
            transition-all duration-300 ease-in-out
            group-hover:scale-105 
          "
        >
          {/* Icon inside the solid background box */}
          <IconComponent className="w-6 h-6 text-[var(--color-dark-text-primary)]" /> {/* White icon */}
        </span>
      )}
      <span>{text}</span>
    </div>
  );
};

export default FeaturePill;
