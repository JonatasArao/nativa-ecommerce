import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartContextType {
  cartItemCount: number;
  addToCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = () => {
    setCartItemCount(prevCount => prevCount + 1);
  };

  const value = { cartItemCount, addToCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};