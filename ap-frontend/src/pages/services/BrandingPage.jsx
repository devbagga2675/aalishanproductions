import React from "react";
import ServicePageTemplate from "./../../templates/ServicePageTemplate";
import {
  Megaphone,
  Search,
  Users,
  Target,
  Palette,
  TrendingUp,
  Sparkles,
  Image,
  Layers,
  Calendar,
} from "lucide-react";
import usePageMeta from "../../hooks/usePageMeta";
const BrandingPage = () => {
  usePageMeta(
    "Social Brand Building | Grow Your Online Presence | Aalishaan Productions",
    "Strategic social brand building services to grow your visibility, authority, and audience across platforms. We craft your brand identity, messaging, and content strategy for long-term growth.",
  );
  const BrandingData = {
    heroTitle: "Branding & Social Brand Building",

    heroDescription:
      "We grow brands through strategy-led digital presence and consistent storytelling. From shaping your visual identity to refining your online positioning, we help you stand out in a crowded digital space. Our focus is long-term visibility, engagement, and measurable growth across Instagram and Facebook. We don’t just post — we build perception.",

    heroPills: ["Services / Social Branding Building"],

    features: [
      { text: "Strategy-Led Brand Growth", icon: Target },
      { text: "Consistent Visual Identity", icon: Palette },
      { text: "Audience Engagement Focus", icon: Users },
      { text: "Data-Driven Campaign Optimization", icon: TrendingUp },
    ],

    subServices: [
      {
        title: "Creative Post Designing",
        content:
          "We create scroll-stopping social media creatives tailored to your platform. From festive posts and announcements to promotional content, every design is trend-aware, brand-consistent, and built to drive engagement.",
        icon: Image,
      },
      {
        title: "Social Media Campaign Management",
        content:
          "We plan and optimize ad campaigns for brands across Facebook and Instagram, using precise targeting and data-driven strategy to reach your target audience and deliver measurable growth.",
        icon: Megaphone,
      },
    ],

    // featuredWork: {
    //   youtubeVideos: [
    //     "https://www.youtube.com/embed/placeholder_branding_1",
    //     "https://www.youtube.com/embed/placeholder_branding_2",
    //   ],
    // },

    ctaTitle: "Ready to build a powerful digital brand presence?",
    ctaLink: "/contact",
  };

  return (
    <ServicePageTemplate
      heroTitle={BrandingData.heroTitle}
      heroDescription={BrandingData.heroDescription}
      heroPills={BrandingData.heroPills}
      features={BrandingData.features}
      subServices={BrandingData.subServices}
      youtubeVideos={BrandingData.youtubeVideos}
      ctaTitle={BrandingData.ctaTitle}
      ctaLink={BrandingData.ctaLink}
      heroImage="/assets/stock/png/stock_socialbrandbuilding.png"
    />
  );
};

export default BrandingPage;
