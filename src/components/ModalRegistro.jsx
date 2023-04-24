import React from "react";
import "./ModalRegistro.css";

function ModalRegistro() {
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
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<form>
								<div className="nombreApellido mb-3">
									<input
										type="text"
										className="form-control"
										id="nombre"
										placeholder="Nombre"
									/>
									<input
										type="text"
										className="form-control"
										id="apellido"
										placeholder="Apeliido"
									/>
								</div>
								<div className="mb-3">
									<input
										type="email"
										className="form-control"
										id="email"
										placeholder="Correo electrónico"
									/>
								</div>
								<div className="mb-3">
									<input
										type="password"
										className="form-control"
										id="password"
										placeholder="Contraseña"
									/>
									<input
										type="password"
										className="form-control"
										id="password"
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
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Cancelar
							</button>
							<button type="button" className="btn btn-primary">
								Registrarse
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ModalRegistro;
