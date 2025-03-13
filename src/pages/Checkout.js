import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css"; // Ensure the CSS file is imported

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

    // Auto-fill fields from local storage
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

    // Calculate totals
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingFee = shippingOption === "courier" ? 120 : 0;
    const grandTotal = total + shippingFee;

    // Handle Paystack payment
    const handlePaystackPayment = async () => {
        setLoading(true);
        try {
            const paymentResponse = await fetch("https://backend-7dm6.onrender.com/initialize-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: formData.email, amount: grandTotal }),
            });
            const paymentData = await paymentResponse.json();
            if (paymentData.data && paymentData.data.authorization_url) {
                window.location.href = paymentData.data.authorization_url;
                await fetch("https://backend-7dm6.onrender.com/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: formData.email,
                        cart: cart,
                        total: grandTotal,
                        address: formData.address,
                        shippingOption,
                        paymentMethod,
                    }),
                });
                clearCart();
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

    // Handle EFT payment
    const handleEFTPayment = async () => {
        setLoading(true);
        try {
            await fetch("https://backend-7dm6.onrender.com/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    cart: cart,
                    total: grandTotal,
                    address: formData.address,
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
            <div className="checkout-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        autoComplete="address-line1"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Shipping Option:</label>
                    <select value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
                        <option value="pickup">Pickup from Factory</option>
                        <option value="courier">Courier (R120)</option>
                    </select>
                </div>
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
                    <button className="payment-button" onClick={handlePaystackPayment} disabled={loading}>
                        {loading ? "Processing..." : "Pay with Card"}
                    </button>
                ) : (
                    <button className="payment-button" onClick={handleEFTPayment} disabled={loading}>
                        {loading ? "Processing..." : "Place Order (EFT)"}
                    </button>
                )}

                {paymentMethod === "eft" && (
                    <div className="eft-instructions">
                        <p>Please make an EFT payment to:</p>
                        <p><strong>Bank:</strong> Your Bank Name</p>
                        <p><strong>Account Number:</strong> 1234567890</p>
                        <p><strong>Reference:</strong> Your Name</p>
                    </div>
                )}

                {statusMessage && <p className="status-message">{statusMessage}</p>}
            </div>
        </div>
    );
};

export default Checkout;