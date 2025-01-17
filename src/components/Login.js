import React, { useContext, useState } from 'react';
import { CartContext } from '../App';

const Login = () => {
  const { setUser } = useContext(CartContext);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setUser(username);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mt-2 w-full"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
