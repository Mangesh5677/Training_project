import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2>MyShop</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/cart" className="cart-link">
           🛒 Cart ({cart.length})
       </Link>
      </div>
    </nav>
  );
}

export default Navbar;