import React from "react";
import ServicePageTemplate from "../../templates/ServicePageTemplate";
import {
  MonitorPlay,
  Mic,
  MessageSquareQuote,
  BookOpen,
  Video,
} from "lucide-react";
import usePageMeta from "../../hooks/usePageMeta";
const LongVideoPage = () => {
  usePageMeta(
    "Long-Form Video Production | YouTube & Promotional Films | Aalishaan Productions",
    "Expert long-form video production for YouTube channels, promotional films, and branded documentaries. We handle scripting, shooting, and editing to deliver polished, high-retention video content.",
  );
  const content = {
    heroTitle: "Cinematic Long-Form Storytelling",
    // Derived from Brochure Page 5: "Cinematic, story-driven films that build your brand..."
    heroDescription:
      "We produce cinematic, story-driven films that build your brand authority. From ideation to final delivery, we manage the entire process to create engaging content for YouTube and promotional platforms.",
    heroPills: ["Services / Long-Form Videos"],

    // Derived from Brochure Page 5
    subServices: [
      {
        title: "YouTube Videos",
        content:
          "End-to-end production for your YouTube channel. We maximize watch time and subscriber growth with high-retention editing and clear, engaging storytelling.",
        icon: MonitorPlay,
      },
      {
        title: "Podcasts",
        content:
          "Professional podcast production. We deliver broadcast-quality episodes, crisp audio engineering, and engaging highlight clips for social media.",
        icon: Mic,
      },
      {
        title: "Client Testimonials",
        content:
          "Build trust with authentic client testimonials. We capture compelling customer success stories through polished interviews that drive conversions and validate your brand.",
        icon: MessageSquareQuote,
      },
      {
        title: "Informational Content",
        content:
          "Educational videos and tutorials to establish industry authority. We break down complex topics into clear, visually engaging, and easy-to-understand explanations.",
        icon: BookOpen,
      },
    ],

    // featuredWork: {
    //   youtubeVideos: [
    //     "https://youtu.be/vaBxPFU47HY?si=ht8VNeudVKtBPELv",
    //     "https://www.youtube.com/embed/placeholder_writing_2",
    //   ],
    // },

    ctaTitle: "Ready to Tell Your Story?",
  };

  return (
    <ServicePageTemplate
      {...content}
      heroImage="/assets/stock/png/longvideos_stock.png"
    />
  );
};

export default LongVideoPage;
