import React from "react";

export const ContactCard = ({ icon: Icon, title, detail, onClick }) => (
  <div
    onClick={onClick}
    className={`
      flex items-center gap-4 
      rounded-xl border border-[var(--color-dark-border)] 
      p-4 md:p-6 
      shadow-sm
      transition-all duration-300 ease-in-out /* Added for smooth hover */
      
      ${
        /* Conditionally add hover effects and cursor */
        onClick
          ? "cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:border-[var(--color-dark-accent-primary)] hover:bg-[var(--color-dark-bg-secondary)]"
          : "cursor-default" /* No effects if not clickable */
      }
    `}
  >
    <div className="flex-shrink-0">
      <Icon className="w-7 h-7 text-[var(--color-dark-accent-primary)]" />
    </div>
    <div>
      <h4
        className="
        montserrat-medium text-lg 
        text-[var(--color-dark-text-primary)] 
        mb-1
      "
      >
        {title}
      </h4>
      <p className="text-base text-[var(--color-dark-text-secondary)]">
        {detail}
      </p>
    </div>
  </div>
);