import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import products from "../data/products";
import "../styles/Products.css";

const Products = ({ setCart, user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ===== NAVBAR QUERY PARAMS =====
  const queryParams = new URLSearchParams(location.search);
  const navCategory = queryParams.get("category");
  const navType = queryParams.get("type");
  const navBrand = queryParams.get("brand");
  const navSearch = queryParams.get("search");

  const [openSection, setOpenSection] = useState(null);

  const [filters, setFilters] = useState({
    gender: [],
    brand: [],
    type: [],
    price: null,
  });

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleCheckbox = (category, value) => {
    setFilters((prev) => {
      const exists = prev[category].includes(value);

      return {
        ...prev,
        [category]: exists
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value],
      };
    });
  };

  const handlePrice = (value) => {
    setFilters((prev) => ({
      ...prev,
      price: prev.price === value ? null : value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      gender: [],
      brand: [],
      type: [],
      price: null,
    });
    navigate("/products");
  };

  // ================= FILTER LOGIC =================
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {

      // 🔹 NAVBAR CATEGORY (Only if sidebar gender not selected)
      let navCategoryMatch = true;

      if (filters.gender.length === 0) {
        if (navCategory === "men") {
          navCategoryMatch =
            product.gender === "men" ||
            product.gender === "unisex";
        } else if (navCategory === "women") {
          navCategoryMatch =
            product.gender === "women" ||
            product.gender === "unisex";
        }
      }

      // 🔹 NAVBAR TYPE
      const navTypeMatch =
        !navType || product.type === navType;

      // 🔹 NAVBAR BRAND
      let navBrandMatch = true;

if (filters.brand.length === 0) {
  navBrandMatch =
    !navBrand || product.brand === navBrand;
}


      // 🔹 SEARCH
      const searchMatch =
        !navSearch ||
        product.name.toLowerCase().includes(navSearch.toLowerCase()) ||
        product.brand.toLowerCase().includes(navSearch.toLowerCase());

      // 🔹 SIDEBAR GENDER (Overrides navbar)
      const genderMatch =
        filters.gender.length === 0
          ? true
          : filters.gender.includes(product.gender) ||
            product.gender === "unisex";

      // 🔹 SIDEBAR BRAND
      const brandMatch =
        filters.brand.length === 0 ||
        filters.brand.includes(product.brand);

      // 🔹 SIDEBAR TYPE
      const typeMatch =
        filters.type.length === 0 ||
        filters.type.includes(product.type);

      // 🔹 PRICE
      let priceMatch = true;

      if (filters.price === "low") {
        priceMatch = product.price < 3000;
      } else if (filters.price === "mid") {
        priceMatch =
          product.price >= 3000 &&
          product.price <= 5000;
      } else if (filters.price === "high") {
        priceMatch = product.price > 5000;
      }

      return (
        navCategoryMatch &&
        navTypeMatch &&
        navBrandMatch &&
        searchMatch &&
        genderMatch &&
        brandMatch &&
        typeMatch &&
        priceMatch
      );
    });
  }, [filters, navCategory, navType, navBrand, navSearch]);

  // ================= ADD TO CART =================
  const handleAddToCart = (product) => {

    if (!user) {
      navigate("/login");
      return;
    }

    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="products-layout">

      {/* ================= SIDEBAR ================= */}
      <div className="filters">

        <div className="filter-header">
          <h3>Filter</h3>
          <button className="clear-btn" onClick={clearFilters}>
            Clear
          </button>
        </div>

        {/* Gender */}
        <div className="filter-group">
          <div
            className="filter-title"
            onClick={() => toggleSection("gender")}
          >
            Gender
          </div>

          {openSection === "gender" && (
            <div className="filter-options">
              {["men", "women"].map((g) => (
                <label key={g}>
                  <input
                    type="checkbox"
                    checked={filters.gender.includes(g)}
                    onChange={() =>
                      handleCheckbox("gender", g)
                    }
                  />
                  {g}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brand */}
        <div className="filter-group">
          <div
            className="filter-title"
            onClick={() => toggleSection("brand")}
          >
            Brand
          </div>

          {openSection === "brand" && (
            <div className="filter-options">
              {[
                "nike",
                "adidas",
                "puma",
                "converse",
                "newbalance",
                "crocs",
                "shoeverse",
              ].map((b) => (
                <label key={b}>
                  <input
                    type="checkbox"
                    checked={filters.brand.includes(b)}
                    onChange={() =>
                      handleCheckbox("brand", b)
                    }
                  />
                  {b}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Type */}
        <div className="filter-group">
          <div
            className="filter-title"
            onClick={() => toggleSection("type")}
          >
            Type
          </div>

          {openSection === "type" && (
            <div className="filter-options">
              {[
                "sneakers",
                "boots",
                "flats",
                "heels",
                "sandals",
              ].map((t) => (
                <label key={t}>
                  <input
                    type="checkbox"
                    checked={filters.type.includes(t)}
                    onChange={() =>
                      handleCheckbox("type", t)
                    }
                  />
                  {t}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div className="filter-group">
          <div
            className="filter-title"
            onClick={() => toggleSection("price")}
          >
            Price
          </div>

          {openSection === "price" && (
            <div className="filter-options">
              <label>
                <input
                  type="radio"
                  checked={filters.price === "low"}
                  onChange={() => handlePrice("low")}
                />
                Below ₹3000
              </label>

              <label>
                <input
                  type="radio"
                  checked={filters.price === "mid"}
                  onChange={() => handlePrice("mid")}
                />
                ₹3000 – ₹5000
              </label>

              <label>
                <input
                  type="radio"
                  checked={filters.price === "high"}
                  onChange={() => handlePrice("high")}
                />
                Above ₹5000
              </label>
            </div>
          )}
        </div>

      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="products-content">
        <div className="products-grid">

          {filteredProducts.length === 0 ? (
            <p className="no-products">
              No products found.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">

                <div
                  className="product-image-wrapper"
                  onClick={() =>
                    navigate(`/product/${product.id}`)
                  }
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="product-img"
                  />
                </div>

                <div className="product-info">
                  <span className="product-brand">
                    {product.brand}
                  </span>

                  <h4
                    className="product-name"
                    onClick={() =>
                      navigate(`/product/${product.id}`)
                    }
                  >
                    {product.name}
                  </h4>

                  <span className="current-price">
                    ₹{product.price}
                  </span>

                  <button
                    className="add-btn"
                    onClick={() =>
                      handleAddToCart(product)
                    }
                  >
                    Add to Cart
                  </button>

                </div>

              </div>
            ))
          )}

        </div>
      </div>

    </div>
  );
};

export default Products;
