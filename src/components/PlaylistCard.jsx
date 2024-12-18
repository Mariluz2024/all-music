import React from "react";

const PlaylistCard = ({ name, songCount, onClick, onDelete, onEdit }) => {
  return (
    <div
      className="card mb-2 shadow-sm position-relative"
      style={{ cursor: "pointer", minHeight: "100px" }} // Altura mínima
      onClick={onClick}
    >
      <div className="card-body d-flex flex-column justify-content-between">
        {/* Nombre de la playlist */}
        <h5 className="card-title mb-3" style={{ fontSize: 14}}>{name}</h5>

        {/* Cantidad de canciones */}
        <span className="badge bg-primary align-self-start">
          {songCount} canciones
        </span>
      </div>

      {/* Menú contextual: tres puntos verticales */}
      <div
        className="dropdown position-absolute"
        style={{ bottom: "10px", right: "10px" }}
      >
        <button
          className="btn btn-dark btn-sm dropdown-toggle"
          type="button"
          id={`playlistMenu-${name}`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
          onClick={(e) => e.stopPropagation()} // Detener propagación
        >
          <span style={{ fontSize: "1.2rem", verticalAlign: "middle", color: 'black' }}>⋮</span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby={`playlistMenu-${name}`}
        >
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              Delete
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
            >
              Edit
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlaylistCard;
