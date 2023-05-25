import React, { useState, useContext } from "react";
import "./ProductCard.css";
import Swal from "sweetalert2";
import { CartContext } from "../context/ContextProvider";

function ProductCard({
  image,
  name,
  description,
  capacity,
  category,
  _id,
  price,
  stock,
}) {
  const [quantitySelect, setQuantitySelect] = useState(1);

  const [mostrarComponente, setMostrarComponente] = useState(false)

  const { setCartCount, setFavoritesCount } = useContext(CartContext);
  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

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
      cart.push({ ...product, quantity: 1 });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se agregó el producto al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    setCartCount(cartCount);
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
        position: "center",
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
    <div className=" product-car d-flex flex-column align-items-center card text-center col-lg-12 col-sm-12 col-12 bg-dark">
      <div className="bg-dark">
        <img
          className="imgCardP"
          src={`https://proyecto-web-final-backend--juan-ignacio245.repl.co/img/productos/${image}`}
          alt={name}
        />
      </div>
      <div className="product-text">
        <div className="card-body">
          <h3 className="card-title d-flex justify-content-center">
            {name}
          </h3>
          <button className="btn btn-primary m-1 btn-description" onClick={() => setMostrarComponente(!mostrarComponente)}>
            {mostrarComponente ? `Ocultar` : `Ver descripción`}
          </button>
          <div className={mostrarComponente ? "show-element" : null}>
            {mostrarComponente && <p className="card-text">{description}</p>}
          </div>

          <div className="card-text d-flex ">
            <p className="text-muted text-center w-50">{capacity}</p>
            <strong className="text-muted align-self-center pb-3">|</strong>
            <p className="text-muted text-center w-50">{category}</p>
          </div>
          <div className="card-price p-1">$ {price}</div>
        </div>
        <div className="card-footer">
          <div className="car-buttons btnCardP d-flex justify-content-center">
            <button
              className="btn btn-primary me-2 w-50 btncartt"
              onClick={() => {
                handleAddToCart({
                  image,
                  name,
                  description,
                  capacity,
                  category,
                  _id,
                  price,
                  stock,
                });
              }}
            >
              Comprar
            </button>
            <button
              className="btn btn-warning w-50 btnfavv"
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
    </div>
  );
}

export default ProductCard;
