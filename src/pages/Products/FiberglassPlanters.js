import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import PhotoViewer from '../../components/PhotoViewer/PhotoViewer';
import products from '../../data/products';
import Footer from "../../components/Footer";
import './FiberglassPlanters.css';

const FiberglassPlanters = () => {
    const fiberglassProducts = products.filter(product => product.category === "Fiberglass Planters");

    return (
        <div className="fiberglass-planters">
            <h1>Fiberglass Planters</h1>
            <div className="product-list">
                {fiberglassProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <PhotoViewer category="Fiberglass" />
            <Footer />
        </div>
    );
};

export default FiberglassPlanters;
