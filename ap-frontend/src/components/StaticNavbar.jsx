import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import your reusable component
import SlideUpReveal from "./SlideUpReveal";

// Import the services data
import { services } from "./../pages/services";

export default function StaticNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      // 768px is the standard Tailwind 'md' breakpoint
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseLinkClasses =
    "text-base font-medium transition duration-300 ease-in-out cursor-pointer";

  const getNavLinkClasses = ({ isActive }) =>
    `text-sm font-medium transition flex items-center gap-1 ${
      isActive
        ? "text-[var(--color-dark-text-primary)]"
        : "text-[var(--color-dark-text-secondary)] hover:text-[var(--color-dark-text-primary)]"
    }`;

  // --- Hover Logic for Headless UI Popover (Desktop) ---
  let timeout;
  const timeoutDuration = 200;

  const onHover = (open, close) => {
    clearTimeout(timeout);
    if (!open) {
      close(false);
      document.getElementById("services-menu-button")?.click();
    }
  };

  const onLeave = (open, close) => {
    timeout = setTimeout(() => {
      if (open) {
        close();
      }
    }, timeoutDuration);
  };

  // --- Framer Motion Variants ---
  const drawerVariants = {
    hidden: {
      clipPath: "inset(0 0 100% 0)", // Invisible, clipped from bottom
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    visible: {
      clipPath: "inset(0 0 0% 0)", // Fully revealed
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const fadeDownVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50 
        bg-[var(--color-dark-bg-primary)]/80
        backdrop-blur-md
        border-b border-[var(--color-dark-border)]
        h-24 
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full relative z-50 bg-[var(--color-dark-bg-primary)] sm:bg-transparent">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex gap-3 md:gap-5 items-center">
            <Link to="/">
              <h1
                className="
                  font-thunder-bold-lc 
                  text-[var(--color-dark-text-primary)]
                  text-xl sm:text-2xl 
                  font-bold tracking-wide mt-1.5
                "
              >
                AALISHAAN PRODUCTIONS
              </h1>
            </Link>
            <span className="h-10 bg-[var(--color-dark-border)] w-0.5 hidden sm:block"></span>
            <div className="hidden sm:flex items-center gap-3 md:gap-5">
              <a
                href="https://www.instagram.com/aalishaan_production?igsh=MTMzcDc3b21xaWpyaA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-dark-text-secondary)] transition-colors hover:text-[var(--color-dark-text-primary)]"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1GZn7xdJ99/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-dark-text-secondary)] transition-colors hover:text-[var(--color-dark-text-primary)]"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            {" "}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--color-dark-text-primary)] p-2 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block montserrat-regular h-full">
            {" "}
            <div className="flex items-stretch md:items-center justify-center gap-8 h-full">
              {/* === Link 1: Home === */}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${getNavLinkClasses({ isActive })} group flex items-center lg:h-fit px-2`
                }
              >
                <SlideUpReveal className={baseLinkClasses}>Home</SlideUpReveal>
              </NavLink>

              {/* === Link 2: Services Dropdown (On Hover) === */}
              <Popover className="relative lg:h-fit ">
                {({ open, close }) => (
                  <div
                    className="lg:h-fit"
                    onMouseEnter={() => onHover(open, close)}
                    onMouseLeave={() => onLeave(open, close)}
                  >
                    <Popover.Button
                      id="services-menu-button"
                      className={`
                        group flex items-center gap-1 lg:h-fit px-2 outline-none 
                        ${open ? "text-[var(--color-dark-text-primary)]" : "text-[var(--color-dark-text-secondary)]"}
                        hover:text-[var(--color-dark-text-primary)]
                      `}
                    >
                      <SlideUpReveal className={baseLinkClasses}>
                        Services
                      </SlideUpReveal>
                      <ChevronDown
                        className={`
                          h-4 w-4 transition-transform duration-200
                          ${open ? "rotate-180" : ""}
                          group-hover:text-[var(--color-dark-text-primary)]
                        `}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      show={open}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel
                        static
                        className="
                          absolute left-1/2 z-50 mt-4 w-screen max-w-sm -translate-x-1/2 transform px-2 sm:px-0
                        "
                      >
                        <div
                          className="
                            overflow-hidden rounded-xl shadow-2xl 
                            ring-1 ring-black ring-opacity-5
                            border border-[var(--color-dark-border)]
                          "
                        >
                          <div className="relative grid gap-1 bg-[var(--color-dark-bg-primary)] p-2 divide-y divide-[var(--color-dark-border)]">
                            {services.map((item) => (
                              <Link
                                key={item.id}
                                to={item.servicePath}
                                onClick={() => close()}
                                className="
                                  group flex items-center justify-between p-3 
                                  transition-all duration-300 ease-in-out
                                "
                              >
                                <div>
                                  <p className="text-sm font-medium text-[var(--color-dark-text-primary)] group-hover:underline">
                                    {item.serviceTitle}
                                  </p>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-[var(--color-dark-text-primary)] opacity-0 -translate-x-40 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </div>
                )}
              </Popover>

              {/* === Link 3: The Team === */}
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `${getNavLinkClasses({ isActive })} group h-full lg:h-fit`
                }
              >
                <SlideUpReveal className={baseLinkClasses}>
                  The Team
                </SlideUpReveal>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="
              fixed top-0 left-0 w-full h-dvh
              bg-[var(--color-dark-bg-primary)] 
              pt-24 px-4 pb-10 
              flex flex-col 
              overflow-y-auto z-40
              border-b border-[var(--color-dark-border)]
              will-change-[clip-path]
              
            "
          >
            <div className="flex flex-col gap-6 mt-8 montserrat-regular">
              {/* Mobile Link 1: Home */}
              <motion.div variants={fadeDownVariants}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-xl font-regular transition-colors ${
                      isActive
                        ? "text-[var(--color-dark-text-primary)]"
                        : "text-[var(--color-dark-text-secondary)]"
                    }`
                  }
                >
                  Home
                </NavLink>
              </motion.div>

              {/* Mobile Link 2: Services Accordion */}
              <motion.div variants={fadeDownVariants} className="flex flex-col">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between text-xl font-regular text-[var(--color-dark-text-secondary)] focus:outline-none"
                >
                  <span
                    className={
                      isMobileServicesOpen
                        ? "text-[var(--color-dark-text-primary)]"
                        : ""
                    }
                  >
                    Services
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      isMobileServicesOpen
                        ? "rotate-180 text-[var(--color-dark-text-primary)]"
                        : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      variants={accordionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden  flex flex-col gap-4 mt-5 pl-4 border-l-3 border-[var(--color-dark-border)]"
                    >
                      {services.map((item) => (
                        <Link
                          key={item.id}
                          to={item.servicePath}
                          className="text-lg text-[var(--color-dark-text-secondary)] hover:text-[var(--color-dark-text-primary)] transition-colors flex items-center justify-between"
                        >
                          {item.serviceTitle}
                          <ArrowUpRight className="w-5 h-5 opacity-70" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile Link 3: The Team */}
              <motion.div variants={fadeDownVariants}>
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    `text-xl font-regular transition-colors ${
                      isActive
                        ? "text-[var(--color-dark-text-primary)]"
                        : "text-[var(--color-dark-text-secondary)]"
                    }`
                  }
                >
                  The Team
                </NavLink>
              </motion.div>

              {/* Mobile Socials */}
              <motion.div
                variants={fadeDownVariants}
                className=" pt-6 border-t border-[var(--color-dark-border)] flex gap-6"
              >
                <a
                  href="https://www.instagram.com/aalishaan_production?igsh=MTMzcDc3b21xaWpyaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-dark-text-secondary)] transition-colors hover:text-[var(--color-dark-text-primary)]"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/share/1GZn7xdJ99/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-dark-text-secondary)] transition-colors hover:text-[var(--color-dark-text-primary)]"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
