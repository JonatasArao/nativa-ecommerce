import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface CartItem {
  productId : string;
  quantity: number;
}

interface CartContextType {
  cartItems : CartItem[];
  cartItemCount: number;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId : string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.productId === productId);
      if (existingItem) {
        return prevItems.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { productId, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
  };

  const updateItemQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.productId === productId ? { ...item, quantity } : item
        )
      );
    }
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const value = {
    cartItems,
    cartItemCount,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    clearCart,
  };

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