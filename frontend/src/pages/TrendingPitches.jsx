import React from 'react';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import nature from '../assets/images/nature.jpg';

const cards = [
  {
    title: 'nature pics',
    description: 'we should visit this places as they are so much bwutiful than the world we live in.',
    image: nature,
  },
  {
    title: 'nature pics',
    description: 'we should visit this places as they are so much bwutiful than the world we live in.',
    image: nature,
  },
  {
    title: 'nature pics',
    description: 'we should visit this places as they are so much bwutiful than the world we live in.',
    image: nature,
  },
  {
    title: 'nature pics',
    description: 'we should visit this places as they are so much bwutiful than the world we live in.',
    image: nature,
  },
  {
    title: 'nature pics',
    description: 'we should visit this places as they are so much bwutiful than the world we live in.',
    image: nature,
  },
  {
    title: 'nature pics',
    description: 'we should visit this places as they are so much bwutiful than the world we live in.',
    image: nature,
  },
  
];


function TrendingPitches() {
  return (
    <div className="py-10 px-7 md:px-6 lg:px-20 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Trending Pitches</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {cards.map((card, index) => (
          <div key={index} className="bg-gray-50 border rounded-xl shadow-sm overflow-hidden flex flex-col m-1">
            {/* Image */}
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />

            {/* Title & Description */}
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>

            {/* Divider */}
            <hr className="border-t border-gray-300" />

            {/* Bottom buttons */}
            <div className="flex justify-between px-4 py-2">
              <button className="bg-white p-2 rounded-full shadow hover:scale-105 transition">
                <FaHeart className="text-red-500" />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:scale-105 transition">
                <FaShareAlt className="text-gray-600 hover:text-blue-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Section Divider */}
      <hr className="mt-10 border-gray-300" />
    </div>
  );
}

export default TrendingPitches;
