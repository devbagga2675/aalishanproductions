import React from "react";
import { MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, subtitle, imageUrl, path }) => {
  const goTo = useNavigate();

  return (
    <div
      onClick={() => goTo(path)}
      className="p-px rounded-xl bg-linear-to-br from-[#00C2FF]/40 via-[#2E3A47]/20 to-[#A863FF]/40 hover:from-[#00C2FF]/70 hover:to-[#A863FF]/70 transition-all duration-500 mb-3 md:mb-0 cursor-pointer group"
    >
      <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
        {/* 1. Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-right transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* 2. Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* 3. Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* 4. Top-right pill badge */}
        <div className="hidden absolute top-4 right-4 z-10 md:flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-full opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span>Explore</span>
          <MoveUpRight className="w-3 h-3" />
        </div>

        {/* 5. Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <div className="w-8 h-px bg-[#00C2FF] mb-3 transition-all duration-500 group-hover:w-14" />
          <h3 className="text-lg font-semibold tracking-tight text-[#F0F4F8] mb-1 transition-transform duration-300 group-hover:-translate-y-1">
            {title}
          </h3>
          <p className="text-sm text-[#9BA4AF] leading-relaxed max-h-0 opacity-0 transition-all duration-400 ease-in-out group-hover:max-h-20 group-hover:opacity-100">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;