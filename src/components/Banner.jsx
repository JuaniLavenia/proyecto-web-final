import { Link } from "react-router-dom";
import "./Banner.css";
import { useEffect, useState } from "react";

function Banner({ imagen, categoria }) {
  const [estado, setEstado] = useState({ categoria: "" });

  useEffect(() => {
    setEstado({ categoria });
  });

  return (
    <section className="d-flex align-items-center flex-column conteinerBanner">
      <div className="text-white col-6 card-banner imgBan">
        <img src={imagen} className="card-img" />
        <div className="card-img-overlay d-flex align-items-center justify-content-center">
          <Link
            className="text"
            to={`/productos/category/${encodeURIComponent(categoria)}`}
          >
            {categoria}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
