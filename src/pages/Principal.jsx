import React from "react";
import Logo from "../components/Logo.jsx";
import Navbar from "../components/Navbar.jsx";
import Playlist from "../components/Playlist.jsx";
import Player from "../components/Player.jsx";

const Principal = () => {
  return (
    <div className="container-fluid p-0">
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
      <div className="row vh-100 m-0">
        {/* Columna izquierda: Listas de reproducción */}
        <div className="col-md-3 col-12 bg-warning p-3">
          <h5 className="fw-bold">Listas de reproducción</h5>
          <Playlist />
        </div>

        {/* Columna del medio: Lista de reproducción */}
        <div className="col-md-3 col-12 bg-info p-3">
          <h5 className="fw-bold">Lista de reproducción</h5>
        </div>

        {/* Columna derecha: Reproductor */}
        <div className="col-md-6 col-12 bg-light p-3">
          <Player />
        </div>
      </div>
    </div>
  );
};

export default Principal;
