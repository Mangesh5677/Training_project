import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {

  const scrollToProducts = () => {
    document
      .querySelector(".products")
      .scrollIntoView({
        behavior: "smooth"
      });
  };

  return (
    <>
      <div className="hero">

        <div className="hero-content">

          <h1>Welcome to MyShop</h1>

          <p>
            Discover the latest smartphones,
            headphones and electronics at
            unbeatable prices.
          </p>

          <button onClick={scrollToProducts}>
            Shop Now
          </button>

        </div>

      </div>

      <div className="products">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </>
  );
}

export default Home;