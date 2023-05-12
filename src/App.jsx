import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Producto from "./pages/admin/Producto";
import ProductoEdit from "./pages/admin/ProductoEdit";
import ProductoCreate from "./pages/admin/ProductoCreate";
import Banner from "./components/Banner";
import ProductList from "./components/ProductosList";
import Category from "./pages/Category";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<Category/>}/>
        <Route path="/productos/category/:category" element={<ProductList/>}/>
        <Route path="/adm/productos" element={<Producto />} />
        <Route path="/adm/productos/edit/:id" element={<ProductoEdit />} />
        <Route path="/adm/productos/create" element={<ProductoCreate/>}/>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
