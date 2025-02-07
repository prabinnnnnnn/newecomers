import "./styles/App.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ui/theme-provider";
import { CartProvider } from "./context/CartContext";
import { ContextDataProvider } from "./context/ContextDataProvide";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="h-screen w-full bg-background dark:bg-background dark:text-white">
      <CartProvider>
        <ContextDataProvider>
          <ThemeProvider>
            <NavBar />
            <Outlet />
            <Toaster theme="dark" />
            <Footer />
          </ThemeProvider>
        </ContextDataProvider>
      </CartProvider>
    </div>
  );
}

export default App;
