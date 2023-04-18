import { useState } from "react";
import "./Favoritos.css";
import axios from "axios";

function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      const products = response.data;
      // Aquí puedes hacer lo que quieras con los datos de los productos
    } catch (error) {
      console.error(error);
    }
  };

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
