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
import placeholder from "../assets/placeholder.png";
import ServicePill from "../components/ServicePill";
import FeaturePill from "../components/FeaturePill";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
// ...

const StaticNavbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-10 bg-[var(--color-dark-bg-primary)]/30
        backdrop-blur-md
        border-b-2 border-[var(--color-dark-border)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex-shrink-0">
            <h1
              className="
              font-thunder-bold-lc 
              text-[var(--color-dark-text-primary)]
              text-xl sm:text-2xl 
              font-bold 
            "
            >
              AALISHAN PRODUCTIONS
            </h1>
          </div>
          <div className="hidden sm:block montserrat-regular">
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm font-medium text-[var(--color-dark-text-secondary)] transition hover:text-[var(--color-dark-text-primary)]"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium text-[var(--color-dark-text-secondary)] transition hover:text-[var(--color-dark-text-primary)]"
              >
                YT Content
              </a>
              <a
                href="#"
                className="text-sm font-medium text-[var(--color-dark-text-secondary)] transition hover:text-[var(--color-dark-text-primary)]"
              >
                Social Media Content
              </a>
              <a
                href="#"
                className="text-sm font-medium text-[var(--color-dark-text-secondary)] transition hover:text-[var(--color-dark-text-primary)]"
              >
                The Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ContactCard = ({ icon: Icon, title, detail, onClick }) => (
  <div
    onClick={onClick}
    className={`
      flex items-center gap-4 
      rounded-xl border border-[var(--color-dark-border)] 
      p-4 md:p-6 
      shadow-sm
      transition-all duration-300 ease-in-out /* Added for smooth hover */
      
      ${
        /* Conditionally add hover effects and cursor */
        onClick
          ? "cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:border-[var(--color-dark-accent-primary)] hover:bg-[var(--color-dark-bg-secondary)]"
          : "cursor-default" /* No effects if not clickable */
      }
    `}
  >
    <div className="flex-shrink-0">
      <Icon className="w-7 h-7 text-[var(--color-dark-accent-primary)]" />
    </div>
    <div>
      <h4
        className="
        montserrat-medium text-lg 
        text-[var(--color-dark-text-primary)] 
        mb-1
      "
      >
        {title}
      </h4>
      <p className="text-base text-[var(--color-dark-text-secondary)]">
        {detail}
      </p>
    </div>
  </div>
);

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

      <StaticNavbar />

      <main className="relative z-5 flex w-full items-center max-w-7xl px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
        <div className="text-start w-full">
          <h1
            className="
              mb-4
              montserrat-regular
              tracking-tight
              bg-gradient-to-b from-[var(--color-dark-text-primary)] to-[var(--color-dark-text-secondary)]
              bg-clip-text text-transparent
              text-4xl sm:text-5xl lg:text-6xl
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

          <div className="mt-4 flex gap-4 flex-wrap">
            <CtaButton href="#" title="Get in touch" Icon={MoveUpRight} />
            <CtaButtonSecondary
              href="#"
              title="See Our Work"
              Icon={MoveUpRight}
            />
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 z-5 text-center text-sm font-medium text-[var(--color-dark-text-secondary)]">
          (Scroll)
        </div>
      </main>

      <section className="min-h-screen relative z-5 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <ServiceCard
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
          />
        </div>
      </section>
      <section className="relative z-5 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Title and Description */}
          <div className="text-center md:text-left">
            <SectionTitle align={"start"}>
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
          <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
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
      <Footer />
    </div>
  );
}
