import React from 'react';
import ServicePageTemplate from '../../templates/ServicePageTemplate';
import { Code, Smartphone, Monitor, Database, Layout } from 'lucide-react'; // Import relevant icons

const WebDevelopmentPage = () => {
  // Define content based on your brochure (Page 8)
  const content = {
    heroTitle: "Engineering Flawless User Journeys",
    heroDescription: "We offer full-scale tech solutions through our in-house development team. From responsive websites to complex applications, we build digital experiences that perform.",
    heroPills: ["Services / Web  And Application Development"],
    
    features: [
      { icon: Monitor, text: "Website Building" },
      { icon: Smartphone, text: "App Development" },
      { icon: Layout, text: "UI/UX Design" },
      { icon: Database, text: "Backend + Frontend" },
      { icon: Code, text: "Landing Pages" },
    ],

    subServices: [
      {
        icon: Monitor,
        title: "Website Building",
        content: "Custom-coded websites designed for speed, SEO, and conversion. We ensure your digital storefront looks stunning on every device."
      },
      {
        icon: Smartphone,
        title: "App Development",
        content: "Native and cross-platform mobile applications that provide seamless user experiences for both iOS and Android users."
      },
      {
        icon: Layout,
        title: "UI/UX Design",
        content: "User-centric design that blends aesthetics with functionality. We create intuitive interfaces that keep users engaged."
      },
      {
        icon: Database,
        title: "Backend + Frontend",
        content: "Robust full-stack development. We handle everything from the server-side logic to the client-side visuals."
      },
      {
        icon: Code,
        title: "Landing Pages",
        content: "High-converting landing pages specifically designed for marketing campaigns to maximize lead generation."
      }
    ],

    youtubeVideos: [
      "https://www.youtube.com/embed/5VuQREBijlI?si=yUaBzIKYDSge3Qr0",
      "https://www.youtube.com/embed/5VuQREBijlI?si=yUaBzIKYDSge3Qr0",
    ],
    
    ctaTitle: "Ready to Build Your Digital Presence?",
  };

  return <ServicePageTemplate {...content} />;
};

export default WebDevelopmentPage;