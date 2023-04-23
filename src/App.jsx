import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registro from "./components/Registro";
import OlvideContrasena from "./components/OlvideContrasena";

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Registro" element={<Registro />} />
				<Route path="/OlvideMiContraseña" element={<OlvideContrasena />} />
			</Routes>
			<Login />
			<Registro />
			<OlvideContrasena />
			<Footer />
		</>
	);
}

export default App;
