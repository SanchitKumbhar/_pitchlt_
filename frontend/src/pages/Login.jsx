

import React from 'react';
import AuthLayout from '../pages/AuthLayout.jsx';

const Login = () => {
  return (
    <AuthLayout isLogin={true}>
      <form className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Wecome Back!</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
