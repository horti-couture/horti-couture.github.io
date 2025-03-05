// src/pages/Products/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import products from '../../data/products';
import './ProductPage.css';

const ProductPage = () => {
    const { handle } = useParams();
    const product = products.find(p => p.handle === handle);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-page">
            <ProductDetails product={product} />
        </div>
    );
};

export default ProductPage;