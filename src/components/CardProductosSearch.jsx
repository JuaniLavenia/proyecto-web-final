import { useContext, useState } from "react";
import "./CardProductosSearch.css";
import Swal from "sweetalert2";
import { CartContext } from "../context/ContextProvider";

function CardProductos({
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

  const { setCartCount, setFavoritesCount } = useContext(CartContext);
  const handleAddToCart = (product) => {
    Swal.fire({
      title: "Ingrese la cantidad de productos",
      input: "number",
      inputAttributes: {
        min: 1,
        max: stock,
      },
      showCancelButton: true,
      confirmButtonText: "Agregar al carrito",
      showLoaderOnConfirm: true,
      preConfirm: (quantitySelect) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(parseInt(quantitySelect));
          }, 1000);
        });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const quantitySelect = result.value;
        let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

        let existingProduct = cart.find((p) => p._id === product._id);

        if (existingProduct) {
          existingProduct.quantity += quantitySelect;
        } else {
          cart.push({ ...product, quantity: quantitySelect });
        }

        localStorage.setItem("cartItems", JSON.stringify(cart));

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Se agregó el producto al carrito",
          showConfirmButton: false,
          timer: 1500,
        });

        const cartCount = cart.reduce(
          (count, item) => count + item.quantity,
          0
        );
        setCartCount(cartCount);
      }
    });
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
        src={`https://proyecto-web-final-backend--juan-ignacio245.repl.co/img/productos/${image}`}
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
            onClick={() =>
              handleAddToCart(
                {
                  image,
                  name,
                  description,
                  capacity,
                  category,
                  _id,
                  price,
                },
                quantitySelect
              )
            }
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
