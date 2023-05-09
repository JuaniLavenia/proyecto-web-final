import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function ProductoEdit() {
  //creamos un hook con estados vacios
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock:"",
    category: "", 
    ability: "",
  })
  const [image, setImage] = useState();

  //obtenemos el id para identificar al producto
  const { id } = useParams()

  //navegacion a lista de productos
  const navigate = useNavigate()

  //setiamos los valores anteriores del formulario
  useEffect(() =>{
    axios
    .get(`http://localhost:3000/api/productos/${id}`)
    .then((res) =>{
      console.log(res)
      setValues(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  //escuchador del formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("image", image)
    formData.append("name", values.name)
    formData.append("description", values.description)
    formData.append("price", values.price)
    formData.append("stock", values.stock)
    formData.append("category", values.category)
    formData.append("ability", values.ability)

    axios
      .put(`http://localhost:3000/api/productos/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data)
        navigate("/productos");
      })

      .catch((err) => {
        console.log(err);
      });
  }


  //escuchador de enventos
  const handleChange = (event) => {
    const { name, value } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleChangeFile = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0])
    }
  }

  return (
    <div className="container">
      <h1>Editar producto</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            cols="30"
            rows="5"
            required
            value={values.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Imagen
          </label>
          <input
            accept="image/png, image/svg, image/jpg, image/jpeg"
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleChangeFile}
          />
        </div>


        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Categoria
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              required
              name="category"
              value={values.category}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
        </div>


        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={values.stock}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ability" className="form-label">
            Capacidad
          </label>
          <input
            type="number"
            className="form-control"
            id="ability"
            name="ability"
            value={values.ability}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ProductoEdit;
