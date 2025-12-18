import React from 'react';
import '../styles/global.css';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <div className="container">
                    <h1 className="text-center">Contact Us</h1>
                    <p className="text-center">We'd love to hear from you. Get in touch with us.</p>
                </div>
            </div>

            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="mb-md">Get In Touch</h2>
                    <p className="mb-lg">
                        Whether you have a question about our products, shipping, or just want to say hello, we're here to help.
                    </p>

                    <div className="info-item">
                        <h3>Visit Us</h3>
                        <p>123 Fashion Avenue<br />New York, NY 10012</p>
                    </div>

                    <div className="info-item">
                        <h3>Email Us</h3>
                        <p>support@luxebrand.com</p>
                    </div>

                    <div className="info-item">
                        <h3>Call Us</h3>
                        <p>+1 (555) 123-4567</p>
                    </div>

                    <div className="info-item">
                        <h3>Hours</h3>
                        <p>Mon-Fri: 9am - 6pm EST<br />Sat: 10am - 4pm EST</p>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h2 className="mb-md">Send a Message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select id="subject">
                                <option value="general">General Inquiry</option>
                                <option value="order">Order Support</option>
                                <option value="returns">Returns & Exchanges</option>
                                <option value="press">Press & Media</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help?" required></textarea>
                        </div>

                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
