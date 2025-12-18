import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import '../styles/global.css';
import './Shop.css';

const Shop = () => {
    const [filter, setFilter] = useState('All');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories'];
    const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];
    const allColors = ['White', 'Black', 'Beige', 'Navy', 'Gray', 'Blue', 'Brown', 'Red', 'Green'];

    const filteredProducts = products.filter(product => {
        const categoryMatch = filter === 'All' || product.category === filter;
        const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max;

        const sizeMatch = selectedSizes.length === 0 ||
            (product.sizes && product.sizes.some(size => selectedSizes.includes(size)));

        const colorMatch = selectedColors.length === 0 ||
            (product.colors && product.colors.some(color =>
                selectedColors.some(selectedColor => color.toLowerCase().includes(selectedColor.toLowerCase()))
            ));

        return categoryMatch && priceMatch && sizeMatch && colorMatch;
    });

    const handlePriceChange = (type, value) => {
        setPriceRange(prev => ({
            ...prev,
            [type]: value === '' ? 0 : parseFloat(value)
        }));
    };

    const toggleSize = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    const toggleColor = (color) => {
        setSelectedColors(prev =>
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };

    const resetFilters = () => {
        setFilter('All');
        setPriceRange({ min: 0, max: 500 });
        setSelectedSizes([]);
        setSelectedColors([]);
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
                    <div className="filter-header">
                        <h3 className="sidebar-title">Filters</h3>
                        <button className="reset-all-btn" onClick={resetFilters}>
                            Reset All
                        </button>
                    </div>

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

                    <h3 className="sidebar-title">Size</h3>
                    <div className="size-filter">
                        {allSizes.map(size => (
                            <button
                                key={size}
                                className={`size-filter-btn ${selectedSizes.includes(size) ? 'active' : ''}`}
                                onClick={() => toggleSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    <h3 className="sidebar-title">Color</h3>
                    <div className="color-filter">
                        {allColors.map(color => (
                            <button
                                key={color}
                                className={`color-swatch ${selectedColors.includes(color) ? 'active' : ''}`}
                                onClick={() => toggleColor(color)}
                                style={{
                                    backgroundColor: color.toLowerCase() === 'beige' ? '#F5F5DC' :
                                        color.toLowerCase() === 'navy' ? '#000080' : color.toLowerCase()
                                }}
                                title={color}
                            >
                                {selectedColors.includes(color) && <span className="check">✓</span>}
                            </button>
                        ))}
                    </div>

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
                    <div className="results-header">
                        <p>{filteredProducts.length} Products</p>
                    </div>
                    <div className="product-grid">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    {filteredProducts.length === 0 && (
                        <div className="no-results">
                            <p>No products found matching your filters.</p>
                            <button onClick={resetFilters} className="reset-filters-btn">
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Shop;
