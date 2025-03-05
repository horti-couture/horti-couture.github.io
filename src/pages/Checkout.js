// src/pages/Checkout.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css"; // Import the Checkout CSS

const Checkout = () => {
    const { cart } = useContext(CartContext);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.title} - {item.quantity} x R{item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Total: R{totalPrice.toFixed(2)}</p>
            <button>Pay Now</button>
        </div>
    );
};

export default Checkout;