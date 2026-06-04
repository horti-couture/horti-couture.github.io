import React, { useState, useEffect, useRef } from "react";
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

    const hasSubmittedRef = useRef(false); // 🔥 prevents double checkout

    const MINIMUM_ORDER_AMOUNT = 150;

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
    // PAYSTACK
    // =========================
    const handlePaystackPayment = async () => {
        if (!meetsMinimumOrder || hasSubmittedRef.current) return;

        hasSubmittedRef.current = true;
        setLoading(true);

        try {
            const res = await fetch(
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

            const data = await res.json();

            if (!data.data?.authorization_url) {
                throw new Error("Payment init failed");
            }

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

            clearCart();

            window.location.href = data.data.authorization_url;

        } catch (err) {
            hasSubmittedRef.current = false;
            setStatusMessage("Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // EFT (RESTORED EXACT BEHAVIOUR)
    // =========================
    const handleEFTPayment = async () => {
        if (!meetsMinimumOrder || hasSubmittedRef.current) return;

        hasSubmittedRef.current = true;
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

            setStatusMessage(
                "Order placed successfully! EFT instructions below."
            );

            // 🔥 OLD BEHAVIOUR RESTORED: stay on page briefly then go home
            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (err) {
            hasSubmittedRef.current = false;
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

                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                    <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                    <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />

                    <select value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
                        <option value="pickup">Pickup from Factory</option>
                        <option value="courier">Courier (R120)</option>
                    </select>

                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="paystack">Pay With Card</option>
                        <option value="eft">EFT</option>
                    </select>

                    <div className="total-summary">
                        <h3>Total: R{grandTotal.toFixed(2)}</h3>
                    </div>

                    {paymentMethod === "paystack" ? (
                        <button onClick={handlePaystackPayment} disabled={loading}>
                            {loading ? "Processing..." : "Pay with Card"}
                        </button>
                    ) : (
                        <button onClick={handleEFTPayment} disabled={loading}>
                            {loading ? "Processing..." : "Place Order (EFT)"}
                        </button>
                    )}

                    {/* ✅ EXACT ORIGINAL EFT DISPLAY */}
                    {paymentMethod === "eft" && (
                        <div className="eft-instructions">
                            <p>Please make an EFT payment to:</p>
                            <p><strong>Bank:</strong> First National Bank</p>
                            <p><strong>Account Name:</strong> Pure Leaf</p>
                            <p><strong>Account Number:</strong> 62710410557</p>
                            <p><strong>Branch Code:</strong> 221526</p>
                            <p><strong>Reference:</strong> TXN- (from invoice email)</p>
                            <p>
                                <strong>Please Note:</strong> Email proof of payment to horticouture@eastcoastsa.net
                            </p>
                        </div>
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