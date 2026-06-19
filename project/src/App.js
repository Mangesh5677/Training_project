import "./App.css";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main className="main-content">
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route
           path="/"
          element={<Home />}
          />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;