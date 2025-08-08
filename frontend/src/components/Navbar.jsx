
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">PitchIt</div>

          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Explore Pitches</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Events</a>
            <button
              className="px-4 py-2 border border-black text-black rounded-md hover:bg-gray-100"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-800 focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 space-y-4 bg-white shadow-md">
          <a href="#" className="block text-gray-700 hover:text-blue-500 font-medium">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500 font-medium">Explore Pitches</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500 font-medium">Events</a>
          <div onClick={() => { navigate('/login'); setMenuOpen(false); }} className="block text-gray-700 hover:text-blue-500 font-medium cursor-pointer">
            Login
          </div>
          <div onClick={() => { navigate('/register'); setMenuOpen(false); }} className="block text-gray-700 hover:text-blue-500 font-medium cursor-pointer">
            Register
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
