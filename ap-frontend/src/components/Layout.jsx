import React, { Suspense } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import StaticNavbar from "./StaticNavbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Loader";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div>

      <ScrollToTop />
      <Suspense fallback={<Loader/>}>
        <StaticNavbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
