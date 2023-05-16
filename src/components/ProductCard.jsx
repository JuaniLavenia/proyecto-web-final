import React from "react";
import "./ProductCard.css";
import { Button } from "react-bootstrap";

function ProductCard({
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
    alert("Se agrego al carrito!");

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    const updatedCartCount = cartCount;
    setCartCount(updatedCartCount);
  };

  const addFavorite = (favorite) => {
    let fav = JSON.parse(localStorage.getItem("favItems")) || [];

    let existingProduct = fav.find((p) => p._id === favorite._id);

    if (existingProduct) {
      alert("El producto ya existe en favoritos");
    } else {
      fav.push({ ...favorite, quantity: 1 });
      localStorage.setItem("favItems", JSON.stringify(fav));
      alert("Se agrego a favoritos!");
    }
    const favoritesCount = fav.length;
    const updatedFavCount = favoritesCount;
    setFavoritesCount(updatedFavCount);
  };

  return (
    <div className="product-car row bg-dark">
      <div className="col-md-3 bg-dark ">
        <img
          className="img"
          src={`http://localhost:3000/img/productos/${image}`}
          alt={name}
        />
      </div>
      <div className="product-text col-md-9">
        <div className="card-body">
          <h2 className="card-title d-flex justify-content-center m-2">
            {name}
          </h2>
          <p className="card-text">{description}</p>
          <div className="card-text d-flex">
            <p className="text-muted text-center w-50">{capacity}</p>
            <strong className="text-muted align-self-center pb-3">|</strong>
            <p className="text-muted text-center w-50">{category}</p>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <Button
            variant="primary"
            className="me-2"
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
          </Button>
          <Button
            variant="warning"
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
      </div>
    </div>
  );
}

export default ProductCard;
