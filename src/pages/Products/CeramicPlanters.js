// src/pages/Products/CeramicPlanters.js
import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import PhotoViewer from '../../components/PhotoViewer/PhotoViewer';
import products from '../../data/products';
import './CeramicPlanters.css';

const CeramicPlanters = () => {
    const ceramicProducts = products.filter(product => product.category === "Ceramic Planters");

    return (
        <div className="ceramic-planters">
            <h1>Ceramic Planters</h1>
            <div className="product-list">
                {ceramicProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <PhotoViewer category="Ceramic" />
        </div>
    );
};

export default CeramicPlanters;