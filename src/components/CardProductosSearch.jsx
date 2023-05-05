import "./CardProductosSearch.css";

function CardProductos({ image, name, description, muted, category }) {
  return (
    <div className="card m-3 bg-dark text-light ">
      <img src={image} className="card-img-top imgCard d-flex" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="card-text d-flex">
          <p className="text-muted text-center w-50">{muted}</p>
          <strong className="text-muted align-self-center pb-3">|</strong>
          <p className="text-muted text-center w-50">{category}</p>
        </div>
      </div>
      <div className="card-footer ">
        <button className="btn btn-primary me-2">Comprar</button>
        <button className="btn btn-warning">Agregar a favoritos</button>
      </div>
    </div>
  );
}
export default CardProductos;
