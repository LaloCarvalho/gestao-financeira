import React, { useState } from "react";
import logo from "./assets/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import * as S from "./styles";

const GenericMenu: React.FC = () => {
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverSignIn, setHoverSignIn] = useState(false);
  const [hoverSignUp, setHoverSignUp] = useState(false);
  const [hoverTESTE, setHoverTESTE] = useState(false);

  return (
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={S.navbar}
      >
        <Container style={S.Con}>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link
                onMouseEnter={() => {
                  setHoverHome(true);
                }}
                onMouseLeave={() => {
                  setHoverHome(false);
                }}
                style={hoverHome ? S.navHover : S.navNormal}
                href="/"
              >
                Início
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => {
                  setHoverContact(true);
                }}
                onMouseLeave={() => {
                  setHoverContact(false);
                }}
                style={hoverContact ? S.navHover : S.navNormal}
                href="/contact"
              >
                Contato
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => {
                  setHoverTESTE(true);
                }}
                onMouseLeave={() => {
                  setHoverTESTE(false);
                }}
                style={hoverTESTE ? S.navHover : S.navNormal}
                href="/credicardRegister"
              >
                TESTE
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                onMouseEnter={() => {
                  setHoverSignUp(true);
                }}
                onMouseLeave={() => {
                  setHoverSignUp(false);
                }}
                style={hoverSignUp ? S.navHover : S.navNormal}
                href="/signUp"
              >
                Cadastrar
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => {
                  setHoverSignIn(true);
                }}
                onMouseLeave={() => {
                  setHoverSignIn(false);
                }}
                style={hoverSignIn ? S.navHover : S.navNormal}
                href="/signIn"
              >
                Entrar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default GenericMenu;
