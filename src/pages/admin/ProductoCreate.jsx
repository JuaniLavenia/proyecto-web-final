import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function ProductoCreate() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    capacity: "",
  });
  
  const [image, setImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("stock", values.stock);
    formData.append("category", values.category);
    formData.append("capacity", values.capacity);

    axios
      .post("http://localhost:3000/api/productos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/adm/productos");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();


  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  
  const handleChangeFile = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="p-5 bg-dark text-light">
      <h1 className="text-center">Crear producto nuevo</h1>

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
            <select
              type="text"
              className="form-control"
              id="category"
              required
              name="category"
              value={values.category}
              onChange={handleChange}
            >
              <option></option>
              <option>Interiores</option>
              <option>Exteriores</option>
              <option>Línea Profesional</option>
              <option>Linea Industrial</option>
              <option>Perfumes</option>
            </select>
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
            min="0" 
            step="0.01"
            placeholder="0"
            value={values.price}
            onChange={handleChange}
            required
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
            min="0" 
            step="0.01"
            placeholder="0"
            value={values.stock}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="capacity" className="form-label">
            Capacidad
          </label>
          <input
            type="text"
            className="form-control"
            id="capacity"
            name="capacity"
            value={values.capacity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ProductoCreate;
