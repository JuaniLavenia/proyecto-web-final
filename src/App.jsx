import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Producto from "./pages/admin/Producto";
import Edit from "./pages/admin/ProductoEdit";
import Create from "./pages/admin/ProductoCreate";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<Producto />} />
        <Route path="/productos/edit/:id" element={<Edit />} />
        <Route path="/productos/create" element={<Create />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
