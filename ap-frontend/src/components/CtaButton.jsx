// components/CtaButton.jsx
import React from 'react';

/**
 * The default 45-degree arrow icon.
 */
const DefaultArrowIcon = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
        transform="rotate(-45 12 12)"
      ></path>
    </svg>
  );
};

// --- Helper Component to Handle Styling and Content ---

const CtaBase = ({ 
  children, 
  title, 
  Icon, 
  isPrimary = true, 
  externalHref, 
  onClick, 
  ...props 
}) => {
  // Define base and hover states based on primary/secondary variant
  const baseClasses = `
    cursor-pointer
    group inline-flex items-center justify-between pr-2 pl-6 py-2 rounded-full 
    shadow-lg transition-all duration-300 ease-in-out max-w-fit
    ${isPrimary 
      ? `bg-[var(--color-dark-accent-primary)] group-hover:bg-[var(--color-dark-text-primary)]` 
      : `bg-transparent border border-[var(--color-dark-text-secondary)] group-hover:bg-[var(--color-dark-accent-primary)]`
    }
  `;

  const titleClasses = `
    montserrat-medium text-lg 
    ${isPrimary ? 'text-[var(--color-dark-bg-secondary)]' : 'text-[var(--color-dark-text-primary)]'}
    ${Icon ? 'mr-4' : ''} transition-colors duration-300
  `;

  const iconContainerClasses = `
    flex items-center justify-center w-10 h-10 rounded-full 
    bg-[var(--color-dark-text-primary)] transition-all duration-300 ease-in-out
    ${isPrimary 
      ? `bg-[var(--color-dark-text-primary)]` 
      : `bg-[var(--color-dark-text-primary)] ` 
    }
  `;

  const iconClasses = `
    w-5 h-5 
    ${isPrimary 
      ? 'text-[var(--color-dark-accent-primary)]' 
      : 'text-[var(--color-dark-bg-primary)] '
    }
    transition-transform duration-300 ease-in-out group-hover:rotate-45
  `;

  const content = (
    <>
      {/* Button Title */}
      <span className={titleClasses}>
        {title}
      </span>

      {/* Circular Icon Button */}
      {Icon && (
        <span className={iconContainerClasses}>
          <Icon className={iconClasses} />
        </span>
      )}
      {children}
    </>
  );

  // --- Conditional Rendering based on props ---
  if (externalHref) {
    return (
      <a
        href={externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Default to button for click actions
  return (
    <button
      type="button" // Use 'button' type for actions, unless it's a form submit
      onClick={onClick}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
};

// --- Exported Components (Primary and Secondary) ---


export const CtaButton = ({ title, Icon = DefaultArrowIcon, externalHref, onClick }) => (
  <CtaBase 
    title={title} 
    Icon={Icon} 
    isPrimary={true} 
    externalHref={externalHref} 
    onClick={onClick} 
  />
);



export const CtaButtonSecondary = ({ title, Icon = DefaultArrowIcon, externalHref, onClick }) => (
  <CtaBase 
    title={title} 
    Icon={Icon} 
    isPrimary={false} 
    externalHref={externalHref} 
    onClick={onClick} 
  />
);