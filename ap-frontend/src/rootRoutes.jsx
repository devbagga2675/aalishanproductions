import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

import Loader from "./components/Loader"; 
import Team from "./pages/Team";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import SocialMediaPage from "./pages/services/SocialMediaPage";
import LongVideoPage from "./pages/services/LongVideoPage";
import PhotoshootsPage from "./pages/services/PhotoshootsPage";
import ContentWritingPage from "./pages/services/ContentWritingPage";
// --- Lazy-Loaded Components ---
const Layout = lazy(() => import("./components/Layout")); 
const LandingPage = lazy(() => import("./pages/Landing")); // The new index page

const rootRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        // Sets the LandingPage as the default route at '/'
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "team",
        element: (
          <Suspense fallback={<Loader />}>
            <Team />
          </Suspense>
        ),
      },
      {
        path: "services/web-development",
        element: (
          <Suspense fallback={<Loader />}>
            <WebDevelopmentPage />
          </Suspense>
        ),
      },
      {
        path: "services/social-media",
        element: (
          <Suspense fallback={<Loader />}>
            <SocialMediaPage />
          </Suspense>
        ),
      },
      {
        path: "services/long-videos",
        element: (
          <Suspense fallback={<Loader />}>
            <LongVideoPage />
          </Suspense>
        ),
      },
      {
        path: "services/photoshoots",
        element: (
          <Suspense fallback={<Loader />}>
            <PhotoshootsPage />
          </Suspense>
        ),
      },
      {
        path: "services/content-writing",
        element: (
          <Suspense fallback={<Loader />}>
            <ContentWritingPage />
          </Suspense>
        ),
      },
      // You can add other simple, non-protected pages here if needed (e.g., /about, /contact)
      // Example:
      /*
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <AboutPage /> 
          </Suspense>
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