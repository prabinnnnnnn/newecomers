// context/ContextDataProvider.js
import useDataFetch from "@/hooks/useDataFetch";
import { createContext } from "react";

export const ContextData = createContext();

export const ContextDataProvider = ({ children }) => {
  const data = useDataFetch();

  return <ContextData.Provider value={data}>{children}</ContextData.Provider>;
};
