
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import MyPitches from './pages/MyPitches.jsx';
import Dashboard from './pages/Dashboard.jsx';
import RecentPitches from './pages/RecentPitches.jsx';
import PitchModalForm from './pages/PitchModalForm.jsx';
import JoinedTeams from './pages/JoinedTeams.jsx';
import Explore from './pages/Explore.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/my-pitches" element={<MyPitches />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-pitch" element={<PitchModalForm />} />
        <Route path="/joined-teams" element={<JoinedTeams />} />
        <Route path="/explore" element={<Explore />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;