import React from 'react';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 px-4 text-center bg-gradient-to-b from-red-500 to-blue-500 via-white">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Pitch your startup, Find your team!
      </h2>
      
      <div className="flex space-x-4">
        {/* Create Your Pitch Button */}
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={() => navigate('/login')}>
          Create Your Pitch
        </button>

        {/* Explore Ideas Button */}
        <button className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-100">
          Explore Ideas
        </button>
      </div>
    </div>
  );
};

export default Hero;
