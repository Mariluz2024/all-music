import React, { useEffect, useState } from "react";
import { getData } from "../api"; // Importar la función getData
import PlaylistCard from "../components/PlaylistCard"; // Importar el nuevo componente

const Playlists = ({ onPlaylistSelect }) => {
  const [playlists, setPlaylists] = useState([]); // Estado para almacenar los datos

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

  const handlePlaylistClick = (id) => {
    onPlaylistSelect(id); // Emitir el evento con el arreglo 'songs'
  };

  return (
    <div className="container mt-2">
      {playlists.map((playlist) => (
        <PlaylistCard
          key={playlist.id}
          name={playlist.name}
          songCount={playlist.videos.length} // Pasar la cantidad de canciones
          onClick={() => handlePlaylistClick(playlist.id)} // Acción al hacer clic
        />
      ))}
    </div>
  );
};

export default Playlists;
