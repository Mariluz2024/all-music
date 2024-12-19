import axios from "axios";
const apiUrl = import.meta.env.VITE_SERVER_URL;

const BASE_URL = apiUrl;

// GET: Obtener datos
// trae todos los datos de canciones y de listas, del server
export const getData = (endpoint) => axios.get(`${BASE_URL}/${endpoint}`);

export const getDataDetails = (endpoint, id) =>
  axios.get(`${BASE_URL}/${endpoint}/${id}/details`);

// POST: Crear un recurso
export const postData = (endpoint, data) =>
  axios.post(`${BASE_URL}/${endpoint}`, data);

// PUT: Actualizar un recurso
export const putData = (endpoint, id, data) =>
  axios.put(`${BASE_URL}/${endpoint}/${id}`, data);

// DELETE: Eliminar un recurso
export const deleteData = (endpoint, id) =>
  axios.delete(`${BASE_URL}/${endpoint}/${id}`);

// DELETE: Eliminar un recurso
export const deleteSongFromPlaylist = (playlistId, songId) =>
  axios.delete(`${BASE_URL}/playlist/${playlistId}/remove-song/${songId}`);
