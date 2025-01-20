import { data, Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ContextData = createContext();

function App() {
  const [data, setData] = useState(null);

  const dataFetch = async () => {
    try {
      const respond = await axios.get("https://dummyjson.com/products");
      setData(respond.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="h-screen w-screen bg-[#faf9f6] grid grid-rows-[10%,90%] max-sm:grid-rows-[9%,91%]">
      <ContextData.Provider value={data}>
        <NavBar />
        <div className="overflow-y-scroll">
          <Outlet />
        </div>
      </ContextData.Provider>
    </div>
  );
}

export default App;
export { ContextData };
