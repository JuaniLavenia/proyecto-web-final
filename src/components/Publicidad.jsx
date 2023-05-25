import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import publi from "../assets/img/publi.png";
import publi2 from "../assets/img/publi-2.png";
import publi3 from "../assets/img/publi-3.png";
import "./Publicidad.css";

function Publicidad() {
  const [mostrarPublicidad, setMostrarPublicidad] = useState(true);

  const handleCerrarPublicidad = () => {
    setMostrarPublicidad(false);
  };
  return (
    <>
      {mostrarPublicidad && (
        <div className="publicidad">
          <button
            type="button"
            class="btn-close btn-close-white fixed-top"
            aria-label="Cerrar"
            onClick={handleCerrarPublicidad}
          ></button>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={publi} className="img-fluid" alt="" />
              </div>
              <div className="carousel-item">
                <img src={publi2} className="img-fluid" alt="" />
              </div>
              <div className="carousel-item">
                <img src={publi3} className="img-fluid" alt="" />
              </div>
            </div>
            <button
              className="carousel-control-prev "
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
              className="carousel-control-next "
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
            <p className="text-center text-light bg-none mb-0 pb-3">
              *Valido hasta agotar stock, consultar disponibilidad*
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Publicidad;
