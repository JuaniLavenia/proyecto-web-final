function Create() {
  return (
    <div className="container">
      <h1>Crear Producto</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="producto" className="form-label">
            Producto:
          </label>
          <input
            placeholder="Producto"
            type="text"
            name="producto"
            id="prodcuto"
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
