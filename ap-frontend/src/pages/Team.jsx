import React from "react";
import { teamData } from "./teamData"; // Adjust this path if teamData.js is in a different folder
import TeamCard from "../components/teamCard";
import SectionTitle from "../components/SectionTitle";
import ServicePill from "../components/ServicePill";

const Team = () => {
  return (
    <div
      className="
        min-h-screen 
        bg-[var(--color-dark-bg-primary)] 
        max-w-7xl 
        mx-auto 
        px-4 sm:px-6 lg:px-8 
        py-32 /* py-24 for navbar + py-8 for padding */
      "
    >
      {/* Team Section Layout */}
      <section>
        {/* Main 2-column layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
          {/* Left Column (Sticky Title) */}
          <div className="md:col-span-5">
            {/* Sticky container */}
            <div className="md:sticky md:top-32">
              {" "}
              <div className="mb-2">
                <ServicePill text={"The Team"} />
              </div>
              {/* top-24 (navbar) + 8 (from py-32) = top-32 */}
              <SectionTitle>Focus on Dedication and Quality</SectionTitle>
              <p
                className="
            inter-regular
            max-w-xl 
            text-lg text-[var(--color-dark-text-secondary)] 
            md:text-xl
                "
              >
                We are professional filmmakers dedicated entirely to the craft.
                Our passion for masterful editing and technical shooting is the
                guarantee behind your content's quality.
              </p>
            </div>
          </div>

          {/* Right Column (Scrollable Cards) */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {teamData.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
