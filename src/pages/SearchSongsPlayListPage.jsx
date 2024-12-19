import React, { useEffect, useState } from "react";
import { getData } from "../api";

const SearchSongsPlaylistPage = () => {
  const [query, setQuery] = useState(""); // Estado para el texto de búsqueda
  const [songs, setSongs] = useState([]); // Todas las canciones desde el servidor
  const [filteredSongs, setFilteredSongs] = useState([]); // Canciones filtradas

  // Cargar canciones al montar el componente
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await getData("videos"); // Endpoint de canciones
        setSongs(response.data); // Actualizar todas las canciones
        setFilteredSongs(response.data); // Inicialmente mostrar todas
      } catch (error) {
        console.error("Error al obtener las canciones:", error);
      }
    };

    fetchSongs();
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

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Buscar Canciones</h3>

      {/* Campo de búsqueda */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por título o artista..."
          value={query}
          onChange={handleSearchChange}
        />
      </div>

      {/* Lista de resultados */}
      <div>
        {filteredSongs.length > 0 ? (
          <ul className="list-group">
            {filteredSongs.map((song) => (
              <li key={song.id} className="list-group-item d-flex align-items-center">
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
    </div>
  );
};

export default SearchSongsPlaylistPage;
