// import React from "react";
// import { teamData } from "./teamData";

// import { Scissors } from "lucide-react";

// import TeamCard from "../components/teamCard";
// import SectionTitle from "../components/SectionTitle";
// import ServicePill from "../components/ServicePill";
// import FeaturePill from "../components/FeaturePill";

// const Team = () => {
//   return (
//     <div
//       className="
//         min-h-screen
//         bg-[var(--color-dark-bg-primary)]
//         max-w-7xl
//         mx-auto
//         px-4 sm:px-6 lg:px-8
//         py-32 /* py-24 for navbar + py-8 for padding */
//       "
//     >
//       <section>
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
//           <div className="md:col-span-7">
//             <div className="md:sticky md:top-32 flex flex-col gap-8">
//               {" "}
//               <div className="top-content">
//                 <div className="mb-2">
//                   <ServicePill text={"The Team"} />
//                 </div>
//                 <SectionTitle>Focus on Dedication and Quality</SectionTitle>
//                 <p
//                   className="
//                   inter-regular
//                   max-w-xl
//                   text-lg text-[var(--color-dark-text-secondary)]
//                   md:text-xl
//                 "
//                 >
//                   We are professional filmmakers dedicated entirely to the
//                   craft. Our passion for masterful editing and technical
//                   shooting is the guarantee behind your content's quality.
//                 </p>
//               </div>
//               <div className="bottom-content flex flex-col gap-4">
//                 <FeaturePill
//                   icon={Scissors}
//                   text="Dedicated Crew"
//                 />
//                 <FeaturePill
//                   icon={Scissors}
//                   text="Refined Finish"
//                 />
//                 <FeaturePill
//                   icon={Scissors}
//                   text="Transparent Process"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="md:col-span-5">
//             <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-10">
//               {teamData.map((member) => (
//                 <TeamCard key={member.id} member={member} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Team;

import React from "react";
import { teamData } from "./teamData";

import { Scissors } from "lucide-react";

import TeamCard from "../components/teamCard";
import SectionTitle from "../components/SectionTitle";
import ServicePill from "../components/ServicePill";
import FeaturePill from "../components/FeaturePill";

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
      <section>
        <div className="flex flex-col gap-16 md:gap-20">
          <div className="w-full">
            <div className="max-w-5xl mx-auto flex flex-col gap-8">
              <div className="top-content text-center">
                <div className="mb-2">
                  <ServicePill text={"The Team"}/>
                </div>
                <SectionTitle align={"center"} className="md:text-center">
                  Focus on Dedication and Quality
                </SectionTitle>
                <p
                  className="
                    inter-regular
                    w-full
                    text-lg text-[var(--color-dark-text-secondary)] 
                    md:text-xl
                  "
                >
                  We are professional filmmakers dedicated entirely to the
                  craft. Our passion for masterful editing and technical
                  shooting is the guarantee behind your content's quality.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Team Cards Section (3 cards per row) */}
          <div className="w-full">
            {/* Grid setup for 3 cards per row: 1 on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-10">
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
