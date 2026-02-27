import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ServicePill from "../components/ServicePill";
import Accordion from "../components/Accordion";
import ServiceDetailCard from "../components/ServiceDetailCard";
import { CtaButton } from "../components/CtaButton";
import { MoveUpRight, CheckCircle2 } from "lucide-react";
import { ContactCard } from "../components/ContactCard";
import { Phone, Mail, MapPin } from "lucide-react";
import { CtaButtonSecondary } from "../components/CtaButton";
// Reusable variants
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const ServicePageTemplate = ({
  heroTitle,
  heroImage,
  heroDescription,
  heroPills,
  features,
  subServices,
  featuredWork,
  ctaTitle = "Ready to Start?",
  ctaLink = "#contact",
}) => {
  console.log(heroImage);
  return (
    <div className="bg-(--color-dark-bg-primary) pt-24">
      {/* 1. Hero Section */}
      <section className="w-full h-170 md:h-[calc(100vh-96px)] min-h-[520px] bg-[#011225] p-3 flex">
        <div
          className=" relative w-full rounded-2xl overflow-hidden flex items-start"
          style={{
            backgroundImage: `url("${heroImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#00C2FF] to-transparent pointer-events-none"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.5, scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent hidden md:block pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col items-start px-6 pt-8 pb-8 sm:px-10 sm:pb-12 md:px-14 md:pb-14 md:pt-14 md:max-w-[720px]">
            {/* Pills — hidden on mobile */}
            <motion.div
              className="hidden md:flex flex-wrap gap-2 mb-6"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {heroPills.map((text, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <ServicePill text={text} />
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile pill replacement — italic text */}
            <motion.div
              className="flex md:hidden flex-wrap items-center gap-x-3 gap-y-1 mb-4"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {heroPills.map((text, i, arr) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-center gap-3"
                >
                  <span className="text-sm italic text-[#00C2FF] tracking-wide font-light">
                    {text}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="w-px h-3 bg-[#2E3A47] inline-block" />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Title */}
            <motion.div
              className="mb-1 w-full"
              variants={fadeUp}
              custom={0.25}
              initial="hidden"
              animate="show"
            >
              <SectionTitle classname="pb-2!">{heroTitle}</SectionTitle>
            </motion.div>

            {/* Description */}
            <motion.p
              className="inter-regular w-full text-base md:text-xl text-[#F0F4F8] md:text-(--color-dark-text-secondary) mb-5 md:mb-6 max-w-3xl"
              variants={fadeUp}
              custom={0.38}
              initial="hidden"
              animate="show"
            >
              {heroDescription}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-2 md:gap-3"
              variants={fadeUp}
              custom={0.48}
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
                title="Get in Touch"
                Icon={MoveUpRight}
              />
              {featuredWork && Object.keys(featuredWork).length > 0 && (
                <CtaButtonSecondary
                  href="#"
                  title="See Our Work"
                  Icon={MoveUpRight}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("featured-work")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Services Grid */}
      <section className="relative z-5 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {subServices.map((item, index) => (
            <motion.div key={index} variants={staggerItem}>
              <ServiceDetailCard
                title={item.title}
                subtext={item.content}
                Icon={item.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Featured Work */}
      {featuredWork && Object.keys(featuredWork).length > 0 && (
        <section
          id="featured-work"
          className="relative z-5 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        >
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <SectionTitle>Featured Work</SectionTitle>
            <p className="text-(--color-dark-text-secondary) montserrat-regular text-lg">
              See the results for yourself.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {featuredWork.youtubeVideos?.map((url, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="aspect-video w-full rounded-2xl overflow-hidden border border-(--color-dark-border) bg-(--color-dark-bg-secondary) shadow-lg"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`${url}${url.includes("?") ? "&" : "?"}playsinline=1`}
                  title={`Featured Work ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* 4. Bottom CTA */}
      <section
        id="contact"
        className="scroll-mt-24 relative z-5 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:items-center">
          <motion.div
            className="text-left"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <SectionTitle align="start">{ctaTitle}</SectionTitle>
            <p className="inter-regular text-lg md:text-xl max-w-xl mx-0 md:mx-auto text-(--color-dark-text-secondary) text-left">
              Let's discuss your project's unique needs. We provide efficient,
              clear production services designed to turn your concepts into
              broadcast-ready video content.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 w-full max-w-md mx-0 md:mx-auto"
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
};

export default ServicePageTemplate;
