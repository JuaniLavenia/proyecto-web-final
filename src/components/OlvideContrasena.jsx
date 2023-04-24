import React from "react";

function OlvideContrasena() {
	return (
		<>
			<div
				className="modal fade"
				id="olvideContrasena"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Recuperá tu contraseña
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
										className="form-control"
										id="email"
										placeholder="Correo electrónico"
									/>
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
								Recuperar
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OlvideContrasena;
