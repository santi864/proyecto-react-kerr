import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  let data = { cart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
