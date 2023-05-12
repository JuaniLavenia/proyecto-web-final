import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Producto() {
  //hook para iniciar la lista y guardar lo que nos llega
  const [productos, setProductos] = useState([]);

  //hokk de busqueda
  const [search, setSearch] = useState("");

  //funcion para resetear despues de borrar
  const getProductos = () => {
    axios
      .get(`http://localhost:3000/api/productos`)
      .then((res) => setProductos(res.data))
      .catch((err) => console.log(err));
  };

  //hook para recorrer los productos
  useEffect(() => {
    getProductos();
  }, []);

  //destruyo el registro
  const destroy = (id) => {
    if (confirm("¿Esta seguro ?")) {
      axios
        .delete(`http://localhost:3000/api/productos/${id}`)
        .then((res) => {
          console.log(res);
          getProductos(); //llamo la funcion de productos
        })
        .catch((err) => console.log(err));
    }
  };

  //Buscador
  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const buscar = () => {
    if (search == "") {
      getProductos();
    } else {
      axios
        .get(`http://localhost:3000/api/productos/search/${search}`)
        .then((res) => {
          console.log(res);
          setProductos(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  //Estado de buscador

  return (
    //aqui vamos a colocar los productos
    <div className="p-5 bg-dark text-light">
      <div className="d-flex justify-content-between align-items-center">
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

      <table className="table text-light">
        <thead>
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
        <tbody>
          {productos &&
            productos.map((producto) => (
              <tr key={producto._id}>
                <td scope="row">{producto.name}</td>
                <td scope="row">{producto.category}</td>
                <td scope="row">$ {producto.price}</td>
                <td scope="row">{producto.stock}</td>
                <td scope="row">{producto.capacity}</td>
                <td>
                  <img
                    //ruta para buscar imagen
                    src={`http://localhost:3000/img/productos/${producto.image}`}
                    width={100}
                    alt={producto.nombre}
                  />
                </td>
                <td className="text-end">
                  <Link
                    to={`/adm/productos/edit/${producto._id}`}
                    type="button"
                    className="btn btn-warning m-3"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => destroy(producto._id)}
                    type="button"
                    className="btn btn-danger m-3"
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Producto;
