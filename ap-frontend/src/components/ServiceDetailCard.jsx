import React from "react";

const ServiceDetailCard = ({ title, subtext, Icon }) => {
  return (
<div
  className="
    h-72
    w-full
    group relative flex flex-col justify-between p-6 
    rounded-2xl border-2 border-(--color-dark-border) 
    bg-linear-to-br from-(--color-dark-bg-secondary) to-(--color-dark-bg-primary) 
    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:border-(--color-dark-accent-primary) 
    hover:shadow-lg hover:shadow-(--color-dark-accent-primary)/10
  "
>
      {/* Icon Container */}
      <div
        className="
        aspect-square
          mb-3 inline-flex h-12 w-12 items-center justify-center 
          rounded-xl border border-2 border-[var(--color-dark-border)] 
          bg-[var(--color-dark-bg-primary)] 
          text-[var(--color-dark-accent-primary)]
        "
      >
        {/* Render icon if provided, explicitly controlling size */}
        {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
      </div>

      {/* Title */}
      <div className="flex flex-col">
        <h3 className="mb-2 text-xl montserrat-semibold tracking-tight text-[var(--color-dark-text-primary)] ">
          {title}
        </h3>
        {/* Subtext */}
        <p className="text-sm leading-relaxed text-[var(--color-dark-text-secondary)] inter-medium">
          {subtext}
        </p>
      </div>
    </div>
  );
};

// ServiceDetailCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtext: PropTypes.string.isRequired,
//   /** * Expects a React component (like a Lucide or Heroicon component),
//    * not a rendered element.
//    * Usage: icon={UserIcon} NOT icon={<UserIcon />}
//    */
//   icon: PropTypes.elementType,
// };

export default ServiceDetailCard;
