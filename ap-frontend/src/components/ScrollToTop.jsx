import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Basic Page Change: Reset to top immediately
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // 2. Hash Handling with Recursive Polling
    let retryCount = 0;
    const maxRetries = 20; // 2 seconds total (20 * 100ms)

    const findAndScroll = () => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return true; // Success
      }
      return false; // Not found yet
    };

    // Start polling if element isn't found immediately
    if (!findAndScroll()) {
      const pollTimer = setInterval(() => {
        retryCount++;
        const found = findAndScroll();

        if (found || retryCount >= maxRetries) {
          clearInterval(pollTimer);
        }
      }, 100);

      return () => clearInterval(pollTimer); // Cleanup on unmount
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;