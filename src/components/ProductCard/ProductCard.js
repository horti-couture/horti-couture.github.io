import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const productImage = product.images && Object.values(product.images).length > 0 
        ? Object.values(product.images)[0] 
        : 'default-image.jpg'; 

    let priceDisplay = "Price not available";

    if (product.prices) {
        const priceValues = Object.values(product.prices);
        const minPrice = Math.min(...priceValues);
        const maxPrice = Math.max(...priceValues);
        priceDisplay = minPrice === maxPrice 
            ? `R${minPrice.toFixed(2)}` 
            : `R${minPrice.toFixed(2)} - R${maxPrice.toFixed(2)}`;
    } else if (product.price !== undefined) {
        priceDisplay = `R${product.price.toFixed(2)}`;
    }

    return (
        <div className="product-card">
            <Link to={product.handle ? `/products/${product.handle}` : '#'}>
                <img src={productImage} alt={product.title || 'Product image'} />
                <div>
                    <h3>{product.title || 'No title available'}</h3>
                    <p>{priceDisplay}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;