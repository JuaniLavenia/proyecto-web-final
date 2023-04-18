import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Admin() {
  const { id } = useParams()
  //hook para iniciar la lista
  const [productos, setProductos] = useState([]);
  //hook para inicio de paginacion
  const [page, setPage] = useState(1)

  //hook para listar los productos de la base de datos
  useEffect(() => {
    fetch(`http://localhost:3000/productos?_page=${page}&_limit=5`)
      .then((response) => response.json())
      .then((json) => setProductos(json));
  }, []);

  //paginacion de productos en crud
  const paginacion = (page) => {
    if (page <= 0) return
    if (page >= 4) return
    fetch(`http://localhost:3000/productos?_page=${page}&_limit=5`)
      .then((response) => response.json())
      .then((json) => setProductos(json))
    setPage(page)
  }


  //se muestran todos los detalles de pagina web
  return (
    <div className="container">
      <h1 className="text-center">Lista de productos</h1>
      <Link to="/producto/create" className="btn btn-primary float-end">
        Crear
      </Link>

      {/* tabla de productos */}
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
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
              <td scope="row">
                <Link to={`/productos/${producto.id}`}>
                  {producto.nombre}
                </Link></td>
              <td scope="row">{producto.nombre}</td>
              <td scope="row">{producto.stock}</td>
              <td scope="row">{producto.descripcion}</td>
              <td className="text-end">
                <Link className="btn btn-info float-end" to={`/producto/${producto.id}/edit`}>Editar</Link>
                <Link className="btn btn-danger">Borrar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* botones de paginacion */}
      <div className="container text-center">
        <button className="btn btn-light" onClick={() => paginacion(page - 1)}>Anterior</button>
        <button className="btn btn-light" onClick={() => paginacion(page + 1)}>Siguiente</button>
      </div>

    </div>
  );
}

export default Admin;
