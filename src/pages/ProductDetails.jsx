import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import "../styles/ProductDetails.css";

const ProductDetails = ({ cart, setCart, user }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(
    product?.images[0]
  );
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2>Product not found</h2>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const newItem = {
      ...product,
      selectedSize,
      quantity,
    };

    if (!user) {
  navigate("/login");
  return;
}


    setCart([...cart, newItem]);
  };

  return (
    <div className="product-page">

      {/* IMAGE SECTION */}
      <div className="gallery-section">
        <div className="main-image-box">
          <img
            src={selectedImage}
            alt={product.name}
            className="main-image"
          />
        </div>

        <div className="thumbnail-row">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumb"
              className={`thumbnail ${
                selectedImage === img ? "active-thumb" : ""
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* PRODUCT INFO */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="brand">{product.brand}</p>

        <div className="rating">
          ⭐⭐⭐⭐☆ <span>({product.rating || 4.2})</span>
        </div>

        <p className="price">₹{product.price}</p>

        {/* SIZE SELECTOR */}
        <div className="size-section">
          <p>Select Size</p>
          <div className="size-options">
            {[6, 7, 8, 9, 10].map((size) => (
              <button
                key={size}
                className={`size-btn ${
                  selectedSize === size ? "active-size" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* QUANTITY SELECTOR */}
        <div className="quantity-section">
          <p>Quantity</p>
          <div className="quantity-controls">
            <button
              onClick={() =>
                setQuantity((prev) => Math.max(1, prev - 1))
              }
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() =>
                setQuantity((prev) => prev + 1)
              }
            >
              +
            </button>
          </div>
        </div>

        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <div className="description">
          <h3>Product Details</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
