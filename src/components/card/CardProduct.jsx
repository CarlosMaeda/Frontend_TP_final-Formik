import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={product.Imagen} // Use product data for image source
        className="card-img-top"
        alt={product.Nombre}
      />
      <div className="card-body">
        <h5 className="card-title">{product.Nombre}</h5>
        <p className="card-text">{product.Descripcion}</p>
        <span>
          <b>$</b> {product.Precio}
        </span>{" "}
        {/* Format price with two decimal places */}
        <Link
          className="btn btn-primary"
          to={`/details/${product.Producto_ID}`}
        >
          Detalles
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
