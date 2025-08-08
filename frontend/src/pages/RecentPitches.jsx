import React from "react";
import { FaEdit } from "react-icons/fa";

const pitches = [
  {
    id: 1,
    title: "Smart Traffic System",
    status: "Approved",
    description:
      "An intelligent traffic system that adapts signal timings based on real-time congestion data.",
    lastUpdated: "2 days ago",
  },
  {
    id: 2,
    title: "Remote Health Monitor",
    status: "Rejected",
    description:
      "A wearable device that continuously tracks vitals and sends alerts for anomalies.",
    lastUpdated: "5 days ago",
  },
  {
    id: 3,
    title: "Crop Disease Detector",
    status: "Pending",
    description:
      "AI-powered tool to identify crop diseases using smartphone images of leaves.",
    lastUpdated: "1 day ago",
  },
  {
    id: 4,
    title: "Secure Voting App",
    status: "Draft",
    description:
      "Blockchain-based mobile voting system ensuring transparency and authentication.",
    lastUpdated: "4 days ago",
  },
  {
    id: 5,
    title: "Green Home Energy Tracker",
    status: "Approved",
    description:
      "Monitor and optimize household energy usage through a mobile app.",
    lastUpdated: "3 days ago",
  },
  {
    id: 6,
    title: "Disaster Alert System",
    status: "Pending",
    description:
      "A real-time early warning system for floods and earthquakes using sensor networks.",
    lastUpdated: "7 days ago",
  },
  {
    id: 7,
    title: "E-Learning Chatbot",
    status: "Draft",
    description:
      "Chatbot to answer student queries, provide materials, and schedule reminders.",
    lastUpdated: "6 hours ago",
  },
  {
    id: 8,
    title: "AI Legal Assistant",
    status: "Rejected",
    description:
      "Tool for helping citizens understand basic legal rights and draft simple documents.",
    lastUpdated: "10 days ago",
  },
  {
    id: 9,
    title: "Smart Bin Tracker",
    status: "Approved",
    description:
      "IoT solution to manage garbage collection by monitoring bin levels in real-time.",
    lastUpdated: "2 hours ago",
  },
  {
    id: 10,
    title: "Virtual Campus Tour",
    status: "Pending",
    description:
      "An immersive 3D campus tour experience for students using WebXR.",
    lastUpdated: "8 days ago",
  },
];

const getStatusClasses = (status) => {
  switch (status) {
    case "Approved":
      return "bg-blue-100 text-blue-700";
    case "Rejected":
      return "bg-red-100 text-red-700";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "Draft":
      return "bg-gray-200 text-gray-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const RecentPitches = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-8xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Pitches</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {pitches.map((pitch) => (
          <div
            key={pitch.id}
            className="bg-white shadow-md rounded-xl border border-gray-200 p-5 min-h-[250px] flex flex-col justify-between"
          >
            {/* Title and Status */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {pitch.title}
              </h3>
              <span
                className={`px-3 py-1 text-xs rounded-full ${getStatusClasses(
                  pitch.status
                )}`}
              >
                {pitch.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
              {pitch.description}
            </p>

            {/* Divider */}
            <hr className="my-2 border-gray-200" />

            {/* Footer */}
            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
              <span className="text-xs">Last updated: {pitch.lastUpdated}</span>
              <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-sm hover:border-blue-400 transition">
                <FaEdit className="text-gray-600" />
                <span className="text-gray-700">Edit</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPitches;