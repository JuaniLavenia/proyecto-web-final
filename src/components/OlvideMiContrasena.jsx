import React, { useState } from "react";
import "./OlvideMiContrasena.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function OlvideMiContrasena() {
	const [values, setValues] = useState({
		email: "",
	});

	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(
				"https://proyecto-web-final-backend--juan-ignacio245.repl.co/api/forgot",
				values
			)
			.then((res) => {
				console.log(res);
				Swal.fire({
					position: "center",
					icon: "success",
					title:
						"Se envió un correo a tu cuenta de email, en caso de no encontrarlo en la bandeja principal, revisa la carpeta de spam.",
					showConfirmButton: false,
					timer: 2500,
				});
				setValues({ email: "" });
				navigate("/");
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err.response.data.error,
				});
			});
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	return (
		<>
			<div
				className="modal fade "
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
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label htmlFor="text" className="textro-contrasena">
										<p>
											Ingresá tu email y hacé un click en "Recuperar
											contraseña", el sistema te enviará un correo con
											información para ingresar.
										</p>
										<label htmlFor="emailForgot" className="form-label">
											Correo electrónico
										</label>
										<input
											type="email"
											className="form-control"
											id="emailForgot"
											aria-describedby="emailHelp"
											required
											maxLength={40}
											name="email"
											value={values.email}
											onChange={handleChange}
										/>
									</label>
								</div>
								<div className="modal-footer">
									<button
										type="submit"
										className="btn btn-primary botonRecuperar"
									>
										Recuperar contraseña
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OlvideMiContrasena;
