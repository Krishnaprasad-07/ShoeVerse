import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>
            <span className="logo-black">Shoe</span>
            <span className="logo-gold">Verse</span>
          </h2>
          <p>
            Premium footwear crafted for style,
            comfort and confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products?category=men">Men</Link>
          <Link to="/products?category=women">Women</Link>
          <Link to="/login">Login</Link>
        </div>

        {/* Categories */}
        <div className="footer-links">
          <h4>Categories</h4>
          <Link to="/products?type=sneakers">Sneakers</Link>
          <Link to="/products?type=boots">Boots</Link>
          <Link to="/products?type=heels">Heels</Link>
          <Link to="/products?type=sandals">Sandals</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@shoeverse.com</p>
          <p>Phone: +91 98765 43210</p>

          <div className="social-icons">
            <span>🌐</span>
            <span>📷</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ShoeVerse. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
