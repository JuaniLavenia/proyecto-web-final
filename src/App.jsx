import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import OlvideMiContrasena from "./components/OlvideMiContrasena";
import SearchResult from "./pages/SearchResult";
import SearchClean from "./pages/SearchClean";
import Carrito from "./pages/Carrito";
import Favoritos from "./pages/Favoritos";
import ResetPassword from "./components/ResetPassword";
function App() {
	return (
		<>
			<Navbar path="/cart" />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/forgot" element={<OlvideMiContrasena />} />
				<Route path="/reset/:id" element={<ResetPassword />} />
				<Route path="/busqueda/:filter" element={<SearchResult />} />
				<Route path="/busqueda/" element={<SearchClean />} />
				<Route path="/cart" element={<Carrito />} />
				<Route path="/favorites" element={<Favoritos />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
