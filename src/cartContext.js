import React, { createContext, useState, useContext, useEffect } from "react";
import { addCartToLocalStorage, getIntitalState } from "./utils";

const CartContext = createContext();
const CartUpdate = createContext();

export const CartProvider = ({ children }) => {
  const initialState = getIntitalState();
  const [cart, setCart] = useState(initialState);

  useEffect(() => {
    addCartToLocalStorage(cart);
  }, [cart]);

  const addItem = (id) => {
    setCart((p) => ({ ...p, [id]: 1 }));
  };
  const increaseItemCount = (id) => {
    setCart((p) => {
      const count = p[id];
      return { ...p, [id]: count + 1 };
    });
  };
  const setCount = (id, count) => {
    setCart((p) => {
      return { ...p, [id]: count };
    });
  };
  const deleteItem = (id) => {
    setCart((p) => {
      const newState = { ...p };
      if (!!p[id]) {
        newState[id] = 0;
        delete newState[id];
      }
      return newState;
    });
  };
  const removeItem = (id) => {
    setCart((p) => {
      const newState = { ...p };
      if (!!p[id]) {
        newState[id] = newState[id] - 1;
      }
      if (p[id] === 0) delete newState[id];
      return newState;
    });
  };

  return (
    <CartContext.Provider value={{ cart }}>
      <CartUpdate.Provider
        value={{ setCount, addItem, removeItem, increaseItemCount, deleteItem }}
      >
        {children}
      </CartUpdate.Provider>
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
export const useCartUpdate = () => useContext(CartUpdate);
