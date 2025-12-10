import React from "react";

const TeamCard = ({ member }) => {
  return (
    <div
      className="
        relative
        aspect-[3/4]
        w-full
        
        overflow-hidden
        shadow-lg
        group
        bg-[var(--color-dark-bg-secondary)]
      "
    >
      {/* Background Image with scale effect on hover */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          transition-transform
          duration-500
          group-hover:scale-105
        "
        style={{ backgroundImage: `url(${member.imageUrl})` }}
      >
        {/* The image itself serves as the background */}
      </div>

      {/* FIXED OVERLAY:
         - Removed backdrop-blur (fixes the foggy face issue)
         - Adjusted gradient to be solid black at the very bottom for text contrast
         - Adjusted padding to sit lower
      */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-6
          pb-8
          pt-24 /* Gradient start point */
          bg-gradient-to-t from-black via-black/80 o-transparent      
        "
      >
        {/* Name and Designation */}
        <div className="mb-4">
          <h3
            className="
              text-2xl
              font-bold
              text-white
              mb-1
              montserrat-regular
              tracking-wide
            "
          >
            {member.name}
          </h3>
          <p
            className="
              text-sm
              font-medium
              text-gray-300
              montserrat-regular
            "
          >
            {member.designation}
          </p>
        </div>

        {/* Roles List displayed as tags */}
        <ul className="hidden md:flex flex-wrap gap-2">
          {member.roles &&
            member.roles.map((role, index) => (
              <li
                key={index}
                className="
                text-[11px]
                font-semibold
                text-white
                bg-white/10
                border border-white/10
                px-3
                py-1
                rounded-full
                montserrat-medium
              "
              >
                {role}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
