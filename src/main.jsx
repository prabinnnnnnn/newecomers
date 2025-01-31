import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/firstpage/Main.jsx";
import Shop from "./components/shop.jsx";
import ItemsSummery from "./components/order/itemsSummery.jsx";
import ProductView from "./components/product_view/productreview.jsx";
import ProductDetail from "./components/product_view/product_detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <ItemsSummery /> },
      // { path: "/product", element: <ProductView /> },
      { path: "/product", element: <ProductDetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
