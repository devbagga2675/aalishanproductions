import React from 'react';
import ServicePageTemplate from './../../templates/ServicePageTemplate'; 
import { 
  FileText, 
  MessageSquare, 
  Clapperboard, 
  BookOpen, 
  Globe, 
  Megaphone, 
  PenTool, 
  Search, 
  Users 
} from 'lucide-react';

const ContentWritingPage = () => {
  const contentWritingData = {
    heroTitle: "Content Writing & Storytelling",
    // Based on "We create the words that power your visuals" 
    heroDescription: "We create the words that power your visuals. Our strategic writing builds narrative arcs, engages audiences, and integrates keywords to drive results.", 
    heroPills: ["Services / Content Writing"], // [cite: 57, 58, 59, 62]
    
    features: [
      { text: "Narrative Arc Focus", icon: PenTool }, // 
      { text: "Keyword Integration", icon: Search }, // 
      { text: "Audience Engagement", icon: Users }, // [cite: 64, 66]
    ],

    subServices: [
      {
        title: "Blogs",
        content: "SEO-friendly articles that engage your audience. We use strategic keywords to drive traffic and establish your brand's authority.", // [cite: 57, 67]
        icon: FileText 
      },
      {
        title: "Captions",
        content: "Scroll-stopping text for social media. We craft captions that hook readers immediately and encourage interaction on Instagram and Facebook.", // [cite: 58]
        icon: MessageSquare
      },
      {
        title: "Scripts",
        content: "Structured video scripts with strong narrative arcs. We ensure your visual content has a compelling foundation to retain viewer attention.", // [cite: 59, 65]
        icon: Clapperboard
      },
      {
        title: "Storylines",
        content: "Cohesive narrative frameworks for campaigns. We develop the plot and flow that ties your content pieces together into a unified story.", // [cite: 60, 63]
        icon: BookOpen
      },
      {
        title: "Website Content",
        content: "Clear and persuasive copy for your digital presence. We communicate your value proposition effectively to convert visitors into clients.", // [cite: 61]
        icon: Globe
      },
      {
        title: "Brand Messaging",
        content: "Define your unique voice. We articulate your core message to ensure consistency and authentic connection with your target audience.", // [cite: 62, 66]
        icon: Megaphone
      }
    ],

    // Placeholder for relevant work or generic writing reels
    youtubeVideos: [
      "https://www.youtube.com/embed/placeholder_writing_1", 
      "https://www.youtube.com/embed/placeholder_writing_2"
    ],
    
    ctaTitle: "Ready to power your visuals with words?",
    ctaLink: "/contact"
  };

  return (
    <ServicePageTemplate
      heroTitle={contentWritingData.heroTitle}
      heroDescription={contentWritingData.heroDescription}
      heroPills={contentWritingData.heroPills}
      features={contentWritingData.features}
      subServices={contentWritingData.subServices}
      youtubeVideos={contentWritingData.youtubeVideos}
      ctaTitle={contentWritingData.ctaTitle}
      ctaLink={contentWritingData.ctaLink}
    />
  );
};

export default ContentWritingPage;