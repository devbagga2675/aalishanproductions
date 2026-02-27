import React from "react";

export const ContactCard = ({ icon: Icon, title, detail, onClick }) => (
  <div
    onClick={onClick}
    className={`
      flex items-center gap-3 md:gap-4 
      rounded-xl border-2 border-[var(--color-dark-border)] 
      py-5 p-4 md:p-6 
      shadow-sm
      transition-all duration-300 ease-in-out
      ${
        onClick
          ? "cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:border-[var(--color-dark-accent-primary)] hover:bg-[var(--color-dark-bg-secondary)]"
          : "cursor-default"
      }
    `}
  >
    <div className="flex-shrink-0">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[var(--color-dark-accent-primary)]" />
    </div>
    <div>
      <h4 className="montserrat-medium  sm:text-base md:text-lg text-[var(--color-dark-text-primary)] mb-0.5 md:mb-1">
        {title}
      </h4>
      <p className=" sm:text-sm md:text-base text-[var(--color-dark-text-secondary)] whitespace-normal">
        {detail}
      </p>
    </div>
  </div>
);
