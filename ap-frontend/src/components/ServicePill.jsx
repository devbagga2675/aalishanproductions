import React from 'react';

const ServicePill = ({ text }) => {
  return (
    <div
      className="
        inline-flex
        bg-[var(--color-dark-bg-secondary)]
        items-center
        px-4 py-2              /* Padding inside the pill */
        rounded-full           /* Fully rounded corners */
        text-[var(--color-dark-text-primary)] /* Text color is your primary text white/off-white */
        montserrat-medium      /* Apply Montserrat font */
        text-sm                /* Smaller text size for a pill */
        tracking-wide          /* Slightly wider letter spacing */
        select-none            /* Prevent text selection */
        whitespace-nowrap      /* Keep text on one line */
      "
    >
      {/* Small accent dot */}
      <span
        className="
          w-2 h-2              /* Size of the dot */
          mr-2                 /* Margin to separate dot from text */
          rounded-full          /* Make it a circle */
          bg-[var(--color-dark-accent-primary)] /* Dot color is your primary accent blue */
          flex-shrink-0         /* Prevent dot from shrinking */
        "
      ></span>
      
      {/* The text content */}
      {text}
    </div>
  );
};

export default ServicePill;