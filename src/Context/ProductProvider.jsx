// ProductProvider.js
import React, { useState, useEffect } from 'react';
import ProductContext from './ProductContext';

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selected, setSelected] = useState(null);

  // Fetch products once
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/product.json');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  

  // dd to cart or increase quantity if already in cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Remove item from cart completely
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Increase quantity by 1
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity by 1 (not below 1)
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };



  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.find((item) => item.id === product.id);
      if (exists) return prevWishlist; // already there
      return [...prevWishlist, product];
    });
  };

  //  Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        wishlist,
        setWishlist,
        selected,
        setSelected,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
