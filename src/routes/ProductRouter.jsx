import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import HomePage from "@/pages/homepage/Homepage";
import ShopPage from "@/pages/productPage/ProductPage";
import ProductDetail from "@/pages/productDetailPage/ProductDetail";
import ErrorPage from "@/pages/errorhandle/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Handle 404 errors
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/product", element: <ProductDetail /> }, // Dynamic route
    ],
  },
]);

export default router;
