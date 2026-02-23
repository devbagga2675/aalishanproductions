import React from "react";
import ServicePageTemplate from "../../templates/ServicePageTemplate";
import { Camera, Share2, Users, CalendarCheck } from "lucide-react";

const PhotoshootsPage = () => {
  // Content derived from Company Profile Brochure (Page 7)
  const content = {
    heroTitle: "Capturing Moments, Creating Assets",
    heroDescription:
      "Great visuals don't just happen—they are crafted. Whether it's high-end product photography or social media-ready images, we provide the static visual support your brand needs to stand out alongside your video content.",
    heroPills: ["Services / Photography"],

    subServices: [
      // {
      //   title: "Product Photography",
      //   content:
      //     "Clear, crisp, and creative shots of your products. We capture the details that matter, creating images perfect for e-commerce listings, catalogs, and advertising campaigns.",
      //   icon: Camera, // Represents commercial photography
      // },
      {
        title: "Social Media-Ready Images",
        content:
          "Stop the scroll with high-quality static posts. We create aesthetic and engaging images tailored specifically for Instagram, Facebook, and LinkedIn feeds.",
        icon: Share2, // Represents sharing and social connection
      },
      {
        title: "Brand & Lifestyle Photography",
        content:
          "Tell your brand story with powerful imagery. We capture team portraits and candid moments, showcasing the human side of your business to build trust.", // 22 words
        icon: Users,
      },
      // {
      //   title: "Event Photography",
      //   content:
      //     "Document your corporate events, launches, and celebrations. We ensure every important moment is preserved in high resolution for your PR and internal use.",
      //   icon: CalendarCheck, // Represents events and documentation
      // },
    ],

    // Ideally, replace these with BTS videos of a photoshoot or a slideshow portfolio
    featuredWork: {
    },

    ctaTitle: "Need Professional Photography?",
    ctaLink: "#contact",
  };

  return <ServicePageTemplate {...content} />;
};

export default PhotoshootsPage;
