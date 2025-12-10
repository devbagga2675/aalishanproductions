import React from "react";
import { MoveUpRight } from "lucide-react"; // We still need this for the arrow
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, subtitle, imageUrl, path }) => {

  const goTo = useNavigate()
  return (
    <div
      onClick={() => goTo(path)}
      className="
        group 
        relative 
        aspect-3/4
        overflow-hidden 
        rounded-md 
        shadow-lg
      "
    >
      {/* 1. Background Image */}
      <div
        className="
          absolute inset-0 
          bg-cover bg-center 
          transition-transform duration-500 ease-in-out
          group-hover:scale-110
        "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* 2. Gradient Overlay */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-t 
          from-black/100
          via-black/60
          to-transparent
        "
      />

      {/* 3. Top-right "click to learn more" link (appears on hover) */}
      <div
        className="
          absolute top-6 right-6 z-10
          opacity-0 /* Hidden by default */
          transition-opacity duration-300 ease-in-out
          group-hover:opacity-100 /* Visible on card hover */
        "
      >
        <div
          className="
            flex items-center gap-1 
            text-sm 
            montserrat-medium
            text-[var(--color-dark-text-primary)] 
            underline
          "
        >
          <span>click to learn more</span>
          <MoveUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* 4. Text Content (Title + Subtitle) */}
      <div
        className="
          absolute bottom-0 left-0 right-0 
          p-4 
          text-white
        "
      >
        <h3
          className="
            text-xl 
            montserrat-regular 
            text-[var(--color-dark-text-primary)]
            transition-transform duration-300 ease-in-out
          "
        >
          {title}
        </h3>
        <p
          className="
            inter-regular
            text-md 
            text-[var(--color-dark-text-secondary)]
            max-h-0 
            opacity-0 
            transition-all duration-300 ease-in-out
            group-hover:max-h-40 
            group-hover:opacity-100
          "
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;