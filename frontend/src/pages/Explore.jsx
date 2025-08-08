import React from 'react';
import { FaLightbulb, FaUsers, FaBell, FaSearch } from 'react-icons/fa';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

const pitches = [
  {
    title: "AI-Powered Resume Builder",
    description: "An intelligent tool that generates ATS-friendly resumes using AI algorithms.",
    team: "TechTigers",
    upvotes: 128,
    tags: ["AI", "ML", "EDtech"]
  },
  {
    title: "Smart Health Tracker",
    description: "Monitors vital health parameters and suggests improvements.",
    team: "HealthPlus",
    upvotes: 90,
    tags: ["Healthcare", "IoT", "AI"]
  },
  {
    title: "Ed-Learn Platform",
    description: "A personalized learning system for students and teachers.",
    team: "EduMinds",
    upvotes: 75,
    tags: ["Education", "ML", "EDtech"]
  },
];

const opportunities = [
  { role: "Senior UI/UX Designer", description: "Seeking a talented individual for the role of:" },
  { role: "Frontend React Developer", description: "Seeking a talented individual for the role of:" },
  { role: "Data Scientist", description: "Seeking a talented individual for the role of:" },
];

const events = [
  { title: "Hack the Future", date: "15 Aug 2025", mode: "Online" },
  { title: "GreenTech Summit", date: "22 Aug 2025", mode: "Hybrid" },
  { title: "Code For Good", date: "30 Aug 2025", mode: "Offline" },
];

const categories = [
  "Tech", "Healthcare", "Education", "Finance", "Climate", "Gaming", "Social Impact", "Biotech"
];

const Explore = () => {
  return (
    <div>
      <Navbar2 />

      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 space-y-14">

        {/* Section 1: Top Pitches */}
        <section>
          <div className="flex items-center gap-2 text-2xl font-semibold">
            <FaLightbulb className="text-yellow-500" />
            <h2>Top Pitches</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {pitches.map((pitch, index) => (
              <div key={index} className="p-4 rounded-xl shadow-md bg-white">
                <h3 className="text-lg font-semibold">{pitch.title}</h3>
                <p className="text-gray-600 mt-1">{pitch.description}</p>
                <p className="mt-2"><strong>Team:</strong> {pitch.team}</p>
                <p className="mt-1"><strong>Upvotes:</strong> {pitch.upvotes}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {pitch.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-blue-500 px-2 py-1 text-sm rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Teams Looking for Members */}
        <section>
          <div className="flex items-center gap-2 text-2xl font-semibold">
            <FaUsers className="text-purple-500" />
            <h2>Teams Looking for Members</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {opportunities.map((item, index) => (
              <div key={index} className="p-4 rounded-xl shadow-md bg-white">
                <h3 className="text-lg font-semibold">Team Opportunity</h3>
                <p className="text-gray-500 mt-1">{item.description}</p>
                <p className="font-bold mt-1">{item.role}</p>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
                  Request to Join
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Upcoming Events */}
        <section>
          <div className="flex items-center gap-2 text-2xl font-semibold">
            <FaBell className="text-red-500" />
            <h2>Upcoming Events & Pitch Contests</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {events.map((event, index) => (
              <div key={index} className="p-4 rounded-xl shadow-md bg-white">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="mt-2"><strong>Date:</strong> {event.date}</p>
                <p className="mt-1"><strong>Mode:</strong> {event.mode}</p>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
                  Register
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Browse By Category */}
        <section>
          <div className="flex items-center gap-2 text-2xl font-semibold">
            <FaSearch className="text-indigo-500" />
            <h2>Browse By Category</h2>
          </div>

          <div className="rounded-xl mt-4 p-4 bg-white shadow-lg">
            <div className="flex flex-wrap gap-2 mb-4 cursor-pointer">
              {categories.map((cat, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{cat}</span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...pitches, ...pitches].map((pitch, index) => (
                <div key={index} className="p-4 rounded-xl shadow-md bg-white">
                  <h3 className="text-lg font-semibold">{pitch.title}</h3>
                  <p className="text-gray-600 mt-1">{pitch.description}</p>
                  <p className="mt-2"><strong>Team:</strong> {pitch.team}</p>
                  <p className="mt-1"><strong>Upvotes:</strong> {pitch.upvotes}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {pitch.tags.map((tag, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 text-sm rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Explore;
