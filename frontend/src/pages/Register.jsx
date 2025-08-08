import React from "react";
import AuthLayout from "../pages/AuthLayout.jsx";

const Register = () => {
  return (
    <AuthLayout isLogin={false}>
      <form className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an Account!
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
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
          Register
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;
