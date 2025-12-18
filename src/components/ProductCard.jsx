import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { id, name, price, image, category } = product;
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <div className="product-image-container">
                <Link to={`/product/${id}`}>
                    <img src={image} alt={name} className="product-image" />
                </Link>
                <button
                    className="quick-add-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                    }}
                >
                    Quick Add
                </button>
                <div className="product-badge">New</div>
            </div>
            <div className="product-info">
                <p className="product-category">{category}</p>
                <Link to={`/product/${id}`} className="product-name-link">
                    <h3 className="product-name">{name}</h3>
                </Link>
                <p className="product-price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
