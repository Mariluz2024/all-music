import React from "react";

const PlaylistCard = ({ name, songCount, onClick }) => {
  return (
    <div
      className="card mb-2 shadow-sm"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        {/* Nombre de la playlist */}
        <h5 className="card-title mb-0">{name}</h5>

        {/* Cantidad de canciones */}
        <span className="badge bg-primary">{songCount} canciones</span>
      </div>
    </div>
  );
};

export default PlaylistCard;
