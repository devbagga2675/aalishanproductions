import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

import Loader from "./components/Loader"; 

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