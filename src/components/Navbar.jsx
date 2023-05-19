import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import "material-icons/iconfont/material-icons.css";
import Login from "./Login";
import logonav from "../assets/img/logo3.png";
import axios from "axios";
import Swal from "sweetalert2";

function Navbar({
  cartCount,
  favoritesCount,
  setCartCount,
  setFavoritesCount,
}) {
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

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const favItems = JSON.parse(localStorage.getItem("favItems")) || [];

    const cartCount = cartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );
    const favCount = favItems.length;

    setCartCount(cartCount);
    setFavoritesCount(favCount);
  }, [setCartCount, setFavoritesCount]);

  const [token, setToken] = useState("");

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Se cerró la sesion",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAdminClick = () => {
    if (token) {
      const email = prompt("Por favor ingrese el correo del usuarioAdmin:");
      const password = prompt(
        "Por favor ingrese la contraseña del usuarioAdmin:"
      );

      axios
        .post(
          "https://proyecto-web-final-backend--juan-ignacio245.repl.co/api/admin-login",
          {
            email,
            password,
          }
        )
        .then((res) => {
          if (res.data.success) {
            navigate("/adm/productos");
            localStorage.setItem("token", res.data.token);
            setToken(res.data.token);
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Ingreso permitido",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Los datos ingresados no son correctos",
            });
          }
        })
        .catch((err) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Acceso denegado",
          })
        );
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
                <Link className="nav-link text-light" to="/productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item" id="login-register">
                {token ? (
                  <Link className="nav-link text-light" to="/" onClick={logout}>
                    Cerrar Sesión
                  </Link>
                ) : (
                  <Link
                    onClick={handleSubmit}
                    className="nav-link text-light"
                    to="/"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Iniciar Sesion
                  </Link>
                )}
              </li>
              <li className="nav-item" id="pag-admin">
                {token && (
                  <Link
                    className="nav-link text-light"
                    onClick={handleAdminClick}
                  >
                    Administrador
                  </Link>
                )}
              </li>
            </ul>
            <form className="d-flex search" role="search">
              <input
                className="searchbar"
                type="search"
                maxLength={20}
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
