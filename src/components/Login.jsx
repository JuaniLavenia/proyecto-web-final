import React, { useState } from "react";
import "./Login.css";
import ModalRegistro from "./ModalRegistro";
import OlvideContrasena from "./OlvideContrasena";

function Login() {
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
    <>
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
              <form action="">
                <div>
                  <input
                    className="input-email"
                    type="email"
                    name="email"
                    id="emailLoginForm"
                    placeholder="Correo electrónico"
                    autoFocus
                  />
                </div>
                <div>
                  <input
                    className="input-password"
                    type="password"
                    name="password"
                    id="passwordLoginForm"
                    placeholder="Contraseña"
                  />
                </div>
              </form>
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
                type="button"
                className=" btn btn-primary btn-inicio-sesion"
                onClick={handleLoginClick}
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
          </div>
        </div>
      </div>

      {showRegister && <ModalRegistro setShowRegister={setShowRegister} />}
      {showForgotPassword && (
        <OlvideContrasena setShowForgotPassword={setShowForgotPassword} />
      )}
    </>
  );
}

export default Login;
