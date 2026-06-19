import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {

  const navigate = useNavigate();

  const {
    cart,
    removeFromCart
  } = useContext(CartContext);

  const total =
    cart.reduce(
      (sum, item) => sum + item.price,
      0
    );

  return (
    <div>

      <h1 style={{textAlign:"center", marginTop:"20px"}}>
        Shopping Cart
      </h1>

      <div className="cart-container">

        {cart.map(item => (

          <div
            key={item.id}
            className="cart-card"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>

          </div>

        ))}

      </div>

      <h2 className="total">
        Total : ₹{total}
      </h2>

      <button
        className="purchase-btn"
        onClick={() =>
          navigate("/checkout")
        }
      >
        Purchase Now
      </button>

    </div>
  );
}

export default Cart;