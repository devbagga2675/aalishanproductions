import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import StaticNavbar from './StaticNavbar';
import Footer from './Footer';
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Whether animation should happen only once while scrolling down
    });
  }, []);
  
  return (
    <div>
      <StaticNavbar/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;