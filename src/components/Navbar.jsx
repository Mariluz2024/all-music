import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ background: "#AF4D98" }}
    >
      <div className="container-fluid d-flex align-items-center">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          {/* Logo */}
          <img
            src="/logo.png" // Replace with your actual image path
            alt="Logo"
            style={{
              width: "30px",
              height: "30px",
              objectFit: "contain",
              marginRight: "10px",
            }}
          />
          All Music
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/songs/search">
                Search Songs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/playlist/create">
                Create Playlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
