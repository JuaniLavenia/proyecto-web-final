import Banner from "../components/Banner";
import interiores from "../assets/img/interiores.jpg"
import exteriores from "../assets/img/exteriores.png"
import lineaindustrial from "../assets/img/linea-industrial.jpg"
import lineaprofesional from "../assets/img/linea-profesional.jpg"
import perfumes from "../assets/img/perfumes.png"
import "../components/Banner.css"

function Category() {
    return (
        <div className="banner">
            <h1 className="text-center text-light">Categorias</h1>

            <Banner imagen={interiores} categoria="Exteriores" />
            <Banner imagen={exteriores} categoria="Interiores" />
            <Banner imagen={lineaprofesional} categoria="Línea Profesional" />
            <Banner imagen={lineaindustrial} categoria="Línea Industrial" />
            <Banner imagen={perfumes} categoria="Perfumes" />
        </div>
    )
}
export default Category