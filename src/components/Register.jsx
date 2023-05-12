import React from "react";
import "./Register.css";

function Register() {
	return (
		<>
			<div
				className="modal fade"
				id="modalRegistro"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Registro de usuario
							</h5>
							<button
								type="button"
								className="btn-close btn-close-white"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<form className="formRegistro">
								<div className="nombreApellido mb-3">
									<input
										type="text"
										className="form-control inputForm"
										id="nombre"
										placeholder="Nombre"
									/>
									<input
										type="text"
										className="form-control inputForm"
										id="apellido"
										placeholder="Apeliido"
									/>
								</div>
								<div className="mb-3 emailForm">
									<input
										type="email"
										className="form-control inputForm"
										id="emailRegisterForm"
										placeholder="Correo electrónico"
									/>
								</div>
								<div className="mb-3 passwordForm">
									<input
										type="password"
										className="form-control inputForm"
										id="passwordRegisterForm"
										placeholder="Contraseña"
									/>
									<input
										type="password"
										className="form-control inputForm"
										id="passwordCheckRegisterForm"
										placeholder="Repetir contraseña"
									/>
									<label htmlFor="password" className="caracteristicaPassword">
										Debe contener entre 6 y 12 caracteres, una mayúscula y un
										caracter especial
									</label>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary btn-registro">
								Registrarse
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
