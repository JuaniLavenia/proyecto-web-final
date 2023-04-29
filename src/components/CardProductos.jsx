import React from "react";

function ProductCard({ image, title, description }) {
  return (
    <div className="card m-3">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary me-2">Comprar</button>
        <button className="btn btn-outline-secondary">
          Agregar a favoritos
        </button>
      </div>
    </div>
  );
}

function ProductList() {
  const products = [
    {
      id: 1,
      title: "Producto 1",
      description: "Descripción del Producto 1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Producto 2",
      description: "Descripción del Producto 2",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Producto 3",
      description: "Descripción del Producto 3",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Producto 4",
      description: "Descripción del Producto 4",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Producto 5",
      description: "Descripción del Producto 5",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Producto 6",
      description: "Descripción del Producto 5",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section>
      <div className="container py-5">
        <h1>Productos</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
