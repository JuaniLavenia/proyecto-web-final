import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";


function ProductList() {
    const [productos, setProductos] = useState([]);

    const getProductos = () => {
        axios
            .get(`http://localhost:3000/api/productos`)
            .then((res) => setProductos(res.data))
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(()     => {
        getProductos();
    }, []);     

    return (
        <div className="bg-dark text-light">
            <div className="container">
                <h1>Productos</h1>
                <div className="d-flex flex-column  m-3">
                    {productos.map((producto) => (
                        <div className="card" key={producto._id}>
                            <ProductCard {...producto} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default ProductList;
