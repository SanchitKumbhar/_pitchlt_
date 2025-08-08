import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from './Hero.jsx';
import TrendingPitches from '../pages/TrendingPitches.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingPitches />
      <Footer />
    </>
  );
};

export default Home;
