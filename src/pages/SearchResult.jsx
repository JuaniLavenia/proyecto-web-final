import CardProductos from "../components/CardProductos";

function SearchResult() {
  const products = [
    {
      id: 1,
      title: "Producto 1",
      description: "Descripción del Producto 1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Producto 2",
      description: "Descripción del Producto 2",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Producto 3",
      description: "Descripción del Producto 3",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Producto 4",
      description: "Descripción del Producto 4",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Producto 5",
      description: "Descripción del Producto 5",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Producto 6",
      description: "Descripción del Producto 5",
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <>
      <div className="p-5 bg-dark text-light">
        <h1>Resultados de busqueda</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 " key={product.id}>
              <CardProductos {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchResult;
