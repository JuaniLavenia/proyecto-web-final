import { useEffect, useState } from "react";
import CardProductos from "../components/CardProductosSearch";
import axios from "axios";
import "./SearchResult.css";
import CategoryButton from "../components/CategoryBtn";

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
              <CardProductos {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchClean;
