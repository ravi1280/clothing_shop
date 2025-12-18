import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/global.css';
import './Home.css';

const Home = () => {
    const featuredProducts = [
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
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content container">
                    <h1 className="hero-title">Elegance in Every Detail</h1>
                    <p className="hero-subtitle">Discover our new collection of timeless essentials.</p>
                    <a href="/shop" className="btn">Shop Collection</a>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Featured Products */}
            <section className="section featured-products container">
                <h2 className="section-title text-center">Featured Collection</h2>
                <p className="section-subtitle text-center mb-lg">Curated pieces for the modern wardrobe.</p>

                <div className="product-grid">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="text-center mt-lg">
                    <a href="/shop" className="btn-outline btn">View All Products</a>
                </div>
            </section>

            {/* Brand Story Teaser */}
            <section className="brand-story">
                <div className="container brand-story-container">
                    <div className="brand-story-image">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fashion Model" />
                    </div>
                    <div className="brand-story-content">
                        <h2 className="mb-md">Our Philosophy</h2>
                        <p className="mb-md">
                            We believe that true style is timeless. Our collections are designed with a focus on quality, sustainability, and effortless elegance. Each piece is crafted to be a staple in your wardrobe for years to come.
                        </p>
                        <a href="/about" className="btn-outline btn">Read Our Story</a>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section newsletter text-center">
                <div className="container">
                    <h2 className="mb-sm">Join the World of LUXE</h2>
                    <p className="mb-md">Sign up for exclusive access to new arrivals and special offers.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your email address" />
                        <button type="submit" className="btn">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
