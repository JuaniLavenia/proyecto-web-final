import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./producto.css";

function Producto() {
  const [productos, setProductos] = useState([]);

  const [search, setSearch] = useState("");

  const getProductos = () => {
    axios
      .get(
        `https://proyecto-web-final-backend--juan-ignacio245.repl.co/api/productos`
      )
      .then((res) => setProductos(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductos();
  }, []);

  const destroy = (id) => {
    if (confirm("¿Esta seguro ?")) {
      axios
        .delete(
          `https://proyecto-web-final-backend--juan-ignacio245.repl.co/api/productos/${id}`
        )
        .then((res) => {
          getProductos();
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const buscar = () => {
    if (search == "") {
      getProductos();
    } else {
      axios
        .get(
          `https://proyecto-web-final-backend--juan-ignacio245.repl.co/api/productos/search/${search}`
        )
        .then((res) => {
          setProductos(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="contentPrinc p-5 bg-dark text-light">
      <div className="list d-flex justify-content-between align-items-center">
        <h1 className="text-center">Lista de productos</h1>
        <Link to="/adm/productos/create" className="btn btn-primary float-end">
          Crear
        </Link>
      </div>

      <div className="input-group mb-5">
        <input
          type="search"
          className="form-control"
          placeholder="Nombre de producto"
          name="search"
          value={search}
          onChange={handleChangeSearch}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={buscar}
        >
          Buscar
        </button>
      </div>

      <div className="table-responsive">
        <table className="table text-light tableBody">
          <thead className="thead">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Categoria</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
              <th scope="col">Capacidad</th>
              <th scope="col">Imagen</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="tbody">
            {productos &&
              productos.map((producto) => (
                <tr key={producto._id} className="file">
                  <td scope="row">{producto.name}</td>
                  <td scope="row">{producto.category}</td>
                  <td scope="row">$ {producto.price}</td>
                  <td scope="row">{producto.stock}</td>
                  <td scope="row">{producto.capacity}</td>
                  <td scope="row">
                    <img
                      src={`https://proyecto-web-final-backend--juan-ignacio245.repl.co/img/productos/${producto.image}`}
                      width={100}
                      alt={producto.nombre}
                      className="img"
                    />
                  </td>
                  <td scope="row">
                    <Link
                      to={`/adm/productos/edit/${producto._id}`}
                      type="button"
                      className="btn btn-warning m-1"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => destroy(producto._id)}
                      type="button"
                      className="btn btn-danger m-1"
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Producto;
