import React from "react";
import { motion } from "framer-motion";
import { CtaButtonSecondary, CtaButton } from "../components/CtaButton";
import {
  MoveUpRight,
  MoveDown,
  Clapperboard,
  Sparkles,
  Scissors,
  Proportions,
  Phone,
  Mail,
} from "lucide-react";
import { services } from "./services";
import placeholder from "../assets/placeholder.png";
import ServicePill from "../components/ServicePill";
import FeaturePill from "../components/FeaturePill";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { ContactCard } from "../components/ContactCard";
import usePageMeta from "../hooks/usePageMeta";

// ── Variants ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Scroll Indicator ──────────────────────────────────────
function ScrollIndicator() {
  return (
    <div className="hidden md:flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
      <span className="text-[#9BA4AF] text-[12px] tracking-[0.25em] uppercase font-mono leading-none">
        scroll
      </span>
      <div className="w-px h-10 bg-linear-to-b from-[#2E3A47] to-transparent" />
      <MoveDown size={13} strokeWidth={1.5} className="text-[#00C2FF] -mt-2" />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────
export default function Landing() {
  usePageMeta(
    "Aalishaan Productions | Video Production & Content Creation Agency",
    "Aalishaan Productions is a full-service video production agency specializing in social media videos, YouTube content, brand building, and web development. Grow your audience with broadcast-ready content.",
  );
  return (
    <div className="montserrat-regular relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-(--color-dark-bg-primary) items-center">
      {/* 1. Hero */}
      <main className="relative z-5 flex flex-col lg:flex-row w-full items-center justify-center max-w-7xl px-4 sm:px-6 lg:px-8 py-28 lg:py-32 min-h-[95vh] lg:min-h-screen">
        <div className="text-start w-full">
          {/* Title */}
          <motion.h1
            className="mb-6 tracking-tight bg-linear-to-b from-(--color-dark-text-primary) to-(--color-dark-text-secondary) bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
          >
            <span>Stop Waiting.</span>
            <br />
            <span>Start Scaling.</span>
            <br />
            <span>Turn a Dedicated Audience into Consistent Revenue</span>
          </motion.h1>

          {/* Pills */}
          <motion.div
            className="md:flex gap-2 mb-8 flex-wrap hidden "
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {[
              "Social Media Videos",
              "Youtube Videos",
              "Social Brand Building",
              "Web Development",
              "Content Writing",
            ].map((t, i) => (
              <motion.div key={i} variants={staggerItem}>
                <ServicePill text={t} />
              </motion.div>
            ))}
          </motion.div>
          {/* Mobile only — compact service list */}
          <motion.div
            className="flex md:hidden items-center flex-wrap gap-x-3 gap-y-1 my-6"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {[
              "Social Media Videos",
              "Youtube Videos",
              "Social Brand Building",
              "Web Development",
              "Content Writing",
            ].map((t, i, arr) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex items-center gap-3"
              >
                <span className="text-sm italic text-[#9BA4AF] font-light tracking-wide">
                  {t}
                </span>
                {i < arr.length - 1 && (
                  <span className="w-px h-3 bg-[#2E3A47] inline-block" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            className="inter-regular max-w-xl text-lg text-(--color-dark-text-secondary) md:text-xl"
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            animate="show"
          >
            Our team handles the full production workflow, ensuring every video
            is masterfully edited to perform.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            variants={fadeUp}
            custom={0.42}
            initial="hidden"
            animate="show"
          >
            <CtaButton
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              title="Get in touch"
              Icon={MoveUpRight}
            />
            <CtaButtonSecondary
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              title="Browse Services"
              Icon={MoveUpRight}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-5 text-center"
          variants={fadeIn}
          custom={0.9}
          initial="hidden"
          animate="show"
        >
          <ScrollIndicator />
        </motion.div>
      </main>

      {/* 2. Value prop */}
      <section className="relative z-5 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24  text-justify md:text-center">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionTitle align="center">
            Crafting professional video content designed for the digital screen.
          </SectionTitle>
        </motion.div>

        <motion.p
          className="inter-regular text-lg md:text-xl max-w-3xl mx-auto mb-16 text-(--color-dark-text-secondary)" 
          variants={fadeUp}
          custom={0.12}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          We transform your ideas into polished, platform-ready videos by
          focusing exclusively on technical excellence, efficient shooting, and
          masterful editing. We ensure every video we deliver is optimized for
          flawless performance and maximum viewer engagement across all social
          platforms.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-x-8 gap-y-6 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {[
            { icon: Scissors, text: "Masterful Pacing & Editing" },
            { icon: Sparkles, text: "Broadcast-Ready Visual Quality" },
            { icon: Proportions, text: "Platform-Optimized Deliverables" },
            { icon: Clapperboard, text: "Efficient End-to-End Production" },
          ].map((f, i) => (
            <motion.div key={i} variants={staggerItem}>
              <FeaturePill icon={f.icon} text={f.text} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Services */}
      <section
        id="services"
        className="scroll-mt-24 min-h-screen relative z-5 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionTitle align="center">Our Services</SectionTitle>
        </motion.div>

        <motion.p
          className="inter-regular text-lg md:text-xl max-w-3xl mx-auto mb-16 text-center text-(--color-dark-text-secondary)"
          variants={fadeUp}
          custom={0.12}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          We provide a full suite of video production services tailored to make
          your brand stand out. From viral social clips to story-driven
          testimonials, we handle everything.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, id) => (
            <motion.div key={id} variants={staggerItem}>
              <ServiceCard
                title={service.serviceTitle}
                subtitle={service.serviceSubtitle}
                imageUrl={service.serviceImageurl || placeholder}
                path={service.servicePath}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. CTA / Contact */}
      <section
        id="contact"
        className="scroll-mt-24 relative z-5 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="text-center md:text-left"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <SectionTitle align="center" classname="lg:text-start">
              Your Vision. Our Production Mastery.
            </SectionTitle>
            <p className="inter-regular text-lg md:text-xl max-w-xl mx-auto md:mx-0 text-(--color-dark-text-secondary)">
              Let's discuss your project's unique needs. We provide efficient,
              clear production services designed to turn your concepts into
              broadcast-ready video content.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 w-full max-w-md mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                detail: "+916351887341",
                onClick: () => (window.location.href = "tel:+916351887341"),
              },
              {
                icon: Mail,
                title: "Email Us",
                detail: "aalishaanproduction@gmail.com",
                onClick: () =>
                  (window.location.href =
                    "mailto:aalishaanproduction@gmail.com"),
              },
            ].map((card, i) => (
              <motion.div key={i} variants={staggerItem}>
                <ContactCard
                  icon={card.icon}
                  title={card.title}
                  detail={card.detail}
                  onClick={card.onClick}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
