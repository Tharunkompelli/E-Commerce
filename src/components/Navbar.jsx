import { Link } from "react-router-dom";

function Navbar({ cart, wishlist }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link> | 
      <Link to="/cart">Cart ({cart.length})</Link> | 
      <Link to="/wishlist">Wishlist ({wishlist.length})</Link>
    </nav>
  );
}

export default Navbar;
