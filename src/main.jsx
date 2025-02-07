import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import router from "./routes/ProductRouter";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
