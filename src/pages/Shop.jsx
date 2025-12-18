import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/global.css';
import './Shop.css';

const Shop = () => {
    const [filter, setFilter] = useState('All');

    const products = [
        {
            id: 1,
            name: 'Classic Silk Blouse',
            price: 120.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1551163943-3f6a29e39426?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 2,
            name: 'Tailored Linen Trousers',
            price: 180.00,
            category: 'Bottoms',
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 3,
            name: 'Cashmere Wool Coat',
            price: 450.00,
            category: 'Outerwear',
            image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 4,
            name: 'Leather Crossbody Bag',
            price: 250.00,
            category: 'Accessories',
            image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 5,
            name: 'Summer Floral Dress',
            price: 140.00,
            category: 'Dresses',
            image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 6,
            name: 'Denim Jacket',
            price: 95.00,
            category: 'Outerwear',
            image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 7,
            name: 'Silk Scarf',
            price: 45.00,
            category: 'Accessories',
            image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 8,
            name: 'Pleated Midi Skirt',
            price: 110.00,
            category: 'Bottoms',
            image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 9,
            name: 'Structured Blazer',
            price: 220.00,
            category: 'Outerwear',
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 10,
            name: 'Evening Gown',
            price: 350.00,
            category: 'Dresses',
            image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 11,
            name: 'Cotton T-Shirt',
            price: 35.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 12,
            name: 'Gold Hoop Earrings',
            price: 85.00,
            category: 'Accessories',
            image: 'https://images.unsplash.com/photo-1635767798638-3e2523464695?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 13,
            name: 'Silk Camisole',
            price: 65.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 14,
            name: 'Oversized Cotton Shirt',
            price: 85.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 15,
            name: 'Knit Sweater Vest',
            price: 70.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1624429607723-13fa465724dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 16,
            name: 'Striped Long Sleeve',
            price: 55.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 17,
            name: 'Minimalist Graphic Tee',
            price: 40.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 18,
            name: 'Linen Button Down',
            price: 90.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 19,
            name: 'Cropped Hoodie',
            price: 75.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 20,
            name: 'Turtleneck Sweater',
            price: 110.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 21,
            name: 'Ruffled Blouse',
            price: 95.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 22,
            name: 'Satin Wrap Top',
            price: 80.00,
            category: 'Tops',
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        // --- NEW TOPS (10) ---
        { id: 23, name: 'Chiffon Blouse', price: 75.00, category: 'Tops', image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 24, name: 'Velvet Bodysuit', price: 60.00, category: 'Tops', image: 'https://images.unsplash.com/photo-1621335829175-95f437384d7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 25, name: 'Lace Trim Cami', price: 45.00, category: 'Tops', image: 'https://images.unsplash.com/photo-1606459389868-2374eac83631?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 26, name: 'Oversized Hoodie', price: 85.00, category: 'Tops', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 27, name: 'Graphic Sweatshirt', price: 70.00, category: 'Tops', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 28, name: 'Basic White Tee', price: 30.00, category: 'Tops', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 29, name: 'Peplum Top', price: 65.00, category: 'Tops', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 30, name: 'Sheer Sleeve Blouse', price: 80.00, category: 'Tops', image: 'https://images.unsplash.com/photo-1551163943-3f6a29e39426?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 31, name: 'Crop Top', price: 40.00, category: 'Tops', image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 32, name: 'Button Back Shirt', price: 90.00, category: 'Tops', image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },

        // --- NEW BOTTOMS (10) ---
        { id: 33, name: 'High Waisted Jeans', price: 110.00, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 34, name: 'Wide Leg Trousers', price: 130.00, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 35, name: 'Leather Skirt', price: 150.00, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1582142327269-82388a8ca5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 36, name: 'Cargo Pants', price: 95.00, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1517445312882-766d33e8870b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 37, name: 'Pleated Maxi Skirt', price: 120.00, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 38, name: 'Denim Shorts', price: 60.00, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 39, name: 'Silk Midi Skirt', price: 140.00, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1582142833317-69a2c4fdffa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 40, name: 'Joggers', price: 70.00, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 41, name: 'Pencil Skirt', price: 90.00, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1551163943-3f6a29e39426?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 42, name: 'Culottes', price: 100.00, category: 'Bottoms', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },

        // --- NEW DRESSES (10) ---
        { id: 43, name: 'Wrap Dress', price: 130.00, category: 'Dresses', image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 44, name: 'Slip Dress', price: 110.00, category: 'Dresses', image: 'https://images.unsplash.com/photo-1596783439305-70753c0acc66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 45, name: 'Maxi Dress', price: 160.00, category: 'Dresses', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 46, name: 'Bodycon Dress', price: 95.00, category: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 47, name: 'Shirt Dress', price: 120.00, category: 'Dresses', image: 'https://images.unsplash.com/photo-1591369822096-35c93e188329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 48, name: 'Cocktail Dress', price: 180.00, category: 'Dresses', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 49, name: 'Sundress', price: 85.00, category: 'Dresses', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 50, name: 'Knitted Dress', price: 140.00, category: 'Dresses', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 51, name: 'Off-Shoulder Dress', price: 125.00, category: 'Dresses', image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 52, name: 'Velvet Dress', price: 170.00, category: 'Dresses', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },

        // --- NEW OUTERWEAR (10) ---
        { id: 53, name: 'Trench Coat', price: 250.00, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 54, name: 'Puffer Jacket', price: 200.00, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 55, name: 'Leather Biker Jacket', price: 300.00, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1551028919-ac66c9a3d683?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 56, name: 'Wool Pea Coat', price: 280.00, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 57, name: 'Denim Sherpa Jacket', price: 120.00, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 58, name: 'Faux Fur Coat', price: 220.00, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 59, name: 'Raincoat', price: 150.00, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 60, name: 'Bomber Jacket', price: 180.00, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1551028919-ac66c9a3d683?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 61, name: 'Cape Coat', price: 260.00, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 62, name: 'Blazer Dress', price: 190.00, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },

        // --- NEW ACCESSORIES (10) ---
        { id: 63, name: 'Statement Necklace', price: 65.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1602751584552-8ba43dcb13be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 64, name: 'Leather Belt', price: 55.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 65, name: 'Sunglasses', price: 120.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 66, name: 'Fedora Hat', price: 75.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1582748154704-585d68541703?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 67, name: 'Silk Scarf (Print)', price: 50.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 68, name: 'Tote Bag', price: 180.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 69, name: 'Pearl Earrings', price: 95.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 70, name: 'Ankle Boots', price: 220.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 71, name: 'Wrist Watch', price: 250.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 72, name: 'Clutch Bag', price: 110.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1590874103328-3b7a3a4e3b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ];

    const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories'];

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(product => product.category === filter);

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
