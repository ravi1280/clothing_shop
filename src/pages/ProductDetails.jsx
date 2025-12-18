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
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState('description');

    if (!product) {
        return <div className="container">Product not found</div>;
    }

    // Generate multiple images for gallery (using variations of the main image)
    const productImages = product.images || [
        product.image,
        product.image,
        product.image,
        product.image
    ];

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

    const sizingChart = {
        'XS': { chest: '32-34', waist: '24-26', hips: '34-36' },
        'S': { chest: '34-36', waist: '26-28', hips: '36-38' },
        'M': { chest: '36-38', waist: '28-30', hips: '38-40' },
        'L': { chest: '38-40', waist: '30-32', hips: '40-42' },
        'XL': { chest: '40-42', waist: '32-34', hips: '42-44' }
    };

    return (
        <div className="product-details-page container">
            <div className="product-details-grid">
                {/* Image Gallery Section */}
                <div className="product-image-section">
                    <div className="main-image-container">
                        <img src={productImages[selectedImage]} alt={product.name} className="detail-image" />
                    </div>
                    <div className="image-thumbnails">
                        {productImages.map((img, index) => (
                            <div
                                key={index}
                                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <img src={img} alt={`${product.name} view ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="product-info-section">
                    <span className="detail-category">{product.category}</span>
                    <h1 className="detail-title">{product.name}</h1>
                    <p className="detail-price">${product.price.toFixed(2)}</p>

                    <p className="detail-short-description">
                        {product.shortDescription || `Elevate your wardrobe with this stunning ${product.name.toLowerCase()}. Crafted with attention to detail and quality materials.`}
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

                    {/* Tabs for Description, Details, Sizing */}
                    <div className="product-tabs">
                        <div className="tab-headers">
                            <button
                                className={`tab-header ${activeTab === 'description' ? 'active' : ''}`}
                                onClick={() => setActiveTab('description')}
                            >
                                Description
                            </button>
                            <button
                                className={`tab-header ${activeTab === 'details' ? 'active' : ''}`}
                                onClick={() => setActiveTab('details')}
                            >
                                Details & Care
                            </button>
                            <button
                                className={`tab-header ${activeTab === 'sizing' ? 'active' : ''}`}
                                onClick={() => setActiveTab('sizing')}
                            >
                                Sizing Chart
                            </button>
                        </div>

                        <div className="tab-content">
                            {activeTab === 'description' && (
                                <div className="tab-panel">
                                    <p>
                                        {product.detailedDescription || `This ${product.name.toLowerCase()} is a perfect blend of style and comfort. Designed with meticulous attention to detail, it features premium materials that ensure durability and a luxurious feel. Whether you're dressing up for a special occasion or keeping it casual, this piece adapts effortlessly to your style needs.`}
                                    </p>
                                    <p>
                                        The versatile design makes it suitable for various occasions, from professional settings to casual outings. Its timeless appeal ensures it remains a staple in your wardrobe for years to come.
                                    </p>
                                    <ul>
                                        <li>Premium quality materials</li>
                                        <li>Comfortable fit for all-day wear</li>
                                        <li>Versatile styling options</li>
                                        <li>Timeless design</li>
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'details' && (
                                <div className="tab-panel">
                                    <h4>Material & Composition</h4>
                                    <p>100% Premium Cotton with reinforced stitching for durability.</p>

                                    <h4>Care Instructions</h4>
                                    <ul>
                                        <li>Machine wash cold with like colors</li>
                                        <li>Tumble dry low or hang to dry</li>
                                        <li>Iron on low heat if needed</li>
                                        <li>Do not bleach</li>
                                        <li>Dry clean if preferred</li>
                                    </ul>

                                    <h4>Shipping & Returns</h4>
                                    <p>Free shipping on orders over $150. Easy 30-day returns with full refund.</p>
                                </div>
                            )}

                            {activeTab === 'sizing' && (
                                <div className="tab-panel">
                                    <p className="sizing-note">All measurements are in inches. For the best fit, measure yourself and compare with the chart below.</p>
                                    <table className="sizing-table">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>Chest</th>
                                                <th>Waist</th>
                                                <th>Hips</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(sizingChart).map(([size, measurements]) => (
                                                <tr key={size} className={selectedSize === size ? 'highlighted' : ''}>
                                                    <td><strong>{size}</strong></td>
                                                    <td>{measurements.chest}"</td>
                                                    <td>{measurements.waist}"</td>
                                                    <td>{measurements.hips}"</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <p className="sizing-tip">💡 Tip: If you're between sizes, we recommend sizing up for a more comfortable fit.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
