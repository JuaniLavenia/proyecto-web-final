import { useContext, useEffect, useState } from "react";
import CardProductos from "../components/CardProductosSearch";
import axios from "axios";
import "./SearchResult.css";
import CategoryButton from "../components/CategoryBtn";
import { CartContext } from "../context/ContextProvider";
import Swal from "sweetalert2";

function SearchClean() {
  const { setCartCount, setFavoritesCount } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const favItems = JSON.parse(localStorage.getItem("favItems")) || [];

    const cartCount = cartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );
    const favCount = favItems.length;

    setCartCount(cartCount);
    setFavoritesCount(favCount);
  }, []);

  const getProductos = () => {
    axios
      .get(
        "https://proyecto-web-final-backend--juan-ignacio245.repl.co/api/productos"
      )
      .then((res) => setProducts(res.data))
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Conexión perdida",
          text: "No se pudo establecer conexión con el servidor.",
        });
      });
  };

  useEffect(() => {
    getProductos();
  }, []);

  const handleCategoryClick = async (category) => {
    const response = await fetch(
      `https://proyecto-web-final-backend--juan-ignacio245.repl.co/api/productos/category/${category}`
    );
    const data = await response.json();
    setProducts(data);
    setCategoria(category);
  };
  return (
    <>
      <div className="p-5 bg-dark text-light cleanSearch">
        <h1 className="text-center ">Filtrar por categoría</h1>
        <br />
        <div
          className="btn-group d-flex text-center mb-4 categorias"
          role="group"
          aria-label="Basic example"
        >
          <CategoryButton
            categoria="Interiores"
            handleCategoryClick={handleCategoryClick}
            activeCategory={categoria}
          >
            Interiores
          </CategoryButton>
          <CategoryButton
            categoria="Exteriores"
            handleCategoryClick={handleCategoryClick}
            activeCategory={categoria}
          >
            Exteriores
          </CategoryButton>
          <CategoryButton
            categoria="Línea Profesional"
            handleCategoryClick={handleCategoryClick}
            activeCategory={categoria}
          >
            Línea Profesional
          </CategoryButton>
          <CategoryButton
            categoria="Línea Industrial"
            handleCategoryClick={handleCategoryClick}
            activeCategory={categoria}
          >
            Línea Industrial
          </CategoryButton>
          <CategoryButton
            categoria="Perfumes"
            handleCategoryClick={handleCategoryClick}
            activeCategory={categoria}
          >
            Perfumes
          </CategoryButton>
          <CategoryButton
            categoria="Productos"
            handleCategoryClick={handleCategoryClick}
            activeCategory={categoria}
            onClick={getProductos}
          >
            Todos los productos
          </CategoryButton>
        </div>

        <div className="row">
          <h1 className="text-center">Productos</h1>
          {products.map((product, index) => (
            <div className="col-md-4 " key={index}>
              <CardProductos
                {...product}
                setCartCount={setCartCount}
                setFavoritesCount={setFavoritesCount}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchClean;
