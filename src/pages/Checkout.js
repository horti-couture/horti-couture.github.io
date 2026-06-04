// src/pages/Checkout.js
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";
import acceptedImage from "../assets/accepted.png";

const Checkout = () => {
    const { cart, clearCart } = useCart();
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
    const navigate = useNavigate();

    const MINIMUM_ORDER_AMOUNT = 150;

    // Auto-fill user data
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

    // Totals
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingFee = shippingOption === "courier" ? 120 : 0;
    const grandTotal = total + shippingFee;

    const meetsMinimumOrder = total >= MINIMUM_ORDER_AMOUNT;

    // =========================
    // PAYSTACK (UNCHANGED FLOW)
    // =========================
    const handlePaystackPayment = async () => {
        if (!meetsMinimumOrder) return;

        setLoading(true);

        try {
            const paymentResponse = await fetch(
                "https://backend-7dm6.onrender.com/initialize-payment",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: formData.email,
                        amount: grandTotal,
                    }),
                }
            );

            const paymentData = await paymentResponse.json();

            if (!paymentData.data?.authorization_url) {
                throw new Error("Payment failed");
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

            window.location.href = paymentData.data.authorization_url;

        } catch (error) {
            setStatusMessage("Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // EFT (FIXED - RESTORED UI BEHAVIOUR)
    // =========================
    const handleEFTPayment = async () => {
        if (!meetsMinimumOrder) return;

        setLoading(true);

        try {
            const res = await fetch(
                "https://backend-7dm6.onrender.com/checkout",
                {
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
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Checkout failed");
            }

            clearCart();

            // IMPORTANT: DO NOT redirect
            // This allows EFT instructions block to remain visible

            setStatusMessage(""); // keeps UI clean like before

        } catch (error) {
            setStatusMessage("Error: " + error.message);
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
                        <label>Shipping Option:</label>
                        <select value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
                            <option value="pickup">Pickup from Factory</option>
                            <option value="courier">Courier (R120)</option>
                        </select>
                    </div>

                    {shippingOption === "pickup" && (
                        <div className="pickup-instructions">
                            <p><strong>Pickup Address:</strong></p>
                            <p>44 Kundalila Road</p>
                            <p>Waterfall</p>
                            <p>Durban</p>
                            <p>KwaZulu-Natal</p>
                            <p>3652</p>
                            <p>South Africa</p>
                        </div>
                    )}

                    <div className="form-group">
                        <label>Payment Method:</label>
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value="paystack">Pay With Card</option>
                            <option value="eft">EFT</option>
                        </select>
                    </div>

                    <div className="total-summary">
                        <h3>Total: R{grandTotal.toFixed(2)}</h3>
                    </div>

                    {paymentMethod === "paystack" ? (
                        <button
                            className="payment-button"
                            onClick={handlePaystackPayment}
                            disabled={loading}
                        >
                            {loading ? "Please Wait..." : "Pay with Card"}
                        </button>
                    ) : (
                        <button
                            className="payment-button"
                            onClick={handleEFTPayment}
                            disabled={loading}
                        >
                            {loading ? "Please Wait..." : "Place Order (EFT)"}
                        </button>
                    )}

                    {/* ✅ THIS IS YOUR ORIGINAL EFT UI - RESTORED */}
                    {paymentMethod === "eft" && (
                        <div className="eft-instructions">
                            <p>Please make an EFT payment to:</p>
                            <p><strong>Bank:</strong> First National Bank</p>
                            <p><strong>Account Name:</strong> Pure Leaf</p>
                            <p><strong>Account Number:</strong> 62710410557</p>
                            <p><strong>Branch Code:</strong> 221526</p>
                            <p><strong>Reference:</strong> TXN- (check your invoice email)</p>
                            <p>
                                <strong>Please Note:</strong> Once payment is made, email proof of payment to
                                horticouture@eastcoastsa.net. Your order will only be processed once funds clear.
                            </p>
                        </div>
                    )}

                    {statusMessage && <p className="status-message">{statusMessage}</p>}

                </div>
            </div>

            <div className="secured-image">
                <img src={acceptedImage} alt="Secured by Paystack" />
            </div>
        </div>
    );
};

export default Checkout;