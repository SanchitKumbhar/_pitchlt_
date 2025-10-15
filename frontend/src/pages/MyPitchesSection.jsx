import React from "react";
import {
  FaSearch,
  FaPlus,
  FaArrowUp,
  FaUsers,
  FaEdit,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MyPitchesSection = () => {
  const pitches = [
    {
      id: 1,
      title: "AI-Powered Resume Builder",
      visibility: "Public",
      description:
        "An intelligent tool that generates ATS-friendly resumes using AI algorithms...",
      upvotes: 24,
      members: 3,
      lastActivity: "2 days ago",
    },
    {
      id: 2,
      title: "Smart Waste Monitoring",
      visibility: "Private",
      description:
        "IoT-based system to track, report, and manage waste bins across cities...",
      upvotes: 12,
      members: 5,
      lastActivity: "5 hours ago",
    },
    {
      id: 3,
      title: "EduBot",
      visibility: "Public",
      description:
        "A chatbot to assist students with 24/7 learning queries and resources...",
      upvotes: 45,
      members: 8,
      lastActivity: "1 week ago",
    },
    {
      id: 4,
      title: "Green Energy Tracker",
      visibility: "Public",
      description:
        "Dashboard for tracking renewable energy usage for smart homes...",
      upvotes: 30,
      members: 4,
      lastActivity: "3 days ago",
    },
    {
      id: 5,
      title: "HealthMate",
      visibility: "Private",
      description:
        "AI health assistant to monitor vitals and suggest healthy lifestyle tips...",
      upvotes: 18,
      members: 2,
      lastActivity: "6 hours ago",
    },
    {
      id: 6,
      title: "PitchVault",
      visibility: "Public",
      description:
        "A secure platform to store and collaborate on startup pitch decks...",
      upvotes: 60,
      members: 10,
      lastActivity: "4 days ago",
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-10 lg:px-25 w-full mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        My Pitches
      </h2>

      {/* Header Controls */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-6">
        {/* Search Field */}
        <div className="relative w-full md:w-[40%]">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search Pitches by title or summary..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Create Button */}
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full md:w-auto">
            <FaPlus />
            <Link to="/create-post">
              <span>Create Post</span>
            </Link>
          </button>

          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full md:w-auto">
            <FaPlus />
            <Link to="/create-pitch">
              <span>Create New Pitch</span>
            </Link>
          </button>
        </div>
      </div>

      {/* Pitch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pitches.map((pitch) => (
          <div
            key={pitch.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between border border-gray-200"
          >
            {/* Row 1: Title + Visibility */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {pitch.title}
              </h3>
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  pitch.visibility === "Public"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {pitch.visibility}
              </span>
            </div>

            {/* Row 2: Description + Upvotes + Members */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 line-clamp-2">
                {pitch.description}
              </p>
              <div className="flex items-center mt-3 space-x-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <FaArrowUp /> {pitch.upvotes}
                </div>
                <div className="flex items-center gap-1">
                  <FaUsers /> {pitch.members}
                </div>
              </div>
            </div>

            {/* Row 3: Actions + Activity */}
            <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <FaEdit /> Edit Pitch
                </button>
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <FaEye /> View Details
                </button>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                {pitch.lastActivity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPitchesSection;
