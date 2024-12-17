import axios from "axios";

const BASE_URL = "http://localhost:3000";

// GET: Obtener datos
export const getData = (endpoint) => axios.get(`${BASE_URL}/${endpoint}`);

// POST: Crear un recurso
export const postData = (endpoint, data) =>
  axios.post(`${BASE_URL}/${endpoint}`, data);

// PUT: Actualizar un recurso
export const putData = (endpoint, id, data) =>
  axios.put(`${BASE_URL}/${endpoint}/${id}`, data);

// DELETE: Eliminar un recurso
export const deleteData = (endpoint, id) =>
  axios.delete(`${BASE_URL}/${endpoint}/${id}`);
