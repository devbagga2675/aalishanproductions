import React from "react";
import { NavLink } from "react-router-dom";

export default function StaticNavbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-10 
        bg-[var(--color-dark-bg-primary)]/30
        backdrop-blur-md
        border-b-2 border-[var(--color-dark-border)]
        h-24 /* <-- FIXED HEIGHT ADDED HERE */
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full"> {/* <-- Added h-full */}
        <div className="flex items-center justify-between h-full"> {/* <-- Changed h-24 to h-full */}
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
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-[var(--color-dark-text-primary)]"
                      : "text-[var(--color-dark-text-secondary)] hover:text-[var(--color-dark-text-primary)]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/yt-content"
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-[var(--color-dark-text-primary)]"
                      : "text-[var(--color-dark-text-secondary)] hover:text-[var(--color-dark-text-primary)]"
                  }`
                }
              >
                YT Content
              </NavLink>
              <NavLink
                to="/social-media-content"
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-[var(--color-dark-text-primary)]"
                      : "text-[var(--color-dark-text-secondary)] hover:text-[var(--color-dark-text-primary)]"
                  }`
                }
              >
                Social Media Content
              </NavLink>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-[var(--color-dark-text-primary)]"
                      : "text-[var(--color-dark-text-secondary)] hover:text-[var(--color-dark-text-primary)]"
                  }`
                }
              >
                The Team
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}