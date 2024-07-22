import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getProducts } from "../../fetching/product.fetching";
import CardProduct from "../card/CardProduct";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((productos) => {
        setProducts(productos);
        setLoading(false);
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
        <p>Cargando...</p>
      ) : (
        <div className="product-grid">
          {" "}
          {/* Agregar una clase de contenedor */}
          {products.map((product) => (
            <CardProduct key={product.Producto_ID} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
