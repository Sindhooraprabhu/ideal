import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

const initialCart = [
  {
    id: 1,
    name: "Gadbad Ice Cream",
    price: 120,
    quantity: 1,
    img: "/gudbud.jpeg"
  },
  {
    id: 2,
    name: "Choco Lava Cake",
    price: 90,
    quantity: 2,
    img: "/chocoLavacake.jpeg"
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      <Row>
        {cartItems.map(item => (
          <Col md={6} key={item.id} className="mb-4">
            <Card className="d-flex flex-row align-items-center p-2">
              <Card.Img src={item.img} style={{ width: "100px" }} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>₹{item.price}</Card.Text>
                <div className="d-flex align-items-center">
                  <Button variant="outline-secondary" onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button variant="outline-secondary" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <h5>Order Summary</h5>
              <p>Total: ₹{totalAmount}</p>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Delivery Option</Form.Label>
                  <Form.Select>
                    <option>Dine-in</option>
                    <option>Takeaway</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="success" type="submit" className="w-100">Place Order</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;