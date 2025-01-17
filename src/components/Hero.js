import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <div className="relative bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span>Welcome to</span>
          <span className="text-indigo-600"> ShopStyle</span>
        </h1>
        <Link
          to="/FeaturedProducts"
          className="mt-5 inline-block px-6 py-3 bg-indigo-600 text-white rounded-md"
        >
          Shop Now
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
