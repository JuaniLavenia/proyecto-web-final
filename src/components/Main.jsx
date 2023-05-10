import { Link } from "react-router-dom";
import "./Main.css";
import exteriores from "../assets/img/exteriores.png"
import interiores from "../assets/img/interiores.jpg"
import lineaprofesional from "../assets/img/linea-profesional.jpg"
import lineaindustrial from "../assets/img/linea-industrial.jpg"
import perfumes from "../assets/img/perfumes.png"


function Section() {
    return (
        <>
            <section className="d-flex align-items-center flex-column">

                <div className="card  text-white col-6 m-2">
                    <img src={exteriores} className="card-img" />
                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                        <Link className="card-title" to="/productos/exteriores">EXTERIORES</Link>
                    </div>
                </div>

                <div className="card text-white col-6  m-2">
                    <img src={interiores} className="card-img" />
                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                        <Link className="card-title" to="/productos/interiores">INTERIORES</Link>
                    </div>
                </div>

                <div className="card text-white col-6  m-2">
                    <img src={lineaprofesional} className="card-img" />
                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                        <Link className="card-title" to="/productos/lineaprofesional">LÍNEA PROFESIONAL</Link>
                    </div>
                </div>

                <div className="card text-white col-6  m-2">
                    <img src={lineaindustrial} className="card-img" />
                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                        <Link className="card-title"  to="/productos/lineaindustrial">LINEA INDUSTRIAL</Link>
                    </div>
                </div>

                <div className="card text-white col-6  m-2">
                    <img src={perfumes} className="card-img " />
                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                        <Link className="card-title" to="/productos/perfumes">PERFUMES</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section;
