import { useEffect, useState } from "react";
import "./Favoritos.css";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Favoritos({ setFavoritesCount, setCartCount }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favItems = JSON.parse(localStorage.getItem("favItems")) || [];

    const favCount = favItems.length;

    setFavoritesCount(favCount);
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favItems"));
    if (items) {
      setFavorites(items);
    }
  }, []);

  const removeFavorite = (producto) => {
    Swal.fire({
      title: "Eliminar producto",
      text: `¿Estás seguro que deseas eliminar ${producto.name} de favoritos?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const newFavItems = favorites.filter(
          (item) => item._id !== producto._id
        );
        if (newFavItems.length !== favorites.length) {
          setFavorites(newFavItems);
          localStorage.setItem("favItems", JSON.stringify(newFavItems));
          const count = newFavItems.reduce(
            (count, item) => count + item.quantity,
            0
          );
          setFavoritesCount(count);
        }
      }
    });
  };

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    let existingProduct = cart.find((p) => p._id === product._id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se agregó el producto al carrito",
      showConfirmButton: false,
      timer: 1500,
    });

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    setCartCount(cartCount);
  };

  const addToCart = (product) => {
    handleAddToCart(product);
  };

  return (
    <div className="favorites bg-dark text-light">
      <div className="favContainer">
        {favorites.length > 0 ? (
          <>
            {favorites.map((item, index) => (
              <div className="cardFav" key={index}>
                <div className="cardFavorites bg-dark text-light">
                  <img
                    src={`http://localhost:3000/img/productos/${item.image}`}
                    alt={item.name}
                    className="imgFav"
                  />
                  <div className="card-body">
                    <h3 className="card-title titl">{item.name}</h3>
                    <p className="card-text descrpt mt-4">{item.description}</p>
                    <div className="cardBtnFav">
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFavorite(item)}
                      >
                        Eliminar
                      </button>
                      <button className="btn btn-primary">
                        <Link
                          to="/productos"
                          className="text-light text-decoration-none"
                        >
                          Ver más productos
                        </Link>
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => addToCart(item)}
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="cardPriceFav">$ {item.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-center">No tienes favoritos guardados.</p>
        )}
      </div>
    </div>
  );
}

export default Favoritos;
