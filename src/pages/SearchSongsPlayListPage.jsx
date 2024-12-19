import React, { useEffect, useState } from "react";
import { getData, putData } from "../api";

const SearchSongsPlaylistPage = () => {
  const [query, setQuery] = useState(""); // Estado para el texto de búsqueda
  const [songs, setSongs] = useState([]); // Todas las canciones desde el servidor
  const [filteredSongs, setFilteredSongs] = useState([]); // Canciones filtradas
  const [playlists, setPlaylists] = useState([]); // Playlists disponibles
  const [selectedSongs, setSelectedSongs] = useState([]); // Canciones seleccionadas
  const [selectedPlaylist, setSelectedPlaylist] = useState(""); // Playlist seleccionada

  // Cargar canciones y playlists al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [songsResponse, playlistsResponse] = await Promise.all([
          getData("videos"), // Endpoint de canciones
          getData("playlists"), // Endpoint de playlists
        ]);

        setSongs(songsResponse.data); // Actualizar todas las canciones
        setFilteredSongs(songsResponse.data); // Inicialmente mostrar todas
        setPlaylists(playlistsResponse.data); // Actualizar todas las playlists
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  // Manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value); // Actualizar el estado del texto de búsqueda

    // Filtrar canciones según el texto ingresado
    const filtered = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(value) ||
        song.artist.toLowerCase().includes(value)
    );

    setFilteredSongs(filtered); // Actualizar las canciones filtradas
  };

  // Manejar la selección/deselección de canciones
  const handleSongSelection = (songId) => {
    setSelectedSongs((prevSelectedSongs) =>
      prevSelectedSongs.includes(songId)
        ? prevSelectedSongs.filter((id) => id !== songId) // Deseleccionar
        : [...prevSelectedSongs, songId] // Seleccionar
    );
  };

  // Manejar el envío para agregar canciones a una playlist
  const handleAddToPlaylist = async () => {
    if (!selectedPlaylist) {
      alert("Por favor, selecciona una playlist.");
      return;
    }

    if (selectedSongs.length === 0) {
      alert("Por favor, selecciona al menos una canción.");
      return;
    }

    try {
      // Obtener la playlist seleccionada
      const playlist = playlists.find((pl) => pl.id === parseInt(selectedPlaylist));
      if (!playlist) {
        alert("Playlist no encontrada.");
        return;
      }

      // Actualizar los videos en la playlist
      const updatedVideos = [...new Set([...playlist.videos, ...selectedSongs])];

      // Enviar la actualización al servidor
      await putData("playlists", playlist.id, { ...playlist, videos: updatedVideos });

      alert("Canciones agregadas a la playlist con éxito.");
      setSelectedSongs([]); // Limpiar las canciones seleccionadas
    } catch (error) {
      console.error("Error al agregar canciones a la playlist:", error);
      alert("Hubo un error al agregar canciones a la playlist.");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Buscar Canciones</h3>

      {/* Campo de búsqueda */}
      <div
        className="sticky-top bg-white py-3"
        style={{ zIndex: 1, top: "70px" }} // Asegurar que sea fijo
      >
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por título o artista..."
          value={query}
          onChange={handleSearchChange}
        />
      </div>

      {/* Lista de resultados */}
      <div className="mt-3">
        {filteredSongs.length > 0 ? (
          <ul className="list-group">
            {filteredSongs.map((song) => (
              <li key={song.id} className="list-group-item d-flex align-items-center">
                {/* Checkbox para seleccionar */}
                <input
                  type="checkbox"
                  className="form-check-input me-3"
                  checked={selectedSongs.includes(song.id)}
                  onChange={() => handleSongSelection(song.id)}
                />
                {/* Imagen */}
                <img
                  src={song.image || "https://via.placeholder.com/50"}
                  alt={song.title}
                  className="rounded me-3"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                {/* Detalles */}
                <div>
                  <h6 className="mb-0">{song.title}</h6>
                  <small className="text-muted">{song.artist}</small>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">No se encontraron canciones.</p>
        )}
      </div>

      {/* Selector de playlist y botón para agregar */}
      <div className="mt-4">
        <div className="mb-3">
          <label htmlFor="playlistSelect" className="form-label">
            Seleccionar Playlist
          </label>
          <select
            id="playlistSelect"
            className="form-select"
            value={selectedPlaylist}
            onChange={(e) => setSelectedPlaylist(e.target.value)}
          >
            <option value="">-- Selecciona una playlist --</option>
            {playlists.map((playlist) => (
              <option key={playlist.id} value={playlist.id}>
                {playlist.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={handleAddToPlaylist}
        >
          Agregar Canciones a la Playlist
        </button>
      </div>
    </div>
  );
};

export default SearchSongsPlaylistPage;
