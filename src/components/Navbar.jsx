import { Link } from "react-router-dom";
import "./Navbar.css";
import logonav from "../assets/img/logo3.png";
import "material-icons/iconfont/material-icons.css";
import { useState } from "react";
import axios from "axios";

function Navbar() {
  const [search, setSearch] = useState("");
  const [productos, setProductos] = useState([]);

  const getProductos = () => {
    axios
      .get("http://localhost:3000/api/productos")
      .then((res) => setProductos(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const buscar = () => {
    if (search == "") {
      getProductos();
    } else {
      axios
        .get(`http://localhost:3000/api/productos/search/${search}`)
        .then((res) => setProductos(res.data))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <header className="fixed-top position-sticky">
        <nav className="navbar navbar-dark navbar-expand-lg px-2">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img className="img-nav" src={logonav} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#"></Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Catalogo
                  </Link>
                  <ul className="dropdown-menu bg-dark text-light">
                    <li>
                      <Link className="dropdown-item bg-dark text-light" to="#">
                        Toxic-Shine
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item bg-dark text-light" to="#">
                        Full-Car
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item bg-dark text-light" to="#">
                        Ternnova
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item bg-dark text-light" to="#">
                        Drop
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item bg-dark text-light" to="#">
                        Dreams
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item bg-dark text-light" to="#">
                        Meguiars
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item bg-dark text-light" to="#">
                        Menzerna
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Iniciar Sesion
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Administrador
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="search d-flex">
              <div className="searching me-2">
                <input
                  type="text"
                  placeholder="Buscar"
                  value={search}
                  onChange={handleChangeSearch}
                />

                <Link className="lupa" onClick={buscar} to="/busqueda">
                  <span className="material-icons-outlined">search</span>
                </Link>
              </div>

              <div>
                <button className="car me-4">
                  <span className="material-icons-outlined md-48">
                    shopping_cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
