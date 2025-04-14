import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import MenuItem from "../pages/MenuItem";

const menuData = [
  { id: 1, name: "Gadbad Ice Cream", category: "Ice Creams", price: 120, description: "Mixed flavor sundae", img: "/gudbud.jpeg" },
  { id: 2, name: "Chocolate Shake", category: "Beverages", price: 90, description: "Rich and creamy", img: "/choco.jpg" },
  { id: 3, name: "Vanilla Cone", category: "Ice Creams", price: 50, description: "Classic cone", img: "/vanilla.jpg" },
  { id: 4, name: "Samosa", category: "Snacks", price: 25, description: "Crispy Indian snack", img:"/samosa.jpg" }
];

const MenuPage = () => {
  const [category, setCategory] = useState("All");

  const filteredItems = category === "All" ? menuData : menuData.filter(item => item.category === category);

  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      <Form.Select onChange={(e) => setCategory(e.target.value)} className="mb-4">
        <option value="All">All</option>
        <option value="Ice Creams">Ice Creams</option>
        <option value="Desserts">Desserts</option>
        <option value="Beverages">Beverages</option>
        <option value="Snacks">Snacks</option>
      </Form.Select>
      <Row>
        {filteredItems.map(item => (
          <Col md={4} key={item.id}>
            <MenuItem item={item} onAddToCart={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuPage;
