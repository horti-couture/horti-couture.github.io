// src/pages/Products/MiniPlanters.js
import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import PhotoViewer from '../../components/PhotoViewer/PhotoViewer';
import products from '../../data/products';
import './MiniPlanters.css';

const MiniPlanters = () => {
    const miniplantersProducts = products.filter(product => product.category === "Mini Planters");

    return (
        <div className="mini-planters">
            <h1>Mini Planters</h1>
            <div className="product-list">
                {miniplantersProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <PhotoViewer category="Miniplanters" />
        </div>
    );
};

export default MiniPlanters;
