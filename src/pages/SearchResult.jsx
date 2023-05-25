import { useContext, useState, useEffect } from "react";
import CardProductos from "../components/CardProductosSearch";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SearchResult.css";
import { CartContext } from "../context/ContextProvider";
import Swal from "sweetalert2";

function SearchResult() {
  const { setCartCount, setFavoritesCount } = useContext(CartContext);
  const { filter } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://proyecto-web-final-backend--juan-ignacio245.repl.co/api/productos/search/${filter}`
        );
        setSearchResults(response.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Conexión perdida",
          text: "No se pudo establecer conexión con el servidor.",
        });
      }

      setIsLoading(false);
    };

    fetchSearchResults();
  }, [filter]);

  return (
    <>
      <div className="p-5 bg-dark text-light">
        <div className="row">
          {isLoading ? (
            <p className="text-center loading">Cargando resultados...</p>
          ) : searchResults.length > 0 ? (
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
