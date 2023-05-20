import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
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
import { useState } from "react";
import ResetPassword from "./components/ResetPassword";
import Publicidad from "./components/Publicidad";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);
  return (
    <>
      <Navbar
        path="/cart"
        cartCount={cartCount}
        favoritesCount={favoritesCount}
        setCartCount={setCartCount}
        setFavoritesCount={setFavoritesCount}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<OlvideMiContrasena />} />
        <Route path="/reset/:id" element={<ResetPassword />} />
        <Route
          path="/busqueda/:filter"
          element={
            <SearchResult
              setCartCount={setCartCount}
              setFavoritesCount={setFavoritesCount}
            />
          }
        />
        <Route
          path="/busqueda/"
          element={
            <SearchClean
              setCartCount={setCartCount}
              setFavoritesCount={setFavoritesCount}
            />
          }
        />
        <Route path="/cart" element={<Carrito setCartCount={setCartCount} />} />
        <Route
          path="/favorites"
          element={
            <Favoritos
              setFavoritesCount={setFavoritesCount}
              setCartCount={setCartCount}
            />
          }
        />
        <Route path="/productos" element={<Category />} />
        <Route
          path="/productos/category/:category"
          element={
            <ProductList
              setCartCount={setCartCount}
              setFavoritesCount={setFavoritesCount}
            />
          }
        />
        <Route path="/adm/productos" element={<Producto />} />
        <Route path="/adm/productos/edit/:id" element={<ProductoEdit />} />
        <Route path="/adm/productos/create" element={<ProductoCreate />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Publicidad />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
