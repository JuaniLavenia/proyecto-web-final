import { useState } from "react";
import "./Favoritos.css";

function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  // Función para agregar un favorito a la lista
  function addFavorite(favorite) {
    setFavorites((prevFavorites) => [...prevFavorites, favorite]);
  }

  // Función para eliminar un favorito de la lista
  function removeFavorite(favorite) {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav !== favorite)
    );
  }

  return (
    <div className="favorites">
      <h1>Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes favoritos guardados</p>
      ) : (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite}>
              {favorite}
              <button onClick={() => removeFavorite(favorite)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoritos;
