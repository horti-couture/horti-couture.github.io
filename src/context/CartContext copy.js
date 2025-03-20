// src/context/CartContext.js
import React, { createContext, useState, useEffect, useContext } from "react"; // Added useContext here

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Load cart from localStorage or default to an empty array
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Generate a unique key for each cart item based on its attributes
    const generateItemKey = (item) => {
        return `${item.id}-${item.color || ""}-${item.size || ""}-${item.stand || ""}-${item.lineArt || ""}`;
    };

    // Add an item to the cart
    const addToCart = (item) => {
        setCart((prevCart) => {
            const itemKey = generateItemKey(item);
            const existingItem = prevCart.find((p) => generateItemKey(p) === itemKey);

            if (existingItem) {
                // If the item already exists, update its quantity
                return prevCart.map((p) =>
                    generateItemKey(p) === itemKey ? { ...p, quantity: p.quantity + item.quantity } : p
                );
            } else {
                // If the item is new, add it to the cart
                return [...prevCart, item];
            }
        });
    };

    // Remove an item from the cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Clear the entire cart
    const clearCart = () => {
        setCart([]); // This will also clear localStorage thanks to the useEffect
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
