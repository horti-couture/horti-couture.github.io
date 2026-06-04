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

    // Load saved user data
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("userData"));
        if (stored) {
            setFormData({
                name: stored.name || "",
                email: stored.email || "",
                phone: stored.phone || "",
                address: stored.address || "",
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
    // PAYSTACK FLOW
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
                throw new Error("Payment init failed");
            }

            // Save order BEFORE redirect
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
            setStatusMessage("Payment error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // EFT FLOW (FIXED)
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
                    email: formData.email,
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

            setStatusMessage("Order received! Please complete EFT payment.");

            clearCart();

            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (err) {
            setStatusMessage("EFT error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <h2>Checkout</h2>

                <div className="checkout-form">

                    <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                    <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />

                    <select value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
                        <option value="pickup">Pickup</option>
                        <option value="courier">Courier (R120)</option>
                    </select>

                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="paystack">Card Payment</option>
                        <option value="eft">EFT</option>
                    </select>

                    <h3>Total: R{grandTotal.toFixed(2)}</h3>

                    {paymentMethod === "paystack" ? (
                        <button onClick={handlePaystackPayment} disabled={loading}>
                            Pay with Card
                        </button>
                    ) : (
                        <button onClick={handleEFTPayment} disabled={loading}>
                            Place EFT Order
                        </button>
                    )}

                    {statusMessage && <p>{statusMessage}</p>}
                </div>
            </div>

            <img src={acceptedImage} alt="secure" />
        </div>
    );
};

export default Checkout;