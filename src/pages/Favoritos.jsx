import { useEffect, useState } from "react";
import "./Favoritos.css";
import { Button, Card } from "react-bootstrap";

function Favoritos() {
  const [favorites, setFavorites] = useState([]);
  const [favoritesCount, setFavoritesCount] = useState(0);

  const updateLocalStorageCount = (key, count) => {
    localStorage.setItem(key, count);
    if (key === "favoritesCount") {
      setFavoritesCount(count);
    }
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favItems"));
    if (items) {
      setFavorites(items);
    }
  }, []);

  // Función para eliminar un favorito de la lista
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
                <Card bg="dark" text="light" className="cardFavorites">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    className="imgFav"
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <div className="cardBtnFav">
                      <Button
                        variant="danger"
                        onClick={() => removeFavorite(item)}
                      >
                        Eliminar
                      </Button>
                      <Button variant="primary">Ver más productos</Button>
                      <Button variant="warning">Comprar</Button>
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <div className="cardPriceFav">$ {item.price}</div>
                  </Card.Footer>
                </Card>
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
