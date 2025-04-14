import React from "react";
import { Carousel } from "react-bootstrap";

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/CAROUSEL1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Award-Winning Flavors</h3>
          <p>Try our famous Gadbad Ice Cream!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/CAROUSEL2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Chill with Choco Sundae</h3>
          <p>Made with premium Belgian chocolate.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;