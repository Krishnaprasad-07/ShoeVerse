import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

function App() {

  // ===== USER STATE =====
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // ===== CART STATE =====
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <ScrollToTop />
      <Navbar
        cart={cart}
        setCart={setCart}
        user={user}
        setUser={setUser}
      />

      <Suspense fallback={<h2 style={{ textAlign: "center", marginTop: "60px" }}>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} user={user} />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails cart={cart} setCart={setCart} user={user} />}
          />

          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
