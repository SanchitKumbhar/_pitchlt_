import React, { useRef } from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

function JoinedTeams() {
  const viewBtnRef = useRef(null);

  const longDescription =
    "Bringing local businesses online with a digital toolset for sustainable growth. The platform helps merchants manage inventory, accept payments, and track analytics. It also connects them with customers using a hyperlocal discovery engine. By streamlining operations, businesses save time and grow faster. Additional tools include promotional campaigns, CRM integration, location-based alerts, mobile analytics, loyalty rewards tracking, cross-channel syncing, real-time feedback loops, and predictive insights for smarter selling.";

  const handleMoreClick = () => {
    viewBtnRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div>
      <Navbar2 />
      <div className="flex flex-col lg:flex-row p-4 sm:p-6 lg:p-8 px-4 sm:px-6 lg:px-21 gap-2 min-h-[90vh]">
        
        {/* Left Section: My Teams */}
        <div className="w-full lg:w-[70%] flex flex-col shadow-lg p-5 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">My Teams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(26)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-2"
              >
                <h2 className="text-lg font-semibold">Team Alpha</h2>
                <p className="text-sm text-gray-500">
                  Senior Designer, Data Analyst
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-sm text-gray-600">6 Members</span>
                </div>
                <div className="flex justify-between mt-auto">
                  <button className="bg-gray-100 shadow hover:bg-gray-100 px-3 py-1 rounded-md text-sm">
                    View Pitch
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    Leave Team
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Pitch Preview + Recent Activity */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4 lg:sticky top-[80px] h-fit self-start shadow-md p-5 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-1">Recent Pitch Preview</h2>

          {/* Pitch Preview Card */}
          <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">
                Revolutionizing Local Commerce
              </h2>
              <p className="text-sm text-gray-500">Team InnovateHub</p>
              <hr className="my-2" />
              <p className="text-sm text-gray-700 line-clamp-3">
                {longDescription}
              </p>
              <a
                onClick={handleMoreClick}
                className="text-blue-600 text-xs mt-1 cursor-pointer"
              >
                More...
              </a>
              <div className="flex gap-2 mt-3 text-xs text-blue-500">
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  Users: 10K+
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  GMV: $50K/mo
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  Growth: 20% MoM
                </span>
              </div>
            </div>
            <div className="flex justify-end mt-4" ref={viewBtnRef}>
              <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md">
                View Full Pitch
              </button>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col max-h-[40vh] overflow-y-auto">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <hr className="my-2" />
            <div className="space-y-3 text-sm">
              {[
                {
                  icon: "📢",
                  text: "New announcement from InnovateHub: Q3 roadmap released",
                  time: "2h ago",
                },
                {
                  icon: "✅",
                  text: "BuildMate completed milestone: MVP ready for demo",
                  time: "1 day ago",
                },
                {
                  icon: "👥",
                  text: "Jane Doe joined Team CodersLab",
                  time: "2 days ago",
                },
                {
                  icon: "✅",
                  text: "Team DevX submitted final project for review",
                  time: "2 days ago",
                },
                {
                  icon: "👥",
                  text: "Aarav joined Team ByteForge",
                  time: "3 days ago",
                },
                {
                  icon: "📢",
                  text: "PitchTrack posted update: Now supporting video pitches",
                  time: "3 days ago",
                },
                {
                  icon: "✅",
                  text: "CodeNation completed onboarding flow revamp",
                  time: "4 days ago",
                },
                {
                  icon: "👥",
                  text: "New member joined Team Brainstormers",
                  time: "5 days ago",
                },
                {
                  icon: "📢",
                  text: "HackathonX is live! Register by August 5th.",
                  time: "5 days ago",
                },
              ].map((activity, index) => (
                <div key={index}>
                  <div className="flex items-start gap-2">
                    <span>{activity.icon}</span>
                    <div className="flex-1">{activity.text}</div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                  {index !== 8 && <hr className="my-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default JoinedTeams;
