import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa estilos de Bootstrap 5
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa JavaScript de Bootstrap 5
import "./index.css"; // Tus estilos personalizados

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
