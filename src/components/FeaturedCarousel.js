import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import featuredProducts from '../data/featuredProducts';
import './FeaturedCarousel.css';

const FeaturedCarousel = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    // Get featured products from the config
    const featured = featuredProducts
        .map(handle => products.find(p => p.handle === handle))
        .filter(Boolean);

    if (featured.length === 0) return null;

    const scrollLeft = () => {
        const container = document.querySelector('.carousel-track');
        const scrollAmount = 300;
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const container = document.querySelector('.carousel-track');
        const scrollAmount = 300;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    return (
        <div className="featured-carousel">
            <h2 className="carousel-title">Featured Products</h2>
            
            <div className="carousel-container">
                <button className="carousel-btn carousel-btn-left" onClick={scrollLeft}>
                    &#8249;
                </button>

                <div className="carousel-track">
                    {featured.map(product => {
                        const imageUrl = Object.values(product.images)[0];
                        return (
                            <Link 
                                to={`/products/${product.handle}`} 
                                key={product.id} 
                                className="carousel-card"
                            >
                                <div className="carousel-card-image">
                                    <img src={imageUrl} alt={product.title} />
                                </div>
                                <div className="carousel-card-info">
                                    <h3>{product.title}</h3>
                                    <p className="carousel-card-price">R{product.price.toFixed(2)}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <button className="carousel-btn carousel-btn-right" onClick={scrollRight}>
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default FeaturedCarousel;
