import React, { useEffect, useState } from "react";
import { getData, deleteData } from "../api"; // Importar la función getData
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

  // Función para eliminar una playlist
  const handleDeletePlaylist = (playlistId) => {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.filter((playlist) => playlist.id !== playlistId)
    );
    console.log(`Playlist eliminada: ${playlistId}`);
  };

  // Función para editar una playlist
  const handleEditPlaylist = (playlistId) => {
    console.log(`Editar playlist con ID: ${playlistId}`);
    alert(`Editar playlist con ID: ${playlistId}`);
  };

  return (
    <div className="container mt-2">
      {playlists.map((playlist) => (
        <PlaylistCard
          key={playlist.id}
          name={playlist.name}
          songCount={playlist.videos.length} // Pasar la cantidad de canciones
          onClick={() => handlePlaylistClick(playlist.id)} // Acción al hacer clic
          onDelete={() => handleDeletePlaylist(playlist.id)} // Pasar función Delete
          onEdit={() => handleEditPlaylist(playlist.id)} // Pasar función Edit
        />
      ))}
    </div>
  );
};

export default Playlists;
