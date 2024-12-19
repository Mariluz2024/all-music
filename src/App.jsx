import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logo from "./components/Logo.jsx";
import Navbar from "./components/Navbar.jsx";
import PrincipalPage from "./pages/PrincipalPage.jsx";
import PlaylistCreatePage from "./pages/PlaylistCreatePage.jsx";

function App() {
  return (
    <Router class="container-fluid">
      <div className="container-fluid">
        {/* Barra de navegación */}
        <div className="row bg-primary text-white py-2 px-3 align-items-center">
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
          </Routes>
      </div>
    </Router>
  );
}

export default App;
