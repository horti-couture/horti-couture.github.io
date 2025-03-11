import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [shippingOption, setShippingOption] = useState("pickup");
    const [paymentMethod, setPaymentMethod] = useState("paystack");
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const navigate = useNavigate();

    // Auto-fill fields from local storage
    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData) {
            setName(storedUserData.name || "");
            setEmail(storedUserData.email || "");
            setPhone(storedUserData.phone || "");
            setShippingAddress(storedUserData.address || "");
        }
    }, []);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingFee = shippingOption === "courier" ? 120 : 0;
    const grandTotal = total + shippingFee;

    const handlePaystackPayment = async () => {
        setLoading(true);
        try {
            const paymentResponse = await fetch("https://backend-7dm6.onrender.com/initialize-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, amount: grandTotal }),
            });
            const paymentData = await paymentResponse.json();
            if (paymentData.data && paymentData.data.authorization_url) {
                window.location.href = paymentData.data.authorization_url;
                await fetch("https://backend-7dm6.onrender.com/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email,
                        cart: cart.map(item => ({
                            ...item,
                            lineArt: item.lineArt || "Plain",
                            stand: item.stand || "No Stand",
                        })),
                        total: grandTotal,
                        shippingAddress,
                        shippingOption,
                        paymentMethod,
                    }),
                });
            } else {
                setStatusMessage("Failed to initialize payment.");
            }
        } catch (error) {
            setStatusMessage("Error: " + error.message);
        } finally {
            setLoading(false);
            navigate("/");
        }
    };

    const handleEFTPayment = async () => {
        setLoading(true);
        try {
            await fetch("https://backend-7dm6.onrender.com/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    cart: cart.map(item => ({
                        ...item,
                        lineArt: item.lineArt || "Plain",
                        stand: item.stand || "No Stand",
                    })),
                    total: grandTotal,
                    shippingAddress,
                    shippingOption,
                    paymentMethod: "EFT",
                }),
            });
            setStatusMessage("Order placed successfully! Please make an EFT payment to our bank account.");
            clearCart();
            navigate("/");
        } catch (error) {
            setStatusMessage("Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Phone:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

            <label>Shipping Address:</label>
            <textarea value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} required />

            <label>Shipping Option:</label>
            <select value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
                <option value="pickup">Pickup from Factory</option>
                <option value="courier">Courier (R120)</option>
            </select>

            <label>Payment Method:</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="paystack">Paystack</option>
                <option value="eft">EFT</option>
            </select>

            <h3>Total: R{grandTotal.toFixed(2)}</h3>

            {paymentMethod === "paystack" ? (
                <button onClick={handlePaystackPayment} disabled={loading}>
                    {loading ? "Processing..." : "Pay with Paystack"}
                </button>
            ) : (
                <button onClick={handleEFTPayment} disabled={loading}>
                    {loading ? "Processing..." : "Place Order (EFT)"}
                </button>
            )}

            {paymentMethod === "eft" && (
                <div>
                    <p>Please make an EFT payment to:</p>
                    <p>Bank: Your Bank Name</p>
                    <p>Account Number: 1234567890</p>
                    <p>Reference: Your Name</p>
                </div>
            )}

            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
};

export default Checkout;
