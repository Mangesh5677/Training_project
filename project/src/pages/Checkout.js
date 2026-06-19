import { useState } from "react";

function Checkout() {

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);

    setTimeout(() => {
      alert("✅ Order Placed Successfully!");
    }, 500);
  };

  if (orderPlaced) {
    return (
      <div className="order-success">
        <h1>🎉 Order Confirmed!</h1>

        <p>
          Thank you for shopping with MyShop.
        </p>

        <p>
          Your order will be delivered soon.
        </p>
      </div>
    );
  }

  return (
    <div className="checkout">

      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          required
        />

        <textarea
          placeholder="Delivery Address"
          rows="4"
          required
        ></textarea>

        <select required>
          <option value="">
            Select Payment Method
          </option>

          <option>
            Cash On Delivery
          </option>

          <option>
            UPI Payment
          </option>

          <option>
            Credit Card
          </option>

          <option>
            Debit Card
          </option>
        </select>

        <button type="submit">
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;