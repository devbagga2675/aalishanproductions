import React from "react";
import { CtaButtonSecondary, CtaButton } from "../components/CtaButton";
import {
  MoveUpRight,
  Goal,
  TrendingUp,
  Zap,
  MessageCircle,
  Clock,
  Clapperboard,
  Sparkles,
  Scissors,
  Proportions,
  Phone, // For phone number
  Mail, // For email address
  MapPin,
} from "lucide-react";
import { services } from "./services";
import placeholder from "../assets/placeholder.png";
import ServicePill from "../components/ServicePill";
import FeaturePill from "../components/FeaturePill";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { ContactCard } from "../components/ContactCard";
import Footer from "../components/Footer";
// ...

export default function Landing() {
  return (
    <div className="montserrat-regular relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[var(--color-dark-bg-primary)] items-center">
      {/* <div
        className="absolute inset-0 z-5"
        style={{
          backgroundColor: "var(--color-dark-bg-primary)",
          backgroundImage: `
            radial-gradient(
              circle at top left,
              rgba(56, 193, 182, 0.5), 
              transparent 70%
            )
          `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      /> */}

      <main
        className="
          relative z-5 flex flex-col lg:flex-row
          w-full items-center justify-center
          max-w-7xl
          px-4 sm:px-6 lg:px-8
          py-28 lg:py-32
          min-h-[95vh] lg:min-h-screen
        "
      >
        <div className="text-start w-full">
          <h1
            className="
              mb-6
              tracking-tight
              bg-gradient-to-b
              from-[var(--color-dark-text-primary)]
              to-[var(--color-dark-text-secondary)]
              bg-clip-text text-transparent
              text-3xl md:text-5xl lg:text-6xl
              leading-tight sm:leading-tight
            "
          >
            <span>Stop Waiting.</span>
            <br />
            <span>Start Scaling.</span>
            <br />
            <span>Turn Viewers into a Dedicated Audience</span>
          </h1>
          <div className="flex gap-2 mb-8 flex-wrap">
            <ServicePill text="Social Media Videos" />
            <ServicePill text="Youtube Videos" />
            <ServicePill text="Product Videos" />
            <ServicePill text="Web Development" />
          </div>
          <p
            className="
            inter-regular
            max-w-xl 
            text-lg text-[var(--color-dark-text-secondary)] 
            md:text-xl
            "
          >
            Our team handles the full production workflow, ensuring every video
            is masterfully edited to perform.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <CtaButton href="#" title="Get in touch" Icon={MoveUpRight} />
            <CtaButtonSecondary
              href="#"
              title="See Our Work"
              Icon={MoveUpRight}
            />
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-5 text-center text-sm font-medium text-[var(--color-dark-text-secondary)]">
          (Scroll)
        </div>
      </main>

      <section
        className="
          relative z-5 w-full max-w-7xl
          px-4 sm:px-6 lg:px-8
          py-20 sm:py-24 lg:py-32
          text-center
        "
      >
        <SectionTitle align={"center"}>
          Crafting professional video content designed for the digital screen.
        </SectionTitle>

        <p
          className="
          inter-regular
          text-lg md:text-xl
          max-w-3xl
          mx-auto
          mb-16
          text-[var(--color-dark-text-secondary)]
        "
        >
          We transform your ideas into polished, platform-ready videos by
          focusing exclusively on technical excellence, efficient shooting, and
          masterful editing. We ensure every video we deliver is optimized for
          flawless performance and maximum viewer engagement across all social
          platforms.
        </p>

        <div
          className="
          flex flex-wrap justify-center
          gap-x-8 gap-y-6
          max-w-4xl mx-auto
        "
        >
          <FeaturePill icon={Scissors} text="Masterful Pacing & Editing" />
          <FeaturePill icon={Sparkles} text="Broadcast-Ready Visual Quality" />
          <FeaturePill
            icon={Proportions}
            text="Platform-Optimized Deliverables"
          />
          <FeaturePill
            icon={Clapperboard}
            text="Efficient End-to-End Production"
          />
        </div>
      </section>

      {/* --- PASTE THE NEW "OUR SERVICES" SECTION HERE --- */}
      <section className="min-h-screen relative z-5 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle align={"center"}>Our Services</SectionTitle>
        <p
          className="
            inter-regular
            text-lg md:text-xl
            max-w-3xl
            mx-auto
            mb-16
            text-center
            text-[var(--color-dark-text-secondary)]
          "
        >
          We provide a full suite of video production services tailored to make
          your brand stand out. From viral social clips to story-driven
          testimonials, we handle everything.
        </p>

        {/* Responsive 2-column grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6 sm:gap-8
          "
        >
          {services.map((service, id) => (
            <ServiceCard
              key={id}
              title={service.serviceTitle}
              subtitle={service.serviceSubtitle}
              imageUrl={service.serviceImageurl || placeholder}
              path={service.servicePath}
            />
          ))}
          {/* <ServiceCard
            title="Social Media Videos"
            subtitle="Viral-ready clips for TikTok, Reels & Shorts."
            imageUrl={placeholder}
            href="#"
          />
          <ServiceCard
            title="Youtube Videos"
            subtitle="Engaging, long-form content to build your audience."
            imageUrl={placeholder}
            href="#"
          />
          <ServiceCard
            title="Product Videos"
            subtitle="High-conversion videos that showcase your product."
            imageUrl={placeholder}
            href="#"
          />
          <ServiceCard
            title="Web Development"
            subtitle="High-conversion videos that showcase your product."
            imageUrl={placeholder}
            href="#"
          /> */}
        </div>
      </section>
      <section className="relative z-5 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Title and Description */}
          <div className="text-center md:text-left">
            <SectionTitle align={"center"} classname={"lg:text-start"}>
              Your Vision. Our Production Mastery.
            </SectionTitle>
            <p
              className="
                inter-regular
                text-lg md:text-xl
                max-w-xl
                mx-auto md:mx-0
                text-[var(--color-dark-text-secondary)]
              "
            >
              Let's discuss your project's unique needs. We provide efficient,
              clear production services designed to turn your concepts into
              broadcast-ready video content.
            </p>
          </div>

          {/* Right Column: Contact Cards */}
          <div
            className="
              flex flex-col gap-6
              w-full
              max-w-md
              mx-auto
            "
          >
            <ContactCard
              icon={Phone}
              title="Call Us"
              detail="+1 (555) 123-4567"
              onClick={() => (window.location.href = "tel:+15551234567")}
            />
            <ContactCard
              icon={Mail}
              title="Email Us"
              detail="info@aalishaanproductions.com"
              onClick={() =>
                (window.location.href = "mailto:info@aalishaanproductions.com")
              }
            />
            {/* <ContactCard
              icon={MapPin}
              title="Our Location"
              detail="123 Creative Street, Studio City, CA 91604"
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
