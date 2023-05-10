import { useEffect, useState } from "react";
import CardProductos from "../components/CardProductosSearch";
import axios from "axios";
import "./SearchResult.css";

function SearchClean() {
  const [products, setProducts] = useState([]);
  const [categoria, setCategoria] = useState("");

  const getProductos = () => {
    axios
      .get("http://localhost:3000/api/productos")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductos();
  }, []);

  const handleCategoryClick = async (category) => {
    const response = await fetch(
      `http://localhost:3000/api/productos/category/${category}`
    );
    const data = await response.json();
    setProducts(data);
    setCategoria(category);
  };
  return (
    <>
      <div className="p-5 bg-dark text-light cleanSearch">
        <h1 className="text-center ">Filtrar por categoria</h1>
        <br />
        <div
          className="btn-group d-flex text-center mb-4 categorias"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className={
              categoria == "Interiores"
                ? "active btn btn-outline-warning"
                : "btn btn-outline-warning"
            }
            data-category="Interiores"
            onClick={() => handleCategoryClick("Interiores")}
          >
            Interiores
          </button>
          <button
            type="button"
            className={
              categoria == "Exteriores"
                ? "active btn btn-outline-warning"
                : "btn btn-outline-warning"
            }
            data-category="Exteriores"
            onClick={() => handleCategoryClick("Exteriores")}
          >
            Exteriores
          </button>
          <button
            type="button"
            className={
              categoria == "Línea Profesional"
                ? "active btn btn-outline-warning"
                : "btn btn-outline-warning"
            }
            data-category="Línea Profesional"
            onClick={() => handleCategoryClick("Línea Profesional")}
          >
            Linea Profesional
          </button>
          <button
            type="button"
            className={
              categoria == "Línea Industrial"
                ? "active btn btn-outline-warning"
                : "btn btn-outline-warning"
            }
            data-category="Línea Industrial"
            onClick={() => handleCategoryClick("Línea Industrial")}
          >
            Linea Industrial
          </button>
          <button
            type="button"
            className={
              categoria == "Perfumes"
                ? "active btn btn-outline-warning"
                : "btn btn-outline-warning"
            }
            data-category="Perfumes"
            onClick={() => handleCategoryClick("Perfumes")}
          >
            Perfumes
          </button>
          <button
            type="button"
            className={
              categoria == "Productos"
                ? "active btn btn-outline-primary"
                : "btn btn-outline-primary "
            }
            data-category="Productos"
            onClick={() => {
              getProductos();
              handleCategoryClick("Productos");
            }}
          >
            Todos los productos
          </button>
        </div>

        <div className="row">
          <h1 className="text-center">Productos</h1>
          {products.map((product, index) => (
            <div className="col-md-4 " key={index}>
              <CardProductos {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchClean;
