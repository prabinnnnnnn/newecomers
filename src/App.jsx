import { Outlet } from "react-router-dom";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ui/theme-provider";

const ContextData = createContext();

function App() {
  const [data, setData] = useState(null);

  const dataFetch = async () => {
    try {
      const respond = await axios.get("https://fakestoreapi.com/products");
      setData(respond.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="h-screen w-full bg-background dark:bg-background dark:text-white ">
      <ContextData.Provider value={data}>
        <ThemeProvider>
          <Outlet />
          <Toaster theme="dark" />
        </ThemeProvider>
      </ContextData.Provider>
    </div>
  );
}

export default App;
export { ContextData };
