import React from "react";

const TeamCard = ({ member }) => {
  return (
    <div
      className="
        rounded-xl 
        overflow-hidden 
        shadow-lg
        bg-[var(--color-dark-bg-secondary)]
      "
    >
      {/* Image container with 3:4 aspect ratio */}
      <div
        className="
          aspect-[3/4] 
          w-full 
          bg-cover 
          bg-center 
          bg-[var(--color-dark-border)] /* Fallback bg color */
        "
        style={{ backgroundImage: `url(${member.imageUrl})` }}
      >
        {/* Image is applied via background */}
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h3
          className="
            text-2xl 
            tracking-tight
            monsterrat-regular
            text-[var(--color-dark-text-primary)]
            mb-0.5
          "
        >
          {member.name}
        </h3>
        <p
          className="
            inter-regular
            text-[var(--color-dark-text-secondary)]
          "
        >
          {member.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;