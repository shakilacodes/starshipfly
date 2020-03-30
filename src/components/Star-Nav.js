import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function StarNav() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <Navbar.Brand className="navbar-brand" href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav mr-auto">
              <Nav>
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/starship-list">
                    All the Starships
                  </Link>
                </li>
              </Nav>
            </ul>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
