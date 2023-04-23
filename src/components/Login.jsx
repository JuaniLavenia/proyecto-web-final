import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Registro from "./Registro";
import OlvideContrasena from "./OlvideContrasena";

function Login() {
	const [showComponent, setShowComponent] = useState(null);

	function handleSubmit(e, id) {
		if (id === "registrarse") {
			setShowComponent("Registro");
			console.log("click registro");
		} else if (id === "olvideContrasena") {
			setShowComponent("OlvideContrasena");
			console.log("click contra");
		}
	}

	const renderComponent = () => {
		switch (showComponent) {
			case "Registro":
				return <Registro />;
			case "OlvideContrasena":
				return <OlvideContrasena />;
			default:
				return null;
		}
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
								className="btn-close"
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
										id="email"
										placeholder="Correo electrónico"
										autoFocus
									/>
								</div>
								<div>
									<input
										className="input-password"
										type="password"
										name="password"
										id="password"
										placeholder="Contraseña"
									/>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary btn-registrarse"
								data-bs-dismiss="modal"
								onClick={(e) => handleSubmit(e, "registrarse")}
							>
								Quiero registrarme
							</button>
							<button
								id="iniciarSesion"
								type="button"
								className=" btn btn-primary btn-inicio-sesion"
								data-bs-dismiss="modal"
							>
								Iniciar Sesión
							</button>
							<br />
							<button
								type="button"
								className="btn btn-div btn-contrasena"
								data-bs-dismiss="modal"
								onClick={(e) => handleSubmit(e, "olvideContrasena")}
							>
								Olvidé mi contraseña
							</button>
						</div>
					</div>
				</div>
			</div>
			{renderComponent()}
		</>
	);
}

export default Login;
