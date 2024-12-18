import React, { useEffect, useState } from "react";
import { getDataDetails } from "../api"; // Importar la función getDataDetails

const Playlist = ({ playlistId = 1 }) => {
  const [playlist, setPlaylist] = useState(null); // Estado para almacenar la playlist completa

  useEffect(() => {
    const fetchPlaylistDetail = async () => {
      try {
        const response = await getDataDetails("playlists", playlistId); // Llamada al endpoint
        setPlaylist(response["data"]); // Guardar los datos en el estado
      } catch (error) {
        console.error("Error al obtener la playlist:", error);
      }
    };

    fetchPlaylistDetail();
  }, [playlistId]); // Reejecutar si cambia el id de la playlist

  // Verificar si los datos están cargados
  if (!playlist) {
    return <div>Cargando playlist...</div>;
  }

  return (
    <div>
      <h5>{playlist.name}</h5> {/* Nombre de la playlist */}
      <ul className="list-unstyled">
        {playlist.songs.map((song) => (
          <li key={song.id}>
            <strong>{song.title}</strong> - {song.artist}{" "}
            {/* Mostrar título y artista */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
