import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDown } from "lucide-react";

// Import your reusable component
import SlideUpReveal from "./SlideUpReveal"; 

// Import the services data
import { services } from "./../pages/services"; // Ensure this path matches your file structure

export default function StaticNavbar() {
  const baseLinkClasses = "text-base font-medium transition duration-300 ease-in-out cursor-pointer";
  
  const getNavLinkClasses = ({ isActive }) =>
    `text-sm font-medium transition flex items-center gap-1 ${
      isActive
        ? "text-[var(--color-dark-text-primary)]"
        : "text-[var(--color-dark-text-secondary)] hover:text-[var(--color-dark-text-primary)]"
    }`;

  // --- Hover Logic for Headless UI Popover ---
  // We use a timeout to prevent flickering when moving mouse from button to panel
  let timeout;
  const timeoutDuration = 200;

  const onHover = (open, close) => {
    clearTimeout(timeout);
    if (!open) {
      close(false); // Ensure clean state
      // Find the button and click it to open
      document.getElementById("services-menu-button")?.click();
    }
  };

  const onLeave = (open, close) => {
    timeout = setTimeout(() => {
      if (open) {
        close(); // Close via the render prop function
      }
    }, timeoutDuration);
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1
                className="
                  font-thunder-bold-lc 
                  text-[var(--color-dark-text-primary)]
                  text-xl sm:text-2xl 
                  font-bold tracking-wide
                "
              >
                AALISHAN PRODUCTIONS
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:block montserrat-regular">
            <div className="flex items-center gap-8">
              
              {/* === Link 1: Home === */}
              <NavLink
                to="/"
                end
                className={({ isActive }) => `${getNavLinkClasses({ isActive })} group`}
              >
                <SlideUpReveal className={baseLinkClasses}>Home</SlideUpReveal>
              </NavLink>

              {/* === Link 2: Services Dropdown (On Hover) === */}
              <Popover className="relative">
                {({ open, close }) => (
                  <div
                    onMouseEnter={() => onHover(open, close)}
                    onMouseLeave={() => onLeave(open, close)}
                  >
                    <Popover.Button
                      id="services-menu-button"
                      className={`
                        group inline-flex items-center gap-1 outline-none
                        ${open ? "text-[var(--color-dark-text-primary)]" : "text-[var(--color-dark-text-secondary)]"}
                        hover:text-[var(--color-dark-text-primary)]
                      `}
                    >
                      <SlideUpReveal className={baseLinkClasses}>Services</SlideUpReveal>
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
                      show={open} // Controlled by hover logic triggering click
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
                          absolute left-1/2 z-50 mt-4 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0
                        "
                      >
                        <div 
                          className="
                            overflow-hidden rounded-xl shadow-2xl 
                            ring-1 ring-black ring-opacity-5
                            border border-[var(--color-dark-border)]
                          "
                        >
                          <div className="relative grid gap-1 bg-[var(--color-dark-bg-secondary)] p-2">
                            {services.map((item) => (
                              <Link
                                key={item.id}
                                to={item.servicePath}
                                onClick={() => close()} // Close menu on click
                                className="
                                  group flex items-start rounded-lg p-3 
                                  transition duration-150 ease-in-out 
                                  hover:bg-[var(--color-dark-bg-primary)]
                                "
                              >
                                <div>
                                  <p className="text-sm font-medium text-[var(--color-dark-text-primary)]">
                                    {item.serviceTitle}
                                  </p>
                                  <p className="mt-1 text-xs text-[var(--color-dark-text-secondary)] line-clamp-1">
                                    {item.serviceSubtitle}
                                  </p>
                                </div>
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
                className={({ isActive }) => `${getNavLinkClasses({ isActive })} group`}
              >
                <SlideUpReveal className={baseLinkClasses}>The Team</SlideUpReveal>
              </NavLink>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}