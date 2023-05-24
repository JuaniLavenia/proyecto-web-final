import "./About.css";

function AboutUs() {
  return (
    <>
      <div className="allContent">
        <div className="card bg-dark text-light">
          <img
            src="https://blog.advesa.com/wp-content/uploads/2019/11/about-us-page.png"
            className="card-img-top imgAbout w-50 d-flex align-self-center mt-4"
            alt="..."
          />
          <div className=" tituloAb bg-dark text-light mt-3">
            <h3 className="text-center">Integrantes de Rolling-Detailing</h3>
            <p className="text-center w-50 d-flex align-self-center">
              Inicia sus actividades en el año 2023 cómo una empresa
              especializada en la venta y asesoramiento de productos de limpieza
              para vehiculos, tanto para consumidores particulares, empresas o
              revendedores, brindando soluciones a la medida de cada necesidad.
            </p>
          </div>
        </div>
        <div className="container-card">
          <div className="row bg-dark">
            <div className="col-lg-3 col-md-6">
              <Card
                imagenSrc="https://ca.slack-edge.com/THQU1MGPN-U03Q9HH12RZ-4dbc2382e13c-512"
                nombre="Juan Ignacio Lavenia"
                descripcion="Scrum Master"
              />
            </div>
            <div className="col-lg-3 col-md-6">
              <Card
                imagenSrc="https://ca.slack-edge.com/THQU1MGPN-U03PRCPB9FV-9d578752aec1-512"
                nombre="Nicolas Fernandez"
                descripcion="Integrante"
              />
            </div>
            <div className="col-lg-3 col-md-6">
              <Card
                imagenSrc="https://ca.slack-edge.com/THQU1MGPN-U03N3DC1WCC-b0a574a511e2-512"
                nombre="Alba Dario"
                descripcion="Integrante"
              />
            </div>
            <div className="col-lg-3 col-md-6">
              <Card
                imagenSrc="https://ca.slack-edge.com/THQU1MGPN-U03Q8A47DDJ-76e55cbedc93-512"
                nombre="Moreno Martin"
                descripcion="Integrante"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ imagenSrc, nombre, descripcion }) {
  return (
    <div className="card bg-dark border-white">
      <img
        src={imagenSrc}
        className="card-img-top rounded-circle"
        alt="Foto de perfil"
      />
      <div className="card-body">
        <h3 className="card-title">{nombre}</h3>
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  );
}

export default AboutUs;
