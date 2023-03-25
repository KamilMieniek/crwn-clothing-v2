import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingItem) {
    const newCart = cartItems.map((item) => {
      if (item.id === existingItem.id)
        return { ...item, quantity: item.quantity + 1 };
      return item;
    });
    return newCart;
  } else {
    const newItem = { ...productToAdd, quantity: 1 };
    return [...cartItems, newItem];
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce((accumulator, currenItem) => {
      return accumulator + currenItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
