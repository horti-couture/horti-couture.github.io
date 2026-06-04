// src/pages/Checkout.js
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";
import acceptedImage from "../assets/accepted.png";

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [shippingOption, setShippingOption] = useState("pickup");
    const [paymentMethod, setPaymentMethod] = useState("paystack");
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const MINIMUM_ORDER_AMOUNT = 150;

    // Load user data
    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData) {
            setFormData({
                name: storedUserData.name || "",
                email: storedUserData.email || "",
                phone: storedUserData.phone || "",
                address: storedUserData.address || "",
            });
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingFee = shippingOption === "courier" ? 120 : 0;
    const grandTotal = total + shippingFee;

    const meetsMinimumOrder = total >= MINIMUM_ORDER_AMOUNT;

    // =========================
    // PAYSTACK (FIXED FLOW)
    // =========================
    const handlePaystackPayment = async () => {
        if (!meetsMinimumOrder) return;

        setLoading(true);

        try {
            const res = await fetch("https://backend-7dm6.onrender.com/initialize-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    amount: grandTotal,
                }),
            });

            const data = await res.json();

            if (!data.data?.authorization_url) {
                throw new Error("Payment failed");
            }

            // Save order FIRST (safe for both EFT + card tracking)
            await fetch("https://backend-7dm6.onrender.com/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    cart,
                    total: grandTotal,
                    address: formData.address,
                    shippingOption,
                    paymentMethod: "paystack",
                }),
            });

            window.location.href = data.data.authorization_url;

        } catch (err) {
            setStatusMessage("Error: " + err.message);
            setLoading(false);
        }
    };

    // =========================
    // EFT (FIXED - YOUR ISSUE)
    // =========================
    const handleEFTPayment = async () => {
        if (!meetsMinimumOrder) return;

        setLoading(true);

        try {
            const res = await fetch("https://backend-7dm6.onrender.com/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,   // IMPORTANT FIX (was missing before sometimes)
                    cart,
                    total: grandTotal,
                    address: formData.address,
                    shippingOption,
                    paymentMethod: "EFT",
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Checkout failed");
            }

            setStatusMessage("Order received! EFT instructions sent.");
            clearCart();

            setTimeout(() => navigate("/"), 1500);

        } catch (err) {
            setStatusMessage("Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <h2>Checkout</h2>

                <div className="checkout-form">

                    <div className="form-group">
                        <label>Name:</label>
                        <input name="name" value={formData.name} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input name="email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Phone:</label>
                        <input name="phone" value={formData.phone} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Address:</label>
                        <input name="address" value={formData.address} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Shipping:</label>
                        <select value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
                            <option value="pickup">Pickup</option>
                            <option value="courier">Courier (R120)</option>
                        </select>
                    </div>

                    {shippingOption === "pickup" && (
                        <div className="pickup-instructions">
                            <p><strong>Pickup Address:</strong></p>
                            <p>44 Kundalila Road</p>
                            <p>Waterfall</p>
                            <p>Durban</p>
                            <p>3652</p>
                        </div>
                    )}

                    <div className="form-group">
                        <label>Payment:</label>
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value="paystack">Card</option>
                            <option value="eft">EFT</option>
                        </select>
                    </div>

                    <div className="total-summary">
                        <h3>Total: R{grandTotal.toFixed(2)}</h3>
                    </div>

                    {paymentMethod === "paystack" ? (
                        <button onClick={handlePaystackPayment} disabled={loading}>
                            Pay with Card
                        </button>
                    ) : (
                        <button onClick={handleEFTPayment} disabled={loading}>
                            Place EFT Order
                        </button>
                    )}

                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </div>
            </div>

            <div className="secured-image">
                <img src={acceptedImage} alt="secure" />
            </div>
        </div>
    );
};

export default Checkout;