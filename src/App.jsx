import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const handleAddToCart = (title) => {
    setCartCount((prev) => prev + 1);
    setLastAdded(title);
  };

  const cartMessage =
    cartCount === 0
      ? "Your cart is empty."
      : `Items added to cart: ${cartCount} (Last added: ${lastAdded})`;

  return (
    <div className="app">
      <header className="header">
        <h1>CvSU Mini Store</h1>
      </header>

      <p className="cart-message">{cartMessage}</p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {product.badge && (
              <span className={`badge ${product.badge.toLowerCase()}`}>
                {product.badge}
              </span>
            )}
          </ProductCard>
        ))}
      </div>
    </div>
  );
}

export default App;