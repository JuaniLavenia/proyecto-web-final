import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detalle() {
    //traigo el valor id del producto
    const { id } = useParams()

    //genero el hook de para el estado inicial
    const[producto, setProducto] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:3000/productos/${id}`)
        .then(response => response.json())
        .then(json => console.log(json))
    })

    return (
        <div className="conteiner">
            <h1>Producto {producto.id}</h1>
        </div>
    )
}

export default Detalle