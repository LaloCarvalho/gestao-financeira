import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Con, DivImg, Img, ImgCarousel, row } from "./styles";
import imagem1 from "./assets/imagem1.jpg";
import imagem2 from "./assets/imagem2.png";
import imagem3 from "./assets/imagem3.jpg";

const Home: React.FC = () => {
  return (
    <Container style={Con}>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <ImgCarousel
            src={imagem1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <ImgCarousel
            src={imagem2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <ImgCarousel
            src={imagem3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <DivImg >
        <Img
          src={imagem3}
          alt="Third slide"
        />
        </DivImg>
        <Row >        
        <Col md={4}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Col>
        <Col md={4}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Col>
        <Col md={2}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Col>
        <Col md={2}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Col>
        </Row>
    </Container>
  );
};

export default Home;
