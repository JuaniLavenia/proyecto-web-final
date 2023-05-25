function CardIntegrantes({ imagenSrc, nombre, descripcion }) {
  return (
    <div className="card bg-dark border-none h-100">
      <div className="imgProfile">
        <img
          src={imagenSrc}
          className="card-img-top img-fluid"
          alt="Foto de perfil"
        />
      </div>

      <div className="card-body aboutBody">
        <h3 className="card-title namesAbout">{nombre}</h3>
      </div>
      <div className="card-footer">
        <p className="card-text descAbout text-center">{descripcion}</p>
      </div>
    </div>
  );
}
export default CardIntegrantes;
