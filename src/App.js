import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FeaturedProducts from './components/FeaturedProducts';
import ContactForm from './components/ContactForm';
import Login from './components/Login';
import SignUp from './components/Signup';
import Cart from './components/Cart';

export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, user, setUser }}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/FeaturedProducts" element={<FeaturedProducts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/ContactForm" element={<ContactForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
