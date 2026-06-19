import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product =
    products.find(
      item => item.id === Number(id)
    );

  return (
    <div className="details">

      <img
        src={product.image}
        alt={product.name}
      />

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <h3>₹{product.price}</h3>

    </div>
  );
}

export default ProductDetails;