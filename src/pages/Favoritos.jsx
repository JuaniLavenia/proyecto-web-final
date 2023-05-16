import { useEffect, useState } from "react";
import "./Favoritos.css";
import { Button } from "react-bootstrap";

function Favoritos({ setFavoritesCount }) {
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
      updateLocalStorageCount("favoritesCount", count);
    }
  };

  return (
    <div className="favorites bg-dark text-light">
      <div className="favContainer">
        {favorites.length > 0 ? (
          <>
            <div className="total-comprar mt-3">
              <Button variant="success">
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
