import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((p) => p.id === item.id);
            if (existingItem) {
                return prevCart.map((p) =>
                    p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
                );
            }
            return [...prevCart, item];
        });
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// ✅ Add the `useCart` Hook
export const useCart = () => {
    return useContext(CartContext);
};