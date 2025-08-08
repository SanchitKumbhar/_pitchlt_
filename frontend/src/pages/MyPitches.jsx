
import React from "react";
import Navbar2 from "../components/Navbar2.jsx"; 
import MyPitchesSection from "../pages/MyPitchesSection.jsx"; 
import Footer from "../components/Footer.jsx";  

const MyPitches = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <div className="flex-grow">
        <MyPitchesSection />
      </div>
      <Footer />  
    </div>
  );
};

export default MyPitches;

