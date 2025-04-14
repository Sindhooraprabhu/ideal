import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="my-5">
      {/* Hero Carousel */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <img className="d-block w-100" src="/gudbud.jpeg" alt="Gadbad Ice Cream" height="400" />
          <Carousel.Caption>
            <h3>Award-Winning Gadbad Ice Cream</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/chocoLavacake.jpeg" alt="Chocolate Shake" height="400" />
          <Carousel.Caption>
            <h3>Delicious Chocolate Shakes</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Popular Dishes */}
      <h2 className="text-center mb-4">Popular Dishes</h2>
      <Row className="mb-5">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/gudbud.jpeg"height={300} />
            <Card.Body>
              <Card.Title>Gadbad Ice Cream</Card.Title>
              <Card.Text>A colorful sundae with layers of fruits and nuts.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/vanilla.jpg"height={300} />
            <Card.Body>
              <Card.Title>Vanilla Cone</Card.Title>
              <Card.Text>Classic vanilla cone with rich flavor and smooth texture.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/samosa.jpg"height={300} />
            <Card.Body>
              <Card.Title>Samosa</Card.Title>
              <Card.Text>Crispy, spicy Indian snack perfect as a side.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Customer Testimonials */}
      <h2 className="text-center mb-4">Customer Testimonials</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Rajesh Kumar</Card.Title>
              <Card.Text>“The Gadbad Ice Cream is unmatched! A must-visit place in Mangalore.”</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Sneha Rao</Card.Title>
              <Card.Text>“Amazing ambience and top-notch service. Loved every bit of it!”</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;