import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ModalRegistro from "./components/ModalRegistro";
import OlvideContrasena from "./components/OlvideContrasena";
import SearchResult from "./pages/SearchResult";
import SearchClean from "./pages/SearchClean";
import Carrito from "./pages/Carrito";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <>
      <Navbar path="/cart" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ModalRegistro" element={<ModalRegistro />} />
        <Route path="/OlvideMiContraseña" element={<OlvideContrasena />} />
        <Route path="/busqueda/:filter" element={<SearchResult />} />
        <Route path="/busqueda/" element={<SearchClean />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="/favorites" element={<Favoritos />} />
      </Routes>
      <Login />
      <ModalRegistro />
      <OlvideContrasena />
      <Footer />
    </>
  );
}

export default App;
