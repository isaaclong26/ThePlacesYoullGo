import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./css/navbarstyle.css";
import Auth from '../utils/auth';

export default function Header({ handlePageChange }) {
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
          href="/places"
          onClick={() => handlePageChange("Places")}
        >
          Places
        </Nav.Link>
      </Nav.Item>
      {Auth.loggedIn() ? (
        <>

          <Nav.Link
            href="/bucket"
            onClick={() => handlePageChange("Bucket")}
          >
            Bucket List
          </Nav.Link>
          <>

            <Button variant="outline-secondary"
              className="button-login"
              href="/home"
              onClick={Auth.logout}>Logout
            </Button> 
          </>
        </>
      ) : (
        <>
          <Nav.Item>
            <Button variant="outline-secondary"
              className="button-login"
              href="/login"
              onClick={() => handlePageChange("Login")}
            >
              Login
            </Button>
            <Nav.Item>
              <Button variant="outline-secondary"
                className="button-login"
                href="/signup"
                onClick={() => handlePageChange("Signup")}>
                Sign Up
              </Button>
            </Nav.Item>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
}
