import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { usePaystackPayment } from "react-paystack";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const config = {
        reference: new Date().getTime().toString(),
        email: "customer@example.com", // Collect from user input
        amount: totalPrice * 100, // Paystack uses kobo
        publicKey: "your-paystack-public-key",
    };

    const initializePayment = usePaystackPayment(config);

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? <p>Cart is empty</p> : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.title} - {item.quantity} x R{item.price.toFixed(2)}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: R{totalPrice.toFixed(2)}</p>
            {cart.length > 0 && <button onClick={() => initializePayment()}>Pay with Paystack</button>}
        </div>
    );
};

export default Cart;