import React from "react";
import AuthLayout from "../pages/AuthLayout.jsx";

const Login = () => {
  return (
    <AuthLayout isLogin={true}>
      <form
        className="w-full max-w-md"
        method="post"
        action="http://192.168.56.1:3000/login"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Wecome Back!</h2>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
