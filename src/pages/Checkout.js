// src/pages/Checkout.js
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CheckoutForm = () => {
    const { cart, clearCart } = useCart();
    const [email, setEmail] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [shipping, setShipping] = useState("pickup");
    const [paymentMethod, setPaymentMethod] = useState("paystack");
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const baseTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalAmount = shipping === "courier" ? baseTotal + 120 : baseTotal;

    const handlePayment = async () => {
        setLoading(true);

        if (paymentMethod === "paystack") {
            try {
                const response = await fetch("https://backend-7dm6.onrender.com/initialize-payment", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, amount: totalAmount }),
                });

                const paymentData = await response.json();

                if (paymentData.data && paymentData.data.authorization_url) {
                    window.location.href = paymentData.data.authorization_url;
                } else {
                    setStatusMessage("Failed to initialize payment.");
                }
            } catch (error) {
                setStatusMessage("Error processing payment.");
            }
        } else {
            setStatusMessage(`Please pay R${totalAmount.toFixed(2)} via EFT.`);
        }

        setTimeout(() => {
            clearCart();
            window.location.href = "/";
        }, 3000);
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <form>
                <label>Full Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />

                <label>Phone Number:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required autoComplete="tel" />

                <label>Shipping Address:</label>
                <textarea value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} required autoComplete="address-line1" />

                <h3>Shipping Method:</h3>
                <label>
                    <input type="radio" name="shipping" value="pickup" checked={shipping === "pickup"} onChange={() => setShipping("pickup")} />
                    Pickup from Factory (Free)
                </label>
                <label>
                    <input type="radio" name="shipping" value="courier" checked={shipping === "courier"} onChange={() => setShipping("courier")} />
                    Courier Delivery (R120)
                </label>

                <h3>Payment Method:</h3>
                <label>
                    <input type="radio" name="payment" value="paystack" checked={paymentMethod === "paystack"} onChange={() => setPaymentMethod("paystack")} />
                    Pay via Paystack
                </label>
                <label>
                    <input type="radio" name="payment" value="eft" checked={paymentMethod === "eft"} onChange={() => setPaymentMethod("eft")} />
                    Pay via EFT
                </label>

                {paymentMethod === "eft" && (
                    <div className="eft-details">
                        <p><strong>Bank Details:</strong></p>
                        <p>Bank: XYZ Bank</p>
                        <p>Account Number: 123456789</p>
                        <p>Total Amount: R {totalAmount.toFixed(2)}</p>
                    </div>
                )}

                <h3>Total: R{totalAmount.toFixed(2)}</h3>
                <button type="button" onClick={handlePayment} disabled={loading}>
                    {loading ? "Processing..." : "Complete Purchase"}
                </button>
                {statusMessage && <p>{statusMessage}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;
