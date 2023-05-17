import React from "react";
import "./ProductCard.css";

function ProductCard({ image, name, description, capacity, category }) {
  return (
    <div className="product-car d-flex flex-column align-items-center col-lg-12 col-sm-12 col-12 bg-dark">
      <div className="bg-dark">
        <img
          //ruta para buscar imagen
          className="img"
          src={`http://localhost:3000/img/productos/${image}`}
          alt={name}
        />
      </div>
      <div className="product-text">
        <div className="card-body">
          <h2 className="card-title">
            {name}
          </h2>
          <p className="card-text">{description}</p>
          <div className="card-text d-flex">
            <p className="text-muted text-center w-50">{capacity}</p>
            <strong className="text-muted align-self-center pb-3">|</strong>
            <p className="text-muted text-center w-50">{category}</p>
          </div>
          
        </div>

        <div className="card-footer d-flex justify-content-center">
            <button className="btn btn-primary me-2">Comprar</button>
            <button className="btn btn-warning">Agregar a favoritos</button>
          </div>

      </div>
    </div>
  );
}

export default ProductCard;
