
import React, { useState } from "react";
import AuthLayout from "../pages/AuthLayout.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 🔥 this allows sending/receiving cookies
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      // You don’t need to store JWT in localStorage/sessionStorage
      // It’s already in HttpOnly cookie set by backend 🎉
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout isLogin={true}>
      <form onSubmit={handleLogin} className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
