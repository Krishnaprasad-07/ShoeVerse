import { useNavigate } from "react-router-dom";
import products from "../data/products";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const newArrivals = products.filter((p) => p.newArrival);
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <img src="/hero.jpg" alt="Hero" className="hero-img" />

        <div className="hero-btn-container">
          <button className="hero-btn" onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
      </section>

      {/* ===== NEW ARRIVALS ===== */}
      <section className="section">
        <h2 className="section-title">New Arrivals</h2>

        <div className="product-grid">
          {newArrivals.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="image-wrapper">
                <img
                  src={product.homeImage || product.images[0]}
                  alt={product.name}
                  className="main-img"
                />

                {product.homeImage ? (
                  <img
                    src={product.images[0]}
                    alt="hover"
                    className="hover-img"
                  />
                ) : (
                  product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt="hover"
                      className="hover-img"
                    />
                  )
                )}
              </div>

              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BEST SELLERS ===== */}
      <section className="section">
        <h2 className="section-title">Best Sellers</h2>

        <div className="product-grid">
          {bestSellers.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="image-wrapper">
                <img
                  src={product.homeImage || product.images[0]}
                  alt={product.name}
                  className="main-img"
                />

                <img
                  src={product.images[0]}
                  alt="hover"
                  className="hover-img"
                />
              </div>

              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
