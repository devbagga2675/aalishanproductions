import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import rootRoutes from "./rootRoutes"; 
 import "/public/index.css"
import '/public/fonts.css';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const router = createBrowserRouter(rootRoutes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);