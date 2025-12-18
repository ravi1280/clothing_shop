import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';
import SizingChart from '../components/SizingChart';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find(p => p.id === parseInt(id));

    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description'); // description | care | size
    const tabsRef = useRef(null);

    const goToSizeChart = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        setActiveTab('size');
        // Smooth scroll to the tabs
        setTimeout(() => {
            if (tabsRef.current) {
                tabsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 0);
    };

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

                    {/* Key Features section removed as requested */}

                    {/* Size Selector */}
                    <div className="detail-section">
                        <h3 className="section-label">Select Size</h3>
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
                        <a href="#size-chart" className="size-guide" onClick={goToSizeChart}>
                            Size Guide
                        </a>
                    </div>

                    {/* Color Info */}
                    <div className="detail-section">
                        <h3 className="section-label">Color</h3>
                        <p className="color-info">Available in multiple colors</p>
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

                </div>
            </div>
            {/* Detail Tabs: Description, Care, Size Chart (full width) */}
            <div className="detail-tabs" id="size-chart" ref={tabsRef}>
                <div className="tab-list" role="tablist" aria-label="Product details">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'description'}
                        className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'care'}
                        className={`tab-btn ${activeTab === 'care' ? 'active' : ''}`}
                        onClick={() => setActiveTab('care')}
                    >
                        Care
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'size'}
                        className={`tab-btn ${activeTab === 'size' ? 'active' : ''}`}
                        onClick={() => setActiveTab('size')}
                    >
                        Size Chart
                    </button>
                </div>

                {activeTab === 'description' && (
                    <div className="tab-panel" role="tabpanel">
                        <p>
                            Elevate your wardrobe with this stunning {product.name.toLowerCase()}. Designed for effortless styling,
                            it transitions seamlessly from weekday polish to weekend ease. A refined silhouette and clean lines
                            make it a forever piece you’ll reach for on repeat.
                        </p>
                        <p>
                            Thoughtful construction ensures lasting comfort and shape retention, while the versatile palette pairs
                            well with denim, tailoring, and everything in between. Style it your way—layer up, tuck in, or wear solo.
                        </p>
                        <ul className="bulleted">
                            <li>Fit: {product.fit || 'Regular'} for everyday comfort</li>
                            <li>Category: {product.category}</li>
                            <li>Sizes: {(product.sizes || []).join(', ')}</li>
                            <li>Colors: {(product.colors || []).join(', ')}</li>
                            <li>Occasion: Work, weekends, and travel-friendly</li>
                            <li>Season: All-season wearability</li>
                        </ul>
                        <p className="muted">Note: Minor variations in texture and shade may occur between colors.</p>
                    </div>
                )}

                {activeTab === 'care' && (
                    <div className="tab-panel" role="tabpanel">
                        <h4>Material & Care</h4>
                        <ul className="bulleted">
                            <li>Turn inside out before washing to preserve color and details</li>
                            <li>Machine wash cold on gentle cycle; wash dark colors separately</li>
                            <li>Use mild detergent; avoid fabric softeners and bleach</li>
                            <li>Remove promptly; reshape while damp for best drape</li>
                            <li>Line dry or tumble dry low; avoid high heat</li>
                            <li>Cool iron on reverse if needed; steaming recommended to release creases</li>
                        </ul>
                        <h4>Storage Tips</h4>
                        <ul className="bulleted">
                            <li>Fold knits to maintain shape; hang wovens on padded hangers</li>
                            <li>Store in a cool, dry place away from direct sunlight</li>
                            <li>Allow garments to rest between wears to prolong lifespan</li>
                        </ul>
                        <p className="muted">Always refer to the garment’s care label for the most accurate instructions.</p>
                    </div>
                )}

                {activeTab === 'size' && (
                    <div className="tab-panel" role="tabpanel">
                        <SizingChart category={product.category} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
