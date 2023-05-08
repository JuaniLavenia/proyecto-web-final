function ProductoEdit() {
  return (
    <div className="container">
      <h1>Editar Producto</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock:
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción:
          </label>
          <textarea
            name="descripcion"
            id="descripcion"
            cols="30"
            rows="10"
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

export default ProductoEdit;
