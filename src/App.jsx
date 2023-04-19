import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registro from "./components/Registro";

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Registro" element={<Registro />} />
			</Routes>
			<Login />
			<Registro />
			<Footer />
		</>
	);
}

export default App;
