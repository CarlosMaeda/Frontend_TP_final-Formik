import React from "react";
import Boton from "../customButtons/Boton";
//import Login from "../../screens/public/login/Login";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CardProduct from "../card/OldCardProduct";

const Banner = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/CarouselProducts");
  };
  return (
    <div className="banner--container">
      <div className="banner--content">
        <div className="banner--title">
          <h1>Te damos la bienvenida a nuestra tienda</h1>
        </div>

        <div className="banner--subtitle">
          <p>ESTA SEMANA</p>
          <p className="discount">20% OFF</p>
        </div>

        <div className="banner--button">
          <Boton text="Ir a la tienda" onClick={handleClick} />
        </div>
      </div>
      <CardProduct />
    </div>
  );
};

export default Banner;
