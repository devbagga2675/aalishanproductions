import React from 'react';
import { Outlet } from 'react-router-dom';
import StaticNavbar from './StaticNavbar';
import Footer from './Footer';
const Layout = () => {
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