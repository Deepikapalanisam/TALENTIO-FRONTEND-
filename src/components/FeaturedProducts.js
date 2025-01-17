import React, { useContext } from 'react';
import { CartContext } from '../App';

const FeaturedProducts = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Featured Products</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded">
            <h2 className="font-bold">{product.name}</h2>
            <p>${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
