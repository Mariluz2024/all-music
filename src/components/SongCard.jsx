import React from "react";

const SongCard = ({ image, title, artist, songId, removeFromPlaylist }) => {
  return (
    <div
      className="d-flex align-items-center bg-dark text-white p-2 mb-2 rounded position-relative"
      style={{ cursor: "pointer" }}
    >
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

      {/* Menú contextual */}
      <div
        className="dropdown position-absolute"
        style={{ bottom: "10px", right: "10px" }}
      >
        <button
          className="btn btn-dark btn-sm dropdown-toggle"
          type="button"
          id="songMenu"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
          onClick={(e) => e.stopPropagation()} // Detener propagación
        >
          <span style={{ fontSize: "1.2rem", verticalAlign: "middle" }}>⋮</span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="songMenu"
        >
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => {
                e.stopPropagation();
                removeFromPlaylist(songId)
              }}
            >
              Eliminar
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => {
                e.stopPropagation();
                alert("Opción 2 seleccionada");
              }}
            >
              Opción 2
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => {
                e.stopPropagation();
                alert("Opción 3 seleccionada");
              }}
            >
              Opción 3
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SongCard;
