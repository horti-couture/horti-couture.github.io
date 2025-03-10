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
            // Step 1: Initialize Paystack payment
            const paymentResponse = await fetch("https://backend-7dm6.onrender.com/initialize-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, amount: total }),
            });

            const paymentData = await paymentResponse.json();

            if (paymentData.data && paymentData.data.authorization_url) {
                // Step 2: Redirect to Paystack for payment
                window.location.href = paymentData.data.authorization_url;

                // Step 3: After successful payment, send checkout details to the server
                await fetch("https://backend-7dm6.onrender.com/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, cart, total, shippingAddress }),
                });
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
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label>Shipping Address:</label>
            <textarea
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                required
            />

            <h3>Total: R{total.toFixed(2)}</h3>

            <button onClick={handlePaystackPayment} disabled={loading}>
                {loading ? "Processing..." : "Pay with Paystack"}
            </button>

            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
};

export default CheckoutForm;
