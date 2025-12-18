import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-header">
                <div className="container">
                    <h1 className="text-center">About LUXE</h1>
                    <p className="text-center">Discover our story and commitment to timeless elegance.</p>
                </div>
            </div>

            <div className="container about-content">
                <div className="about-section">
                    <div className="section-text">
                        <h2>Our Story</h2>
                        <p>
                            Founded with a passion for timeless fashion, LUXE brings you carefully curated collections
                            that blend classic elegance with contemporary style. We believe that clothing should not only
                            look beautiful but also make you feel confident and comfortable.
                        </p>
                    </div>
                    <div className="section-image">
                        <img
                            src="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Fashion Design and Craftsmanship"
                        />
                    </div>
                </div>

                <div className="about-section reverse">
                    <div className="section-text">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to provide high-quality, sustainable fashion that stands the test of time.
                            We work with skilled artisans and use premium materials to create pieces that you'll cherish
                            for years to come.
                        </p>
                    </div>
                    <div className="section-image">
                        <img
                            src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Quality Craftsmanship"
                        />
                    </div>
                </div>

                <div className="about-section">
                    <div className="section-text">
                        <h2>Quality & Sustainability</h2>
                        <p>
                            Every piece in our collection is thoughtfully designed and ethically produced. We're committed
                            to sustainable practices and ensuring fair treatment of everyone involved in bringing our
                            products to life.
                        </p>
                    </div>
                    <div className="section-image">
                        <img
                            src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Sustainable Fashion Materials"
                        />
                    </div>
                </div>

                <div className="about-values">
                    <div className="value-card">
                        <h3>Premium Quality</h3>
                        <p>Only the finest materials and craftsmanship</p>
                    </div>
                    <div className="value-card">
                        <h3>Sustainable</h3>
                        <p>Ethical production and eco-friendly practices</p>
                    </div>
                    <div className="value-card">
                        <h3>Timeless Design</h3>
                        <p>Classic pieces that never go out of style</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
