function ProductoEdit() {


  return (
    <div className="container">
      <h1>Editar Producto</h1>

      <form>
        {/* Edicion de nombre */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            required
          // value={values.name}
          // onChange={handleChange}           
          />
        </div>

        {/* Edicion de categoria */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Categoria:
          </label>
          <input
            type="text"
            className="form-control"
            name="category"
            id="category"
            required
          // value={values.category}
          // onChange={handleChange}           
          />
        </div>

        {/* Edicion de precio */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            required
            name="price"
            // value={values.price}
            // onChange={handleChange}
          />
        </div>

        {/* Edicion de stock */}
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            id="stock"
            required
            name="stock"
          // value={values.stock}
          // onChange={handleChange}
          />
        </div>


        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default ProductoEdit;
