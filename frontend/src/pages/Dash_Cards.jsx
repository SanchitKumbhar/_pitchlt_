import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Lightbulb,
  DollarSign,
  Users,
  Rocket,
  PlusCircle,
  Badge,
  BarChart2,
} from "lucide-react";
import { Link } from "react-router-dom";

const data = [
  { month: "Feb", count: 3 },
  { month: "Mar", count: 5 },
  { month: "Apr", count: 2 },
  { month: "May", count: 4 },
  { month: "Jun", count: 6 },
  { month: "Jul", count: 7 },
];

const Dash_Cards = () => {
  return (
    // <div className="w-full px-4 sm:px-6 md:px-10 xl:px-20">
    <div className="w-full px-4 sm:px-6 md:px-11 p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h2>
      {/* Top Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 pt-2">
        
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 flex flex-col justify-between min-h-[160px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-700">
                Total Pitches Made
              </h2>
              <Lightbulb className="text-yellow-500 w-5 h-5" />
            </div>
            <div className="text-4xl font-bold text-gray-800">24</div>
            <p className="text-sm text-gray-500 mt-1">
              Across all your projects
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 flex flex-col justify-between min-h-[160px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-700">
                Coins Earned
              </h2>
              <DollarSign className="text-green-500 w-5 h-5" />
            </div>
            <div className="text-4xl font-bold text-gray-800">1200</div>
            <p className="text-sm text-gray-500 mt-1">
              Rewards from successful pitches
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 flex flex-col justify-between min-h-[160px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-700">
                Teams Joined
              </h2>
              <Users className="text-blue-500 w-5 h-5" />
            </div>
            <div className="text-4xl font-bold text-gray-800">5</div>
            <p className="text-sm text-gray-500 mt-1">
              Collaborate with others
            </p>
          </div>
        </div>
      </section>

      {/* Lower Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 flex flex-col min-h-[260px]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Quick Actions
            </h2>
            <Rocket className="text-purple-600 w-5 h-5" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <PlusCircle className="w-5 h-5" />
              <Link to="/create-pitch">
              <span>Create New Pitch</span>
              </Link>
            </button>
            <p className="text-sm text-gray-500 text-center">
              Start a fresh pitch idea right away.
            </p>
          </div>
        </div>

        {/* Monthly Activity */}
        <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 flex flex-col min-h-[260px]">
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-semibold text-gray-700">
                Monthly Pitch Activity
              </h2>
              <BarChart2 className="text-blue-600 w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500">
              Your pitch submissions over the last 6 months.
            </p>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={data}>
                <XAxis dataKey="month" />
                <YAxis allowDecimals={false} domain={[0, 10]} />
                <Tooltip />
                <Bar dataKey="count" fill="#2563eb" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Current Streak */}
        <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 flex flex-col min-h-[260px]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Current Streak
            </h2>
            <Badge className="text-orange-500 w-5 h-5" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-1">
            <div className="text-4xl font-bold text-gray-800">3 Weeks</div>
            <p className="text-sm text-gray-500">Consecutive active pitching</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dash_Cards;