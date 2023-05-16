import { useEffect, useState } from "react";
import "./Favoritos.css";
import { Button } from "react-bootstrap";

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
    const newFavItems = favorites.filter((item) => item._id !== producto._id);
    if (newFavItems.length !== favorites.length) {
      setFavorites(newFavItems);
      localStorage.setItem("favItems", JSON.stringify(newFavItems));
      const count = newFavItems.length;
      setFavoritesCount(count);
    }
  };

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    let existingProductIndex = cart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
    alert("Se agregó al carrito!");

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    setCartCount(cartCount);
  };

  const addToCart = () => {
    const products = favorites.map((item) => {
      return {
        id: item._id,
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description,
        capacity: item.capacity,
        category: item.category,
      };
    });

    products.forEach((product) => {
      handleAddToCart(product);
    });
  };

  return (
    <div className="favorites bg-dark text-light">
      <div className="favContainer">
        {favorites.length > 0 ? (
          <>
            <div className="total-comprar mt-3">
              <Button variant="success" onClick={addToCart}>
                Agregar todo al carrito ({favorites.length})
              </Button>
            </div>
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
                        Ver más productos
                      </button>
                      <button className="btn btn-warning">Comprar</button>
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
