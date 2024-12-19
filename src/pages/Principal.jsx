import React, { useState } from "react";
import Logo from "../components/Logo.jsx";
import Navbar from "../components/Navbar.jsx";
import Playlist from "../components/Playlist.jsx";
import Player from "../components/Player.jsx"; // Componente renombrado
import Playlists from "./Playlists.jsx";

const Principal = () => {
  const [playlistId, setPlaylistId] = useState([]); // Estado para almacenar las canciones seleccionadas
  const [songId, setSongId] = useState("");

  // Función para manejar las canciones emitidas desde Playlists
  const handlePlaylistClick = (playlistId) => {
    console.log("ID de playlist:", playlistId); // Mostrar canciones en la consola
    setPlaylistId(playlistId); // Actualizar el estado con las canciones seleccionadas
  };

  const handlePlay = (songId) => {
    setSongId(songId);
  };

  return (
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
      <div className="row m-0 vh-100">
        {/* Columna izquierda: Listas de reproducción */}
        <div className="col-md-3 col-12 bg-warning p-3 relative">
          {/* Botón de agregar */}
          <button
            className="absolute top-2 right-2 bg-white text-warning rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-200"
            onClick={() => console.log("Agregar nueva lista de reproducción")}
          >
            +
          </button>

          {/* Título */}
          <h5 className="fw-bold">Listas de reproducción</h5>

          {/* Contenido */}
          <Playlists onPlaylistSelect={handlePlaylistClick} />
        </div>

        {/* Columna del medio: Lista de reproducción */}
        <div className="col-md-3 col-12 bg-info p-3">
          <Playlist playlistId={playlistId} onPlay={handlePlay} />
        </div>

        {/* Columna derecha: Player */}
        <div className="col-md-6 col-12 bg-light p-3">
          <Player songId={songId} />
        </div>
      </div>
    </div>
  );
};

export default Principal;
