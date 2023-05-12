import { Link } from "react-router-dom";
import "./Banner.css"
import interiores from "../assets/img/interiores.jpg"
import exteriores from "../assets/img/exteriores.png"
import lineaindustrial from "../assets/img/linea-industrial.jpg"
import lineaprofesional from "../assets/img/linea-profesional.jpg"
import perfumes from "../assets/img/perfumes.png"

function Banner() {
  
    return (
        < section className="d-flex align-items-center flex-column conteinerBanner" >
            <div className="text-white col-6 m-2 card-banner imgBan">
                <img src={interiores} className="card-img" />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <Link className="imgBanTexto" to="/productos/category/:category">INTERIORES</Link>
                </div>
            </div>

            <div className="text-white col-6 m-2 card-banner imgBan">
                <img src={exteriores} className="card-img" />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <Link className="imgBanTexto" to="/productos/category/:category">INTERIORES</Link>
                </div>
            </div>

            <div className="text-white col-6 m-2 card-banner imgBan">
                <img src={lineaindustrial} className="card-img" />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <Link className="imgBanTexto" to="/productos/category/:category">INTERIORES</Link>
                </div>
            </div>

            <div className="text-white col-6 m-2 card-banner imgBan">
                <img src={lineaprofesional} className="card-img" />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <Link className="imgBanTexto" to="/productos/category/:category">INTERIORES</Link>
                </div>
            </div>

            <div className="text-white col-6 m-2 card-banner imgBan">
                <img src={perfumes} className="card-img" />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <Link className="imgBanTexto" to="/productos/category/:category">INTERIORES</Link>
                </div>
            </div>
        </section >
    )

}

export default Banner;
