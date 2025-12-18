import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-column">
                    <h3 className="footer-logo">LUXE</h3>
                    <p className="footer-text">
                        Premium clothing for the modern individual. Quality, style, and sustainability in every stitch.
                    </p>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Shop</h4>
                    <ul className="footer-links">
                        <li><a href="/shop">New Arrivals</a></li>
                        <li><a href="/shop">Best Sellers</a></li>
                        <li><a href="/shop">Accessories</a></li>
                        <li><a href="/shop">Sale</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Help</h4>
                    <ul className="footer-links">
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/shipping">Shipping & Returns</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/size-guide">Size Guide</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Newsletter</h4>
                    <p className="footer-text">Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form className="footer-form">
                        <input type="email" placeholder="Enter your email" className="footer-input" />
                        <button type="submit" className="btn footer-btn">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
                <div className="social-links">
                    <a href="#" aria-label="Instagram">Instagram</a>
                    <a href="#" aria-label="Facebook">Facebook</a>
                    <a href="#" aria-label="Twitter">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
