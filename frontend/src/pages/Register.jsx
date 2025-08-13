import React from "react";
import AuthLayout from "../pages/AuthLayout.jsx";

const Register = () => {
  return (
    <AuthLayout isLogin={false}>
      <form
        className="w-full max-w-md"
        method="post"
        action="http://192.168.56.1:3000/register"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an Account!
        </h2>
        <input
          type="text"
          placeholder="Name"
          name="username"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
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
          Register
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;
