import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products';
import './ProductDetails.css';
import { useCart } from '../../context/CartContext';

const ProductDetails = () => {
    const { handle } = useParams();
    const product = products.find(p => p.handle === handle);

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedLineArt, setSelectedLineArt] = useState('Plain');
    const [selectedWoodenStand, setSelectedWoodenStand] = useState('No Stand');
    const [basePrice, setBasePrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [message, setMessage] = useState("");
    const [selectedImage, setSelectedImage] = useState('');

    const { addToCart } = useCart();

    useEffect(() => {
        if (product) {
            if (!selectedColor && product.options.some(opt => opt.name === "Color")) {
                setSelectedColor(product.options.find(opt => opt.name === "Color")?.values[0]);
            }
            if (!selectedSize && product.options.some(opt => opt.name === "Size")) {
                setSelectedSize(product.options.find(opt => opt.name === "Size")?.values[0]);
            }
            if (!selectedWoodenStand && product.options.some(opt => opt.name === "Wooden Stand")) {
                setSelectedWoodenStand(product.options.find(opt => opt.name === "Wooden Stand")?.values[0]);
            }
            if (!selectedLineArt && product.options.some(opt => opt.name === "Line Art")) {
                setSelectedLineArt(product.options.find(opt => opt.name === "Line Art")?.values[0]);
            }
        }
    }, [product, selectedColor, selectedSize, selectedWoodenStand, selectedLineArt]);

    useEffect(() => {
        if (product) {
            let calculatedPrice = product?.prices?.[selectedSize] ?? product?.price ?? 0;

            if (selectedWoodenStand === "With Stand" && product.standPrices) {
                const standPrice = product.standPrices[selectedSize] ?? product.standPrices["With Stand"] ?? 0;
                calculatedPrice += standPrice;
            }

            if (selectedLineArt === "Line Art") {
                calculatedPrice += 395;
            }

            setBasePrice(calculatedPrice);
            setTotalPrice(calculatedPrice * quantity);
        }
    }, [selectedSize, selectedWoodenStand, quantity, selectedLineArt, product]);

    // Get the color-variant image (controlled by selectors)
    const imageKey = `${selectedColor} ${selectedLineArt}`;
    const colorVariantImage = product.images[imageKey] || product.images[selectedColor] || product.images["Midnight Sky Plain"] || "default-image.jpg";

    // Main image: if user clicked a thumbnail, show that; otherwise show color variant
    const mainImage = selectedImage || colorVariantImage;

    // Reset to color variant when color/line art changes
    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
        setSelectedImage('');
    };

    const handleLineArtChange = (e) => {
        setSelectedLineArt(e.target.value);
        setSelectedImage('');
    };

    const handleSizeChange = (e) => setSelectedSize(e.target.value);
    const handleWoodenStandChange = (e) => setSelectedWoodenStand(e.target.value);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
            setTotalPrice(basePrice * newQuantity);
        }
    };

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
        setTotalPrice(basePrice * (quantity + 1));
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
            setTotalPrice(basePrice * (quantity - 1));
        }
    };

    const handleAddToCart = () => {
        const itemPrice = basePrice;

        if (isNaN(itemPrice) || itemPrice <= 0) {
            alert('Price is not available or invalid.');
            return;
        }

        const cartItem = {
            id: product.id,
            handle: product.handle,
            title: product.title,
            price: itemPrice,
            color: selectedColor,
            size: selectedSize,
            lineArt: selectedLineArt,
            stand: selectedWoodenStand,
            quantity: quantity,
        };

        addToCart(cartItem, quantity);

        const itemMessage = `${quantity} ${product.title}(s) added to cart!`;
        setMessage(itemMessage);

        setTimeout(() => {
            setMessage("");
        }, 3000);
    };

    const hasSizeOption = product.options?.some(opt => opt.name === "Size");
    const hasLineArtOption = product.options?.some(opt => opt.name === "Line Art");
    const hasWoodenStandOption = product.options?.some(opt => opt.name === "Wooden Stand");

    // Additional product photos from allImages
    const galleryImages = product.allImages || [];
    const hasGallery = galleryImages.length > 0;

    return (
        <div className="product-details">
            <div className="product-images">
                {/* Main Image */}
                <div className="main-image-container">
                    <img
                        className="main-image"
                        src={mainImage}
                        alt={selectedColor}
                    />
                </div>

                {/* Thumbnail Gallery */}
                {hasGallery && (
                    <div className="thumbnail-gallery">
                        {galleryImages.map((img, index) => (
                            <img
                                key={index}
                                className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                                src={img}
                                alt={`${product.title} view ${index + 1}`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                {/* Color Selection */}
                <div className="product-option">
                    <label>Color:</label>
                    <select value={selectedColor} onChange={handleColorChange}>
                        {product.options.find(opt => opt.name === "Color")?.values.map(color => (
                            <option key={color} value={color}>{color}</option>
                        ))}
                    </select>
                </div>

                {/* Size Selection */}
                {hasSizeOption && (
                    <div className="product-option">
                        <label>Size:</label>
                        <select value={selectedSize} onChange={handleSizeChange}>
                            {product.options.find(opt => opt.name === "Size")?.values.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Line Art Selection */}
                {hasLineArtOption && (
                    <div className="product-option">
                        <label>Line Art:</label>
                        <select value={selectedLineArt} onChange={handleLineArtChange}>
                            <option value="Plain">Plain</option>
                            <option value="Line Art">With Line Art</option>
                        </select>
                    </div>
                )}

                {/* Wooden Stand Selection */}
                {hasWoodenStandOption && (
                    <div className="product-option">
                        <label>Wooden Stand:</label>
                        <select value={selectedWoodenStand} onChange={handleWoodenStandChange}>
                            {product.options.find(opt => opt.name === "Wooden Stand")?.values.map(stand => (
                                <option key={stand} value={stand}>{stand}</option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Quantity Selector */}
                <div className="quantity-selector">
                    <button onClick={decrementQuantity}>-</button>
                    <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
                    <button onClick={incrementQuantity}>+</button>
                </div>

                {/* Price */}
                <p className="product-price">R{totalPrice.toFixed(2)}</p>

                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>

            {/* Message Display */}
            {message && <div className="cart-message">{message}</div>}
        </div>
    );
};

export default ProductDetails;
