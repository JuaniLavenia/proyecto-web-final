import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <>
      <Navbar path="/cart" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Carrito />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
