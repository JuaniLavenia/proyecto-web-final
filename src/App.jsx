import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Producto from "./pages/admin/Producto";
import Edit from "./pages/admin/ProductoEdit";
import Create from "./pages/admin/ProductoCreate";
import Exteriores from "../src/pages/productos/Exteriores";
import Interiores from "../src/pages/productos/Interiores";
import LineaIndustrial from "../src/pages/productos/LineaIndustrial";
import LineaProfesional from "../src/pages/productos/LineaProfesional";
import Perfumes from "../src/pages/productos/Perfumes";
import Section from "./components/Main";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<Section />}/>
        <Route path="/productos/exteriores" element={<Exteriores/>}/>
        <Route path="/productos/interiores" element={<Interiores/>}/>
        <Route path="/productos/lineaindustrial" element={<LineaIndustrial/>}/>
        <Route path="/productos/lineaprofesional" element={<LineaProfesional/>}/>
        <Route path="/adm/productos" element={<Producto />} />
        <Route path="/adm/productos/perfumes" element={<Perfumes/>}/>
        <Route path="/adm/productos/edit/:id" element={<Edit />} />
        <Route path="/adm/productos/create" element={<Create />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
