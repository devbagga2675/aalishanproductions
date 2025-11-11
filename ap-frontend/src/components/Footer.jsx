import React from "react";
import { Twitter, Linkedin, Instagram, Facebook, ArrowUp } from "lucide-react";
// 1. Import your secondary button
import { CtaButtonSecondary } from "./CtaButton";

// Internal component for styling footer links
const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="
      text-sm 
      text-[var(--color-dark-text-secondary)] 
      transition-colors 
      hover:text-[var(--color-dark-text-primary)] 
      hover:underline
    "
  >
    {children}
  </a>
);

// Internal component for styling footer column titles
const FooterTitle = ({ children }) => (
  <h3
    className="
    mb-4 text-sm font-semibold 
    uppercase text-[var(--color-dark-text-primary)] 
    tracking-wider
  "
  >
    {children}
  </h3>
);

const Footer = () => {
  return (
    <footer className="w-full montserrat-regular">
      {/* Main Footer Section */}
      <div className="bg-[var(--color-dark-bg-secondary)] text-[var(--color-dark-text-secondary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1: Logo, Desc, Socials, Back to Top */}
            <div className="md:col-span-2">
              <h1 className="font-thunder-bold-lc text-2xl font-bold text-[var(--color-dark-text-primary)] mb-4">
                AALISHAN PRODUCTIONS
              </h1>
              <p className="text-base max-w-md">
                Your one-stop partner for broadcast-quality video content, from
                viral social clips to high-conversion product films.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-dark-text-secondary)] transition-colors hover:text-[var(--color-dark-text-primary)]"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-dark-text-secondary)] transition-colors hover:text-[var(--color-dark-text-primary)]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-dark-text-secondary)] transition-colors hover:text-[var(--color-dark-text-primary)]"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-dark-text-secondary)] transition-colors hover:text-[var(--color-dark-text-primary)]"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>

              {/* 2. Replaced custom button with CtaButtonSecondary */}
              <div className="mt-8">
                <CtaButtonSecondary
                  href="#"
                  title="Back to top" // Corrected typo
                  Icon={ArrowUp}
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
              </div>
            </div>

            {/* Column 2: Site Map */}
            <div>
              <FooterTitle>Site Map</FooterTitle>
              <div className="flex flex-col gap-3">
                <FooterLink href="#">Home</FooterLink>
                <FooterLink href="#">YT Content</FooterLink>
                <FooterLink href="#">Social Media Content</FooterLink>
                <FooterLink href="#">The Team</FooterLink>
                <FooterLink href="#">Contact Us</FooterLink>
              </div>
            </div>

            {/* Column 3: Legal */}
            <div>
              <FooterTitle>Legal</FooterTitle>
              <div className="flex flex-col gap-3">
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Service</FooterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[var(--color-dark-accent-primary)] py-3">
        {" "}
        {/* Changed py-4 to py-3 for 'compact' */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* This flex container handles the layout:
          - On mobile: stacks the two credits (flex-wrap)
          - On desktop: puts them side-by-side with the divider (sm:flex-nowrap)
          - Centers everything (justify-center)
        */}
          <div
            className="
          flex flex-wrap sm:flex-nowrap 
          items-center justify-center 
          gap-x-4 gap-y-1
        "
          >
            {/* Credit 1: Copyright */}
            <p
              className="
            text-sm font-medium 
            text-[var(--color-dark-bg-primary)] 
            text-center sm:text-left
          "
            >
              © 2025 Aalishan Productions. All Rights Reserved.
            </p>

            {/* Vertical Divider (hidden on mobile, visible on desktop) */}
            <div
              className="
            hidden sm:block 
            h-4 w-px 
            bg-[var(--color-dark-bg-primary)] 
            opacity-50
          "
            ></div>

            <p
              className="
            text-sm font-medium 
            text-[var(--color-dark-bg-primary)] 
            text-center sm:text-left
          "
            >
              Designed and developed by{" "}
              <a
                href="https://devbagga-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold transition-colors hover:text-white"
              >
                Dev Bagga
              </a>
            </p>
            <div
              className="
            hidden sm:block 
            h-4 w-px 
            bg-[var(--color-dark-bg-primary)] 
            opacity-50
          "
            ></div>
            <p
              className="
            text-sm font-medium 
            text-[var(--color-dark-bg-primary)] 
            text-center sm:text-left
          "
            >
              A {" "}
              <a
                href="httpsIS://YOUR-URL-HERE.com" /* <-- Replace this URL */
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold transition-colors hover:text-white"
              >
                Mehta Overseas
              </a>
              {" "} Venture
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
