import { useContext, useState } from "react";
import "./CardProductosSearch.css";
import Swal from "sweetalert2";

function CardProductos({
  image,
  name,
  description,
  capacity,
  category,
  _id,
  price,
  setCartCount,
  setFavoritesCount,
}) {
  const { setCartCount, setFavoritesCount } = useContext(CartContext);
  const handleAddToCart = (product) => {
    // Primero, obtén el carrito actual del almacenamiento local (si lo hay).
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Luego, verifica si el producto ya está en el carrito.
    let existingProduct = cart.find((p) => p._id === product._id);

    if (existingProduct) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Ya tienes este producto en el carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // Si el producto no está en el carrito, agrega el producto al carrito con una cantidad de 1.
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Se agregó el producto al carrito",
      showConfirmButton: false,
      timer: 1500,
    });

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    const updatedCartCount = cartCount;
    setCartCount(updatedCartCount);
  };

  const addFavorite = (favorite) => {
    // Primero, obtén el carrito actual del almacenamiento local (si lo hay).
    let fav = JSON.parse(localStorage.getItem("favItems")) || [];

    // Luego, verifica si el producto ya está en el carrito.
    let existingProduct = fav.find((p) => p._id === favorite._id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, actualiza su cantidad.
      alert("El producto ya existe en favoritos");
    } else {
      // Si el producto no está en el carrito, agrega el producto al carrito con una cantidad de 1.

      fav.push({ ...favorite, quantity: 1 });
      localStorage.setItem("favItems", JSON.stringify(fav));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se agregó a favoritos",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    const count = fav.length;
    updateLocalStorageCount("favoritesCount", count);
  };

  return (
    <div className="card cardP m-3 bg-dark text-light d-flex h-100">
      <img
        className="imgCard d-flex"
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="card-text d-flex pt-3">
          <p className="text-muted text-center w-50">{capacity}</p>
          <strong className="text-muted align-self-center pb-3">|</strong>
          <p className="text-muted text-center w-50">{category}</p>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="card-price p-1">$ {price}</div>
        <div className="car-buttons d-flex justify-content-center">
          <button
            className="btn btn-primary me-2"
            onClick={() => {
              handleAddToCart({
                image,
                name,
                description,
                capacity,
                category,
                _id,
                price,
              });
            }}
          >
            Agregar al carrito
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              addFavorite({
                image,
                name,
                description,
                capacity,
                category,
                _id,
                price,
              });
            }}
          >
            Agregar a favoritos
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}
export default CardProductos;
