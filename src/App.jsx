import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Routes } from "react-router";
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
import Producto from "./pages/admin/Producto";
import ProductoEdit from "./pages/admin/ProductoEdit";
import ProductoCreate from "./pages/admin/ProductoCreate";
import Banner from "./components/Banner";
import ProductList from "./components/ProductosList";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Navbar path="/cart" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/OlvideMiContraseña" element={<OlvideMiContrasena />} />
        <Route path="/busqueda/:filter" element={<SearchResult />} />
        <Route path="/busqueda/" element={<SearchClean />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="/favorites" element={<Favoritos />} />
        <Route path="/productos" element={<Category />} />
        <Route path="/productos/category/:category" element={<ProductList />} />
        <Route path="/adm/productos" element={<Producto />} />
        <Route path="/adm/productos/edit/:id" element={<ProductoEdit />} />
        <Route path="/adm/productos/create" element={<ProductoCreate />} />
      </Routes>
      <Login />
      <Register />
      <OlvideMiContrasena />
      <Footer />
    </>
  );
}

export default App;
