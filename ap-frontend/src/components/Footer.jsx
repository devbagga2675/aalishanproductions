import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, ArrowUp } from "lucide-react";
import { CtaButtonSecondary } from "./CtaButton";
import SlideUpReveal from "./SlideUpReveal";

const FooterLink = ({ href, to, children }) => {
  const cls = "text-sm text-[var(--color-dark-text-secondary)] transition-colors hover:text-[var(--color-dark-text-primary)] hover:underline";
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href} className={cls}>{children}</a>;
};

const FooterTitle = ({ children }) => (
  <h3 className="mb-4 text-sm font-semibold uppercase text-[var(--color-dark-text-primary)] tracking-wider">
    {children}
  </h3>
);

const Footer = () => {
  return (
    <footer className="w-full montserrat-regular">
      <div className="bg-[var(--color-dark-bg-secondary)] text-[var(--color-dark-text-secondary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            {/* Col 1: Brand */}
            <div className="md:col-span-4">
              <h1 className="font-thunder-bold-lc text-2xl font-bold text-[var(--color-dark-text-primary)] mb-4">
                AALISHAAN PRODUCTIONS
              </h1>
              <p className="text-base max-w-md mb-8">
                Your one-stop partner for broadcast-quality video content, from
                viral social clips to high-conversion product films.
              </p>

              {/* Divider */}
              <div className="w-12 h-px bg-[var(--color-dark-accent-primary)] mb-8 opacity-60" />

              {/* Socials */}
              <div className="flex items-center gap-5 mb-8">
                <a href="https://www.instagram.com/aalishaan_production?igsh=MTMzcDc3b21xaWpyaA==" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-dark-text-secondary)] transition-colors hover:text-[var(--color-dark-text-primary)]">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/share/1GZn7xdJ99/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-dark-text-secondary)] transition-colors hover:text-[var(--color-dark-text-primary)]">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>

              <CtaButtonSecondary
                href="#"
                title="Back to top"
                Icon={ArrowUp}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              />
            </div>

            {/* Spacer */}

            {/* Col 2: Pages */}
            <div className="md:col-span-2">
              <FooterTitle>Pages</FooterTitle>
              <div className="flex flex-col gap-3">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/team">The Team</FooterLink>
              </div>
            </div>

            {/* Col 3: Services */}
            <div className="md:col-span-2">
              <FooterTitle>Services</FooterTitle>
              <div className="flex flex-col gap-3">
                <FooterLink to="/services/social-media">Social Media Videos</FooterLink>
                <FooterLink to="/services/long-videos">Long Form Videos</FooterLink>
                <FooterLink to="/services/web-development">Web Development</FooterLink>
                <FooterLink to="/services/social-brand-building">Brand Building</FooterLink>
                <FooterLink to="/services/content-writing">Content Writing</FooterLink>
              </div>
            </div>

            {/* Col 4: Contact */}
            <div className="md:col-span-3">
              <FooterTitle>Reach Out</FooterTitle>
              <div className="flex flex-col gap-3">
                <FooterLink href="mailto:aalishaanproductions@gmail.com">
                  <SlideUpReveal>aalishaanproductions@gmail.com</SlideUpReveal>
                </FooterLink>
                <FooterLink href="tel:+916351887341">
                  <SlideUpReveal>+916351887341</SlideUpReveal>
                </FooterLink>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[var(--color-dark-accent-primary)] py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-4 gap-y-1">
            <p className="text-sm font-medium text-[var(--color-dark-bg-primary)] text-center sm:text-left">
              © 2025 Aalishaan Productions. All Rights Reserved.
            </p>
            <div className="hidden sm:block h-4 w-px bg-[var(--color-dark-bg-primary)] opacity-50" />
            <p className="text-sm font-medium text-[var(--color-dark-bg-primary)] text-center sm:text-left">
              Designed and developed by{" "}
              <a href="https://devbagga-portfolio.vercel.app" target="_blank" rel="noopener noreferrer"
                className="underline font-semibold transition-colors hover:text-white">
                Dev Bagga
              </a>
            </p>
            <div className="hidden sm:block h-4 w-px bg-[var(--color-dark-bg-primary)] opacity-50" />
            <p className="text-sm font-medium text-[var(--color-dark-bg-primary)] text-center sm:text-left">
              A{" "}
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="underline font-semibold transition-colors hover:text-white">
                Mehta Overseas
              </a>{" "}
              Venture
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;