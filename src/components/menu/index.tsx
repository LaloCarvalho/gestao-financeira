import React from "react";
import logo from "./assets/logo.png";
import facebookLogo from "./assets/facebook.png";
import instagramLogo from "./assets/instagram.png";
import twitterLogo from "./assets/twitter.png";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { A, AFooter, Div, DivChildren, DivCopyright, DivLogo, Footer, H5, Hr, Img } from "./styles";

const Menu: React.FC = ({ children }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Lorem ipsum
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">              
              <Nav.Link href="#pricing">Transações</Nav.Link>
              <NavDropdown title="Cartões de Crédito" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Contas</Nav.Link>
              <Nav.Link href="#1">Relatórios</Nav.Link>
              <Nav.Link href="#features">Dashboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/signUp">Cadastrar</Nav.Link>
              <Nav.Link href="/signIn">Entrar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <DivChildren>{children}</DivChildren>
      <Footer className="page-footer font-small blue pt-4 bg-dark">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <DivLogo className="col-md-3">
              <H5 className="text-uppercase">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                Lorem ipsum
              </H5>
              Lorem ipsum dolor sit amet, <br />
              Lorem ipsum dolor sit amet
              <br />
              <br />
              +55 85 99999-9999
              <br />
              LoremIpsum@gmail.com
            </DivLogo>
            <div className="col-md-2">
              <H5 className="text-uppercase">Lorem ipsum</H5>
              <ul className="list-unstyled">
                <li>
                  <A href="#!">Link 1</A>
                </li>
                <li>
                  <A href="#!">Link 2</A>
                </li>
                <li>
                  <A href="#!">Link 3</A>
                </li>
                <li>
                  <A href="#!">Link 4</A>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <H5 className="text-uppercase">Lorem ipsum</H5>
              <ul className="list-unstyled">
                <li>
                  <A href="#!">Link 1</A>
                </li>
                <li>
                  <A href="#!">Link 2</A>
                </li>
                <li>
                  <A href="#!">Link 3</A>
                </li>
                <li>
                  <A href="#!">Link 4</A>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <H5 className="text-uppercase">Lorem ipsum</H5>
              <ul className="list-unstyled">
                <li>
                  <A href="#!">Link 1</A>
                </li>
                <li>
                  <A href="#!">Link 2</A>
                </li>
                <li>
                  <A href="#!">Link 3</A>
                </li>
                <li>
                  <A href="#!">Link 4</A>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
            <H5 className="text-uppercase">Siga Lore Ipsum</H5>            
            <A href="#!">
              <Img
                alt=""
                src={facebookLogo}
                width="30"
                height="30"
              />{" "}
            </A>
            <A href="#!">
              <Img
                alt=""
                src={instagramLogo}
                width="30"
                height="30"
              />{" "}
            </A>
            <A href="#!">
              <Img
                alt=""
                src={twitterLogo}
                width="30"
                height="30"
              />{" "}
            </A>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0" />
          </div>
        </div>
        <Hr />
        <Div className="row">
          <DivCopyright className="col-md-4">© 2021 Copyright: Eduardo Diógenes</DivCopyright>
          <div className="col-md-7">
            <AFooter href="#!">Privacy</AFooter>
            <AFooter href="#!">Terms</AFooter>
            <AFooter href="#!">About</AFooter>
            <AFooter href="#!">Sitemap</AFooter>
          </div>
        </Div>
      </Footer>
    </>
  );
};

export default Menu;
