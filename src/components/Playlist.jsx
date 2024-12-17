import React from "react";

const Playlist = ({ songs }) => {
  return (
    <div>
      <h5>Listas de reproducción</h5>
      <ul className="list-unstyled">
        <li>Lista 1</li>
        <li>Lista 2</li>
        <li>Lista 3</li>
      </ul>
    </div>
  );
};

export default Playlist;
