import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Admin from "./pages/admin/Admin";
import Edit from "./pages/admin/Edit";
import Create from "./pages/admin/Create";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
