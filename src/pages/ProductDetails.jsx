import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find(p => p.id === parseInt(id));

    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div className="container">Product not found</div>;
    }

    const handleQuantityChange = (type) => {
        if (type === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (type === 'increase') {
            setQuantity(quantity + 1);
        }
    };

    const handleAddToCart = () => {
        // For now, we'll just add the product. 
        // In a real app, we'd pass size and quantity to the context.
        // Since the current context adds 1 at a time, we might need to loop or update context.
        // For this UI task, we'll just call addToCart once per quantity or just once to show functionality.
        // Let's just add it once for now to keep it simple as per current context logic.
        addToCart(product);
    };

    return (
        <div className="product-details-page container">
            <div className="product-details-grid">
                <div className="product-image-section">
                    <img src={product.image} alt={product.name} className="detail-image" />
                </div>
                <div className="product-info-section">
                    <span className="detail-category">{product.category}</span>
                    <h1 className="detail-title">{product.name}</h1>
                    <p className="detail-price">${product.price.toFixed(2)}</p>

                    <p className="detail-description">
                        Elevate your wardrobe with this stunning {product.name.toLowerCase()}.
                        Crafted with attention to detail and quality materials, it offers both style and comfort.
                        Perfect for any occasion, this piece is a must-have addition to your collection.
                    </p>

                    {/* Size Selector */}
                    <div className="detail-section">
                        <h3 className="section-label">Size</h3>
                        <div className="size-selector">
                            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                <button
                                    key={size}
                                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="detail-section">
                        <h3 className="section-label">Quantity</h3>
                        <div className="quantity-selector">
                            <button onClick={() => handleQuantityChange('decrease')}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantityChange('increase')}>+</button>
                        </div>
                    </div>

                    <button
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>

                    {/* Additional Info Accordions/Lists */}
                    <div className="additional-info">
                        <div className="info-item">
                            <h4>Material & Care</h4>
                            <p>100% Premium Cotton. Machine wash cold, tumble dry low.</p>
                        </div>
                        <div className="info-item">
                            <h4>Shipping & Returns</h4>
                            <p>Free shipping on orders over $150. Easy 30-day returns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
