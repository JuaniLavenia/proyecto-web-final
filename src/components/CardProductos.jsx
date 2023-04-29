function CardProductos({ image, title, description }) {
  return (
    <div className="card m-3 bg-dark text-light">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary me-2">Comprar</button>
        <button className="btn btn-warning">Agregar a favoritos</button>
      </div>
    </div>
  );
}
export default CardProductos;
