import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./navbarstyle.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <Nav className="justify-content-center">
          <Nav.Item>
            <a
              className="nav-link"
              href="#places"
              onClick={() => handlePageChange("Places")}
            >
              Places
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              className="nav-link"
              href="#profile"
              onClick={() => handlePageChange("Profile")}
            >
              Profile
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              className="nav-link"
              href="#bucketlist"
              onClick={() => handlePageChange("Bucket List")}
            >
              Bucket List
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              className="nav-link"
              href="#login"
              onClick={() => handlePageChange("Login")}
            >
              Login
            </a>
          </Nav.Item>
    </Nav>
  );
}