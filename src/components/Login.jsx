import { Link } from "react-router-dom";
import "./Login.css";
import Registro from "./Registro";
import OlvideContrasena from "./OlvideContrasena";

function Login() {
	function handleSubmit(e, id) {
		if (id === "registrarse") {
			return <Registro />;
		} else {
		}
		return <OlvideContrasena />;
	}

	return (
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
						<h1 className="modal-title  " id="exampleModalLabel">
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
							<Link>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Correo electrónico"
									autoFocus
								/>
							</Link>
							<Link>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Contraseña"
								/>
							</Link>
						</form>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary btn-registrarse"
							data-bs-dismiss="modal"
							onClick={(e) => handleSubmit(e, "registrarse")}
						>
							Registrarse
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
							className="btn btn-link btn-contrasena"
							data-bs-dismiss="modal"
							onClick={(e) => handleSubmit(e, "olvideContrasena")}
						>
							Olvidé mi contraseña
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
