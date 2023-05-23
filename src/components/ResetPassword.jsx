import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import "./ResetPassword.css";
import Swal from "sweetalert2";

function ResetPassword() {
	const [values, setValues] = useState({
		password: "",
		password_confirmation: "",
	});

	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();

	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();

		const token = searchParams.get("token");

		axios
			.post(
				`https://rolling-detail-pf.vercel.app/api/reset/${id}/${token}`,
				values
			)
			.then((res) => {
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: "Contraseña restablecida",
					showConfirmButton: false,
					timer: 1500,
				});

				navigate("/");
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err.response.data.error || "Server error",
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
		<form onSubmit={handleSubmit} className="resetPasswordForm">
			<div className="mb-3">
				<label htmlFor="resetPassword" className="form-label">
					<h1>
						<strong>Restablecer contraseña</strong>
					</h1>
				</label>
				<input
					type="password"
					className="form-control"
					id="resetPassword"
					required
					minLength={6}
					maxLength={12}
					name="password"
					value={values.password}
					onChange={handleChange}
				/>
				<label htmlFor="resetPassword_confirmation" className="form-label">
					Confirmar contraseña
				</label>
				<input
					type="password"
					className="form-control"
					id="resetPassword_confirmation"
					required
					minLength={6}
					maxLength={12}
					name="password_confirmation"
					value={values.password_confirmation}
					onChange={handleChange}
				/>
				<label htmlFor="password_comfirmation">
					Tu nueva contraseña debe que tener entre 6 y 12 caracteres
				</label>
			</div>

			<button type="submit" className="btn btn-primary">
				Restablecer contraseña
			</button>
		</form>
	);
}

export default ResetPassword;
