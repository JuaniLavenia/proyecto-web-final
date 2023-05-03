import { useEffect, useState } from "react";
import CardProductos from "../components/CardProductosSearch";
import axios from "axios";

function SearchClean() {
  const [products, setProducts] = useState([]);

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
  };
  return (
    <>
      <div className="p-5 bg-dark text-light">
        <div
          className="btn-group d-flex text-center mb-4"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-outline-warning"
            data-category="Interiores"
            onClick={() => handleCategoryClick("Interiores")}
          >
            Interiores
          </button>
          <button
            type="button"
            className="btn btn-outline-warning"
            data-category="Exteriores"
            onClick={() => handleCategoryClick("Exteriores")}
          >
            Exteriores
          </button>
          <button
            type="button"
            className="btn btn-outline-warning"
            data-category="Linea Profesional"
            onClick={() => handleCategoryClick("Linea Profesional")}
          >
            Linea Profesional
          </button>
          <button
            type="button"
            className="btn btn-outline-warning"
            data-category="Linea Industrial"
            onClick={() => handleCategoryClick("Linea Industrial")}
          >
            Linea Industrial
          </button>
          <button
            type="button"
            className="btn btn-outline-warning"
            data-category="Perfumes"
            onClick={() => handleCategoryClick("Perfumes")}
          >
            Perfumes
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
