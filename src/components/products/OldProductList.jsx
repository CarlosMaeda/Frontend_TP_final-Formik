import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getProducts } from "../../fetching/product.fetching";

const OldProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((productos) => {
        setProducts(productos);
        setLoading(false);
        console.log("useEffect", productos);
        console.log("useState", products);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Lista de productos</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.map((product) => {
            return (
              <div
                key={product.Producto_ID}
                className="card"
                style={{ width: "20rem" }}
              >
                <img
                  className="card-img-top"
                  src={product.Imagen}
                  alt={product.Nombre}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.Nombre}</h5>
                  <p>
                    <b>Código: </b> {product.Codigo}
                  </p>
                  <p className="card-text">{product.Descripcion}</p>
                  <span>
                    <b> $ </b>
                    {` ${product.Precio}`}
                  </span>
                  <Link
                    className="btn btn-primary"
                    to={`/details/${product.Producto_ID}`}
                  >
                    Detalles
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OldProductList;
