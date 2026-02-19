import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import "../styles/Navbar.css";

const Navbar = ({ cart, setCart, user, setUser }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/products?search=${search}`);
      setSearch("");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    navigate("/");
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          {/* LOGO */}
          <div className="logo">
            <Link to="/">
              <span className="logo-black">Shoe</span>
              <span className="logo-gold">Verse</span>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/products?category=women" className="nav-main-link">
                Women
              </Link>
              <div className="dropdown">
                <Link to="/products?category=women&type=sneakers">Sneakers</Link>
                <Link to="/products?category=women&type=heels">Heels</Link>
                <Link to="/products?category=women&type=flats">Flats</Link>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/products?category=men" className="nav-main-link">
                Men
              </Link>
              <div className="dropdown">
                <Link to="/products?category=men&type=sneakers">Sneakers</Link>
                <Link to="/products?category=men&type=boots">Boots</Link>
                <Link to="/products?category=men&type=sandals">Sandals</Link>
              </div>
            </li>

            <li className="nav-item">
              <span className="nav-main-link">Brands</span>
              <div className="dropdown">
                <Link to="/products?brand=nike">Nike</Link>
                <Link to="/products?brand=adidas">Adidas</Link>
                <Link to="/products?brand=puma">Puma</Link>
                <Link to="/products?brand=converse">Converse</Link>
                <Link to="/products?brand=newbalance">New Balance</Link>
                <Link to="/products?brand=crocs">Crocs</Link>
              </div>
            </li>
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="nav-icons">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
            />

            {user ? (
              <div className="profile-container">
                <div className="profile-trigger">
                  👤 <span className="username">{user.name}</span> ▾
                </div>
                <div className="profile-dropdown">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <div className="profile-icon" onClick={() => navigate("/login")}>
                👤
              </div>
            )}

            <div className="cart-icon" onClick={() => setCartOpen(true)}>
              🛒
              {cart.length > 0 && (
                <span className="cart-badge">{cart.length}</span>
              )}
            </div>
          </div>

          {/* MOBILE ICONS */}
          <div className="mobile-icons">
            <div className="cart-icon" onClick={() => setCartOpen(true)}>
              🛒
              {cart.length > 0 && (
                <span className="cart-badge">{cart.length}</span>
              )}
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(true)}>
              ☰
            </div>
          </div>

        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE SIDE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <div className="mobile-header">
          <div className="mobile-logo">
            <span className="logo-black">Shoe</span>
            <span className="logo-gold">Verse</span>
          </div>

          <span
            className="mobile-close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </span>
        </div>

        <hr className="mobile-divider" />

        {/* WOMEN */}
        <div className="mobile-section">
          <div onClick={() => toggleSection("women")}>Women</div>
          {openSection === "women" && (
            <div className="mobile-sub">
              <Link to="/products?category=women&type=sneakers">Sneakers</Link>
              <Link to="/products?category=women&type=heels">Heels</Link>
              <Link to="/products?category=women&type=flats">Flats</Link>
            </div>
          )}
        </div>

        {/* MEN */}
        <div className="mobile-section">
          <div onClick={() => toggleSection("men")}>Men</div>
          {openSection === "men" && (
            <div className="mobile-sub">
              <Link to="/products?category=men&type=sneakers">Sneakers</Link>
              <Link to="/products?category=men&type=boots">Boots</Link>
              <Link to="/products?category=men&type=sandals">Sandals</Link>
            </div>
          )}
        </div>

        {/* BRANDS */}
        <div className="mobile-section">
          <div onClick={() => toggleSection("brands")}>Brands</div>
          {openSection === "brands" && (
            <div className="mobile-sub">
              <Link to="/products?brand=nike">Nike</Link>
              <Link to="/products?brand=adidas">Adidas</Link>
              <Link to="/products?brand=puma">Puma</Link>
              <Link to="/products?brand=converse">Converse</Link>
              <Link to="/products?brand=newbalance">New Balance</Link>
              <Link to="/products?brand=crocs">Crocs</Link>
            </div>
          )}
        </div>

        <hr className="mobile-divider" />

        {/* MOBILE ACCOUNT */}
        <div className="mobile-account">
          {user ? (
            <>
              <div className="mobile-user">
                👤 {user.name}
              </div>
              <button
                className="mobile-logout"
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="mobile-auth-link"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="mobile-auth-link"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

      </div>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
};

export default Navbar;
