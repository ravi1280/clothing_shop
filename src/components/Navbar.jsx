import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/global.css';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getCartCount } = useCart();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`navbar ${isScrolled || !isHomePage ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    LUXE
                </Link>

                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>

                <div className="navbar-icons">
                    <button className="icon-btn" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                    <Link to="/cart" className="icon-btn cart-icon" aria-label="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
                    </Link>
                    <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
