// hooks/useDataFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

const useDataFetch = () => {
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

  return data;
};

export default useDataFetch;
