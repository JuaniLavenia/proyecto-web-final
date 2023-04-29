import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Productos />

      <Footer />
    </>
  );
}

export default App;
