import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

const dishes = [
  {
    name: "Gadbad Ice Cream",
    desc: "Our most loved layered dessert.",
    img: "/gudbud.jpeg"
  },
  {
    name: "Choco Lava Cake",
    desc: "Delicious molten center cake.",
    img: "/chocoLavacake.jpeg"
  },
  {
    name: "Fruit Sundae",
    desc: "Fresh fruits topped with creamy scoops.",
    img: "fruitduandae.jpeg"
  }
];

const PopularDishes = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Popular Dishes</h2>
      <Row>
        {dishes.map((dish, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={dish.img} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularDishes;