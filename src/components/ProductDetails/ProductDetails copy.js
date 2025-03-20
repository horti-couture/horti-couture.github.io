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
    const [selectedLineArt, setSelectedLineArt] = useState('Plain'); // Default to Plain
    const [selectedWoodenStand, setSelectedWoodenStand] = useState('No Stand'); // Default to No Stand
    const [basePrice, setBasePrice] = useState(0);  // Initialize as number
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const { addToCart } = useCart(); // Access the addToCart function from the context

    useEffect(() => {
        if (product) {
            // Initial setup based on product options
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

            // Apply the price for the wooden stand if selected
            if (selectedWoodenStand === "With Stand" && product.standPrices) {
                const standPrice = product.standPrices[selectedSize] ?? product.standPrices["With Stand"] ?? 0;
                calculatedPrice += standPrice;
            }

            // Apply the price for line art if selected
            if (selectedLineArt === "Line Art") {
                const lineArtPrice = 395; // Add R395 for Line Art
                calculatedPrice += lineArtPrice;
            }

            // Update the base price and total price
            setBasePrice(calculatedPrice);
            setTotalPrice(calculatedPrice * quantity);
        }
    }, [selectedSize, selectedWoodenStand, quantity, selectedLineArt, product]);

    const handleColorChange = (e) => setSelectedColor(e.target.value);
    const handleSizeChange = (e) => setSelectedSize(e.target.value);
    const handleWoodenStandChange = (e) => setSelectedWoodenStand(e.target.value);
    const handleLineArtChange = (e) => setSelectedLineArt(e.target.value);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
            setTotalPrice(basePrice * newQuantity);  // Recalculate total price based on new quantity
        }
    };

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
        setTotalPrice(basePrice * (quantity + 1));  // Recalculate total price based on incremented quantity
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
            setTotalPrice(basePrice * (quantity - 1));  // Recalculate total price based on decremented quantity
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

        addToCart(cartItem, quantity); // Add to cart
        alert(`${quantity} ${product.title}(s) added to cart!`);
    };

    // Check if product has Size, Line Art, and Wooden Stand options
    const hasSizeOption = product.options?.some(opt => opt.name === "Size");
    const hasLineArtOption = product.options?.some(opt => opt.name === "Line Art");
    const hasWoodenStandOption = product.options?.some(opt => opt.name === "Wooden Stand");

    // Determine the correct image based on color, line art, and size selection
    const imageKey = `${selectedColor} ${selectedLineArt}`;
    const productImage = product.images[imageKey] || product.images[selectedColor] || product.images["Midnight Sky Plain"] || "default-image.jpg"; // Fallback image

    return (
        <div className="product-details">
            <div className="product-images">
                <img src={productImage} alt={selectedColor} />
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

                {/* Size Selection - Only Show If Available */}
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

                {/* Line Art Selection - Only Show If Available */}
                {hasLineArtOption && (
                    <div className="product-option">
                        <label>Line Art:</label>
                        <select value={selectedLineArt} onChange={handleLineArtChange}>
                            <option value="Plain">Plain</option>
                            <option value="Line Art">With Line Art </option>
                        </select>
                    </div>
                )}

                {/* Wooden Stand Selection - Only Show If Available */}
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

                {/* Display Price with Currency Symbol */}
                <p className="product-price">R{totalPrice.toFixed(2)}</p>

                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
