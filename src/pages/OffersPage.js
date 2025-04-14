// pages/OffersPage.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const OffersPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Latest Offers</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" width={50}height={100} src="/happy.jpg" />
            <Card.Body>
              <Card.Title>Happy Hours 🍨</Card.Title>
              <Card.Text>20% off on ice creams from 4 PM to 6 PM!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top"width={50}height={100} src="/combo.jpg" />
            <Card.Body>
              <Card.Title>Combo Delight</Card.Title>
              <Card.Text>Buy snack + ice cream combo & get a free drink!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" width={50}height={100} src="/summer.jpg" />
            <Card.Body>
              <Card.Title>Summer Special 🌞</Card.Title>
              <Card.Text>Refreshing mango sundae only for summer.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OffersPage;

