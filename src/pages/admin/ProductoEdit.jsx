import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function ProductoEdit() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    capacity: "",
  });
  const [image, setImage] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://proyecto-web-final-backend.vercel.app/api/productos/${id}`)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      .put(
        `https://proyecto-web-final-backend.vercel.app/api/productos/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        navigate("/productos");
      })

      .catch((err) => {
        console.log(err);
      });
  };

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
      <h1 className="text-center">Editar producto</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            maxLength={40}
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
            maxLength={200}
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
              maxLength={40}
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
            max={999999}
            maxLength={6}
            id="price"
            name="price"
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
            max={999999}
            maxLength={6}
            id="stock"
            name="stock"
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
            maxLength={40}
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

export default ProductoEdit;
