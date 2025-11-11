import React from "react";

const SectionTitle = ({ children, align }) => {
  return (
    <h2
      className={`
              montserrat-regular
              tracking-tight
              
              /* --- THIS IS THE NEW GRADIENT --- */
              bg-gradient-to-b from-[var(--color-dark-text-primary)] to-[var(--color-dark-accent-primary)]

              bg-clip-text text-transparent
              text-4xl sm:text-5xl lg:text-6xl pb-4 text-${align}
    `}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
