import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  // Add this function here
  const handleAddToCart = () => {
    addToCart(product);
    alert("✅ Product added to cart successfully!");
  };

  return (
    <div className="card">

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>

      {/* Replace old button with this */}
      <button onClick={handleAddToCart}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;