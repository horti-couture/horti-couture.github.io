// src/pages/cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/Cart.css"; // Import the Cart CSS

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.title} - {item.quantity} x R{item.price.toFixed(2)}
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: R{totalPrice.toFixed(2)}</p>
                    <button onClick={clearCart}>Clear Cart</button>
                    <Link to="/checkout">
                        <button>Proceed to Checkout</button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Cart;