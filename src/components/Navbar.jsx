import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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

  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    const cartCountFromLocalStorage = localStorage.getItem("cartCount");
    const favoritesCountFromLocalStorage =
      localStorage.getItem("favoritesCount");
    setCartCount(cartCountFromLocalStorage || 0);
    setFavoritesCount(favoritesCountFromLocalStorage || 0);
  }, []);

  // onClick={() => {setNumFavorites(numFavorites + 1)} Agregar esto al boton al agregarAFavoritos

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
              <li className="nav-item">
                <Link className="nav-link" to="/adm/productos">
                  Administrador
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
            <div className="d-flex carrito p-1">
              <Link to="/cart">
                <button className="car">
                  <span className="material-icons-outlined md-48">
                    shopping_cart
                  </span>
                  {cartCount > 0 && (
                    <span className="badgeCart">{cartCount}</span>
                  )}
                </button>
              </Link>
            </div>
            <div>
              <Link to="/favorites">
                <button className="fav">
                  <span className="material-icons-outlined">favorite</span>
                  {favoritesCount > 0 && (
                    <span className="badgeFav">{favoritesCount}</span>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
