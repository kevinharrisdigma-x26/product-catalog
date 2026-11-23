function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  const formattedPrice = `₱${price.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return (
    <div className={`product-card ${inStock ? "in-stock" : "out-of-stock"}`}>
      {children && <div className="badge-wrapper">{children}</div>}

      <h3>{title}</h3>
      <p className="category">{category}</p>
      <p className="price">{formattedPrice}</p>

      <p className={inStock ? "stock-label in" : "stock-label out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button onClick={() => onAddToCart(title)} disabled={!inStock}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;