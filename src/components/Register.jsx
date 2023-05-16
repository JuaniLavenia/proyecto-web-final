import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Register.css";

function Register() {
	const [values, setValues] = useState({
		email: "",
		password: "",
		password_confirmation: "",
	});

	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3000/api/register", values)
			.then((res) => {
				console.log(res);
				alert("Usuario registrado correctamente");
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
				alert(err.response.data.errors[0].msg || "Server error");
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
		<div className="container">
			<div
				className="modal fade "
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
									<label htmlFor="passwordRegister" className="form-label">
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
									<label htmlFor="password_confirmation" className="form-label">
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
									<label htmlFor="password_comfirmation">
										La contraseña tiene que tener entre 6 y 12 caracteres
									</label>
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
