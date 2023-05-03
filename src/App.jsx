import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import SearchResult from "./pages/SearchResult";
import SearchClean from "./pages/SearchClean";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/busqueda/:filter" element={<SearchResult />} />
        <Route path="/busqueda/" element={<SearchClean />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
