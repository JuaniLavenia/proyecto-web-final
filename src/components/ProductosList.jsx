import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useParams } from "react-router";
import "./ProductCard.css";


function ProductList() {
    const [productos, setProductos] = useState([]);

    const { category } = useParams()

    const getProductos = () => {
        axios
            .get(`http://localhost:3000/api/productos/category/${category}`)
            .then((res) => {
                console.log(res.data)
                setProductos(res.data)})
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getProductos();
    }, [category]);

    return (
        <div className="bg-dark text-light">
            <h1 className="text-center">Productos {category}</h1>
            <div className="container-fluid">
                <div className="d-flex row justify-content-center">
                    {productos.map((producto) => (
                        <div className="card col-lg-2 col-md-3 col-sm-5 col-12 bg-dark m-1" key={producto._id}>
                            <ProductCard {...producto} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default ProductList;
