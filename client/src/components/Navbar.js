import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./css/navbarstyle.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <Nav className="justify-content-center main-nav">
      <Nav.Item>
            <Nav.Link
              href="/"
              onClick={() => handlePageChange("Home")}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#places"
              onClick={() => handlePageChange("Places")}
            >
              Places
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#profile"
              onClick={() => handlePageChange("Profile")}
            >
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#bucket"
              onClick={() => handlePageChange("Bucket")}
            >
              Bucket List
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button variant="outline-secondary"
            className="button-login"
              href="/login"
              onClick={() => handlePageChange("Login")}
            >
              Login
            </Button>
          </Nav.Item>
    </Nav>
  );
}
