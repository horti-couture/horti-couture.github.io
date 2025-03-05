import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products';
import './ProductDetails.css';
import { useCart } from '../../context/CartContext'; // Import useCart hook

const ProductDetails = () => {
    const { handle } = useParams();
    const product = products.find(p => p.handle === handle);

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedWoodenStand, setSelectedWoodenStand] = useState('No Stand'); // Default to No Stand
    const [price, setPrice] = useState(product?.price ?? "Price not available");
    const [quantity, setQuantity] = useState(1); // Default quantity is 1

    const { addToCart } = useCart(); // Access the addToCart function from the context

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
        }
    }, [product, selectedColor, selectedSize, selectedWoodenStand]);

    useEffect(() => {
        if (product) {
            let basePrice = product?.prices?.[selectedSize] ?? product?.price ?? "Price not available";
            if (selectedWoodenStand === "With Stand" && product.standPrices) {
                const standPrice = product.standPrices[selectedSize] ?? product.standPrices["With Stand"] ?? 0;
                basePrice = basePrice !== "Price not available" ? basePrice + standPrice : "Price not available";
            }
            setPrice(basePrice);
        }
    }, [selectedSize, selectedWoodenStand, product]);

    const handleColorChange = (e) => setSelectedColor(e.target.value);
    const handleSizeChange = (e) => setSelectedSize(e.target.value);
    const handleWoodenStandChange = (e) => setSelectedWoodenStand(e.target.value);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

   const handleAddToCart = () => {
        // Create a cart item object with the selected options and quantity
        const itemPrice = (typeof price === 'number') ? price : parseFloat(price);

        if (isNaN(itemPrice)) {
            alert('Price is not available or invalid.');
            return;
        }

        const cartItem = {
            id: product.id,
            handle: product.handle,
            title: product.title,
            price: itemPrice,  // Use the potentially updated price
            color: selectedColor,
            size: selectedSize,
            stand: selectedWoodenStand,
            quantity: quantity,
        };

        addToCart(cartItem, quantity); // Use addToCart from CartContext
        alert(`${quantity} ${product.title}(s) added to cart!`);
    };

    // Check if product has Size and Wooden Stand options
    const hasSizeOption = product.options?.some(opt => opt.name === "Size");
    const hasWoodenStandOption = product.options?.some(opt => opt.name === "Wooden Stand");

    // Determine the correct image based on color and size selection
    const imageKey = `${selectedColor} ${selectedSize}`;
    const productImage = product.images[imageKey] || product.images[selectedColor] || "default-image.jpg"; // Fallback image

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
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                    <button onClick={incrementQuantity}>+</button>
                </div>

                <p className="product-price">R{price.toFixed ? price.toFixed(2) : price}</p>
                <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;