import React, { useState } from "react";
import logo from "./assets/logo.png";
import facebookLogo from "./assets/facebook.png";
import instagramLogo from "./assets/instagram.png";
import twitterLogo from "./assets/twitter.png";
import youtubeLogo from "./assets/youtube.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  A,
  DivChildren,
  DivCopyright,
  DivLogo,
  DivSocialMedias,
  Footer,
  H5Logo,
  Img,
  Li,
  navbar,
  navHover,
  navNormal,
  PDescription,
  Con,
  Ul,
  ImgFooter,
} from "./styles";

const Menu: React.FC = ({ children }) => {
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverSignIn, setHoverSignIn] = useState(false);
  const [hoverSignUp, setHoverSignUp] = useState(false);
  const [hoverPlans, setHoverPlans] = useState(false);
  const [hoverProduct, setHoverProduct] = useState(false);
  const [hoverContent, setHoverContent] = useState(false);
  
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" style={navbar}>
        <Container style={Con}>
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
                style={hoverHome ? navHover : navNormal}
                href="/"
              >
                Início
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => {
                  setHoverPlans(true);
                }}
                onMouseLeave={() => {
                  setHoverPlans(false);
                }}
                style={hoverPlans ? navHover : navNormal}
                href="/"
              >
                Planos
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => {
                  setHoverProduct(true);
                }}
                onMouseLeave={() => {
                  setHoverProduct(false);
                }}
                style={hoverProduct ? navHover : navNormal}
                href="/"
              >
                Produto
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => {
                  setHoverContent(true);
                }}
                onMouseLeave={() => {
                  setHoverContent(false);
                }}
                style={hoverContent ? navHover : navNormal}
                href="/"
              >
                Conteúdo
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => {
                  setHoverContact(true);
                }}
                onMouseLeave={() => {
                  setHoverContact(false);
                }}
                style={hoverContact ? navHover : navNormal}
                href="/contact"
              >
                Contato
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => {
                  setHoverAbout(true);
                }}
                onMouseLeave={() => {
                  setHoverAbout(false);
                }}
                style={hoverAbout ? navHover : navNormal}
                href="/about"
              >
                Sobre
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
                style={hoverSignUp ? navHover : navNormal}
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
                style={hoverSignIn ? navHover : navNormal}
                href="/signIn"
              >
                Entrar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <DivChildren>{children}</DivChildren>

      <Footer style={navbar}>
        <DivLogo >
          <H5Logo >
            <ImgFooter alt="" src={logo}/>
            &nbsp;Entrada Direta
          </H5Logo>
          <PDescription>
            Cuidar do seu dinheiro pode ser simples. <br />
            Você organiza e planeja sua vida financeira em um 
            único lugar.
          </PDescription>
        </DivLogo>
        <Ul>
          <Li>
            <A href="#!">Termos de Uso</A>
          </Li>
          <Li>
            <A href="#!">Entre em Contato</A>
          </Li>                
          <Li>
            <A href="#!">Política de Privacidade</A>
          </Li>
          <Li>
            <A href="#!">Mapa do Site</A>
          </Li>
        </Ul>
        <DivCopyright>
          © 2021 Copyright: Eduardo Diógenes
        </DivCopyright>
        <DivSocialMedias>
          <Img alt="" src={facebookLogo}/>
          <Img alt="" src={instagramLogo}/>
          <Img alt="" src={twitterLogo}/>
          <Img alt="" src={youtubeLogo}/>
        </DivSocialMedias>
      </Footer>
    </>
  );
};

export default Menu;
