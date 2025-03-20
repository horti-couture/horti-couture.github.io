import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <div className="cart-item">
                                    <div className="cart-item-details">
                                        <h3>{item.title}</h3>
                                        <p>{item.quantity} x R{item.price.toFixed(2)}</p>
                                        {item.color && <p>Color: {item.color}</p>}
                                        {item.size && <p>Size: {item.size}</p>}
                                        {item.lineArt && item.lineArt !== "Plain" && <p>Line Art: {item.lineArt}</p>}
                                        {item.stand && item.stand !== "No Stand" && <p>Stand: {item.stand}</p>}
                                    </div>
                                    <button className="remove-button" onClick={() => removeFromCart(item)}>
    Remove
</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p>Total: R{totalPrice.toFixed(2)}</p>
                        <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
                        <Link to="/checkout">
                            <button className="checkout-button">Proceed to Checkout</button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
