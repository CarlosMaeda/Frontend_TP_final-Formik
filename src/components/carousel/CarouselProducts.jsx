import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel"; // Import Bootstrap Carousel
import "./carouselProducts.css";
import CarouselItem from "react-bootstrap/esm/CarouselItem";

const CarouselProducts = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSelect = (selectedIndex, event) => {
    setCurrentSlide(selectedIndex);
  };

  return (
    <Carousel
      className="horizontal-carousel"
      activeIndex={currentSlide}
      onSelect={handleSelect}
    >
      {products.map((product) => (
        <CarouselItem key={product.Producto_ID}>
          <img
            className="d-block w-100"
            src={product.Imagen} // Use product data for image source
            alt={product.Nombre}
          />
          <Carousel.Caption>
            <h3>{product.Nombre}</h3>
            <p>{product.Descripcion.slice(0, 100)}...</p>{" "}
            {/* Truncate description */}
          </Carousel.Caption>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default CarouselProducts;
