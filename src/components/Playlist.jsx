import React, { useEffect, useState } from "react";
import { getDataDetails, deleteSongFromPlaylist } from "../api";
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

  // boton que responde a eliminar
  const handleRemoveFromPlaylist = async (songId) => {
    console.log("songId", songId);
    await deleteSongFromPlaylist(playlistId, songId);

    setPlaylist((prevPlaylist) => ({
      ...prevPlaylist,
      songs: prevPlaylist.songs.filter((song) => song.id !== songId),
    }));
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
              songId={song.id}
              removeFromPlaylist={handleRemoveFromPlaylist}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
