// src/App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import ResinPlanters from "./pages/Products/ResinPlanters";
import MiniPlanters from "./pages/Products/MiniPlanters";
import FiberglassPlanters from "./pages/Products/FiberglassPlanters";
import CeramicPlanters from "./pages/Products/CeramicPlanters";
import ProductPage from "./pages/Products/ProductPage";
import Header from "./components/Header";

import "./App.css";

function App() {
    return (
        <Router>
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
            </Routes>
        </Router>
    );
}

export default App;