function Cart({ cart }) {
    return (
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? <p>Cart is empty</p> : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Cart;
  