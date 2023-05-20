import publi from "../assets/img/publi.png";
import publi2 from "../assets/img/publi-2.png";
import publi3 from "../assets/img/publi-3.png";

function Publicidad() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide bg-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={publi} className="img-fluid w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={publi2} className="img-fluid w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={publi3} className="img-fluid w-100" alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <p className="text-center text-light bg-dark mb-0 pb-3">
        *Valido hasta agotar stock, consultar disponibilidad*
      </p>
    </>
  );
}

export default Publicidad;
