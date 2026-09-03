import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const WishlistContext = createContext(null);
const STORAGE_KEY = 'stitch-craft-wishlist';

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    if (typeof window === 'undefined') return [];

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const toggleWishlist = (product) => {
    setItems((currentItems) => {
      const exists = currentItems.some((item) => item.id === product.id);
      return exists
        ? currentItems.filter((item) => item.id !== product.id)
        : [...currentItems, product];
    });
  };

  const isInWishlist = (productId) => items.some((item) => item.id === productId);
  const itemCount = useMemo(() => items.length, [items]);

  return (
    <WishlistContext.Provider value={{ items, toggleWishlist, isInWishlist, itemCount }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used inside WishlistProvider');
  return context;
};
