import { Outlet } from "react-router-dom";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

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
    <div className="h-screen w-full bg-[#faf9f6]">
      <ContextData.Provider value={data}>
        <Outlet />
      </ContextData.Provider>
    </div>
  );
}

export default App;
export { ContextData };
