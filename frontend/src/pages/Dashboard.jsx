
import React from "react";
import Navbar2 from "../components/Navbar2";
import RecentPitches from "./RecentPitches";
import Footer from "../components/Footer";
import Dash_Cards from "./Dash_Cards";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Navigation */}
      <Navbar2 />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Dashboard Cards */}
        <section className="px-4 sm:px-6 md:px-10 pt-6">
          
          <Dash_Cards />
        </section>

        {/* Recent Pitches */}
        <section className="px-4 sm:px-6 md:px-10">
          <RecentPitches />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;

