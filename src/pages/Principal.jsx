import React from 'react';
import Logo from '../components/Logo.jsx';
import Navbar from '../components/Navbar.jsx';
import Playlist from '../components/Playlist.jsx';
import Reproductor from '../components/Player.jsx';

const Principal = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Barra de navegación */}
        <div className="col-12 bg-primary text-white p-3">
          <Navbar />
        </div>
      </div>
      <div className="row vh-100">
        {/* Columna izquierda: Logo y listas */}
        <div className="col-md-3 bg-warning p-3">
          <Logo />
          <Playlist />
        </div>

        {/* Columna del medio: Lista de reproducción */}
        <div className="col-md-3 bg-info p-3">
          <h4>Lista de reproducción</h4>
        </div>

        {/* Columna derecha: Reproductor */}
        <div className="col-md-6 bg-light p-3">
          <Reproductor />
        </div>
      </div>
    </div>
  );
};

export default Principal;
