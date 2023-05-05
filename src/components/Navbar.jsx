import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import "material-icons/iconfont/material-icons.css";
import Login from "./Login";
import logonav from "../assets/img/logo3.png";

function Navbar() {
  function handleSubmit(e) {
    return Login;
  }

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const buscar = () => {
    if (searchTerm === "") {
      navigate("/busqueda");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg px-2 fixed-top position-sticky">
        <div className="container-fluid">
          <div className="imgNav">
            <Link className="navbar-brand" to="/">
              <img className="img-nav" src={logonav} alt="" />
            </Link>
          </div>

          <button
            className="navbar-toggler buttonHamb"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="#">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={handleSubmit}
                  className="nav-link text-light"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Iniciar Sesion
                </Link>
              </li>
            </ul>
            <form className="d-flex search" role="search">
              <input
                className="searchbar"
                type="search"
                placeholder="Buscar"
                value={searchTerm}
                onChange={handleChangeSearch}
              />

              <Link
                className="lupa"
                onClick={buscar}
                to={`/busqueda/${searchTerm}`}
              >
                <span className="material-icons-outlined">search</span>
              </Link>
            </form>
            <div className="d-flex  carrito p-1">
              <button className="car me-4">
                <span className="material-icons-outlined md-48">
                  shopping_cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
