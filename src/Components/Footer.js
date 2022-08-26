import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const StyledNavBar = styled(Navbar)`
  background-color: hsl(229, 31%, 21%);
  padding-left: 30px;
`;

const StyledIcons = styled.img`
  width: 25px;
  height: 25px;
`;

const StyledNav = styled(Nav)`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const IconContainer = styled.div`
  display: flex;
  margin-right: 200px;
`;

export default function Footer() {
  const styledLinks = {
    color: "#FFF",
    paddingLeft: "35px",
  };

  const twitterMargin = {
    marginLeft: "50px",
  };

  return (
    <StyledNavBar>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="bookmark logo"
            src="/assets/logo-white.png"
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
            </Nav>
          </StyledNav>
        </Navbar.Collapse>
      </Container>
      <IconContainer>
        <a href="www.facebook.com" target="_blank">
          <StyledIcons src="./assets/icon-facebook.svg" alt="fb logo" />
        </a>
        <a href="www.twitter.com" target="_blank">
          <StyledIcons
            style={twitterMargin}
            src="./assets/icon-twitter.svg"
            alt="twitter 
            logo"
          />
        </a>
      </IconContainer>
    </StyledNavBar>
  );
}
