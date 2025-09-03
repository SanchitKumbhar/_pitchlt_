
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loginimg from "../assets/images/loginimg.jpg";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  return (
    <div className="flex flex-col md:flex-row h-screen">
      
      {/* Left Section */}
<div className="w-full md:w-1/2 bg-gradient-to-b from-red-500 to-blue-700 text-white flex justify-center items-center p-6 md:p-10">
  <div className="flex flex-col items-center justify-center text-center max-w-sm md:max-w-md">
    <h1 className="text-3xl md:text-4xl font-bold mb-2">PitchIt Forward</h1>
    <p className="text-base md:text-lg">
      Empowering student entrepreneurs to showcase their innovative ideas and connect with opportunities.
    </p>
    <img
      src={loginimg}
      alt="PitchIt"
      className="mt-3 h-[200px] md:h-[300px] w-auto rounded-2xl shadow-lg object-cover shadow-black"
    />
  </div>
</div>


      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-10 md:p-10 bg-white">
        {/* Toggle Buttons*/}
        <div className="flex mb-8 shadow-md rounded-md overflow-hidden border border-blue-500">
          <button
            onClick={() => navigate("/login")}
            className={`px-5 py-2 text-sm md:text-lg font-medium ${
              isLogin ? "bg-blue-500 text-white" : "bg-white text-blue-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className={`px-5 py-2 text-sm md:text-lg font-medium ${
              !isLogin ? "bg-blue-500 text-white" : "bg-white text-blue-500"
            }`}
          >
            Register
          </button>
        </div>

        {/* Form Content */}
        <div className="w-full max-w-sm md:max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
