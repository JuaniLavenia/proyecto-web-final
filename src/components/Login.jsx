import React, { useContext, useState } from "react";
import "./Login.css";
import Register from "./Register";
import OlvideMiContrasena from "./OlvideMiContrasena";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://proyecto-web-final-backend--juan-ignacio245.repl.co/api/login",
        values
      )
      .then((res) => {
        const { token, userId } = res.data;
        localStorage.setItem("token", token);
        login(token, userId);

        Swal.fire({
          icon: "success",
          title: "Sesión iniciada",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Los datos proporcionados no son correctos",
        })
      );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  return (
    <div className="">
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header ">
              <h1 className="modal-title" id="exampleModalLabel">
                Iniciar Sesión
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailLogin"
                    aria-describedby="emailHelp"
                    maxLength={40}
                    required
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="registerPassword" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="PasswordLogin"
                    required
                    minLength={6}
                    maxLength={12}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary btn-registrarse"
                    onClick={handleRegisterClick}
                    data-bs-toggle="modal"
                    data-bs-target="#modalRegistro"
                  >
                    Quiero registrarme
                  </button>
                  <button
                    id="iniciarSesion"
                    type="submit"
                    className=" btn btn-primary btn-inicio-sesion"
                    onSubmit={handleSubmit}
                    data-bs-dismiss="modal"
                  >
                    Iniciar Sesión
                  </button>
                  <br />
                  <button
                    type="button"
                    id="olvideContrasena"
                    className="btn btn-div btn-contrasena text-light"
                    onClick={handleForgotPasswordClick}
                    data-bs-toggle="modal"
                    data-bs-target="#olvideContrasenaForm"
                  >
                    Olvidé mi contraseña
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showRegister && <Register setShowRegister={setShowRegister} />}
      {showForgotPassword && (
        <OlvideMiContrasena setShowForgotPassword={setShowForgotPassword} />
      )}
    </div>
  );
}

export default Login;
