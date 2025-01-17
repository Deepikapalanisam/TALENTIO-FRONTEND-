import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold">ShopStyle</h3>
            <p className="text-gray-400">Your one-stop destination for fashion and lifestyle products.</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Contact Info</h3>
            <ul className="text-gray-400">
              <li><Phone /> +1 234 567 890</li>
              <li><Mail /> info@shopstyle.com</li>
              <li><MapPin /> 123 Fashion Street, NY</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter email"
                className="p-2 rounded-l focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 p-2 text-white rounded-r">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;