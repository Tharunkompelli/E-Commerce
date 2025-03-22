function Wishlist({ wishlist }) {
    return (
      <div className="wishlist-container">
        <h1>My Wishlist</h1>
        {wishlist.length === 0 ? <p>No items in wishlist</p> : (
          <ul>
            {wishlist.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Wishlist;
  