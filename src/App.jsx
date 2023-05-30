import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router";
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
import ProductList from "./components/ProductosList";
import Category from "./pages/Category";
import ResetPassword from "./components/ResetPassword";
import { CartContextProvider } from "./context/ContextProvider";
import { AuthContextProvider } from "./context/AuthContext";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <AuthContextProvider>
        <CartContextProvider>
          <Navbar path="/cart" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<OlvideMiContrasena />} />
            <Route path="/reset/:id" element={<ResetPassword />} />
            <Route path="/busqueda/:filter" element={<SearchResult />} />
            <Route path="/busqueda/" element={<SearchClean />} />
            <Route path="/cart" element={<Carrito />} />
            <Route path="/favorites" element={<Favoritos />} />
            <Route path="/productos" element={<Category />} />
            <Route
              path="/productos/category/:category"
              element={<ProductList />}
            />
            <Route path="/adm/productos" element={<Producto />} />
            <Route path="/adm/productos/edit/:id" element={<ProductoEdit />} />
            <Route path="/adm/productos/create" element={<ProductoCreate />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/notFound" replace />} />
          </Routes>
          <Register />
          <Login />
          <OlvideMiContrasena /> <Footer />
        </CartContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
