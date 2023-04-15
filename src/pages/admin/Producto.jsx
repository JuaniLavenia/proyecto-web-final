import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Producto() {
  //hook para iniciar la lista
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(` http://localhost:3000/crud`)
      .then((response) => response.json())
      .then((json) => setProductos(json));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Lista de productos</h1>
      <Link to="/create" className="btn btn-primary float-end">
        Crear
      </Link>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Stock</th>
            <th scope="col">Descripcion</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td scope="row">{producto.id}</td>
              <td scope="row">{producto.nombre}</td>
              <td scope="row">{producto.stock}</td>
              <td scope="row">{producto.descripcion}</td>
              <td className="text-end">
                <Link className="btn btn-warning" to="/edit">
                  Editar
                </Link>
                <Link className="btn btn-danger">Borrar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Producto;
