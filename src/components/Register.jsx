import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Register.css";
import Swal from "sweetalert2";

function Register() {
	const [values, setValues] = useState({
		email: "",
		password: "",
		password_confirmation: "",
	});

	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate input data
		if (
			values.email &&
			values.password &&
			values.password_confirmation &&
			values.password === values.password_confirmation
		) {
			// If input data is valid, submit form
			axios
				.post("https://rolling-detail-pf.vercel.app/api/register", values)
				.then((res) => {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Nuevo usuario registrado",
						showConfirmButton: false,
						timer: 1500,
					});
					setValues({ email: "", password: "", password_confirmation: "" });
					navigate("/");
				})
				.catch((err) =>
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Los datos proporcionados no son correctos",
					})
				);
		} else {
			// If input data is not valid, display error message
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Please enter a valid email and matching passwords",
			});
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	return (
		<div className="container">
			<div
				className="modal fade "
				id="modalRegistro"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content bg-dark text-light">
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
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Correo electrónico
									</label>
									<input
										type="email"
										className="form-control"
										id="emailRegister"
										aria-describedby="emailHelp"
										required
										name="email"
										value={values.email}
										onChange={handleChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="registerPassword" className="form-label">
										Contraseña
									</label>
									<input
										type="password"
										className="form-control"
										id="passwordRegister"
										required
										minLength={6}
										maxLength={12}
										name="password"
										value={values.password}
										onChange={handleChange}
									/>
									<label
										htmlFor="password_confirmation"
										className="form-label mt-3"
									>
										Confirmar contraseña
									</label>
									<input
										type="password"
										className="form-control"
										id="password_confirmation"
										required
										minLength={6}
										maxLength={12}
										name="password_confirmation"
										value={values.password_confirmation}
										onChange={handleChange}
									/>
									<div className="password_comfirmation form-text">
										La contraseña tiene que tener entre 6 y 12 caracteres
									</div>
								</div>
								<div className="modal-footer">
									<button type="submit" className="btn btn-primary">
										Registrarse
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
