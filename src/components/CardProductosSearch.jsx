import { useEffect } from "react";
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
    let fav = JSON.parse(localStorage.getItem("favItems")) || [];

    let existingProduct = fav.find((p) => p._id === favorite._id);

    if (existingProduct) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El producto ya existe en favoritos",
      });
    } else {
      fav.push({ ...favorite, quantity: 1 });
      localStorage.setItem("favItems", JSON.stringify(fav));
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Se agregó a favoritos",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    const favoritesCount = fav.length;
    const updatedFavCount = favoritesCount;
    setFavoritesCount(updatedFavCount);
  };

  return (
    <div className="card cardP m-3 bg-dark text-light d-flex">
      <img
        className="imgCard d-flex"
        src={`http://localhost:3000/img/productos/${image}`}
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="card-text d-flex pt-3">
          <p className="text-muted text-center w-50">{capacity}</p>
          <strong className="text-muted align-self-center pb-3">|</strong>
          <p className="text-muted text-center w-50">{category}</p>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-price p-1">$ {price}</div>
        <div className="car-buttons btnCardPr d-flex justify-content-center">
          <button
            className="btn btn-primary me-2 w-50 btncart"
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
            Comprar
          </button>
          <button
            className="btn btn-warning w-50 btnfav"
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
            <span className="material-icons-outlined">favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardProductos;
