import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Banner from "./pages/Banner";

function App() {
  return (
    <>
      <Navbar />

      <Banner />

      <Footer />
    </>
  );
}

export default App;
