import "../styles/CartDrawer.css";

const CartDrawer = ({ isOpen, onClose, cart, setCart }) => {

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  const updateQuantity = (id, amount) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    setCart(updatedCart);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="cart-overlay" onClick={onClose}></div>
      )}

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <span onClick={onClose}>✕</span>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <p className="empty-text">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">

                <img
                  src={item.images[0]}
                  alt={item.name}
                />

                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <h3>Subtotal: ₹{subtotal}</h3>
            <button className="checkout-btn">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
