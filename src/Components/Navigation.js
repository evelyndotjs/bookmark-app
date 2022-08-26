import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const StyledNav = styled(Nav)`
  margin-left: auto;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

export default function Navigation() {
  const styledLoginLink = {
    width: "90px",
    textAlign: "center",
    borderRadius: "5px",
    marginLeft: "35px",
  };

  const styledLinks = {
    paddingLeft: "35px",
  };

  const styledNavMargin = {
    marginTop: "20px",
  };

  return (
    <Navbar style={styledNavMargin}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/assets/logo-bookmark.svg"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <StyledNav>
            <Nav className="me-auto">
              <Nav.Link className="links" href="#features" style={styledLinks}>
                Features
              </Nav.Link>
              <Nav.Link className="links" href="#faq" style={styledLinks}>
                FAQ
              </Nav.Link>
              <Nav.Link className="links" href="#contact" style={styledLinks}>
                Contact
              </Nav.Link>
              <Nav.Link
                href="#login"
                style={styledLoginLink}
                className="btn-danger"
              >
                Login
              </Nav.Link>
            </Nav>
          </StyledNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
