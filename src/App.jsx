import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logo from "./components/Logo.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PrincipalPage from "./pages/PrincipalPage.jsx";
import About from "./pages/AboutPage.jsx";
import PlaylistCreatePage from "./pages/PlaylistCreatePage.jsx";
import PlaylistEditPage from "./pages/PlaylistEditPage.jsx";
import SearchSongsPlaylistPage from "./pages/SearchSongsPage.jsx";

function App() {

  return (
    <Router class="container-fluid">
      <div className="container-fluid">
        {/* Barra de navegación */}
        <div className="row bg-white text-white py-2 px-3 align-items-center">
          <div className="col d-flex justify-content-start">
            <Navbar />
          </div>
          <div className="col-auto ms-auto">
            <Logo />
          </div>
        </div>

        {/* Contenido principal */}
          <Routes>
            <Route path="/" element={<PrincipalPage />} />
            <Route path="/playlists" element={<PrincipalPage />} />
            <Route path="/playlist/create" element={<PlaylistCreatePage />} />
            <Route path="/playlists/:id/edit" element={<PlaylistEditPage />} />
            <Route path="/songs/search" element={<SearchSongsPlaylistPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer  />
      </div>
    </Router>
  );
}

export default App;
