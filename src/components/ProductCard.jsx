import React from "react";

function ProductCard({ image, name, description, capacity, category }) {
  return (
    <div className="row bg-dark">
      <div className="col-sm-4 bg-dark">
        <img
          //ruta para buscar imagen
          className="d-flex justify-content-center"
          src={`http://localhost:3000/img/productos/${image}`}
          alt={name}
        />
      </div>
      <div className="col-sm-8">
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="card-text d-flex">
            <p className="text-muted text-center w-50">{capacity}</p>
            <strong className="text-muted align-self-center pb-3">|</strong>
            <p className="text-muted text-center w-50">{category}</p>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary me-2">Comprar</button>
          <button className="btn btn-warning">Agregar a favoritos</button>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;