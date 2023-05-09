import { useState } from "react";
import CardProductos from "../components/CardProductosSearch";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SearchResult.css";

function SearchResult() {
  const { filter } = useParams();
  const [searchResults, setSearchResults] = useState([]);

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

  // const [products, setProducts] = useState([]);
  // const [search, setSearch] = useState("");

  // const getProductos = () => {
  //   axios
  //     .get("http://localhost:3000/api/productos")
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getProductos();
  // }, []);

  // const handleChangeSearch = (event) => {
  //   setSearch(event.target.value);
  // };

  // const buscar = () => {
  //   if (search == "") {
  //     getProductos();
  //   } else {
  //     axios
  //       .get(`http://localhost:3000/api/productos/search/${search}`)
  //       .then((res) => setProducts(res.data))
  //       .catch((err) => console.log(err));
  //   }
  // };

  return (
    <>
      <div className="p-5 bg-dark text-light">
        {/* <div className="input-group mb-3 d-flex">
          <input
            type="search"
            className="form-control"
            name="search"
            value={search}
            onChange={handleChangeSearch}
          />
          <button
            className="btn btn-outline-warning"
            onClick={buscar}
            type="button"
          >
            Buscar
          </button>
        </div> */}

        <div className="row">
          {productos.length > 0 ? (
            <div className="row">
              <h1 className="text-center">
                Resultados de busqueda para "{filter}"
              </h1>
              {searchResults.map((product, index) => (
                <div className="col-md-4 " key={index}>
                  <CardProductos {...product} />
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
