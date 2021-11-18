import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./navbarstyle.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a
        className="navbar-brand fs-2 fw-bold"
        href="#/"
        onClick={() => handlePageChange("Places")}
      >
        The Places You'll Go
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler8"
        aria-controls="navbarToggler8"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler8">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#places"
              onClick={() => handlePageChange("Places")}
            >
              Places
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#profile"
              onClick={() => handlePageChange("Profile")}
            >
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#bucketlist"
              onClick={() => handlePageChange("Bucket List")}
            >
              Bucket List
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#login"
              onClick={() => handlePageChange("Login")}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}