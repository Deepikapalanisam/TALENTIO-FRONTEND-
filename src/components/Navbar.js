import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';

const Navbar = () => {
  const { cart, user } = useContext(CartContext);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">ShopStyle</Link>
      <div className="flex space-x-4">
        <Link to="/FeaturedProducts">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        {user ? <span>Welcome, {user}</span> : <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
