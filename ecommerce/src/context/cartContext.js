import React, { createContext, useContext, useState } from 'react';
export const CartContext = createContext({
  cart: []
});
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const addItem = (item, quantity) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      const newItem = { ...item, quantity };
      setCart([...cart, newItem]);
    }
    setTotalQuantity(totalQuantity + quantity);
  };
  const removeItem = (itemId) => {
    const cartupdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartupdated)
  }
  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
  };
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  return (
    <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart debe ser utilizado dentro de un proveedor de carrito');
  }
  return context;
};

export default CartContext;