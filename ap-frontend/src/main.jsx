import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import rootRoutes from "./rootRoutes"; // Import the routes we just defined
import "./index.css"; // Import Tailwind CSS styles
import './fonts.css';

const router = createBrowserRouter(rootRoutes);
console.log(router.routes)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
