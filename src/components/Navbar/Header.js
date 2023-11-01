import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar className="Nav_bg fixed-top border-bottom" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand to="/" className="d-flex align-items-center">
          <img
            src={require("../../travel.gif")}
            className="logo me-3"
            alt="City Tours Logo"
            style={{ width: "50px", margin: "10px 1" }} 
          />
          <span>Global Odyssey</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto w-100 d-flex justify-content-around fw-bold">
            <NavLink to="/" className="nav-link me-2  ">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link me-2">
              About
            </NavLink>
            <NavLink to="/tour" className="nav-link me-2">
              Tours
            </NavLink>
            <NavLink to="/contact" className="nav-link me-2">
              Contact
            </NavLink>
          </Nav>
            <Link className="text-decoration-none" to="/signup"><Button className=" Sign_in fw-semibold border-0  px-4 py-2 rounded-5 d-flex justify-content-center w-100 ">SignUp</Button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
