import React from "react";
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import ResinPlanters from "./pages/Products/ResinPlanters";
import MiniPlanters from "./pages/Products/MiniPlanters";
import FiberglassPlanters from "./pages/Products/FiberglassPlanters";
import CeramicPlanters from "./pages/Products/CeramicPlanters";
import ProductPage from "./pages/Products/ProductPage";
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import usePageTracking from "./utils/usePageTracking"; // 👈 import the new hook

import "./App.css";

function AppWrapper() {
  usePageTracking(); // 👈 Call the hook inside the router context

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/resin-planters" element={<ResinPlanters />} />
        <Route path="/products/mini-planters" element={<MiniPlanters />} />
        <Route path="/products/fiberglass-planters" element={<FiberglassPlanters />} />
        <Route path="/products/ceramic-planters" element={<CeramicPlanters />} />
        <Route path="/products/:handle" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppWrapper />
      </Router>
    </CartProvider>
  );
}

export default App;
