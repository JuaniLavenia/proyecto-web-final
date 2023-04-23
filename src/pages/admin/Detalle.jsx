import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"

function Detalle() {
    //hook para tomar el string del url
    const { id } = useParams()

    //hook para el estado inicial
    const [producto, setProducto] = useState({})

    //vamos a cargar todo los datos prederminados anteriormente
    useEffect(() => {
        fetch(`http://localhost:3000/productos/${id}`)
            .then(response => response.json())
            .then((json) => setProducto(json))
    }, [])

    return (
        <div class="card mb-3">
            <div class="card-body text-center">
                <h3 class="card-title">{producto.producto}</h3>
                <h3 class="card-title">{producto.nombre}</h3>
                <p class="card-text">Stok: {producto.stock}</p>
                <p class="card-text">{producto.descripcion}</p>
            </div>
        </div>

    )
}

export default Detalle