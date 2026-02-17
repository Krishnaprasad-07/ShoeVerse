import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import "../styles/Navbar.css";

const Navbar = ({ cart, setCart, user, setUser }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/products?search=${search}`);
      setSearch("");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    navigate("/");
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

          {/* NAV LINKS */}
          <ul className="nav-links">

            {/* WOMEN */}
            <li className="nav-item">
              <Link to="/products?category=women" className="nav-main-link">
                Women ▾
              </Link>

              <div className="dropdown">
                <Link to="/products?category=women&type=sneakers">
                  Sneakers
                </Link>
                <Link to="/products?category=women&type=heels">
                  Heels
                </Link>
                <Link to="/products?category=women&type=flats">
                  Flats
                </Link>
              </div>
            </li>

            {/* MEN */}
            <li className="nav-item">
              <Link to="/products?category=men" className="nav-main-link">
                Men ▾
              </Link>

              <div className="dropdown">
                <Link to="/products?category=men&type=sneakers">
                  Sneakers
                </Link>
                <Link to="/products?category=men&type=boots">
                  Boots
                </Link>
                <Link to="/products?category=men&type=sandals">
                  Sandals
                </Link>
              </div>
            </li>

            {/* BRANDS */}
            <li className="nav-item">
              <span className="nav-main-link">Brands ▾</span>

              <div className="dropdown">
                <Link to="/products?brand=nike">Nike</Link>
                <Link to="/products?brand=adidas">Adidas</Link>
                <Link to="/products?brand=puma">Puma</Link>
                <Link to="/products?brand=converse">Converse</Link>
                <Link to="/products?brand=newbalance">
                  New Balance
                </Link>
                <Link to="/products?brand=crocs">Crocs</Link>
              </div>
            </li>

          </ul>

          {/* RIGHT SIDE */}
          <div className="nav-icons">

            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
            />

            {/* PROFILE */}
            {user ? (
              <div className="profile-box">
                👤 {user.name}
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div
                className="profile-icon"
                onClick={() => navigate("/login")}
              >
                👤
              </div>
            )}

            {/* CART */}
            <div
              className="cart-icon"
              onClick={() => setCartOpen(true)}
            >
              🛒
              {cart.length > 0 && (
                <span className="cart-badge">
                  {cart.length}
                </span>
              )}
            </div>

          </div>

        </div>
      </nav>

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
