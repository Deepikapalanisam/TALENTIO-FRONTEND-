import React, { useContext } from 'react';
import { CartContext } from '../App'; // Adjust the path based on your structure
import './Cart.css'; // Import custom styles

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const incrementItem = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">Price: ${item.price}</p>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => decrementItem(item.id)}>-</button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => incrementItem(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>
            Total: $
            {cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
