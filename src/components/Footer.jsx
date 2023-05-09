import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";
import logofot from "../assets/img/logo4.png";

function Footer() {
  return (
    <>
      <footer className="foot w-100">
        <div className="d-flex justify-content-around row text-center me-0">
          <div className="col-lg-4 col-sm-12">
            <h5 className="text-white mt-4">Contacto</h5>
            <div className="d-flex justify-content-center mt-2">
              <p className="text-white fw-bold me-1">Dirección:</p>
              <i className="text-white ms-2">
                Juan Manuel de Rosas 345, Tucumán
              </i>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-white fw-bold ms-3">Whatsapp:</p>
              <i className="text-white ms-2">(381) - 2026631</i>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-white fw-bold ms-4">E-Mail:</p>
              <i className="text-white ms-2">rolling_detailing@gmail.com</i>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="mt-1">
              <img src={logofot} alt="" />
            </div>
            <div className="text-center pb-2">
              <Link to="/">
                <FontAwesomeIcon className="fa-3x m-2" icon={faWhatsapp} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon className="fa-3x m-2" icon={faInstagram} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon className="fa-3x m-2" icon={faFacebook} />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <h5 className="text-white mt-4 mb-3">Información</h5>
            <Link to="">
              <p className="text-white">Medios de Pago</p>
            </Link>

            <Link to="">
              <p className="text-white">Trabajá con Nosotros</p>
            </Link>
            <Link to="">
              <p className="text-white">Política de Privacidad</p>
            </Link>
          </div>
        </div>
        <div className="copy text-white d-flex justify-content-center mt-3">
          <p className="fw-bold me-1">©RollingDetailing 2023</p>
          <i>- Todos los derechos reservados</i>
        </div>
      </footer>
    </>
  );
}

export default Footer;
