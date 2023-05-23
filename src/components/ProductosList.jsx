import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useParams } from "react-router";
import "./ProductCard.css";
import { CartContext } from "../context/ContextProvider";

function ProductList() {
  const { setCartCount, setFavoritesCount } = useContext(CartContext);
  const [productos, setProductos] = useState([]);

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

  const { category } = useParams();

  const getProductos = () => {
    axios
      .get(
        `https://proyecto-web-final-backend--juan-ignacio245.repl.co/api/productos/category/${category}`
      )
      .then((res) => {
        setProductos(res.data);
      })
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
  }, [category]);

  return (
    <div className="bg-dark text-light productDep">
      <h1 className="text-center">Productos {category}</h1>
      <div className="container-fluid">
        <div className="d-flex row justify-content-center">
          {productos.map((producto) => (
            <div
              className="card col-lg-2 col-md-3 col-sm-5 col-12 bg-dark m-1"
              key={producto._id}
            >
              <ProductCard
                {...producto}
                setCartCount={setCartCount}
                setFavoritesCount={setFavoritesCount}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
