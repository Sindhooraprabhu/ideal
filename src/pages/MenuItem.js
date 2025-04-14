import React from "react";
import { Card, Button } from "react-bootstrap";

const MenuItem = ({ item, onAddToCart }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img
        variant="top"
        src={item.img}
        alt={item.name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }} // 👈 uniform image size
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text><strong>₹{item.price}</strong></Card.Text>
        <Button variant="primary" onClick={() => onAddToCart(item)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;
