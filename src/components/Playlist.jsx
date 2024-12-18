import React, { useEffect, useState } from "react";
import { getDataDetails } from "../api";
import SongCard from "./SongCard";

const Playlist = ({ playlistId = 1, onPlay }) => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const fetchPlaylistDetail = async () => {
      try {
        const response = await getDataDetails("playlists", playlistId);
        setPlaylist(response["data"]);
      } catch (error) {
        console.error("Error al obtener la playlist:", error);
      }
    };

    fetchPlaylistDetail();
  }, [playlistId]);

  if (!playlist) {
    return <div className="text-center mt-3">Cargando playlist...</div>;
  }

  const play = (id) => {
    onPlay(id);
  };

  return (
    <div className="container mt-3">
      <h4 className="mb-3 fw-bold">{playlist.name}</h4>
      <div>
        {playlist.songs.map((song) => (
          <div key={song.id} onClick={() => play(song.id)}>
            <SongCard
              image={song.image || "https://via.placeholder.com/80"}
              title={song.title}
              artist={song.artist}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
