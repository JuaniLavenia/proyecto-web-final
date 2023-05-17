import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Register from "./components/Register";
import Login from "./components/Login";
import OlvideMiContrasena from "./components/OlvideMiContrasena";
import ResetPassword from "./components/ResetPassword";


ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
		<Register />
		<Login />
		<OlvideMiContrasena />
	</BrowserRouter>
);
