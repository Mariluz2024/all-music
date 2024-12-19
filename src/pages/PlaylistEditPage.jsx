import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataDetails, getData, putData } from "../api";

const PlaylistEditPage = () => {
  const { id } = useParams(); // Playlist ID from URL
  const [playlistName, setPlaylistName] = useState("");
  const [availableSongs, setAvailableSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const navigate = useNavigate();

  // Fetch playlist details and available songs
  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        // Fetch playlist details
        const playlistResponse = await getDataDetails("playlists", id);
        setPlaylistName(playlistResponse.data.name);
        setSelectedSongs(playlistResponse.data.songs.map((song) => song.id));

        // Fetch available songs
        const songsResponse = await getData("videos");
        setAvailableSongs(songsResponse.data);
      } catch (error) {
        console.error("Error loading data:", error);
        alert("Failed to load playlist data.");
        navigate("/");
      }
    };

    fetchPlaylistData();
  }, [id, navigate]);

  // Handle song selection toggle
  const handleSongSelection = (songId) => {
    setSelectedSongs((prevSelected) =>
      prevSelected.includes(songId)
        ? prevSelected.filter((id) => id !== songId)
        : [...prevSelected, songId]
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!playlistName || selectedSongs.length === 0) {
      alert("Please provide a playlist name and select at least one song.");
      return;
    }

    const updatedPlaylist = {
      name: playlistName,
      videos: selectedSongs, // Selected song IDs
    };

    try {
      await putData("playlists", id, updatedPlaylist);
      alert("Playlist updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating playlist:", error);
      alert("Failed to update playlist.");
    }
  };

  return (
    <div className="row m-0 vh-100 justify-content-center align-items-center">
      <div className="col-md-8 bg-light p-5 rounded shadow">
        <h3 className="fw-bold mb-4 text-center">Edit Playlist</h3>

        <form onSubmit={handleSubmit}>
          {/* Playlist Name */}
          <div className="mb-3">
            <label htmlFor="playlistName" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="playlistName"
              className="form-control"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Enter playlist name"
              required
            />
          </div>

          {/* Available Songs */}
          <div className="mb-3">
            <label className="form-label">Available Songs</label>
            <div
              className="border p-3 rounded"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {availableSongs.map((song) => (
                <div key={song.id} className="form-check">
                  <input
                    type="checkbox"
                    id={`song-${song.id}`}
                    className="form-check-input"
                    checked={selectedSongs.includes(song.id)}
                    onChange={() => handleSongSelection(song.id)}
                    style={{ accentColor: '#ff69b4' }} 
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

          {/* Save Changes Button */}
          <button type="submit" className="btn w-100" style={{background: '#AF4D98', color: "white"}}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaylistEditPage;
