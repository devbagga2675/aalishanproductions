// import React from "react";
// import SectionTitle from "../components/SectionTitle";
// import ServicePill from "../components/ServicePill";
// import FeaturePill from "../components/FeaturePill";
// import Accordion from "../components/Accordion";
// import { CtaButton } from "../components/CtaButton"; // Adjust import if needed
// import { MoveUpRight, CheckCircle2 } from "lucide-react";
// import { ContactCard } from "../components/ContactCard";
// import { Phone, Mail, MapPin } from "lucide-react";

// const ServicePageTemplate = ({
//   heroTitle,
//   heroDescription,
//   heroPills, // Array of strings
//   features, // Array of objects { icon, text }
//   subServices, // Array of objects { title, content } for accordion
//   youtubeVideos, // Array of embed URLs (e.g. "https://www.youtube.com/embed/...")
//   ctaTitle = "Ready to Start?",
//   ctaLink = "#contact",
// }) => {
//   return (
//     <div className="min-h-screen bg-[var(--color-dark-bg-primary)] pt-24">
//       {/* 1. Hero Section */}
//       <section className="relative z-5 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8 text-center">
//         {/* Pills */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           {heroPills.map((text, index) => (
//             <ServicePill key={index} text={text} />
//           ))}
//         </div>

//         {/* Title */}
//         <SectionTitle align={"center"} className="md:text-center">
//           {heroTitle}
//         </SectionTitle>

//         {/* Description */}
//         <p
//           className="
//                     inter-regular
//                     w-full
//                     text-lg text-[var(--color-dark-text-secondary)] 
//                     md:text-xl mb-6 mx-auto max-w-3xl
//                   "
//         >
//           {heroDescription}
//         </p>

//         {/* Features Grid */}
//         {/* <div className="flex flex-wrap justify-center gap-6 mb-12">
//           {features.map((feature, index) => (
//             <FeaturePill 
//               key={index} 
//               icon={feature.icon || CheckCircle2} 
//               text={feature.text} 
//             />
//           ))}
//         </div> */}
//       </section>

//       {/* 2. Sub-Services (Accordion) Section */}
//       <section className="relative z-5 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
//         <div className="">
//           {/* Right: The Accordion */}
//           <div>
//             <Accordion items={subServices} />
//           </div>
//         </div>
//       </section>

//       {/* 3. Featured Work (YouTube Grid) */}
//       <section className="relative z-5 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//         <div className="text-center mb-16">
//           <SectionTitle>Featured Work</SectionTitle>
//           <p className="text-[var(--color-dark-text-secondary)] montserrat-regular text-lg">
//             See the results for yourself.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {youtubeVideos.map((url, index) => (
//             <div
//               key={index}
//               className="
//                 aspect-video w-full rounded-2xl overflow-hidden 
//                 border border-[var(--color-dark-border)] 
//                 bg-[var(--color-dark-bg-secondary)] shadow-lg
//               "
//             >
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src={url}
//                 title={`Featured Work ${index + 1}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//                 className="w-full h-full"
//               ></iframe>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 4. Bottom CTA Section */}

//       <section className="relative z-5 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:items-center">
//           {/* Left Column: Title and Description */}
//           <div className="text-left">
//             <SectionTitle align={"start"}>
//               {ctaTitle}
//             </SectionTitle>
//             <p
//               className="
//                       inter-regular
//                       text-lg md:text-xl
//                       max-w-xl mx-0 md:mx-auto
//                       text-[var(--color-dark-text-secondary)]
//                       text-left 
//                     "
//             >
//               Let's discuss your project's unique needs. We provide efficient,
//               clear production services designed to turn your concepts into
//               broadcast-ready video content.
//             </p>
//           </div>

//           {/* Right Column: Contact Cards */}
//           <div className="flex flex-col gap-6 w-full max-w-md mx-0 md:mx-auto">
//             <ContactCard
//               icon={Phone}
//               title="Call Us"
//               detail="+1 (555) 123-4567"
//               onClick={() => (window.location.href = "tel:+15551234567")}
//             />
//             <ContactCard
//               icon={Mail}
//               title="Email Us"
//               detail="info@aalishanproductions.com"
//               onClick={() =>
//                 (window.location.href = "mailto:info@aalishanproductions.com")
//               }
//             />
//             <ContactCard
//               icon={MapPin}
//               title="Our Location"
//               detail="123 Creative Street, Studio City, CA 91604"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicePageTemplate;


//alternate option for services

import React from "react";
import SectionTitle from "../components/SectionTitle";
import ServicePill from "../components/ServicePill";
import FeaturePill from "../components/FeaturePill";
import Accordion from "../components/Accordion";
import ServiceDetailCard from "../components/ServiceDetailCard"; // Added Import
import { CtaButton } from "../components/CtaButton"; 
import { MoveUpRight, CheckCircle2 } from "lucide-react";
import { ContactCard } from "../components/ContactCard";
import { Phone, Mail, MapPin } from "lucide-react";

const ServicePageTemplate = ({
  heroTitle,
  heroDescription,
  heroPills, // Array of strings
  features, // Array of objects { icon, text }
  subServices, // Array of objects { title, content, icon? } 
  youtubeVideos, // Array of embed URLs
  ctaTitle = "Ready to Start?",
  ctaLink = "#contact",
}) => {
  return (
    <div className="min-h-screen bg-[var(--color-dark-bg-primary)] pt-24">
      {/* 1. Hero Section */}
      <section className="relative z-5 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8 text-center">
        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {heroPills.map((text, index) => (
            <ServicePill key={index} text={text} />
          ))}
        </div>

        {/* Title */}
        <SectionTitle align={"center"} className="md:text-center">
          {heroTitle}
        </SectionTitle>

        {/* Description */}
        <p
          className="
            inter-regular
            w-full
            text-lg text-[var(--color-dark-text-secondary)] 
            md:text-xl mb-6 mx-auto max-w-3xl
          "
        >
          {heroDescription}
        </p>

        {/* Features Grid */}
        {/* <div className="flex flex-wrap justify-center gap-6 mb-12">
          {features.map((feature, index) => (
            <FeaturePill 
              key={index} 
              icon={feature.icon || CheckCircle2} 
              text={feature.text} 
            />
          ))}
        </div> */}
      </section>

      {/* 2. Sub-Services (Grid) Section */}
      <section className="relative z-5 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="">
          
          {/* --- OLD ACCORDION (COMMENTED OUT) --- */}
          {/* <div>
            <Accordion items={subServices} />
          </div> 
          */}

          {/* --- NEW CARD GRID (3 Cols) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((item, index) => (
              <ServiceDetailCard
                key={index}
                title={item.title}
                // Mapping the old 'content' prop to 'subtext'
                subtext={item.content} 
                // Ensure your subServices data includes icons, or this will be empty
                Icon={item.icon} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* 3. Featured Work (YouTube Grid) */}
      <section className="relative z-5 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <SectionTitle>Featured Work</SectionTitle>
          <p className="text-[var(--color-dark-text-secondary)] montserrat-regular text-lg">
            See the results for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {youtubeVideos.map((url, index) => (
            <div
              key={index}
              className="
                aspect-video w-full rounded-2xl overflow-hidden 
                border border-[var(--color-dark-border)] 
                bg-[var(--color-dark-bg-secondary)] shadow-lg
              "
            >
              <iframe
                width="100%"
                height="100%"
                src={url}
                title={`Featured Work ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="relative z-5 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:items-center">
          {/* Left Column: Title and Description */}
          <div className="text-left">
            <SectionTitle align={"start"}>
              {ctaTitle}
            </SectionTitle>
            <p
              className="
                  inter-regular
                  text-lg md:text-xl
                  max-w-xl mx-0 md:mx-auto
                  text-[var(--color-dark-text-secondary)]
                  text-left 
                "
            >
              Let's discuss your project's unique needs. We provide efficient,
              clear production services designed to turn your concepts into
              broadcast-ready video content.
            </p>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="flex flex-col gap-6 w-full max-w-md mx-0 md:mx-auto">
            <ContactCard
              icon={Phone}
              title="Call Us"
              detail="+1 (555) 123-4567"
              onClick={() => (window.location.href = "tel:+15551234567")}
            />
            <ContactCard
              icon={Mail}
              title="Email Us"
              detail="info@aalishanproductions.com"
              onClick={() =>
                (window.location.href = "mailto:info@aalishanproductions.com")
              }
            />
            <ContactCard
              icon={MapPin}
              title="Our Location"
              detail="123 Creative Street, Studio City, CA 91604"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;