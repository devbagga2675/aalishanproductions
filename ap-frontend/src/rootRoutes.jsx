import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

import Loader from "./components/Loader";
import Team from "./pages/Team";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import SocialMediaPage from "./pages/services/SocialMediaPage";
import LongVideoPage from "./pages/services/LongVideoPage";
import PhotoshootsPage from "./pages/services/PhotoshootsPage";
import ContentWritingPage from "./pages/services/ContentWritingPage";
import BrandingPage from "./pages/services/BrandingPage";
// --- Lazy-Loaded Components ---
const Layout = lazy(() => import("./components/Layout"));
const LandingPage = lazy(() => import("./pages/Landing")); // The new index page

const rootRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // Sets the LandingPage as the default route at '/'
        index: true,
        element: <LandingPage />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "services/web-development",
        element: <WebDevelopmentPage />,
      },
      {
        path: "services/social-media",
        element: <SocialMediaPage />,
      },
      {
        path: "services/long-videos",
        element: <LongVideoPage />,
      },
      {
        path: "services/social-brand-building",
        element: <BrandingPage />,
      },

      // {
      //   path: "services/photoshoots",
      //   element: <PhotoshootsPage />,
      // },
      {
        path: "services/content-writing",
        element: <ContentWritingPage />,
      },
      // You can add other simple, non-protected pages here if needed (e.g., /about, /contact)
      // Example:
      /*
      {
        path: "about",
        element: (
          
            <AboutPage /> 
          
        ),
      },
      */
    ],
  },
  // --- Catch-all for undefined routes ---
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default rootRoutes;
