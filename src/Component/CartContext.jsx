import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'stitch-craft-cart';

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    if (typeof window === 'undefined') return [];

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  const addItem = (product, selectedSize, quantity = 1) => {
    const parsedPrice = Number(String(product.price || '0').replace(/[^\d.]/g, '')) || 0;
    const parsedOriginal = Number(String(product.originalPrice || product.price || '0').replace(/[^\d.]/g, '')) || parsedPrice;

    const itemToAdd = {
      id: `${product.id}-${selectedSize}`,
      productId: product.id,
      name: product.name,
      image: product.image,
      category: product.category || 'General',
      size: selectedSize,
      quantity: Number(quantity) || 1,
      price: parsedPrice,
      priceLabel: product.price || `Rs. ${parsedPrice}`,
      originalPrice: parsedOriginal,
      originalPriceLabel: product.originalPrice || product.price || `Rs. ${parsedOriginal}`,
    };

    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.productId === product.id && item.size === selectedSize
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.productId === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + (Number(quantity) || 1) }
            : item
        );
      }

      return [...prevItems, itemToAdd];
    });
  };

  const updateQuantity = (itemId, nextQuantity) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: Math.max(1, Number(nextQuantity) || 1) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => setItems([]);

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + Number(item.quantity || 0), 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + Number(item.price || 0) * Number(item.quantity || 0), 0),
    [items]
  );

  const value = {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    itemCount,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }

  return context;
};
