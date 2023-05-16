import { useState } from "react";
import CardProductos from "../components/CardProductosSearch";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SearchResult.css";

function SearchResult({ setCartCount, setFavoritesCount }) {
  const { filter } = useParams();
  const [searchResults, setSearchResults] = useState([]);

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

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/productos/search/${filter}`
      );
      setSearchResults(response.data);
    };

    fetchSearchResults();
  }, [filter]);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const buscarProductos = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/productos/search/${filter}`
        );
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.log(error);
      }
    };
    buscarProductos();
  }, [filter]);

  return (
    <>
      <div className="p-5 bg-dark text-light">
        <div className="row">
          {productos.length > 0 ? (
            <div className="row">
              <h1 className="text-center">
                Resultados de busqueda para "{filter}"
              </h1>
              {searchResults.map((product, index) => (
                <div className="col-md-4 " key={index}>
                  <CardProductos
                    {...product}
                    setCartCount={setCartCount}
                    setFavoritesCount={setFavoritesCount}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center noresult">
              No se encontraron resultados para "{filter}"
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchResult;
