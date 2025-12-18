import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import '../styles/global.css';
import './Shop.css';

const Shop = () => {
    const [filter, setFilter] = useState('All');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });

    const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories'];

    const filteredProducts = products.filter(product => {
        const categoryMatch = filter === 'All' || product.category === filter;
        const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max;
        return categoryMatch && priceMatch;
    });

    const handlePriceChange = (type, value) => {
        setPriceRange(prev => ({
            ...prev,
            [type]: value === '' ? 0 : parseFloat(value)
        }));
    };

    return (
        <div className="shop-page">
            <div className="shop-header">
                <div className="container">
                    <h1 className="text-center">Shop Collection</h1>
                    <p className="text-center">Explore our latest arrivals and timeless classics.</p>
                </div>
            </div>

            <div className="container shop-container">
                <aside className="shop-sidebar">
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="category-list">
                        {categories.map(cat => (
                            <li key={cat}>
                                <button
                                    className={`category-btn ${filter === cat ? 'active' : ''}`}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <h3 className="sidebar-title">Price Range</h3>
                    <div className="price-filter">
                        <div className="price-inputs">
                            <div className="price-input-group">
                                <label>Min</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={priceRange.min}
                                    onChange={(e) => handlePriceChange('min', e.target.value)}
                                    placeholder="0"
                                />
                            </div>
                            <span className="price-separator">-</span>
                            <div className="price-input-group">
                                <label>Max</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={priceRange.max}
                                    onChange={(e) => handlePriceChange('max', e.target.value)}
                                    placeholder="500"
                                />
                            </div>
                        </div>
                        <button
                            className="reset-price-btn"
                            onClick={() => setPriceRange({ min: 0, max: 500 })}
                        >
                            Reset
                        </button>
                    </div>
                </aside>

                <main className="shop-grid">
                    <div className="product-grid">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Shop;
