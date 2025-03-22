import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/home.css";
import "./styles/productDetails.css";
import "./styles/cart.css";
import "./styles/wishlist.css";
import "./styles/index.css";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <Router>
      <Navbar cart={cart} wishlist={wishlist} />
      <div className="app-background full-screen styled-text">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/cart" element={<Cart cart={cart} showCard={true} />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} showCard={true} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
