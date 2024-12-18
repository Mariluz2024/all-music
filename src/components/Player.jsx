import React from "react";

const Player = ({ songId }) => {
  if (!songId) {
    return (
      <div className="text-center">
        <h3>Reproductor</h3>
        <p>No hay video seleccionado.</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h3>Reproductor</h3>
      <div className="ratio ratio-16x9">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${songId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Player;
