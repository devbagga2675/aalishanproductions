import React from "react";
import ServicePageTemplate from "../../templates/ServicePageTemplate";
import { MonitorPlay, Users, BookOpen, Video } from 'lucide-react';

const LongVideoPage = () => {
  const content = {
    heroTitle: "Cinematic Long-Form Storytelling",
    // Derived from Brochure Page 5: "Cinematic, story-driven films that build your brand..."
    heroDescription: "We produce cinematic, story-driven films that build your brand authority. From ideation to final delivery, we manage the entire process to create engaging content for YouTube and promotional platforms.",
    heroPills: ["Services / Long-Form Videos"],

    // Derived from Brochure Page 5
    subServices: [
  {
    "title": "YouTube Videos",
    "content": "End-to-end production for your YouTube channel. We maximize watch time and subscriber growth with high-retention editing and clear, engaging storytelling.",
    "icon": MonitorPlay
  },
  {
    "title": "Vlogs",
    "content": "Authentic lifestyle and behind-the-scenes content. We transform your daily operations or travel into engaging, personal narratives that connect with your audience.",
    "icon": Users
  },
  {
    "title": "Informational Content",
    "content": "Educational videos and tutorials to establish industry authority. We break down complex topics into clear, visually engaging, and easy-to-understand explanations.",
    "icon": BookOpen
  },
  {
    "title": "Promotional Films",
    "content": "High-quality brand films showcasing your company’s values and vision. Perfect for website headers, investor pitches, and major advertising campaigns.",
    "icon": Video
  }
],

    youtubeVideos: [
      "https://www.youtube.com/embed/5VuQREBijlI?si=yUaBzIKYDSge3Qr0",
      "https://www.youtube.com/embed/5VuQREBijlI?si=yUaBzIKYDSge3Qr0",
    ],
    
    ctaTitle: "Ready to Tell Your Story?",
  };

  return <ServicePageTemplate {...content} />;
};

export default LongVideoPage;