import React, { useState } from "react";
import logo from "./assets/logo.png";
import facebookLogo from "./assets/facebook.png";
import instagramLogo from "./assets/instagram.png";
import twitterLogo from "./assets/twitter.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  A,
  AFooter,
  Div,
  DivChildren,
  DivCopyright,
  DivLogo,
  DivSocialMedias,
  DivTermos,
  Footer,
  H5,
  Hr,
  Img,
  navbar,
  navHover,
  navNormal,
} from "./styles";

const Menu: React.FC = ({ children }) => {
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverSignIn, setHoverSignIn] = useState(false);
  const [hoverSignUp, setHoverSignUp] = useState(false);

  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" style={navbar}>
        <Container>
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
            <Nav className="mx-auto ">
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

      <Footer className="page-footer font-small blue pt-4 " style={navbar}>
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <DivLogo className="col-md-4">
              <H5 className="text-uppercase">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                Lorem ipsum
              </H5>
              <p>
                Cuidar do seu dinheiro pode ser <br />
                simples. Você organiza e planeja <br />
                sua vida financeira em um <br />
                único lugar.
              </p>
            </DivLogo>
            <div className="col-md-2">
              <H5 className="text-uppercase">Empresa</H5>
              <ul className="list-unstyled">
                <li>
                  <A href="#!">Sobre</A>
                </li>
                <li>
                  <A href="#!">Direções</A>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <H5 className="text-uppercase">Links Úteis</H5>
              <ul className="list-unstyled">
                <li>
                  <A href="#!">Ouvidoria</A>
                </li>
                <li>
                  <A href="#!">Planos</A>
                </li>
                <li>
                  <A href="#!">Blog</A>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <H5 className="text-uppercase">Suporte</H5>
              <ul className="list-unstyled">
                <li>
                  <A href="#!">Entre em Contato</A>
                </li>
                <li>
                  <A href="#!">Minha Conta</A>
                </li>
                <li>
                  <A href="#!">Pagamentos</A>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />
          </div>
        </div>
        <Hr />
        <Div className="row">
          <DivCopyright className="col-md-5">
            © 2021 Copyright: Eduardo Diógenes
          </DivCopyright>
          <DivTermos className="col-md-4">
            <AFooter href="#!">Política de Privacidade</AFooter>
            <AFooter href="#!">Termos de Uso</AFooter>
            <AFooter href="#!">Sobre</AFooter>
          </DivTermos>
          <DivSocialMedias className="col-md-2 ">
            <Img alt="" src={facebookLogo} width="30" height="30" />
            <Img alt="" src={instagramLogo} width="30" height="30" />
            <Img alt="" src={twitterLogo} width="30" height="30" />
          </DivSocialMedias>
        </Div>
      </Footer>
    </>
  );
};

export default Menu;
