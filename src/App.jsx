import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Admin from "./pages/admin/Admin";
import Edit from "./pages/admin/Edit";
import Create from "./pages/admin/Create";
import Detalle from "./pages/admin/Detalle";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producto" element={<Admin />} />
        <Route path="/producto/:id" element={<Detalle/>}/>
        <Route path="producto/:id/edit" element={<Edit/>} />
        <Route path="/producto/create" element={<Create />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
