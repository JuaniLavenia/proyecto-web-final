import { useState } from "react";
import { useNavigate} from "react-router";

function Create() {
  //hook de navegacion a pagina de productos
  const navegate = useNavigate()

  //hook para el estado inicial
  const [values, setValues] = useState({
    producto: "",
    nombre: "",
    stock: "",
    descripcion: "",
  })

  //funcion que cambia los parametros del value
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  //hook para cambiar los valores y guardarlos
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/productos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })

      //aqui voy a redireccionar al edit hasta el producto
      .then((response) => {
        if (response.status == 201) {
          navegate("/producto")
        }
      })
  }

  return (
    <div className="container">
      <h1>Crear Producto</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="producto" className="form-label">
            Producto:
          </label>
          <input
            placeholder="Producto"
            type="text"
            name="producto"
            id="prodcuto"
            value={values.producto}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            placeholder="Nombre"
            type="text"
            name="nombre"
            id="nombre"
            value={values.nombre}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock:
          </label>
          <input
            placeholder="Cantidad"
            type="number"
            name="stock"
            id="stock"
            value={values.stock}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción:
          </label>
          <textarea
            placeholder="Descripcion del producto..."
            name="descripcion"
            id="descripcion"
            cols="30"
            rows="10"
            value={values.descripcion}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default Create;
