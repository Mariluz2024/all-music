import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Playlist from "../components/Playlist.jsx";
import Player from "../components/Player.jsx"; // Componente renombrado
import Playlists from "./AllMusicPlayerPage.jsx";

const PrincipalPage = () => {
  const [playlistId, setPlaylistId] = useState([]); // Estado para almacenar las canciones seleccionadas
  const [songId, setSongId] = useState("");

  const navigate = useNavigate();

  // Función para manejar las canciones emitidas desde Playlists
  const handlePlaylistClick = (playlistId) => {
    console.log("ID de playlist:", playlistId); // Mostrar canciones en la consola
    setPlaylistId(playlistId); // Actualizar el estado con las canciones seleccionadas
  };

  const handlePlay = (songId) => {
    setSongId(songId);
  };

  return (
    <div className="row m-0 vh-100">
      {/* Columna izquierda: Listas de reproducción */}
      <div className="col-md-3 col-12 p-3 relative" style={{background: '#D66BA0'}}>
        {/* Título */}
        <h5 className="fw-bold">Listas de reproducción</h5>

        {/* Contenido */}
        <Playlists onPlaylistSelect={handlePlaylistClick} />
      </div>

      {/* Columna del medio: Lista de reproducción */}
      <div className="col-md-3 col-12 p-3"  style={{background: '#E5A9A9'}}>
        <Playlist playlistId={playlistId} onPlay={handlePlay} />
      </div>

      {/* Columna derecha: Player */}
      <div className="col-md-6 col-12 p-3"  style={{background: '#F4E4BA'}}>
        <Player songId={songId} />
      </div>
    </div>
  );
};

export default PrincipalPage;
