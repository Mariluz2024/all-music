import React, { useEffect, useState } from "react";
import { getData } from "../api"; // Importar la función getData

const Playlists = ({ onPlaylistClick }) => {
  const [playlists, setPlaylists] = useState([]); // Estado para almacenar los datos

  // Llamar a getData al cargar el componente
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await getData("playlists"); // Llamada al endpoint /playlists
        const data = response["data"]; // Obtener la propiedad "data"

        setPlaylists(data); // Guardar los datos en el estado
      } catch (error) {
        console.error("Error al obtener las playlists:", error);
      }
    };

    fetchPlaylists();
  }, []);

  // Función para manejar el clic en una playlist
  const handlePlaylistClick = (id) => {
    onPlaylistSelect(id); // Emitir el evento con el arreglo 'songs'
  };

  return (
    <div className="container mt-2">
      <ul className="list-unstyled">
        {playlists.map((playlist) => (
          <li
            key={playlist.id}
            className="mb-2 list-group-item list-group-item-action"
            onClick={() => handlePlaylistClick(playlist.id)} // Enviar el arreglo "songs"
            style={{ cursor: "pointer" }}
          >
            {playlist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
