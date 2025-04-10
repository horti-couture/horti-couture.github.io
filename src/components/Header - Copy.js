// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

const Header = () => {
    const { cart } = useCart();

    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="LuxCare Logo" className="logo" />
            </Link>
            <nav>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products/resin-planters">Resin Planters</Link></li>
                    <li><Link to="/products/fiberglass-planters">Fiberglass Planters</Link></li>
                    <li><Link to="/products/ceramic-planters">Ceramic Planters</Link></li>
                    <li><Link to="/products/mini-planters">Mini Planters</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/bookings">Bookings</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        <Link to="/cart">
                            Cart ({cart.length})
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;