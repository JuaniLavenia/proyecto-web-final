import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function Edit() {
  //hook de navegacion
  const navegate = useNavigate()

  //hook para traer el dato variable de la url
  const { id } = useParams()

  const [values, setValues] = useState({
    producto: "",
    nombre: "",
    stock: "",
    descripcion: "",
  })

  //vamos a cargar todo los datos prederminados anteriormente
  useEffect(() => {
    fetch(`http://localhost:3000/productos/${id}`)
      .then(response => response.json())
      .then((json) => setValues(json))
  }, [])

  //captura y modifica los valores de values
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  //hook para cambiar los valores y guardarlos
  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(`http://localhost:3000/productos/${id}`,{
      method:"PUT",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(values),
    })

    //aqui voy a redireccionar al edit hasta el producto
    .then(response => {
      if(response.status == 200){
        navegate("/producto")
      }
    })
  }

  return (
    <div className="container">
      <h1>Editar productos</h1>

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
  )
}

export default Edit