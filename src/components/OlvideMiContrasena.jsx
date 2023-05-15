import React from "react";
import "./OlvideMiContrasena.css";

function OlvideMiContrasena() {
  return (
    <>
      <div
        className="modal fade"
        id="olvideContrasenaForm"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Recuperá tu contraseña
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="text" className="textro-contrasena">
                    <p>
                      Ingresá tu email y hacé un click en "Recuperar
                      contraseña", el sistema te enviará un correo con
                      información para ingresar.
                    </p>
                  </label>
                  <input
                    type="email"
                    className="form-control emailFPasswordForm"
                    id="emailFPasswordForm"
                    placeholder="Correo electrónico"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary botonRecuperar">
                Recuperar contraseña
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OlvideMiContrasena;