import React, { useState } from "react";
import "./Login.css";
import Register from "./Register";
import OlvideMiContrasena from "./OlvideMiContrasena";
import { useNavigate } from "react-router";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/login", values)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/productos");
      })
      .catch((err) => alert("El usuario y/o contraseña son incorrectos"));
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

  const handleLoginClick = () => {
    // Lógica para iniciar sesión
  };

  return (
    <div className="container">
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
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
                    onClick={handleLoginClick}
                    onSubmit={handleSubmit}
                    data-bs-dismiss="modal"
                  >
                    Iniciar Sesión
                  </button>
                  <br />
                  <button
                    type="button"
                    id="olvideContrasena"
                    className="btn btn-div btn-contrasena"
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
