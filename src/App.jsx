import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import OlvideMiContrasena from "./components/OlvideMiContrasena";

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Register" element={<Register />} />
				<Route path="/OlvideMiContraseña" element={<OlvideMiContrasena />} />
			</Routes>
			<Login />
			<Register />
			<OlvideMiContrasena />
			<Footer />
		</>
	);
}

export default App;
