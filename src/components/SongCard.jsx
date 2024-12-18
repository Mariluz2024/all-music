import React from "react";

const SongCard = ({ image, title, artist }) => {
  return (
    <div className="d-flex align-items-center bg-dark text-white p-2 mb-2 rounded">
      {/* Imagen */}
      <div className="me-3">
        <img
          src={image}
          alt={title}
          className="rounded"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
      </div>

      {/* Información de la canción */}
      <div>
        <h5 className="mb-0">{title}</h5>
        <p className="mb-0 text-info">{artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
