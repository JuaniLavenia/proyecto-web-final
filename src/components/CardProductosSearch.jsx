import { useState } from "react";
import "./CardProductosSearch.css";

function CardProductos({
  image,
  name,
  description,
  muted,
  category,
  _id,
  price,
}) {
  const [cartItems, setCartItems] = useState([]);

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
  };

  return (
    <div className="card m-3 bg-dark text-light ">
      <img src={image} className="card-img-top imgCard d-flex" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="card-text d-flex pt-3">
          <p className="text-muted text-center w-50">{muted}</p>
          <strong className="text-muted align-self-center pb-3">|</strong>
          <p className="text-muted text-center w-50">{category}</p>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-price p-1">$ {price}</div>
        <div className="car-buttons d-flex justify-content-center">
          <button
            className="btn btn-primary me-2 "
            onClick={() =>
              handleAddToCart({
                _id,
                name,
                description,
                category,
                image,
                price,
              })
            }
          >
            Agregar al carrito
          </button>
          <button className="btn btn-warning ">Agregar a favoritos</button>
        </div>
      </div>
    </div>
  );
}
export default CardProductos;
