// src/pages/Products/ResinPlanters.js
import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products';
import './ResinPlanters.css';

const ResinPlanters = () => {
    const resinProducts = products.filter(product => product.category === "Resin Planters");

    return (
        <div className="resin-planters">
            <h1>Resin Planters</h1>
            <div className="product-list">
                {resinProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ResinPlanters;