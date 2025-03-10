import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CheckoutForm = () => {
    const { cart, clearCart } = useCart();
    const [email, setEmail] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handlePaystackPayment = async () => {
        setLoading(true);

        try {
            const response = await fetch("https://backend-7dm6.onrender.com/initialize-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, amount: total }),
            });

            const { data } = await response.json();

            if (data && data.authorization_url) {
                window.location.href = data.authorization_url; // Redirect to Paystack
            } else {
                setStatusMessage("Failed to initialize payment.");
            }
        } catch (error) {
            setStatusMessage("Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Shipping Address:</label>
            <textarea value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} required />

            <h3>Total: R{total.toFixed(2)}</h3>

            <button onClick={handlePaystackPayment} disabled={loading}>
                {loading ? "Processing..." : "Pay with Paystack"}
            </button>

            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
};

export default CheckoutForm;
