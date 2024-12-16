import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal.jsx';
import Playlists from './pages/Playlists.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
    </Router>
  );
}

export default App;
