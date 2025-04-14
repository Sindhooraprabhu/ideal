import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

const testimonials = [
  {
    name: "Aisha Rao",
    review: "Absolutely love the Gadbad here! Feels like home.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Rohan Shetty",
    review: "Best ice creams in Mangalore! Highly recommended.",
    rating: "⭐⭐⭐⭐"
  }
];

const Testimonials = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Row>
        {testimonials.map((t, index) => (
          <Col md={6} key={index} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{t.name}</Card.Title>
                <Card.Text>{t.review}</Card.Text>
                <Card.Text>{t.rating}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;