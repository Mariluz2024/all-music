import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getData, postData } from "../api";

const PlaylistCreatePage = () => {
  const [songs, setSongs] = useState([]); // Estado para almacenar las canciones disponibles
  const [selectedSongs, setSelectedSongs] = useState([]); // Estado para las canciones seleccionadas
  const [playlistName, setPlaylistName] = useState(""); // Estado para el nombre de la lista

  const navigate = useNavigate();

  // Obtener las canciones disponibles desde el servidor
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await getData("videos"); // Llama a la ruta /videos
        setSongs(response.data); // Actualiza el estado con las canciones disponibles
      } catch (error) {
        console.error("Error al obtener las canciones:", error);
      }
    };

    fetchSongs();
  }, []);

  // Manejar la selección/deselección de canciones
  const handleSongSelection = (songId) => {
    setSelectedSongs(
      (prevSelectedSongs) =>
        prevSelectedSongs.includes(songId)
          ? prevSelectedSongs.filter((id) => id !== songId) // Deseleccionar
          : [...prevSelectedSongs, songId] // Seleccionar
    );
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!playlistName || selectedSongs.length === 0) {
      alert("Por favor, completa todos los campos antes de continuar.");
      return;
    }

    const newPlaylist = {
      name: playlistName,
      videos: selectedSongs, // Los IDs de las canciones seleccionadas
    };

    try {
      await postData("playlists/new", newPlaylist); // Enviar los datos al servidor
      alert("Lista de reproducción creada con éxito.");
      setPlaylistName(""); // Limpiar el formulario
      setSelectedSongs([]);

      navigate("/");
    } catch (error) {
      console.error("Error al crear la lista de reproducción:", error);
      alert("Hubo un error al crear la lista de reproducción.");
    }
  };

  return (
    <div className="row m-0 vh-100 justify-content-center align-items-center">
      <div className="col-md-8 bg-light p-5 rounded shadow">
        <h3 className="fw-bold mb-4 text-center">
          Crear Lista de Reproducción
        </h3>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          {/* Nombre de la Lista */}
          <div className="mb-3">
            <label htmlFor="playlistName" className="form-label">
              Título
            </label>
            <input
              type="text"
              id="playlistName"
              className="form-control"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Ingresa el nombre de la lista"
              required
            />
          </div>

          {/* Canciones Disponibles */}
          <div className="mb-3">
            <label className="form-label">Canciones disponibles</label>
            <div
              className="border p-3 rounded"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {songs.map((song) => (
                <div key={song.id} className="form-check">
                  <input
                    type="checkbox"
                    id={`song-${song.id}`}
                    className="form-check-input"
                    checked={selectedSongs.includes(song.id)}
                    onChange={() => handleSongSelection(song.id)}
                  />
                  <label
                    htmlFor={`song-${song.id}`}
                    className="form-check-label"
                  >
                    {song.title} - {song.artist}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Botón para crear la lista */}
          <button type="submit" className="btn w-100" style={{background: '#AF4D98', color: "white"}}>
            Crear Lista de Reproducción
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaylistCreatePage;
