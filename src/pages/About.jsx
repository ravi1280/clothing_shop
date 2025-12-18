import React from 'react';
import '../styles/global.css';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="about-hero-content container">
                    <h1>Our Story</h1>
                    <p>Crafting elegance since 2023.</p>
                </div>
                <div className="about-overlay"></div>
            </div>

            <div className="container section">
                <div className="about-grid">
                    <div className="about-text">
                        <h2>The Vision</h2>
                        <p>
                            LUXE was born from a desire to create clothing that transcends trends. We believe in the power of simplicity, quality materials, and expert craftsmanship. Our mission is to provide you with pieces that make you feel confident and comfortable, no matter the occasion.
                        </p>
                        <p>
                            Every garment is designed with attention to detail, ensuring that it not only looks beautiful but also stands the test of time. We are committed to sustainable practices and ethical production, because we believe that fashion should be good for you and the planet.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Design Studio" />
                    </div>
                </div>
            </div>

            <div className="values-section section">
                <div className="container">
                    <h2 className="text-center mb-lg">Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Quality</h3>
                            <p>We source only the finest materials to ensure durability and comfort.</p>
                        </div>
                        <div className="value-card">
                            <h3>Sustainability</h3>
                            <p>We are dedicated to reducing our environmental footprint through responsible sourcing.</p>
                        </div>
                        <div className="value-card">
                            <h3>Integrity</h3>
                            <p>We believe in transparency and fair labor practices throughout our supply chain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
