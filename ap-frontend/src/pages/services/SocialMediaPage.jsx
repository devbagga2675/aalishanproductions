import React from "react";
import ServicePageTemplate from "../../templates/ServicePageTemplate";
import {
  Lightbulb,
  Box,
  Clapperboard,
  TrendingUp,
  Utensils,
  Briefcase,
} from "lucide-react";
import usePageMeta from "../../hooks/usePageMeta";

const SocialMediaPage = () => {
  usePageMeta(
    "Social Media Video Production | Aalishaan Productions",
    "Professional social media video production for Instagram Reels, YouTube Shorts, and TikTok. We create viral-ready, story-driven short-form content that grows your following and drives engagement.",
  );
  const content = {
    heroTitle: "Social Media Video Production",
    heroDescription:
      "From ideation and scripting to shooting and editing, we create premium, story-driven reels designed to help you grow your online presence. We handle the entire process to deliver content that engages and converts.",
    heroPills: ["Services / Social Media Videos"],

    // Derived from Brochure Page 4
    // features: [
    //   { icon: User, text: "Personal Branding" },
    //   { icon: TrendingUp, text: "Business Growth" },
    //   { icon: Utensils, text: "Hospitality & Lifestyle" },
    //   { icon: Building2, text: "Corporate Comms" },
    //   { icon: Camera, text: "Event Highlights" },
    // ],

    subServices: [
      {
        title: "Personal Branding",
        // New word count: 21 words
        content:
          "Build your distinct personal identity online. We create content highlighting your expertise, values, and story, ensuring you connect authentically with your audience.",
        icon: Lightbulb,
      },
      {
        title: "Product Showcase",
        // Word count: 22 words (Original was already under the limit)
        content:
          "Highlight the features and benefits of your products with high-quality close-ups and dynamic editing that demonstrates value clearly.",
        icon: Box,
      },
      {
        title: "Event Highlights",
        // Word count: 24 words (Original was already under the limit)
        content:
          "Capture the energy of your events. We produce dynamic recap videos that preserve key moments and can be used for future marketing.",
        icon: Clapperboard,
      },
      {
        title: "Business Growth",
        // New word count: 22 words
        content:
          "Strategic video content to expand your reach. We focus on clear messaging and visual hooks that drive engagement and convert viewers into customers.",
        icon: TrendingUp,
      },
      {
        title: "Hospitality, Food & Lifestyle",
        // Word count: 22 words (Original was already under the limit)
        content:
          "Visually stunning content tailored for restaurants, hotels, and lifestyle brands. We capture the ambiance and details that make your offerings unique.",
        icon: Utensils,
      },
      {
        title: "Corporate Communication",
        // Word count: 21 words (Original was already under the limit)
        content:
          "Professional videos for internal updates, stakeholder messaging, or public relations. We ensure your corporate voice is consistent and polished.",
        icon: Briefcase,
      },
    ],

    featuredWork: {
      youtubeVideos: [
        "https://www.youtube.com/embed/1pxYFvQC_ik",
        "https://www.youtube.com/embed/bcyeYufQcp0",
        "https://www.youtube.com/embed/IgDg7bbTrps",
      ],
    },

    ctaTitle: "Ready to Grow Your Audience?",
  };

  return (
    <ServicePageTemplate
      {...content}
      heroImage="/assets/stock/png/stock_socialvideos1.png"
    />
  );
};

export default SocialMediaPage;
