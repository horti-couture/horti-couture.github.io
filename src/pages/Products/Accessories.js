// src/pages/Products/Accessories.js
import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import PhotoViewer from '../../components/PhotoViewer/PhotoViewer';
import products from '../../data/products';
import Footer from "../../components/Footer";
import './Accessories.css';

const Accessories = () => {
    const accessoriesProducts = products.filter(product => product.category === "Accessories");

    return (
        <div className="accessories">
            <h1>Accessories</h1>
            <div className="product-list">
                {accessoriesProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <PhotoViewer category="Accessories" />
            <Footer />
        </div>
    );
};

export default Accessories;