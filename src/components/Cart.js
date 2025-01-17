import React, { useContext } from 'react';
import { CartContext } from '../App';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="mt-4">
          {cart.map((item) => (
            <li key={item.id} className="p-2 border-b flex justify-between">
              <span>{item.name}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
