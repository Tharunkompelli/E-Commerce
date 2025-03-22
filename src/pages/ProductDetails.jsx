import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Smartphone", price: 500 }
];

function ProductDetails({ addToCart, addToWishlist }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>❤️ Wishlist</button>
    </div>
  );
}

export default ProductDetails;
