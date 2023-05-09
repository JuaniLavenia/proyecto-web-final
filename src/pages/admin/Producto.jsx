import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Producto() {
  //hook para iniciar la lista y guardar lo que nos llega
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/productos`)
      .then((response) => response.json())
      .then((json) => setProductos(json));
  }, []);

  return (
    //aqui vamos a colocar los productos
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">Lista de productos</h1>
        <Link to="/productos/create" className="btn btn-primary float-end">
          Crear
        </Link>
      </div>


      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Categoria</th>
            <th scope="col">Precio</th>   
            <th scope="col">Stock</th>
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
                <td scope="row">{producto.price}</td>              
                <td scope="row">{producto.stock}</td>
                <td>
                  <img
                    //ruta para buscar imagen
                    src={`http://localhost:3000/productos/${producto.image}`}
                    width={100}
                    alt={producto.nombre}
                  />
                </td>
                <td className="text-end">       
                    <Link to={`/productos/edit/${producto._id}`} type="button" class="btn btn-warning m-3">Editar</Link>
                    <button onClick={() => destroy(producto._id)} type="button" class="btn btn-danger m-3">Borrar</button>      
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Producto;
