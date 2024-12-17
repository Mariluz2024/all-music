import React, { useEffect, useState } from 'react';
import { getData } from '../api'; // Importar la función getData

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]); // Estado para almacenar los datos

  // Llamar a getData al cargar el componente
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await getData('playlists'); // Llamada al endpoint /playlists
        const data = response['data']
        
        setPlaylists(data); // Guardar los datos en el estado
      } catch (error) {
        console.error('Error al obtener las playlists:', error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="containermt-2">
      <ul className="list-unstyled">
        {playlists.map((playlist) => (
          <li key={playlist.id} className="mb-2">
            {playlist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
