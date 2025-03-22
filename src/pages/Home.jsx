import { Link } from "react-router-dom";
import "../styles/home.css"; 
import background from "../assets/images.jpeg"; // Import the image

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Smartphone", price: 500 }
];

function Home({ addToCart, addToWishlist }) {
  return (
    <div 
      className="home-page"
      style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white"
      }}
    >
      <h1>Home Page</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>{product.name}</Link> - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => addToWishlist(product)}>❤️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
