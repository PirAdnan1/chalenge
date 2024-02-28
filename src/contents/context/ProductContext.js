import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function MyProvider({ children }) {
  const [products, setProducts] = useState(null);
  return <MyContext.Provider value={{products, setProducts}}>{children}</MyContext.Provider>;
}

