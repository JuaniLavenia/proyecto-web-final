import { useState } from "react";
import "./CardProductosSearch.css";
import { Button, Card } from "react-bootstrap";

function CardProductos({
  image,
  name,
  description,
  capacity,
  category,
  _id,
  price,
}) {
  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);

  const updateLocalStorageCount = (key, count) => {
    localStorage.setItem(key, count);
    if (key === "cartCount") {
      setCartCount(count);
    } else if (key === "favoritesCount") {
      setFavoritesCount(count);
    }
  };

  const handleAddToCart = (product) => {
    // Primero, obtén el carrito actual del almacenamiento local (si lo hay).
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Luego, verifica si el producto ya está en el carrito.
    let existingProduct = cart.find((p) => p._id === product._id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, actualiza su cantidad.
      existingProduct.quantity += 1;
    } else {
      // Si el producto no está en el carrito, agrega el producto al carrito con una cantidad de 1.
      cart.push({ ...product, quantity: 1 });
    }

    // Finalmente, guarda el carrito actualizado en el almacenamiento local.
    localStorage.setItem("cartItems", JSON.stringify(cart));
    alert("Se agrego al carrito!");

    const count = cart.length;
    updateLocalStorageCount("cartCount", count);
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
      alert("Se agrego a favoritos!");
    }

    const count = fav.length;
    updateLocalStorageCount("favoritesCount", count);
  };

  return (
    <Card className="cardP m-3 bg-dark text-light d-flex">
      <Card.Img
        variant="top"
        src={image}
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
      </Card.Footer>
    </Card>
  );
}
export default CardProductos;
