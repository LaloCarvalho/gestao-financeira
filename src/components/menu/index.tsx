import React, { useState } from "react";
import logo from "./assets/logo.png";
import facebookLogo from "./assets/facebook.png";
import instagramLogo from "./assets/instagram.png";
import twitterLogo from "./assets/twitter.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  A,
  Div,
  DivChildren,
  DivCopyright,
  DivLogo,
  DivSocialMedias,
  Footer,
  H5,
  H5Logo,
  Hr,
  Img,
  Li,
  navbar,
  navHover,
  navNormal,
  PDescription,
  Con,
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

      <Footer className="page-footer font-small blue pt-4 " style={navbar}>
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <DivLogo className="col-md-3">
              <H5Logo className="text-uppercase">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  className="d-inline-block align-top"
                />
                Entrada Direta
              </H5Logo>
              <PDescription>
                Cuidar do seu dinheiro pode ser <br />
                simples. Você organiza e planeja <br />
                sua vida financeira em um <br />
                único lugar.
              </PDescription>
            </DivLogo>
            <div className="col-md-2">
              <H5 className="text-uppercase">Empresa</H5>
              <ul className="list-unstyled">
              <Li>
                  <A href="#!">Direções</A>
                </Li>
                <Li>
                  <A href="#!">Sobre</A>
                </Li>                
                <Li>
                  <A href="#!">Política de Privacidade</A>
                </Li>
                <Li>
                  <A href="#!">Termos de Uso</A>
                </Li>
              </ul>
            </div>
            <div className="col-md-2">
              <H5 className="text-uppercase">Links Úteis</H5>
              <ul className="list-unstyled">
                <Li>
                  <A href="#!">Ouvidoria</A>
                </Li>
                <Li>
                  <A href="#!">Planos</A>
                </Li>
                <Li>
                  <A href="#!">Blog</A>
                </Li>
              </ul>
            </div>
            <div className="col-md-2">
              <H5 className="text-uppercase">Suporte</H5>
              <ul className="list-unstyled">
                <Li>
                  <A href="#!">Entre em Contato</A>
                </Li>
                <Li>
                  <A href="#!">Minha Conta</A>
                </Li>
                <Li>
                  <A href="#!">Pagamentos</A>
                </Li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />
          </div>
        </div>
        <Hr />
        <Div className="row">
          <DivCopyright className="col-md-6">
            © 2021 Copyright: Eduardo Diógenes
          </DivCopyright>
          <DivSocialMedias className="col-md-5 ">
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
