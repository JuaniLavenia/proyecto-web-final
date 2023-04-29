import { useEffect, useState } from "react";
import "./Favoritos.css";
import { Button } from "react-bootstrap";

function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favItems"));
    if (items) {
      setFavorites(items);
    }
  }, []);

  // Función para agregar un favorito a la lista
  function addFavorite(favorite) {
    setFavorites((prevFavorites) => [...prevFavorites, favorite]);
  }

  // Función para eliminar un favorito de la lista
  const removeFavorite = (producto) => {
    const newFavItems = favorites.filter((item) => item.id !== producto.id);
    if (newFavItems.length !== favorites.length) {
      setFavorites(newFavItems);
      localStorage.setItem("favItems", JSON.stringify(newFavItems));
    }
  };

  return (
    <div className="favorites bg-dark text-light">
      <div className="table-responsive ">
        {favorites.length > 0 ? (
          <>
            <div className="col total-comprar mt-3">
              <Button variant="success">
                Agregar todo al carrito ({favorites.length})
              </Button>
            </div>
            {favorites.map((item, index) => (
              <div className="card-container" key={index}>
                <div className="card bg-dark text-light" key={index}>
                  <div className="card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="card-details">
                    <div className="card-name">{item.name}</div>
                    <div className="card-text mb-3">{item.description}</div>
                    <div className="card-buttons">
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFavorite(item)}
                      >
                        Eliminar
                      </button>
                      <button className="btn btn-primary">
                        Ver más productos
                      </button>
                      <Button variant="warning">Comprar</Button>
                    </div>
                  </div>
                  <div className="card-price">$ {item.price}</div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No tienes favoritos guardados.</p>
        )}
      </div>
    </div>
  );
}

export default Favoritos;
